import "@/styles/main.scss"

type PropTypes = {
    title: string,
    desc: string
}
const TopCard = (props: PropTypes) => {

    const data = props.title.split(' ')
    let firstIndex = ''
    let lastIndex = ''
    if (data.length === 1) {
        firstIndex = props.title
        lastIndex = ''
    } else {

        // @ts-ignore
        lastIndex = data.pop()
        firstIndex = data.join(' ')
    }

    return (
        <div className="bg-primary-bg">
            <div className="relative wrapper min-h-[440px] max-w-[1440px] mx-auto">
                <div className="flex justify-center items-center h-[440px]">
                    <div
                        className="headingContainer px-2 relative flex flex-col gap-4 max-w-[550px]"
                    >
                        <div
                            className="miniBlock w-[72px] h-[100px] bg-secondary rounded-md absolute -top-16 left-0 -z-2"
                        ></div>
                        <h1 className="text-6xl uppercase font-bold z-40">
                            {firstIndex}
                            <span className="text-primary"> {lastIndex && lastIndex}</span>
                        </h1>
                        <p className="max-w-[600px] text-text">
                            {props.desc}
                        </p>
                    </div>
                </div>
                {/*decorations*/}
                <div
                    className="dec1 absolute -bottom-12 left-2 w-[170px] h-[304px] bg-secondary rounded-md"
                ></div>
                <div
                    className="dec2 absolute top-6 right-2 w-[170px] h-[304px] bg-primary rounded-md"
                ></div>
            </div>

        </div>
    )
}

export default TopCard