import Image from 'next/image'
import '@/styles/main.scss'
// @ts-ignore
const DualImage2 = (props) => {
  return (
      <div className='customContainer2 my-12'>
          <div className='imageContainer2'>
              <Image src={props.image} alt={'Card Image'} />
          </div>
          <div className={'content2'}>{props.children}</div>

      </div>
  )
}

export default DualImage2
