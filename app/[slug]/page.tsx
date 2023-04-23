import Image from 'next/image'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import Newsletter from '@/components/Newsletter'
import ShowText from '@/components/ShowText'
import {createServerComponentSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {cookies, headers} from "next/headers";


export default async function NewsInfo ({params}:any){
    const supabase = createServerComponentSupabaseClient({
        headers,
        cookies,
    })
    const {data, error} = await supabase.from('articles').select('*').eq('slug', params.slug)

    return (
        <div>
            <div className='bg-primary-bg'>
                <div className='max-w-[1440px] mx-auto px-4'>
                    <div className='py-4'>
                        <p className='text-xl'>
                            <span className='font-bold'>News &gt; </span>
                            {data && data[0]?.title}
                        </p>
                    </div>
                </div>
                {/*banner image */}
                <div className='max-w-[1440px] mx-auto px-4'>
                    <div className='relative h-[400px] md:h-[550px]'>
                        <Image
                            src={data && data[0]?.banner}
                            alt={'banner image'}
                            width={1440}
                            height={400}
                            className='absolute object-cover h-[400px] md:h-[550px] rounded-xl z-10'
                        />
                        <div
                            className='hidden md:block bg-secondary w-28 rounded-xl h-28 absolute -bottom-10 left-6 -z-1'></div>
                        <div
                            className='hidden md:block bg-primary w-28 rounded-xl h-28 absolute -top-10 right-6 -z-1'></div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='mt-16 flex justify-between'>
                    <div className='flex gap-4'>
                        <FaFacebook size={24} className='text-pink-700'/>
                        <FaTwitter size={24} className='text-pink-700'/>
                    </div>
                    <div className='flex gap-4'>

                        <div>
                            <p className='font-semibold text-text'>Published At</p>
                            <p className='text-text'>{new Date(data && data[0]?.created_at).toDateString()}</p>
                        </div>
                        <div>
                            <p className='font-semibold text-text'>Updated At</p>
                            <p className='text-text'>{new Date(data && data[0]?.updated_at).toDateString()}</p>
                        </div>
                        <div>
                            <p className='font-semibold text-text'>Source / Author</p>
                            <p className='text-text'>{data && data[0]?.author?.email}</p>
                        </div>

                    </div>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-8 text-heading'>
                    {data && data[0]?.title}
                </h1>

                {/*<ShowText content={data && data[0]?.content}/>*/}
            </div>
            <Newsletter/>
        </div>
    )
}
