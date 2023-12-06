import { elem_ids } from "@/app/Utils/States";
import "./Tutorial.css";
import CloseIcon from "@/public/assets/CloseIcon";
import YoutubeIcon from "@/public/assets/YoutubeIcon";
import DiscordIcon from "@/public/assets/DiscordIcon";
import Promotion from "../Promotion/Promotion";
import GithubIcon from "@/public/assets/GithubIcon";


const Readme = () => {
  return (
    <div className="guide tutorial open">
      <div className="wrap">

        <div className="content">
          <div className="heading">How to prevent your account from getting restricted or banned ?</div>

          <div className="section">
            <div className="title">General precautions :-</div>
            <div className="points">
              <div className="point">Never login two microsoft accounts on same device.</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}



const Tutorial = ({
  current_popUp,
  setCurrent_popUp
}) => {


  return (
    <>
      <div className={`tutorial open`}>
        <div className="wrap">

          <div className="content" id="tutorial">
            <div className="heading">How to use Bing Automate to complete your daily searches ?</div>

            <div className="section_one section">
              <div className="title">1. Mobile search</div>

              <div className="section_content">
                <div className="text_para">
                  To complete mobile searches open <a href="https://rewards.bing.com" target="blank">rewards.bing.com</a> in mobile mode then come back to this website, enter the number of searches and click "Start Searches". <br />
                  Wait for it to finish and you should have all your search points.
                </div>
              </div>
            </div>


            <div className="section_two section">
              <div className="title">2. Desktop / PC search</div>

              <div className="section_content">
                <div className="text_para">
                  To complete PC searches open <a href="https://rewards.bing.com" target="blank">rewards.bing.com</a> and enable desktop mode on that website then come back to this website, enter the number of searches and click "Start Searches". <br />
                  Wait for it to finish and you should have all your search points.
                </div>
              </div>
            </div>

            <div className="section_three section">
              <div className="title">Important points</div>

              <div className="section_content">
                <div className="point">1. Always use Incognito mode to collect points.</div>
                <div className="point">2. Never collect points in two accounts at same time from the same device.</div>
                <div className="point">For more information refer to this &nbsp;
                  <a href="https://github.com/Abhinav5383/Guide" target="blank">
                    <div className="link_visual">
                      <div className="icon">< GithubIcon /></div>
                      <div className="text">Guide</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <Readme /> */}
    </>
  )
}

export default Tutorial