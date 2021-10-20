import React from "react";
import style from "../../Css/NavBar.module.css";
import logo from "../../Resources/property_quants_logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface Props {}

const NavBarFull = (props: Props) => {
  return (
    <>
      <img src={logo} alt="propertyQuants_Logo" className={style.logo} />
      <ul className={style.navUlFull}>
        <li>ABOUT</li>
        <li>APPROACH</li>
        <li>TEAM</li>
        <li>ACHIEVEMENTS</li>
        <li>MEDIA</li>
        <li>
          TRAINING <ArrowDropDownIcon className={style.arrowDownIcon} />
        </li>
        <li>CONTACT</li>
      </ul>
    </>
  );
};

export default NavBarFull;
