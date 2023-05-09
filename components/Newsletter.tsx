'use client'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import {useState} from "react";


const Newsletter = () =>{
    const [email,setEmail] = useState('')

    const handleSubmit = async () =>{
        const res = await fetch('/api/newsletter',{
            method: 'POST',
            body: JSON.stringify({
                email: email
            })
        }).then(res=>res.json())

        console.log(res)
    }
    return(
        <div className="px-2">
            <div
                className="max-w-[1140px] bg-primary py-4 lg:py-10 px-4 lg:px-8 mx-auto rounded-xl gap-6 flex flex-col lg:flex-row items-center justify-between my-12"
            >
                <div className="text-white flex-grow">
                    <h6 className="font-[600] text-xl my-2">Newsletter</h6>
                    <p className="font-[400] text-sm opacity-80">
                        Be the first one to know about discounts, offers and events
                    </p>
                </div>
                <div
                    className="bg-primary-hover flex items-center p-2 h-max flex-auto rounded-full"
                >
                    <EnvelopeIcon className="w-12 h-6 text-white/80"/>
                    <input
                        placeholder="Enter your email"
                        className="bg-primary-hover h-6 px-2 w-full placeholder:text-white/80 outline-none border-none text-white/80"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <button onClick={handleSubmit} className="px-6 py-2 bg-white rounded-full text-primary font-bold">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter