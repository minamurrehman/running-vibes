import Image from 'next/image'
import '@/styles/main.scss'
// @ts-ignore
const DualImage = (props) => {
  return (
    <div className='customContainer my-12'>
      <div>{props.children}</div>

      <div className='imageContainer'>
        <Image src={props.imageA} alt='Image' className='firstImage' />
        <Image src={props.imageB} alt='Image' className='secondImage' />
        <div className='firstBlock'></div>
        <div className='secondBlock'></div>
      </div>
    </div>
  )
}

export default DualImage
