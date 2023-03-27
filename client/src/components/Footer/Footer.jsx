import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.text}>
                <p>BY JOSUE MORA - ALL RIGHT RESERVED - 2023 </p>
                <NavLink className={style.icon} to='https://www.linkedin.com/in/josue-mora-6b612a192/'><AiFillLinkedin/></NavLink>
                <NavLink className={style.icon} to='https://github.com/JosueMoora'><AiOutlineGithub/></NavLink>
                </div>
        </footer>
        );
}

export default Footer;