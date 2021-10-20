import React from "react";
import useWindowSize from "../Helper/useWindowSize";
import HeroCompact from "./Hero/HeroCompact";
import HeroFull from "./Hero/HeroFull";

interface Props {}

const Hero = (props: Props) => {
  const windowSize = useWindowSize();

  const DisplayHero = () => {
    return windowSize.width > 1240 ? <HeroFull /> : <HeroCompact />;
  };

  return <>{DisplayHero()}</>;
};

export default Hero;
