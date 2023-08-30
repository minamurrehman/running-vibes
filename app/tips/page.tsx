'use client'
import TopCard from '@/components/TopCard'
import DualImage from '@/components/DualImage'
import Tip from '@/app/assets/img_4.png'
import Video from '@/components/Video'
import Newsletter from '@/components/Newsletter'

const Home = () => {
  // @ts-ignore

  return (
    <div className='min-h-max mb-24 lg:mb-4'>
      <TopCard
        title={'Health & Tips'}
        desc={
          'We believe fitness should be accessible to everyone, everywhere,' +
          ' regardless of income or access to a gym.'
        }
      />

          <DualImage image={Tip} direction={'ltr'} className={'my-24'}>
              <h1 className='text-[30px] lg:text-[40px] font-[600] max-w-[430px]'>
                  How do I motivate myself for walking ?
              </h1>
              <p className='font-normal text-text lg:max-w-[500px] mt-3'>
                  It's not always easy to motivate yourself. Sometimes you just have to
                  put on your shoes and go outside for a while and then the motivation
                  comes naturally. Make sure you have comfortable shoes and clothes on
                  and bring pleasant music. If you are just starting to walk or don't
                  feel like it, it can also be good to walk for 5 or 10 minutes before
                  you start walking. Be sure to try walking without music and listening
                  to yourself, especially your breathing. Your breathing is an important
                  aspect when walking. Try to walk in a quiet area, walking along a busy
                  road will make you not feel so good when you finish walking
                  afterwards.
              </p>
          </DualImage>


      {/*Videos */}
      <div className='grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1440px] mx-auto mt-24'>
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
      <Newsletter />
    </div>
  )
}

export default Home