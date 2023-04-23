'use client'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/app/assets/hero.png'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa'

const Hero = () => {
  const social = [
    {
      icons: FaFacebook,
      url: 'https://facebook.com',
    },
    {
      icons: FaInstagram,
      url: 'https://instagram.com',
    },
    {
      icons: FaTwitter,
      url: 'https://twitter.com',
    },
    {
      icons: FaGooglePlus,
      url: 'https://googleplus.com',
    },
    {
      icons: FaYoutube,
      url: 'https://youtube.com',
    },
    {
      icons: FaPinterest,
      url: 'https://pinterest.com',
    },
  ]
  return (
    <div className='bg-primary-bg py-24 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-4 max-w-[1440px] mx-auto items-center'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <div className='relative'>
            <div className='absolute rounded-xl -z-2 -top-16 left-0 bg-secondary h-32 w-24'></div>
            <h1 className='relative text-6xl md:text-7xl lg:text-8xl z-40 font-bold'>
              <span className='block sm:inline md:block text-heading'>
                Running
              </span>
              <span className='text-primary'>Vibes</span>
            </h1>
          </div>
          <p className='text-base text-text'>Website for runners by runners</p>
          <p className='text-base font-semibold max-w-[450px] text-text'>
            All competitions in the coming months can be viewed via the link
            "AGENDA" under competitions
          </p>
          <Link
            className='text-xl text-white bg-primary hover:bg-primary-hover rounded-full px-7 whitespace-nowrap py-2 max-w-min'
            href='/'
          >
            Get Started
          </Link>
          <div className='flex gap-4 mt-3'>
            {social.map((item) => (
              <Link href={item.url}>
                <item.icons className='text-primary text-2xl' />
              </Link>
            ))}
          </div>
        </div>
        <div className='relative'>
          <div className='absolute bottom-0 left-[24%] rounded-xl -z-2 bg-secondary h-[47%] w-[30%]'></div>
          <div className='absolute top-12 right-[14%] rounded-xl -z-2 bg-primary h-[68%] w-[30%]'></div>
          <Image src={HeroImage} alt='Hero Iamge' className='relative z-40' />
        </div>
      </div>
    </div>
  )
}

export default Hero
