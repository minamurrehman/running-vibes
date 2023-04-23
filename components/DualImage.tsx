import Image from 'next/image'

// @ts-ignore
const DualImage = (props) => {
  return (
    <div className='customContainer my-12'>
        {
            props.direction === 'ltr' && (
                <div className={'content'}>{props.children}</div>
            )
        }

      <div className='imageContainer'>
        <Image src={props.image} alt={'Card Image'} />
      </div>
        {
            props.direction === 'rtl' && (
                <div className={'content'}>{props.children}</div>
            )
        }
    </div>
  )
}

export default DualImage
