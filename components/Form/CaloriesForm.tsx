'use client'
import {FormEvent, useState} from "react";

const CaloriesForm = () =>{
    const GENDER =[
        {
            name: "Mannelijk",
            value: "male"
        },{
            name: "Vrouwelijk",
            value: "female"
        }
    ]
    const [age,setAge] = useState(0)
    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)
    const [gender,setGender] = useState(GENDER[0].value)
    const [total,setTotal] = useState<number|null>(null)
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()

        if(gender==='male'){
           const myTotal =  66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)
            setTotal(myTotal)
        }
        else if(gender==='female'){
           const myTotal =  655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age)
            setTotal(myTotal)
        }

    }
    return(
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">

                <label className="flex flex-col gap-3 text-text text-lg">
                    Geslacht
                    <select value={gender} onChange={(e)=>setGender(e.target.value)} name="unit" id="unit" className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-text">
                        {
                            GENDER.map((un)=>(
                                <option value={un.value}>{un.name}</option>
                            ))
                        }
                    </select>
                </label>
                <label className="flex flex-col gap-3 text-text text-lg">
                    leeftijd in jaren
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={age}
                        onChange={(e)=>setAge(Number(e.target.value))}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <label className="flex flex-col gap-3 text-text text-lg">
                    Gewicht in ponden
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={weight}
                        onChange={(e)=>setWeight(Number(e.target.value))}
                    />
                </label>
                <label className="flex flex-col gap-3 text-text text-lg">
                    hoogte in inches
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={height}
                        onChange={(e)=>setHeight(Number(e.target.value))}
                    />
                </label>
            </div>
            {total&&<div className="">
                <p className='text-center mt-8 text-2xl font-bold'>Uw basaal metabolisme (BMR) is: {total}  </p>
            </div>}
            <button
                type='submit'
                className="my-8 px-8 py-3 text-white bg-primary hover:bg-primary-hover max-w-max mx-auto rounded-full"
            >
                Calculate
            </button>
        </form>
    )
}

export default CaloriesForm