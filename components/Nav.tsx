'use client'
import Link from "next/link";
import {Bars3Icon, EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import {usePathname, useRouter} from "next/navigation";
import {toast, ToastContainer} from "react-toastify";
import {useSupabase} from "@/app/supabase-provider";
import useUserStore from "@/app/store/store";


const links = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'News',
        url: '/news',
    },
    {
        name: 'Tools',
        url: '/tools',
    },
    {
        name: 'About us',
        url: '/about-us',
    },
    {
        name: 'Coaching',
        url: '/coaching',
    },
    {
        name: 'Reviews',
        url: '/reviews',
    },
    {
        name: 'Tips',
        url: '/tips',
    },
]
const Nav =  () => {
    const pathname = usePathname()
    const { supabase } = useSupabase()
    const currentUser = useUserStore((state)=>state.user)
    const logoutUser = useUserStore((state)=>state.logoutUser)
    const router = useRouter()


    const logout = async () =>{
        const { error } = await supabase.auth.signOut()
        if(error){
            toast(error.message,{
                type: 'error'
            })
        }
        else{
            toast('Logout successfully',{
                type: 'success'
            })
            logoutUser()
            router.replace('/login')
        }
    }


    // @ts-ignore
    return (
        <nav className="w-full bg-primary-bg">
            <div
                className="flex items-center justify-between px-2 py-4 max-w-[1440px] mx-auto"
            >
                {/*left side*/}
                <div className="flex items-center gap-6">
                    <Link href="/"> <img src="/logo.svg" alt="Logo"/></Link>

                    <EllipsisVerticalIcon className="w-6 h-6 text-black cursor-pointer"/>
                </div>
                {/*center*/}

                <div className={'flex gap-6 xl:gap-8 items-center'}>
                    <div className="hidden lg:flex gap-6 lg:gap-8 xl:gap-10">

                        {
                            links.map((link,index)=>(
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`${pathname===link.url?'text-primary font-semibold':'text-text' +
                                        ' font-[400]'} `}>
                                    {link.name}
                                </Link>
                            ))
                        }
                        {
                            currentUser?.id && (
                                <Link
                                    href='/writeBlog'
                                    className={`${pathname==='/writeBlog'?'text-primary font-semibold':'text-text' +
                                        ' font-[400]'} `}>
                                    Write Article
                                </Link>
                            )
                        }

                    </div>


                    <div className="block lg:hidden">
                        <Bars3Icon className="h-6 w-6"/>
                    </div>
                    {/*right side  */}
                    <div className="gap-12 items-center hidden sm:flex">
                        <Link href="/lang" className="ml-4 xl:ml-6 text-primary font-[600]"
                        >DU/ENG</Link
                        >
                        <div>

                            {

                                currentUser?.id ? (
                                    <button
                                        onClick={logout}
                                        className={`${pathname==='/login'? 'bg-white font-[700] text-primary': 'bg-primary' +
                                            ' text-white'}  py-2 px-8 rounded-full`}
                                    >Logout</button
                                    >
                                ):
                                    (
                                        <Link
                                            href="/login"
                                            className={`${pathname==='/login'? 'bg-white font-[700] text-primary': 'bg-primary' +
                                                ' text-white'}  py-2 px-8 rounded-full`}
                                        >Login</Link
                                        >
                                    )
                            }

                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer/>
        </nav>
    )
}

export default Nav


    // <nuxt-link className="text-text font-[400]">
    //     {{link.name}}
    // </nuxt-link>