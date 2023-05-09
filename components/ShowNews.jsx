'use client'
import NewsCard from "@/components/NewsCard";
import {urlFor} from "@/utils/url";
import Link from "next/link";
import {useState} from "react";

const ShowNews = ({categories,news}) =>{
    const [selected,setSelected] = useState(categories[0].title)
    const filteredNews = news.filter(news => news?.categories?.some(category => category.title.toLowerCase() === selected.toLowerCase()));

    return(
        <>


        <div className='mt-16 max-w-[1440px] mx-auto flex gap-8 items-center overflow-x-scroll  scrollbar-hide border-b-2'>
            {
                categories?.map((category)=>(
                    <div onClick={()=>setSelected(category?.title)} className=''>
                        <p className={`text-xl cursor-pointer py-1 ${selected?.toLowerCase()===category?.title?.toLowerCase()? 'border-b-4 border-primary px-2 rounded-sm':'opacity-50'}`} >{category?.title}</p>
                    </div>
                ))
            }
        </div>
    <div className="max-w-[1440px] mx-auto p-3 my-16">
        <h2 className="font-bold text-3xl lg:text-[40px] text-center my-8">
            Latest news items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {filteredNews && filteredNews?.length > 0 ? (
                filteredNews?.map((newsItem, index) => (
                    <NewsCard
                        key={index}
                        title={newsItem.title}
                        desc={newsItem.shortDescription}
                        image={urlFor(newsItem?.banner).url()}
                        url={newsItem.slug.current}
                    />
                ))
            ) : (
                <p>No news found</p>
            )}
        </div>
        <Link
            href="/more"
            className="block mx-auto bg-primary w-max px-6 py-2 my-12 hover:bg-primary-hover text-white rounded-full"
        >
            Load More
        </Link>
    </div>
    </>
    )
}

export default ShowNews