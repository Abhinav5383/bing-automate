import React, { useEffect } from 'react';

const AdSense = () => {

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (

    <ins
      class="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8708861413425372"
      data-ad-slot="8767328021"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdSense;
