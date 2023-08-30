import Image from "next/image";

type PropTypes = {
    direction: string;
    image: string;
    // @ts-ignore
    children: string | JSX.Element | JSX.Element[]
}
const CustomImage = (props:PropTypes) =>{
    return(
        <div className="grid grid-cols-1 gap-16 lg:gap-8 lg:grid-cols-2">
            {
                props.direction === 'ltr' && (
                    <div>
                        {props.children}
                    </div>
                )
            }
            <div
            className={`
            ${props.direction === 'ltr' ? 'lg:justify-self-end' : 'lg:justify-self-start'} relative object-cover justify-self-center
            `}

            >
            <Image src={props.image} alt={'Image'} className="rounded-xl lg:min-h-[500px]" />
            <div
                className="absolute -top-10 left-6 -z-10 w-[104px] h-[181px] bg-secondary rounded-md"
            ></div>
            <div
                className="absolute -bottom-10 right-6 -z-10 w-[104px] h-[181px] bg-secondary rounded-md"
            ></div>
        </div>
            {
                props.direction === 'rtl' && (
                    <div>
                        {props.children}
                    </div>
                )
            }
</div>
    )
}

export default CustomImage