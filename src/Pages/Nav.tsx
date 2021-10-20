import React from "react";
import style from "../Css/NavBar.module.css";
import NavBarCompact from "./NavBar/NavBarCompact";
import NavBarFull from "./NavBar/NavBarFull";
import useWindowSize from "../Helper/useWindowSize";

interface Props {}

const Nav = (props: Props) => {
  const windowSize = useWindowSize();

  const DisplayNav = () => {
    return windowSize.width > 1148 ? <NavBarFull /> : <NavBarCompact />;
  };

  return <div className={style.mainBackground}>{DisplayNav()}</div>;
};

export default Nav;
