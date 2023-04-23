'use client'
import Link from "next/link";
import {Bars3Icon, EllipsisVerticalIcon} from '@heroicons/react/24/outline'
import {usePathname, useRouter} from "next/navigation";
import {toast, ToastContainer} from "react-toastify";
import {useSupabase} from "@/app/supabase-provider";
import useUserStore from "@/app/store/store";
import {useState} from "react";



const Nav = () => {
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
    const pathname = usePathname()
    const {supabase} = useSupabase()
    const currentUser = useUserStore((state) => state.user)
    const logoutUser = useUserStore((state) => state.logoutUser)
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const logout = async () => {
        const {error} = await supabase.auth.signOut()
        if (error) {
            toast(error.message, {
                type: 'error'
            })
        } else {
            toast('Logout successfully', {
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
                className="flex flex-col gap-y-6 xl:flex-row xl:items-center justify-between px-2 py-4 max-w-[1440px] mx-auto"
            >
                {/*left side*/}
                <div className="flex w-full justify-between items-center gap-6 pt-6">
                    <div className={'flex gap-6 items-center'}>
                        <Link href="/"> <img src="/logo.svg" alt="Logo"/></Link>

                        <EllipsisVerticalIcon className="w-6 h-6 text-black cursor-pointer"/>
                    </div>
                    <button className="block xl:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                        <Bars3Icon className="h-6 w-6"/>
                    </button>
                </div>
                {/*center*/}

                <div className={`${open ? 'flex-col' : 'hidden xl:flex'} flex flex-col gap-y-4 xl:flex-row gap-6 xl:gap-8 xl:items-center`}>
                    <div
                        className={`${open ? 'flex-col' : 'hidden xl:flex'} flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-10`}>

                        {
                            links.map((link, index) => (
                                <Link

                                    key={index}
                                    href={link.url}
                                    className={`whitespace-nowrap ${pathname === link.url ? 'text-primary font-semibold' : 'text-text' +
                                        ' font-[400]'} `}
                                >
                                    {link.name}
                                </Link>
                            ))
                        }
                        {
                            currentUser?.id && (
                                <Link
                                    href='/writeBlog'
                                    className={`whitespace-nowrap ${pathname === '/writeBlog' ? 'text-primary' +
                                        ' font-semibold' : 'text-text' +
                                        ' font-[400]'} `}

                                >
                                    Write Article
                                </Link>
                            )
                        }

                    </div>

                    <div className="gap-12 items-center sm:flex">
                        <Link href="/lang" className="ml-4 xl:ml-6  text-primary font-[600]"
                              >DU/ENG</Link
                        >
                        <div className='mt-6 lg:mt-0'>

                            {

                                currentUser?.id ? (
                                        <button
                                            onClick={()=>logout()}
                                            className={`${pathname === '/login' ? 'bg-white font-[700] text-primary' : 'bg-primary' +
                                                ' text-white'}  py-2 px-8 rounded-full`}
                                        >Logout</button
                                        >
                                    ) :
                                    (
                                        <Link
                                            href="/login"
                                            className={`${pathname === '/login' ? 'bg-white font-[700] text-primary' : 'bg-primary' +
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
