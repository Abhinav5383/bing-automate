import React from 'react'
import "./Promotion.css"
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

          <div className="text">{name}</div>

        </div>
      </a>

    </div>

  )
}


const Promotion = () => {
  return (

    <div className="promotion">

      <a className="channel_link" href="https://www.youtube.com/@shirtlessdigital">
        <div className="wrap">
          <div className="channel_logo"></div>
          <div className="channel_name">ShirtLess Digital</div>
        </div>
      </a>

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