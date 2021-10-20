import React from "react";
import style from "../../Css/Hero.module.css";
import { Storage, PinDrop, HomeWork, Timeline } from "@mui/icons-material";

interface Props {}

const HeroFull = (props: Props) => {
  return (
    <div className={style.mainContainerFull}>
      <div className={style.leftContainerFull}>
        <h1 className={style.headerFull}>
          {`The #1 Real Estate
          Course From PhDs & 
          Finance Experts`}
        </h1>
        <h2 className={style.subHeaderFull}>
          Become a Real Estate Data Scientist in 11 Weeks.
        </h2>
        <p className={style.descriptionFull}>
          PropertyQuants is the only Masters-level Real Estate Course that gives
          you the hard skills to find market-beating real estate opportunities &
          take action before the rest of the market. Live online classes taught
          by PhD instructors, using data science and machine learning that's
          proven to work.
        </p>
        <div className={style.featuresContainerFull}>
          <div className={style.featureOneFull}>
            <Storage className={style.featureIconFull} />
            <p className={style.featureTextFull}>Data Science Fundamentals</p>
          </div>
          <div className={style.featureTwoFull}>
            <PinDrop className={style.featureIconFull} />
            <p className={style.featureTextFull}>
              Geographic Information Systems
            </p>
          </div>
          <div className={style.featureThreeFull}>
            <HomeWork className={style.featureIconFull} />
            <p className={style.featureTextFull}>
              Data Science Methods for Real Estate
            </p>
          </div>
          <div className={style.featureFourFull}>
            <Timeline className={style.featureIconFull} />
            <p className={style.featureTextFull}>
              Statistical Analysis & Forecasting Using Large Datasets
            </p>
          </div>
        </div>
      </div>
      <div className={style.rightContainerFull}>
        <h2 className={style.formHeaderFull}>Learn More About Our Program</h2>
        <form className={style.formContainerFull}>
          <div className={style.formRowFull}>
            <input
              type="text"
              placeholder="First Name"
              className={style.inputFull}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={style.inputFull}
            />
          </div>
          <div className={style.formRowFull}>
            <input
              type="email"
              placeholder="Email"
              className={style.inputFull}
            />
            <input
              type="text"
              placeholder="Phone"
              className={style.inputFull}
            />
          </div>
          <div className={style.formRowFull}>
            <input
              type="text"
              placeholder="NOTES"
              className={style.inputNoteFull}
            />
          </div>
          <button className={style.formBtn}>Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default HeroFull;
