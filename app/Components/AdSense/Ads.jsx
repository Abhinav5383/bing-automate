import React, { useEffect } from 'react'
import { Adsense } from '@ctrl/react-adsense'



const Ad_banner = () => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (

    <div className=" adsbygoogle89 ads ">
      <Adsense
        client="ca-pub-8708861413425372"
        slot="8767328021"
        style={{ display: "block" }}
        layout="in-article"
        format="auto"
      />
    </div>

  )
}

export default Ad_banner