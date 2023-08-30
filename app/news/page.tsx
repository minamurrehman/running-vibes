import TopCard from "@/components/TopCard";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import {clientFetch} from "@/utils/client";
import {groq} from "next-sanity";
import {urlFor} from "@/utils/url";
import {toast} from "react-toastify";
import promise = toast.promise;
import ShowNews from "@/components/ShowNews";

export const revalidate = 60;
interface NewsType {
  content: string;
  title: string;
  shortDescription: string;
  banner: string;
  slug: {
    current: string
  };
}

async function fetchArticles() {
  const query = groq`
  *[_type == 'articles']{...,categories[]->{title}}
  `
  const news: NewsType[] = await clientFetch(query)
  return news;
}
async function fetchCategories() {
  const query = groq`
  *[_type == 'category']
  `
  return await clientFetch(query)
}

async function Home() {
  const newsData = fetchArticles()
  const categoriesData = fetchCategories()
  const [news,categories] = await Promise.all([newsData,categoriesData])
  return (
    <main>
      <TopCard
        title={"SEE LATEST NEWS"}
        desc={
          "We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym."
        }
      />
        <ShowNews news={news} categories={categories} showLoad={false}/>
      <Newsletter />
    </main>
  );
}
export default Home;
