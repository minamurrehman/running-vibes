'use client';

import Newsletter from "@/components/Newsletter";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useSupabase} from "@/app/supabase-provider";
import {toast} from "react-toastify";


function Home() {
    const [form,setForm] = useState({
        fullName: '',
        email: 'student',
        password: 'student'
    })

    const router = useRouter()
    const { supabase } = useSupabase()

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const {data, error} = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: {
                    fullName: form.fullName,

                }
            }
        })
        if (error) {
            toast(error.message,{
                type: 'error'
            })
        }
        if (data) {
            toast('User created successfully',{
                type: 'success'
            })
            router.replace('/login')
        }
    }

    // @ts-ignore
    return (
        <div className="py-16 bg-primary-bg">
            <div className="relative w-max mx-auto z-50">
                <h1 className="text-6xl font-bold text-center z-40 uppercase">Register</h1>
                <div
                    className="w-[72px] h-[100px] bg-secondary rounded-md absolute top-1/2 -left-11 -z-10 transform -translate-y-1/2"
                ></div>
            </div>
            {/*@ignore-ts*/}
            <form onSubmit={handleSubmit} className="block mx-auto max-w-lg my-24">
                <label htmlFor="fullName" className="flex flex-col gap-2 text-text text-lg">
                    Full Name
                    <input
                        onChange={(e)=>setForm({
                            ...form,
                            fullName: e.target.value
                        })}
                        value={form.fullName}
                        type="text"
                        required
                        id="fullName"
                        className="text-xl py-2 px-4 rounded-full outline-primary border-primary/20 border-2"
                    />
                </label>
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
                    Register
                </button>
                <p className="text-center my-2 text-text">
                    Already have an account?

                    <Link className="text-primary" href="/login"> Login</Link>
                </p>
            </form>
            <Newsletter/>
        </div>
    )
}
export default Home