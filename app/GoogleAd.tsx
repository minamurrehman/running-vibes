'use client'
import React, { useEffect } from 'react';

const GoogleAd = () => {
    useEffect(() => {
        // Load Google Ads script
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        document.body.appendChild(script);

        // Initialize ad

        // @ts-ignore
        if (window.adsbygoogle) {
            // @ts-ignore
            window.adsbygoogle.push({});
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-0744890547740544"
            data-ad-slot="1285617007"
            data-ad-format="auto"
        />
    );
};

export default GoogleAd;