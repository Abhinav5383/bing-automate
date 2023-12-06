import { useState } from "react";
import "./Header.css";

import SunIcon from '@/public/assets/SunIcon';
import MoonIcon from '@/public/assets/MoonIcon';
import MicrosoftIcon from "@/public/assets/MicrosoftIcon";
import DropdownIcon from "@/public/assets/DropdownIcon";
import { elem_ids, delay_values } from "@/app/Utils/States";
import GithubIcon from "@/public/assets/GithubIcon";




const Header = ({
  curr_theme,
  setCurr_theme,
  themes,
  current_popUp,
  setCurrent_popUp,
  delays,
  delay_style,
  setDelay_style
}) => {

  const toggleTheme = () => {
    if (curr_theme === themes.dark) {
      setCurr_theme(themes.light);
    }
    else if (curr_theme === themes.light) {
      setCurr_theme(themes.dark);
    }
  }

  return (
    <header className={`header ${curr_theme}`}>
      <nav>

        <div className="brand">
          <div className="logo">
            < MicrosoftIcon />
          </div>
        </div>

        <div className="links_wrapper">

          <div className="theme-switcher nav_link">
            <a className="icon" href="https://github.com/Abhinav5383/bing-automate" target="blank">
              <div className="icon-bg"></div>
              < GithubIcon />
            </a>
          </div>

          <div className={`delay_dropdown nav_link dropdown_${current_popUp === elem_ids.delay_dropdown ? "open" : "closed"}`}>
            <div className="visible_link top_nav_delay_dropdown" onClick={() => { setCurrent_popUp(elem_ids.delay_dropdown) }}>
              <div className="text">Delay</div>
              <div className="icon">< DropdownIcon /></div>
            </div>
            <div className="nav_link-bg"></div>

            <div className="delay_dropdown_toggle_menu" id={elem_ids.delay_dropdown}>
              <div className="wrap">
                <div className={`item ${delay_style === delay_values.default ? "selected" : ""}`} onClick={() => { setDelay_style(delay_values.default) }}>Default - {delays.default / 1000}s</div>
                <div className={`item ${delay_style === delay_values.slow ? "selected" : ""}`} onClick={() => { setDelay_style(delay_values.slow) }}>Slow - {delays.slow / 1000}s</div>
                <div className={`item ${delay_style === delay_values.fast ? "selected" : ""}`} onClick={() => { setDelay_style(delay_values.fast) }}>Fast - {delays.fast / 1000}s</div>
                <div className={`item ${delay_style === delay_values.random ? "selected" : ""}`} onClick={() => { setDelay_style(delay_values.random) }}>Random</div>
              </div>
            </div>
          </div>

          <div className="theme-switcher nav_link">
            <div className="icon" onClick={toggleTheme}>
              <div className="icon-bg"></div>
              {
                curr_theme === themes.dark ?
                  < SunIcon />
                  :
                  < MoonIcon />
              }
            </div>
          </div>

        </div>

      </nav>
    </header>
  )
}

export default Header;