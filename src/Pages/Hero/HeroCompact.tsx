import React from "react";
import style from "../../Css/Hero.module.css";
import { Storage, PinDrop, HomeWork, Timeline } from "@mui/icons-material";

interface Props {}

const HeroCompact = (props: Props) => {
  const handleHeroClick = () => {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.mainContainerCompact}>
      <div className={style.heroContainerCompact}>
        <h1 className={style.headerCompact}>
          The #1 Real Estate Course From PhDs & Finance Experts
        </h1>
        <h2 className={style.subHeaderCompact}>
          Become a Real Estate Data Scientist in 11 Weeks.
        </h2>
        <button onClick={handleHeroClick} className={style.formBtnCompact}>
          Learn More
        </button>
      </div>
      <div className={style.featuresContainerCompact}>
        <div className={style.featureCompact}>
          <Storage
            className={style.featureIconCompact}
            style={{ fill: "white" }}
          />
          <p className={style.featureTextCompact}>Data Science Fundamentals</p>
        </div>
        <div className={style.featureCompact}>
          <PinDrop
            className={style.featureIconCompact}
            style={{ fill: "white" }}
          />
          <p className={style.featureTextCompact}>
            Geographic Information Systems
          </p>
        </div>
        <div className={style.featureCompact}>
          <HomeWork
            className={style.featureIconCompact}
            style={{ fill: "white" }}
          />
          <p className={style.featureTextCompact}>
            Data Science Methods for Real Estate
          </p>
        </div>
        <div className={style.featureCompact}>
          <Timeline
            className={style.featureIconCompact}
            style={{ fill: "white" }}
          />
          <p className={style.featureTextCompact}>
            Statistical Analysis & Forecasting Using Large Datasets
          </p>
        </div>
      </div>
      <div className={style.descriptionContainer}>
        <p className={style.descriptionCompact}>
          PropertyQuants is the only Masters-level Real Estate Course that gives
          you the hard skills to find market-beating real estate opportunities &
          take action before the rest of the market. Live online classes taught
          by PhD instructors, using data science and machine learning that's
          proven to work.
        </p>
      </div>
      <form className={style.formContainerCompact}>
        <h2 className={style.formHeaderFull}>Learn More About Our Program</h2>
        <input
          type="text"
          placeholder="First Name"
          className={style.inputCompact}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={style.inputCompact}
        />
        <input
          type="email"
          placeholder="Email"
          className={style.inputCompact}
        />
        <input type="text" placeholder="Phone" className={style.inputCompact} />
        <input
          type="text"
          placeholder="NOTES"
          className={style.inputNoteCompact}
        />
        <button className={style.formBtnCompact}>Get Started</button>
      </form>
    </div>
  );
};

export default HeroCompact;
