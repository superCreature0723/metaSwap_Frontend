import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import logoSvg from '../../../assets/img/logo.svg'

import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";


function CurrencySelection() {
    const {translation} = useTranslation();

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);

    useEffect(() => {
        // checkUser();
    }, [user]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <a className="nav__item" href="#" onClick={goBack}>
                        <img
                            className="nav__icon"
                            width="24"
                            height="24"
                            src={navBack}
                            alt="arrow icon"
                        />
                    </a>

                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <h1 className="title">{translation?.offchain}</h1>

                    <a className="logo" >
                        <img
                            className="logo__img"
                            width="182"
                            height="124"
                            src={logoSvg}
                            alt="logo img"
                        />
                    </a>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <RouterLink to={'/offchain-send-currency-selection'} className="footer__btn btn-outline" >{translation?.send}</RouterLink>
                        <RouterLink to={'/offchain-get-wallet'} className="footer__btn btn" >{translation?.get}</RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default CurrencySelection;
