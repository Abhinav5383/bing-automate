import { useEffect, useState } from "react";
import "./SearchMakerCard.css"
import Prefixes from "@/app/Utils/Prefixes";
import { generate as random_word } from "random-words";
import { delay_values } from "@/app/Utils/States";



const SearchMakerCard = ({
  delay_style,
  current_popUp,
  setCurrent_popUp,
  curr_search_delay,
  setCurr_search_delay,
  search_count,
  setSearch_count
}) => {


  const [tabs_opening, setTabs_opening] = useState(false);
  const cvidLetters = "W32567778Y62959S39639A808674C81680413728H35O074354029X54I0E99442137J62U922584162758880T2MB1965VD79R4QV405015Z1KL1801G1427N6367350P1363F";
  const LOGIN_URL = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&id=264960&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3fedge_suppress_profile_switch%3d1%26requrl%3dhttps%253a%252f%252fwww.bing.com%252f%253ftoWww%253d1%2526redig%253d9044EF12948D468FB34C8DA3BE2D867E%2526wlexpsignin%253d1%26sig%3d30CAAE658C3467962BFBBDB98D7866C5%26nopa%3d2&wp=MBI_SSL&lc=1033&pcexp=false&CSRFToken=5dfa9228-3d3d-4c88-8a53-2b22b961658d&cobrandid=c333cba8-c15c-4458-b082-7c8ce81bee85&aadredir=1&nopa=2";



  const get_delay = () => {
    if (!curr_search_delay) return 4500;

    if (delay_style === delay_values.random) {
      let min = curr_search_delay.min;
      let max = curr_search_delay.max;

      let delay = Math.floor(Math.random() * (max - min + 1)) + min;

      return delay;
    }

    return curr_search_delay;
  }

  const generateQuery = () => {
    const randomIndex = Math.floor(Math.random() * Prefixes.length);
    let query = Prefixes[randomIndex] + random_word();
    query = query.replaceAll(" ", "+");

    return query;
  };

  const generateCvid = (len = 32) => {
    let cvid = "";

    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * cvidLetters.length);
      cvid += cvidLetters[randomIndex];
    }

    return cvid;
  };


  const openTabs = () => {
    let i = 0;
    let loopNumber = Number.parseInt(search_count);
    setTabs_opening(true);

    // Make sure to sign in on bing.com
    let newTab = window.open(LOGIN_URL, "_blank");
    if (newTab) {
      window.focus();
      newTab.blur();

      setTimeout(() => {
        newTab.close();
      }, 3500)
    }

    let interval = setInterval(() => {

      let query = generateQuery();
      let cvid = generateCvid();


      if (i < (loopNumber * 2)) {
        let url;
        let close_time = get_delay() - 200;

        if (i % 2 === 0) {
          url = `https://www.bing.com/news/search?q=${query}&qs=n&form=QBNT&sp=-1&lq=0&pq=${query.slice(0, query.length - 2)}&sc=10-5&sk=&cvid=${cvid}=0&ghacc=0&ghpl=`;
          close_time = close_time / 1.3;
        }
        else {
          url = "https://rewards.bing.com";
          close_time = close_time * 1.2
        }

        let newTab = window.open(url, "_blank");
        if (newTab) {
          window.focus();
          newTab.blur();

          setTimeout(() => {
            newTab.close();
          }, close_time)
        }

        i++;
      } else {
        clearInterval(interval);
        setTabs_opening(false);
      }

    }, get_delay())
  };



  const formSubmit = () => {
    if (tabs_opening || !search_count) return;
    openTabs();
  };


  return (

    <div className="search_maker">
      <div className="container">

        <form className='opener_form' action="#"
          onSubmit={(event) => { event.preventDefault(); formSubmit(); }}
        >

          <div className="controls">

            <div className="tab_count input_box">
              <div className="row">
                <label htmlFor="tab_count_input">No. of searches : </label>
              </div>
              <div className="row">

                <div className="minus btn"
                  tabIndex={0}
                  onClick={() => {
                    setSearch_count((search_count) => {
                      if (!search_count && search_count !== 0) return 0;
                      if (search_count < 5) return search_count;
                      return search_count - 5;
                    })
                  }}
                >-</div>
                <input
                  type="number"
                  name="tab_count"
                  id="tab_count_input"
                  placeholder="No. of searches"
                  value={search_count}
                  onChange={(event) => {
                    let val = Number.parseInt(event.target.value);
                    setSearch_count(val);
                  }}
                />

                <div className="plus btn"
                  tabIndex={0}
                  onClick={() => {
                    setSearch_count((search_count) => {
                      if (!search_count && search_count !== 0) return 5;
                      return search_count + 5;
                    })
                  }}
                >+</div>
              </div>
            </div>

          </div>

          <div className="buttons">
            <div className="open_tabs_btn btn">
              <button type="submit">Start searches</button>
            </div>
          </div>

        </form>

      </div>
    </div>

  )
}

export default SearchMakerCard