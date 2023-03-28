import React from "react";
import { NavLink } from "react-router-dom";
import linkedin from "../../assets/icons/linkedin.png"
import github from "../../assets/icons/github.png"
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.text}>
                <p>BY JOSUE MORA - ALL RIGHT RESERVED - 2023 </p>
                <NavLink className={style.icon} to='https://www.linkedin.com/in/josue-mora-6b612a192/'>
                    <img src={linkedin} alt="linkedin" />
                </NavLink>
                <NavLink className={style.icon} to='https://github.com/JosueMoora'>
                <img src={github} alt="github" />
                </NavLink>
                </div>
        </footer>
        );
}

export default Footer;