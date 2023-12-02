"use client"

import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { delay_values, elem_ids } from './Utils/States';
import Tutorial from './Components/Main/Tutorial/Tutorial';
import Script from 'next/script';
import "./globals.css"


const App = () => {


  const themes = {
    light: "light",
    dark: "dark"
  };

  const delays = {
    default: 4500,
    slow: 6000,
    fast: 4000,
    random: {
      min: 4000,
      max: 6500
    }
  }

  const [current_popUp, setCurrent_popUp] = useState("");
  const [curr_theme, setCurr_theme] = useState(themes.light);
  const [delay_style, setDelay_style] = useState(delay_values.default);
  const [curr_search_delay, setCurr_search_delay] = useState(delays.default);
  const [search_count, setSearch_count] = useState(20);


  useEffect(() => {
    setTimeout(() => {

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurr_theme(themes.dark);
      }
      else {
        setCurr_theme(themes.light);
      }

    }, 1000);
    return () => {

    }
  }, [])

  useEffect(() => {
    if (delays[delay_style]) {
      setCurr_search_delay(delays[delay_style]);
    }
  }, [delay_style])



  const handle_document_click = (event) => {
    if (current_popUp) {

      if (event.target.closest(`#${current_popUp}`)) {
        return
      }

      let another_popup_found = false;
      let array = Object.values(elem_ids);

      array.forEach((id) => {
        if (event.target.closest(`.${id}`) && id !== current_popUp) {
          another_popup_found = true;
          setTimeout(() => {
            setCurrent_popUp(id);
          }, 50);
        }
      })

      if (!event.target.closest(`#${current_popUp}`) && !another_popup_found) {
        setCurrent_popUp("");
      }


    }
  }


  return (
    <div id="app" className={`${curr_theme}`} onClick={handle_document_click}>

      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8708861413425372"
        onError={(e) => { console.log(`Script failed to load \n ${e}`); }}
      />

      < Tutorial
        current_popUp={current_popUp}
        setCurrent_popUp={setCurrent_popUp}
      />


      < Header
        curr_theme={curr_theme}
        setCurr_theme={setCurr_theme}
        themes={themes}
        current_popUp={current_popUp}
        setCurrent_popUp={setCurrent_popUp}
        delay_style={delay_style}
        setDelay_style={setDelay_style}
      />

      <Main
        delay_style={delay_style}
        current_popUp={current_popUp}
        setCurrent_popUp={setCurrent_popUp}
        curr_search_delay={curr_search_delay}
        setCurr_search_delay={setCurr_search_delay}
        search_count={search_count}
        setSearch_count={setSearch_count}
      />

    </div>
  )
}

export default App;