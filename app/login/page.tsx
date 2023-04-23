'use client';

import Newsletter from "@/components/Newsletter";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useSupabase} from "@/app/supabase-provider";
import {useDispatch} from "react-redux";
import {loginUser} from '../store/userSlice'



export default function Home() {
    const { supabase } = useSupabase()
    const dispatch = useDispatch()
    const [form,setForm] = useState({
        email: 'inaamurrehman343@gmail.com',
        password: 'anam2292000'
    })

    const router = useRouter()

    const handleSubmit = async (e:any) =>{
        e.preventDefault()


        const { data, error } = await supabase.auth.signInWithPassword({
            email: form.email,
            password: form.password,
        })
        if (error) {
            toast(error.message,{
                type: 'error'
            })
        }
        if (data?.user?.id) {
            toast('Login Successfully',{
                type: 'success'
            })
            console.log(data.user)
            dispatch(loginUser(data.user))
            router.replace('/')
        }


    }
    // @ts-ignore
    // @ts-ignore
    return (
        <div className="py-16 bg-primary-bg">
            <div className="relative w-max mx-auto z-50">
                <h1 className="text-6xl font-bold text-center z-40 uppercase">Log in</h1>
                <div
                    className="w-[72px] h-[100px] bg-secondary rounded-md absolute top-1/2 -left-11 -z-10 transform -translate-y-1/2"
                ></div>
            </div>
            {/*@ignore-ts*/}
            <form onSubmit={handleSubmit} className="block mx-auto max-w-lg my-24">
                <label htmlFor="email" className="flex flex-col gap-2 text-text text-lg">
                    Email
                    <input
                        onChange={(e)=>setForm({
                            ...form,
                            email: e.target.value
                        })}
                        value={form.email}
                        type="text"
                        required
                        id="email"
                        className="text-xl py-2 px-4 rounded-full outline-primary border-primary/20 border-2"
                    />
                </label>
                <label htmlFor="password" className="flex flex-col gap-2 text-text text-lg mt-6">
                    Password
                    <input
                        onChange={(e)=>setForm({
                            ...form,
                            password: e.target.value
                        })}
                        value={form.password}
                        type="password"
                        required
                        id="password"
                        className="text-xl py-2 px-4 rounded-full outline-primary border-primary/20 border-2"
                    />
                </label>
                <button
                    type="submit"
                    className="text-xl text-white bg-primary hover:bg-primary-hover w-full my-8 py-3 rounded-full"
                >
                    Login
                </button>
                <div className="flex items-center gap-2 clear-left text-text">
                    <input className="h-5 w-5" type="checkbox" id="remember"/>Remember me
                </div>
                <p className="text-center my-2 text-text">
                    Do not have an account?

                    <Link className="text-primary" href="/register"> Register</Link>
                </p>
            </form>
            <Newsletter/>
        </div>
    )
}
