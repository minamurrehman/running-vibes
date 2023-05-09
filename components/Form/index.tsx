'use client'
import {FormEvent, useState} from "react";

const Form = () =>{
    const UNITS =[
        {
            name: "Kilometers",
            value: "km"
        },{
            name: "Meter",
            value: "m"
        }
    ]
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [distance,setDistance] = useState(0)
    const [unit,setUnit] = useState(UNITS[0].value)
    const [total,setTotal] = useState<number|null>(null)
    function convertToMinutes(hours:number, minutes:number) {
        // Convert hours to minutes
        const hoursInMinutes = hours ? hours * 60 : 0;

        // Add the minutes
        return hoursInMinutes + (minutes || 0);
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        const time = convertToMinutes(hours,minutes)
        const myTotal = Number((distance/(time/60)).toFixed(4))
        setTotal(myTotal)
    }
    return(
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <label className="flex flex-col gap-3 text-text text-lg">
                    Geef afstand
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={distance}
                        onChange={(e)=>setDistance(Number(e.target.value))}
                    />
                </label>
                <label className="flex flex-col gap-3 text-text text-lg">
                    Eenheid
                    <select value={unit} onChange={(e)=>setUnit(e.target.value)} name="unit" id="unit" className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-text">
                        {
                            UNITS.map((un)=>(
                                <option value={un.value}>{un.name}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <label className="flex flex-col gap-3 text-text text-lg">
                    Uur
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={hours}
                        onChange={(e)=>setHours(Number(e.target.value))}
                    />
                </label>
                <label className="flex flex-col gap-3 text-text text-lg">
                    Minuten
                    <input
                        type='number'
                        className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                        placeholder='0'
                        defaultValue={minutes}
                        onChange={(e)=>setMinutes(Number(e.target.value))}
                    />
                </label>
            </div>
            {total&&<div className="">
                <p className='text-center mt-8 text-2xl font-bold'>Your speed is {total} ({unit==='km'?'Kilometer': 'Meter'}/uur) </p>
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

export default Form