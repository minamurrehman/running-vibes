import TopCard from '@/components/TopCard'
import DualImage from '@/components/DualImage'
import DualImage2 from '@/components/DualImage2'

import Puropse1 from '@/app/assets/purpose1.png'
import Puropse2 from '@/app/assets/purpose2.png'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      {/*@ts-ignore*/}
      <TopCard
        title={'ABOUT US'}
        desc={
          'Founded by 2 people with a love for walking and for each other. With' +
          ' this website we want to bring runners into contact with each other, give advice and tips, share' +
          ' experiences and bring news of the running world in Flanders, but also in Zeeland.'
        }
      />

      <DualImage imageA={Puropse2} imageB={Puropse1} className={'my-16'}>
        <h1 className='text-[40px] font-[600] max-w-[400px]'>Our Purpose</h1>
        <p className='font-normal text-text max-w-[500px] mt-3'>
          The purpose of this website is to bring runners closer together and to
          exchange experiences. If you are looking for help or want tips, we
          hope to be able to help or guide you to the goal you have in mind with
          this website. ​ Since our base of operations is located in Assenede,
          our focus in terms of competitions is on the Eeklo-Gent-Waasland
          region in Flanders and Zeeland in the Netherlands. For trails, a
          further trip is already made.
        </p>
      </DualImage>
      <div className='mt-16'>
        <DualImage2 imageA={Puropse2} imageB={Puropse1}>
          <p className='flex flex-col gap-4 font-normal text-text max-w-[500px] mt-3'>
            If you have any tips or suggestions for improvement for the website,
            feel free to send us these and we will do everything possible to
            realize it. Keep in mind that this is a website without funding so
            our options are unfortunately limited. ​ Do you have photos or
            results that you would like to see on the website? Feel free to
            email them to:
            <Link
              className='block text-primary'
              href='mailto:runningvibes.info@gmail.com'
            >
              runningvibes.info@gmail.com
            </Link>
            <br />
            Enjoy Running!
            <br />
            <p>Running Vibes Team TT</p>
          </p>
        </DualImage2>
      </div>
    </div>
  )
}

export default Home
