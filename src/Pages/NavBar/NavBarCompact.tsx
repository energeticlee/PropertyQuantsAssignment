import React, { useState } from "react";
import style from "../../Css/NavBar.module.css";
import logo from "../../Resources/property_quants_logo.png";
import { Menu, ArrowDropDown } from "@mui/icons-material";

interface Props {}

const NavBarCompact = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img src={logo} alt="propertyQuants_Logo" className={style.logo} />
      <Menu onClick={() => setOpen(!open)} className={style.icon} />
      <ul
        className={
          open ? `${style.navUlCompact} ${style.open}` : style.navUlCompact
        }
      >
        <li className={style.navLiCompact}>ABOUT</li>
        <li className={style.navLiCompact}>APPROACH</li>
        <li className={style.navLiCompact}>TEAM</li>
        <li className={style.navLiCompact}>ACHIEVEMENTS</li>
        <li className={style.navLiCompact}>MEDIA</li>
        <li className={style.navLiCompact}>
          TRAINING <ArrowDropDown className={style.arrowDownIcon} />
        </li>
        <li className={style.navLiCompact}>CONTACT</li>
      </ul>
    </>
  );
};

export default NavBarCompact;
