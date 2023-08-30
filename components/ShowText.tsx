type Props = {
    content:string
}
const ShowText = (props:Props) =>{
    return(
        <div className='text-justify text-text prose lg:prose-xl' dangerouslySetInnerHTML={{__html: props.content}}></div>
    )
}

export default ShowText