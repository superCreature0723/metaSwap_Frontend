import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import {useLocation, useNavigate} from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import bigCheck from '../../../assets/img/icons/big-check.svg'
import LogoSvg from '../../../assets/img/logo.svg'
import PhotoCamera from '../../../assets/img/icons/photo-camera.svg'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
function OperationCompleted() {
    const {translation} = useTranslation();

    const query = useQuery();
    const amount = query.get('amount');
    const address = query.get('address');
    const chainName = query.get('chain-name');
    const cryptoName = query.get('crypto-name');

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
                    <a style={{cursor: 'pointer'}} className="nav__item" href="#" onClick={goBack}>
                        <img
                            style={{cursor: 'pointer'}}
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
                    <div className="logo">
                        <img
                            className="logo__img"
                            width="200"
                            height="200"
                            src={bigCheck}
                            alt="big-check img"
                        />
                    </div>

                    <h1 className="title">{translation?.operationCompleted}</h1>

                    <div className="offchain__info">
                        <p className="offchain__text">
                            {translation?.sent} <span className="primary-color">{amount} {cryptoName}</span> ({chainName}) {translation?.atAddress}:
                        </p>
                        <p className="offchain__text offchain__text--lite">{address}</p>
                        {/*<p className="offchain__text">Комиссия: 3 USDT</p>*/}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <div className="footer__btn btn-outline">{translation?.saveToSavedDetails}</div>
                        <RouterLink to={'/'} className="footer__btn btn" >{translation?.details}</RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default OperationCompleted;
