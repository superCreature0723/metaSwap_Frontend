import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import {useLocation, useNavigate} from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import copySvg from '../../../assets/img/icons/copy.svg'
import bigCheck from '../../../assets/img/icons/big-check.svg'
import qrSvg from '../../../assets/img/qr.png'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'
import swapSvg from '../../../assets/img/icons/swap.svg'
import pencilSvg from '../../../assets/img/icons/pencil.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
function SettingsChangeEmailCompleted() {
    const {translation} = useTranslation();

    const query = useQuery();
    const oldEmail = query.get('oldEmail');
    const newEmail = query.get('newEmail');

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();


    useEffect(() => {
        // checkUser();
    }, [user]);

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack} className="nav__item" >
                        <img style={{cursor: 'pointer'}} className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>
                    </div>
                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <div className="logo">
                        <img className="logo__img" width="200" height="200" src={bigCheck} alt="big-check img"/>
                    </div>

                    <h1 className="title">{translation?.operationCompleted}</h1>

                    <div className="offchain__info">
                        {oldEmail == 'null' ?
                            <>
                                <p className="offchain__text">{translation?.emailAdded}</p>
                                <p className="offchain__text">{newEmail}</p>
                            </>

                            :

                            <>
                            <p className="offchain__text">{translation?.emailReplacedFrom}</p>
                                <p className="offchain__text">{oldEmail}</p>
                                <p className="offchain__text">{newEmail}</p>
                            </>
                        }

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <RouterLink className="footer__btn btn" to={'/'}>
                            {translation?.done}
                        </RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SettingsChangeEmailCompleted;
