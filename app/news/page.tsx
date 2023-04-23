
import TopCard from '@/components/TopCard'
import NewsCard from '@/components/NewsCard'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'
import {createServerComponentSupabaseClient} from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from 'next/headers'

export const revalidate = 0

export default async function Home() {

  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  const {data,error} = await supabase.from('articles').select('*').is('published',true)

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
    <main>

      {/*@ts-ignore*/}
      <TopCard
        title={'SEE LATEST NEWS'}
        desc={
          'We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym.'
        }
      />
      <div className='max-w-[1440px] mx-auto p-3 my-16'>
        <h2 className='font-bold text-3xl lg:text-[40px] text-center my-8'>
          Latest news items
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8'>
          {
           data && data?.length > 0 ?(data?.map((newsItem, index) => (
                <NewsCard
                    key={index}
                    title={newsItem.title}
                    desc={newsItem.shortDescription}
                    image={newsItem.banner}
                    url={newsItem.slug}
                />
            ))): <p>No news found</p>
          }
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
  )
}
