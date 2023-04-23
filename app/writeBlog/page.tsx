'use client'
import {EditorState, convertToRaw} from 'draft-js'
import { useEffect, useState} from 'react'
import draftToHtml from 'draftjs-to-html';
import dynamic from "next/dynamic";
const Editor = dynamic(()=>import('react-draft-wysiwyg').then((mod)=>mod.Editor),{
    loading: ()=><p>Loading....</p>,
    ssr: false
})
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import {toast} from "react-toastify";
import {useSupabase} from "@/app/supabase-provider";
import {useRouter} from "next/navigation";
import slugify from "slugify";

export default function Write(){
    const {supabase} = useSupabase()
    const router = useRouter()
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )

    const [banner, setBanner] = useState(null)
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [shortDesc, setShortDesc] = useState('')

    useEffect(() => {

        (async function () {

            const user = await supabase.auth.getUser()
            if (!user.data.user) {
                router.replace('/login')
            }
        })()
    }, [router])


    const uploadImage = async (e: any) => {
        const formData = new FormData()
        formData.append('upload_preset', 'heet_upload')
        formData.append('file', e)
        const data = await fetch(
            'https://api.cloudinary.com/v1_1/inam/image/upload',
            {
                method: 'POST',
                body: formData,
            }
        ).then((r) => r.json())
        return new Promise((resolve, reject) => {
            if (data) {
                resolve({data: {link: data?.secure_url}})
            } else {
                reject(true)
            }
        })
    }

    const handleBannerImage = async (e: any) => {
        const url = await uploadImage(e.target.files[0])
        // @ts-ignore
        setBanner(url.data.link)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const {error}  = await supabase.from('articles').insert([
            {
                title: title,
                slug: slugify(slug,{
                    replacement: '-',
                    lower: true,
                    trim:true
                }),
                shortDescription: shortDesc,
                content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                banner: banner,
            }
        ])
        if(error){
            toast(error.message,{
                type: 'error'
            })
            return console.log(error.message)
        }
        toast('Articles added successfully. Pending for admin approval')
        router.replace('/news')
    }

    return (
        // loading ? <div>Loading....</div> :
            <form
                onSubmit={(e) => handleSubmit(e)}
                className='max-w-[1440px] mx-auto my-4 flex flex-col gap-4'
            >
                <div className=''>
                    <label htmlFor='title' className='text-xl'>
                        Title <span className='text-red-500'>*</span>
                        <input
                            className='block border w-full py-2 text-xl px-2 rounded-md my-2'
                            type='text'
                            // required
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                                setSlug(slugify(e.target.value,{
                                    replacement: '-',
                                    lower: true,
                                    trim:true
                                }))
                            }}
                        />
                    </label>
                </div>
                <div className=''>
                    <label htmlFor='slug' className='text-xl'>
                        Slug <span className='text-xs'>(auto generated)</span>
                        <input
                            className='block border w-full py-2 text-xl px-2 rounded-md my-2'
                            type='text'
                            disabled
                            value={slug}
                        />
                    </label>
                </div>
                <div className=''>
                    <label htmlFor='title' className='text-xl'>
                        Short Description <span className='text-red-500'>*</span>
                        <input
                            className='block border w-full py-2 text-xl px-2 rounded-md my-2'
                            type='text'
                            // required
                            value={shortDesc}
                            onChange={(e) => {
                                setShortDesc(e.target.value)
                            }}
                        />
                    </label>
                </div>
                <div className=''>
                    <label htmlFor='content' className='text-xl font-poppins'>
                        Content <span className='text-red-500'>*</span>
                        <Editor
                            editorState={editorState}

                            spellCheck
                            toolbarClassName='toolbarClassName'
                            wrapperClassName='wrapperClassName border mt-2'
                            editorClassName='editorClassName text-xl p-4 min-h-[40vh] font-poppins'
                            onEditorStateChange={setEditorState}
                            toolbar={{
                                image: {
                                    uploadCallback: uploadImage,
                                    alt: {
                                        present: true,
                                        mandatory: true,
                                    },
                                },
                                fontSize: {
                                    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                                    className: undefined,
                                    component: undefined,
                                    dropdownClassName: undefined,
                                },
                            }}
                        />
                    </label>
                </div>
                <div className=''>
                    <label htmlFor='image' className='text-xl'>
                        Banner Image <span className='text-red-500'>*</span>
                        <input
                            className='block border w-full py-2 text-xl px-2 rounded-md my-2'
                            type='file'
                            // required
                            onChange={handleBannerImage}
                        />
                        {banner && (
                            <>
                                <img
                                    className='w-full max-h-96 border rounded-md'
                                    src={banner}
                                    alt='User uploaded Image'
                                />
                                <p className='text-red-500 text-xs'>Only preview</p>
                            </>
                        )}
                    </label>
                </div>
                <button
                    type='submit'
                    className='text-base bg-primary hover:bg-primary-hover rounded-md max-w-min px-6 py-2 text-white'
                >
                    Submit
                </button>
            </form>

    )
}


