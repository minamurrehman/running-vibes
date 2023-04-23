type PropTypes = {
    label: string,
    type: string,
    placeholder: string
}
const FormInput = (props:PropTypes) =>{
    return(
        <div>
            <label className="flex flex-col gap-3 text-text text-lg">
                {props.label}
                <input
                type={props.type}
                className="bg-[#E4E4E4] rounded-full px-4 py-2 outline-primary text-black"
                placeholder={props.placeholder}
                />
            </label>
        </div>
    )
}

export default FormInput