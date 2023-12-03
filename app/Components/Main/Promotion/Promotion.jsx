import React from 'react'
import "./Promotion.css"
import YoutubeIcon from '@/public/assets/YoutubeIcon'
import DiscordIcon from '@/public/assets/DiscordIcon'


const PromoLink = ({ text, link, Icon, name, icon_fill }) => {

  return (

    <div className="promo_link">
      <div className="text">{text} &nbsp;</div>

      <a href={link} target="blank">
        <div className="link">
          <div className="icon"
            style={{
              "--fill": icon_fill
            }}
          >{Icon}</div>
          {name}
        </div>
      </a>

    </div>

  )
}


const Promotion = () => {
  return (

    <div className="promotion">

      < PromoLink
        text={"Know more ways of earning"}
        link={"https://www.youtube.com/@shirtlessdigital"}
        Icon={< YoutubeIcon />}
        name={"Shirtless Digital"}
        icon_fill={"var(--youtube-red)"}
      />

      < PromoLink
        text={"Having problems ? Join us on discord"}
        link={"https://discord.gg/x8QWMDtDtw"}
        Icon={< DiscordIcon />}
        name={"Shirt Less Digital"}
        icon_fill={"var(--discord-purple)"}
      />

    </div>

  )
}

export default Promotion