import DualImage from '@/components/DualImage'

import Exercise1 from './assets/exercise1.png'
import Exercise2 from './assets/exercise2.png'
import Link from 'next/link'
import NewsCard from '@/components/NewsCard'
import Newsletter from '@/components/Newsletter'
import Hero from '@/components/Hero'

export default function Home() {
  const news = [
    {
      title: 'Schedule for the half marathon',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'schedule-for-the-half-marathon',
    },
    {
      title: 'Updated results page',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'updated-result-page',
    },
    {
      title: 'Schedule fast 10 kilometers',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'schedule-fast-10-km',
    },
    {
      title: 'Running schedule 5 kilometers',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'running-schedule-5-km',
    },
    {
      title: 'Running apps',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'running-apps',
    },
    {
      title: 'Power food for runners: apple spelled cake',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'power-food-for-runners',
    },
    {
      title: 'Houffaraid 2018',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'houffaradid-2018',
    },
    {
      title: 'Favorite walking distance',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'favorite-walking-distance',
    },
    {
      title: 'Houffaraid 2018',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'houffaradid-2018-2',
    },
    {
      title: 'Review: Kalenji Run Light',
      desc: 'We believe fitness should be accessible to everyone, everywhere.',
      image: 'https://picsum.photos/200/200',
      slug: 'review-kalenji-run-light',
    },
  ]
  return (
    <>
      <Hero />
      <main className='max-w-[1440px] mx-auto p-3'>
        <DualImage imageA={Exercise2} imageB={Exercise1}>
          <h1 className='text-[40px] font-[600] md:max-w-[400px]'>
            Work out at home for free
          </h1>
          <p className='font-normal text-text md:max-w-[500px] mt-3'>
            We believe fitness should be accessible to everyone, everywhere,
            regardless of income or access to a gym. With hundreds of
            professional workouts, healthy recipes and informative articles, as
            well as one of the most positive communities on the web, you’ll have
            everything you need to reach your personal fitness goals – for free!
          </p>
          <Link href='/' className='text-primary flex gap-2 items-center my-4'>
            See More
            <svg
              width='18'
              height='14'
              viewBox='0 0 18 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.66064 6.95189L16.2348 6.95189'
                stroke='#00B274'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.4732 1.04651L17 7L10.4732 12.9535'
                stroke='#00B274'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </DualImage>

        <div className='max-w-[1440px] mx-auto p-3'>
          <h2 className='font-bold text-3xl lg:text-[40px] text-center my-8'>
            Latest news items
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8'>
            {news.map((newsItem, index) => (
              <NewsCard
                key={index}
                title={newsItem.title}
                desc={newsItem.desc}
                image={newsItem.image}
                url={newsItem.slug}
              />
            ))}
          </div>
          <Link
            href='/more'
            className='block mx-auto bg-primary w-max px-6 py-2 my-12 hover:bg-primary-hover text-white rounded-full'
          >
            Load More
          </Link>
        </div>
        <Newsletter />
      </main>
    </>
  )
}