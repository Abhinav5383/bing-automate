import React, { useEffect, useState } from "react"
import "./Main.css"
import SearchMakerCard from "./SearchMakerCard"
import { delay_values, elem_ids } from "@/app/Utils/States"
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

  const [ETA, setETA] = useState(0);

  const find_ETA = (delay, searches) => {
    let total_time = 0;
    let mins = 0;
    let seconds = 0;

    if (delay_style === delay_values.random) {
      let min = curr_search_delay.min;
      let max = curr_search_delay.max;

      delay = Math.floor(Math.random() * (max - min + 1)) + min;
      delay = Math.round((delay / 1000) * 10) / 10
    }

    total_time = delay * searches;
    mins = Math.floor(total_time / 60);
    seconds = Math.floor(total_time % 60);

    if (mins != 0) {
      return `${mins}min ${seconds}s`
    }
    else if (mins == 0) {
      return `${seconds}s`
    }
  }

  useEffect(() => {
    if (!curr_search_delay) return;

    let eta = 0;
    if (!search_count) {
      eta = find_ETA((curr_search_delay / 1000), 0);
    }
    else {
      eta = find_ETA((curr_search_delay / 1000), search_count);
    }
    setETA(eta);

  }, [curr_search_delay, search_count])


  useEffect(() => {
    if (!curr_search_delay) return;

    let eta = 0;
    if (!search_count) {
      eta = find_ETA((curr_search_delay / 1000), 0);
    }
    else {
      eta = find_ETA((curr_search_delay / 1000), search_count);
    }
    setETA(eta);


  }, [])

  return (
    <main>

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

          <div className="estimated_time">
            Estimated time :- {ETA}
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

    </main>
  )
}

export default Main