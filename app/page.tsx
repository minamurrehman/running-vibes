import DualImage from '@/components/DualImage'

import Exercise from '@/app/assets/img_2.png'
import Link from 'next/link'
import NewsCard from '@/components/NewsCard'
import Newsletter from '@/components/Newsletter'
import Hero from '@/components/Hero'
import {clientFetch} from '@/utils/client'
import {groq} from 'next-sanity'
import GoogleAd from "@/app/GoogleAd";

interface NewsType {
  content: string;
  title: string;
  shortDescription: string;
  banner: string;
  slug: {
    current: string
  };
}

interface Social {
  icon:string;
  url: string;
}

export const revalidate = 300;


async function fetchArticles() {
  const query = groq`
      *[_type == 'articles']{
         ...,
          "banner": banner.asset->url
      }
      `
  return await clientFetch(query);
}
async function fetchSocial() {
  const query = groq`
      *[_type=='social']
      `
  return await clientFetch(query);
}

export default async function Home() {
  const newsData:Promise<NewsType[]> = fetchArticles();
  const socialData:Promise<Social[]> = fetchSocial();

  const [news,social] = await Promise.all([newsData,socialData])
  return (
    <>
      <Hero social={social}/>
      <main className='max-w-[1440px] mx-auto p-3'>
        <DualImage image={Exercise} direction='ltr'>
          <h1 className='text-[30px] lg:text-[40px] font-[600] md:max-w-[400px]'>
            Work out at home for free
          </h1>
          <p className='font-normal text-text lg:max-w-[500px] mt-3'>
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
            {news?.map((newsItem, index) => (
              <NewsCard
                key={index}
                title={newsItem.title}
                desc={newsItem.shortDescription}
                image={newsItem.banner}
                url={newsItem.slug.current}
              />
            ))}
          </div>
          <Link
            href='/news'
            className='block mx-auto bg-primary w-max px-6 py-2 my-12 hover:bg-primary-hover text-white rounded-full'
          >
            Load More
          </Link>
        </div>
        <GoogleAd/>
        <Newsletter />
      </main>
    </>
  )
}