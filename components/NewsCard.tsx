import Image from "next/image";
import Link from "next/link";


type PropsType = {
    title: string,
    image: string,
    desc: string,
    url: string
}
const NewsCard = (props:PropsType) =>{

    
    return(
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 items-center">
            <Image src={props.image} className="rounded-lg block w-96 h-56 overflow-hidden" width={200} height={100} alt={props.title} />
            <div className="flex flex-col gap-4 max-w-[300px]">
                <h3 className="font-bold text-2xl lg:text-3xl">
                    { props.title }
                </h3>
                <p className="text-text text-normal text-[16px]">{ props.desc }</p>
                <Link
                    prefetch={true}
                    className="flex gap-2 items-center text-primary text-[16px] font-[600]"
                href={props.url}
                >See More
                <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.66064 6.95189L16.2348 6.95189"
                        stroke="#00B274"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10.4732 1.04651L17 7L10.4732 12.9535"
                        stroke="#00B274"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                </Link>
        </div>
</div>
    )
}

export default NewsCard