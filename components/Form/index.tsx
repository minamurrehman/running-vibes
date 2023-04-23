import FormInput from "@/components/Form/FormInput";

const Form = () =>{
    return(
        <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
                <FormInput label="Geef afstand en eenheid" type="text" placeholder="1"/>
                <FormInput label="Kilometers" type="number" placeholder="Kilometers"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
                <FormInput label="Geef tijd" type="text" placeholder="0"/>
                <FormInput label="Uur" type="number" placeholder="0"/>
                <FormInput label="Minuten" type="number" placeholder="0"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
                <FormInput
                    label="Uw snelheid door running vibes is"
                    type="number"
                    placeholder="1"
                />
                <FormInput
                    label="Kilometers / uur"
                    type="number"
                    placeholder="Kilometers per uur"
                />
            </div>
            <button
                className="my-8 px-8 py-3 text-white bg-primary hover:bg-primary-hover max-w-max mx-auto rounded-full"
            >
                Calculate
            </button>
        </form>
    )
}

export default Form