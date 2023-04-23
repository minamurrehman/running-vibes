import Link from "next/link";
import Image from "next/image";

import Facebook from '@/app/assets/facebook.svg'
import Instagram from '@/app/assets/instagram.svg'
import Twitter from '@/app/assets/twitter.svg'
import Google from '@/app/assets/googleplus.svg'
import Youtube from '@/app/assets/youtube.svg'
import Pinterest from '@/app/assets/pinterest.svg'


const Footer = () => {

    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Tools',
            url: '/',
        },
        {
            name: 'About us',
            url: '/',
        },
        {
            name: 'Coaching',
            url: '/',
        },
        {
            name: 'Tips',
            url: '/',
        },
    ]
    const logos = [
        {
            name: 'Facebook',
            url: '',
            image: Facebook,
        },
        {
            name: 'Instagram',
            url: '',
            image: Instagram
        },
        {
            name: 'Twitter',
            url: '',
            image: Twitter,
        },
        {
            name: 'Google Plus',
            url: '',
            image: Google,
        },
        {
            name: 'Youtube',
            url: '',
            image: Youtube,
        },
        {
            name: 'Pinterest',
            url: '',
            image: Pinterest,
        },
    ]
    return (
        <footer className="py-12 px-2">
            <div
                className="flex flex-col md:flex-row gap-4 md:gap-8 xl:gap-12 font-[400] text-text justify-center items-center my-8"
            >

                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.url}>
                                {link.name}
                            </Link>
                        ))
                    }

            </div>
            <div
                className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center max-w-[1440px] mx-auto"
            >
                <img src="/logo.svg" alt="Logo"/>
                <div className="flex gap-6">
                    {
                        logos.map((logo, index) => (
                            <div key={index} className='cursor-pointer'>
                                <Image src={logo.image} alt={logo.name} width={20} height={20} className="w-8"/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p className="text-[#9A9EA6] text-center py-4">
                &copy; 2000-
                {new Date().getFullYear()}
                , All Rights Reserved
            </p>
        </footer>
    )
}

export default Footer