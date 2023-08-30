import Image from 'next/image'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import Newsletter from '@/components/Newsletter'
import {clientFetch} from '@/utils/client';
import { PortableText } from '@portabletext/react';
import {urlFor} from '@/utils/url';
import {PortableTextComponents} from '@portabletext/react'
import Link from 'next/link';
import {groq} from 'next-sanity'
import Share from "@/components/Share";
import GoogleAd from "@/app/GoogleAd";
interface NewsType {
  body: any;
  title: string;
  shortDescription: string;
  banner: object;
  _createdAt:string;
  publishedAt:string;
  slug: {
    current: string
  };
  author:{
      name:string
  }
}



export const revalidate = 300;

const components: PortableTextComponents = {
    list:{
        bullet: ({children}) => <ul className="mt-xl list-disc">{children}</ul>,
    number: ({children}) => <ol className="mt-lg list-decimal">{children}</ol>,
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
    },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({children}) => <em className="text-gray-600 font-semibold">{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Link href={value?.href} target={target} className='underline decoration-emerald-700 underline-offset-2'>
          {children}
        </Link>
      )
    },
  },
    block:{
        h1:({children})=> <h1 className='text-5xl font-bold py-10'>{children}</h1>,
        h2:({children})=> <h1 className='text-4xl font-bold py-10'>{children}</h1>,
        h3:({children})=> <h1 className='text-3xl font-bold py-10'>{children}</h1>,
        h4:({children})=> <h1 className='text-2xl font-bold py-10'>{children}</h1>,
        blockquote:({children})=> <blockquote className='text-xl my-10 px-6 ml-6 border-l-4 border-primary'>{children}</blockquote>,
    },
  types: {
    image: ({ value }:{value:any}) => {
        
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div>
            <img
            alt={value.alt}
          loading="lazy"
          className='object-contain'
          src={urlFor(value).height(400).fit('fill').auto('format').url()}
        />
        </div>
      )
    }
  }
}


export async function generateStaticParams() {
  const query = groq`
    *[_type == 'articles']{
      slug
    }
  `
  const slugs = await clientFetch(query)
  const slugRoutes = slugs?.map((slug:any)=> slug.slug.current)
  return slugRoutes.map((slug:any) => ({
    slug
  }));
}

async function fetchArticles(slug:any) {
  const query = groq`
   *[_type == 'articles' && slug.current == $slug][0]{ ...,
  author->,
 categories[]->{title}}
  `
  const news: NewsType = await clientFetch(query,{slug:slug})
  return news;
}



export default async function NewsInfo ({params}:any){
 const news = await fetchArticles(params?.slug);
 

    return (
        <div>
            <div className='bg-primary-bg'>
                <div className='max-w-[1440px] mx-auto px-4'>
                    <div className='py-4'>
                        <p className='text-xl'>
                            <span className='font-bold'>News &gt; </span>
                            {news && news?.title}
                        </p>
                    </div>
                </div>
                {/*banner image */}
                <div className='max-w-[1440px] mx-auto px-4'>
                    <div className='relative h-[400px] md:h-[550px]'>
                        <Image
                            src={news && urlFor(news?.banner).url()}
                            alt={'banner image'}
                            width={1440}
                            height={400}
                            className='absolute object-cover h-[400px] md:h-[550px] rounded-xl z-10'
                        />
                        <div
                            className='hidden md:block bg-secondary w-28 rounded-xl h-28 absolute -bottom-10 left-6 -z-1'></div>
                        <div
                            className='hidden md:block bg-primary w-28 rounded-xl h-28 absolute -top-10 right-6 -z-1'></div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto px-4'>
                <div className='mt-16 flex flex-col md:flex-row gap-6 justify-between'>
                    <div className='flex gap-4'>
                        <Share url={`${process.env.NEXT_PUBLIC_SITE_URL}/${params?.slug}`} type='facebook'/>
                        <Share url={`${process.env.NEXT_PUBLIC_SITE_URL}/${params?.slug}`} type='twitter'/>
                        <Share url={`${process.env.NEXT_PUBLIC_SITE_URL}/${params?.slug}`} type='linkedin'/>
                        {/*<Share url={`${process.env.NEXT_PUBLIC_SITE_URL}/${params?.slug}`} type='instagram'/>*/}
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>

                        <div>
                            <p className='font-semibold text-text'>Published At</p>
                            <p className='text-text'>{new Date(news && news?._createdAt).toDateString()}</p>
                        </div>
                        <div>
                            <p className='font-semibold text-text'>Updated At</p>
                            <p className='text-text'>{new Date(news && news?._createdAt).toDateString()}</p>
                        </div>
                        <div>
                            <p className='font-semibold text-text'>Source / Author</p>
                            <p className='text-text'>{news && news?.author?.name}</p>
                        </div>

                    </div>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-8 text-heading'>
                    {news && news?.title}
                </h1>

                <PortableText value={news && news?.body} components={components}/>
            </div>
            <GoogleAd/>
            <Newsletter/>
        </div>
    )
}
