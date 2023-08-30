import Image from 'next/image'

// @ts-ignore
const DualImage = (props) => {
  return (
    <div className='customContainer my-12'>
        <div className={'content'}>{props.children}</div>
      <div className='imageContainer'>
        <Image src={props.image} alt={'Card Image'} />
      </div>
    </div>
  )
}

export default DualImage
