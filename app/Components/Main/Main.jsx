import React, { useEffect } from "react"
import "./Main.css"
import SearchMakerCard from "./SearchMakerCard"
import DiscordIcon from "@/public/assets/DiscordIcon"
import InstaIcon from "@/public/assets/InstaIcon"
import YoutubeIcon from "@/public/assets/YoutubeIcon"
import { elem_ids } from "@/app/Utils/States"




const Main = ({
  delay_style,
  current_popUp,
  setCurrent_popUp,
  curr_search_delay,
  setCurr_search_delay,
  search_count,
  setSearch_count
}) => {


  return (
    <main>

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

      <div className="social_links">
        <div className="wrap">

          <a className="discord link" href="https://discord.gg/G3QVgvwpxE">< DiscordIcon /></a>
          <a className="youtube link" href="https://www.youtube.com/@shirtlessdigital">< YoutubeIcon /></a>
          {/* <a className="instagram link" href="https://discord.gg/G3QVgvwpxE">< InstaIcon /></a> */}

        </div>
      </div>

      <div className="tutorial_trigger tutorial_popup" tabIndex={0} onClick={() => { setCurrent_popUp(elem_ids.tutorial_popup) }}>
        <div className="text">How to use ?</div>
      </div>

    </main>
  )
}

export default Main