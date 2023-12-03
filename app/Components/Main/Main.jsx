import React, { useEffect } from "react"
import "./Main.css"
import SearchMakerCard from "./SearchMakerCard"
import DiscordIcon from "@/public/assets/DiscordIcon"
import InstaIcon from "@/public/assets/InstaIcon"
import YoutubeIcon from "@/public/assets/YoutubeIcon"
import Script from "next/script"
import { elem_ids } from "@/app/Utils/States"
import Promotion from "./Promotion/Promotion"
import DownArrowIcon from "@/public/assets/DownArrowIcon"


const Main = ({
  delay_style,
  current_popUp,
  setCurrent_popUp,
  curr_search_delay,
  setCurr_search_delay,
  search_count,
  setSearch_count
}) => {


  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
    <main>
      <div className="adsense_space" id="adsense-one">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8708861413425372"
          data-ad-slot="8767328021"
          data-ad-format="auto"
        />
      </div>

      <div className="main_content">
        <section className="top_section">
          <h1 className="heading">Automate daily bing searches.</h1>
        </section>

        <section className="search_maker">
          <div className="wrapper">

            < SearchMakerCard
              delay_style={delay_style}
              current_popUp={current_popUp}
              setCurrent_popUp={setCurrent_popUp}
              curr_search_delay={curr_search_delay}
              setCurr_search_delay={setCurr_search_delay}
              search_count={search_count}
              setSearch_count={setSearch_count}
            />

          </div>
        </section>

        <section className="social_links">
          <div className="wrap">
            < Promotion />
          </div>
        </section>

        <a className="tutorial_trigger tutorial_popup" tabIndex={0} href="#tutorial">
          <div className="text">How to use ? </div>
          <div className="icon">< DownArrowIcon /></div>
        </a>
      </div>

      <div className="adsense_space" id="adsense-two">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8708861413425372"
          data-ad-slot="8767328021"
          data-ad-format="auto"
        />
      </div>

    </main>
  )
}

export default Main