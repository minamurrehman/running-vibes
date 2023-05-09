'use client'
import {FacebookShareButton, TwitterShareButton, FacebookMessengerShareButton, LinkedinShareButton} from "react-share";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {usePathname} from "next/navigation";

const Share = ({url,type}) =>{
    const pathname = usePathname()
    if(type==='facebook'){
        return (
            <FacebookShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}>
                <FaFacebook size={24} className='text-pink-700'/>
            </FacebookShareButton>
        )
    }
    else if(type==='twitter'){
        return (
            <TwitterShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}>
                <FaTwitter size={24} className='text-pink-700'/>
            </TwitterShareButton>
        )

    }else{
        return (
            <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}>
                <FaLinkedin size={24} className='text-pink-700'/>
            </LinkedinShareButton>
        )
    }
}

export default Share