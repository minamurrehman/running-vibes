import Link from "next/link";
import Image from "next/image";

import Facebook from '@/app/assets/facebook.svg'
import Instagram from '@/app/assets/instagram.svg'
import Twitter from '@/app/assets/twitter.svg'
import Google from '@/app/assets/googleplus.svg'
import Youtube from '@/app/assets/youtube.svg'
import Pinterest from '@/app/assets/pinterest.svg'
import {FaFacebook, FaGooglePlus, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";


interface Social {
    icon:string;
    url: string;
}

const Footer = ({social}:{social:Social[]}) => {

    const links = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Tools',
            url: '/tools',
        },
        {
            name: 'About us',
            url: '/about-us',
        },
        {
            name: 'Coaching',
            url: '/coaching',
        },
        {
            name: 'Tips',
            url: '/tips',
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
               <Link href={'/'}>
                   <img src="/logo.png" alt="Logo" className='w-48 h-12'/>
               </Link>
                <div className="flex gap-6">
                    {social.map((item) => (

                        <Link key={item.url} href={item.url}>
                            {
                                item.icon === 'facebook'.toLowerCase()? <FaFacebook className='text-primary text-2xl'  />:
                                    item.icon === 'twitter'.toLowerCase()? <FaTwitter className='text-primary text-2xl'  />:
                                        item.icon === 'linkedin'.toLowerCase()? <FaLinkedin className='text-primary text-2xl'  />:
                                            item.icon === 'instagram'.toLowerCase()? <FaInstagram className='text-primary text-2xl'  />:
                                                item.icon === 'googleplus'.toLowerCase()? <FaGooglePlus className='text-primary text-2xl'  />:
                                                    item.icon === 'pinterest'.toLowerCase()? <FaPinterest className='text-primary text-2xl'  />:
                                                        item.icon === 'youtube'.toLowerCase()? <FaYoutube className='text-primary text-2xl' />:''
                            }
                        </Link>
                    ))}
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