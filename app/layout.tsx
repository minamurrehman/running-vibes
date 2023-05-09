import './globals.css'
import Nav from '@/components/Nav'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

import 'vidstack/styles/base.css'
import 'vidstack/styles/ui/buttons.css'
import 'vidstack/styles/ui/captions.css'
import 'vidstack/styles/ui/tooltips.css'
import 'vidstack/styles/ui/live.css'
import 'vidstack/styles/ui/sliders.css'

import 'react-toastify/dist/ReactToastify.css'
import Script from 'next/script';
import {groq} from "next-sanity";
import {clientFetch} from "@/utils/client";

async function fetchSocial() {
    const query = groq`
      *[_type=='social']
      `
    return await clientFetch(query);
}


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})
export const metadata = {
  title: 'Running Vibes',
  description: 'Running vibes',
}
interface Social {
    icon:string;
    url: string;
}

export default async function RootLayout({
                            children,
                          }: {
  children: React.ReactNode
}) {
    const socialData:Social[] = await fetchSocial();
    // @ts-ignore
    return (
      <html suppressHydrationWarning={true} lang='en'>
      <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-app-pub-3940256099942544"
                  crossOrigin="anonymous"></script>
          {/*@ts-ignore*/}
          <link rel='nofollow' href="https://cdn.syncfusion.com/blazor/18.1.45/styles/fabric.css" rel="stylesheet" />
          <title></title>
      </head>
      <body className={`${poppins.variable} font-poppins`}>
      <main>
        <Nav />
        {children}
        <Footer social={socialData}/>
      </main>
      </body>
      </html>
  )
}
