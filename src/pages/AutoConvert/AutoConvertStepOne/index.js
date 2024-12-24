import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import copySvg from '../../../assets/img/icons/copy.svg'
import qrSvg from '../../../assets/img/qr.png'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";
import useAutoConverts from "../../../hooks/useAutoConverts";


function AutoConvertStepOne() {
    const {translation} = useTranslation();

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const {
        autoconvertsData, autoconvertsDataLoading, autoconvertsDataError, fetchGetAutoconvertsData,
        autoconvertsSendData, autoconvertsSendDataLoading, autoconvertsSendDataError, fetchSendAutoconvertsData
    } = useAutoConverts();
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);

    useEffect(() => {
        //log
    }, [autoconvertsData]);

    const goBack = () => {
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
                    <h1 className="title">{translation?.autoconvert}</h1>

                    <div className="autoconvert autoconvert--outline">
                        <ul className="autoconvert__list">

                            {autoconvertsData?.items && autoconvertsData?.items?.map((item, index)=>{
                                return (
                                    <li key={index} className="autoconvert__item">
                                        <div className="autoconvert__tokens">
                                            <img
                                                className="autoconvert__token"
                                                width="30"
                                                height="30"
                                                src={svgIcon1}
                                                alt="token img"
                                            />
                                            <img
                                                className="autoconvert__token"
                                                width="30"
                                                height="30"
                                                src={svgIcon2}
                                                alt="token img"
                                            />
                                        </div>

                                        <div className="autoconvert__item-texts">
                                            <div className="autoconvert__item-text">
                                                <b> {item?.currencyFrom?.cryptoTokenName}</b>
                                                <b>to</b>
                                                <b> {item?.currencyTo?.cryptoTokenName}</b>
                                            </div>
                                        </div>

                                        <button type="button" className="autoconvert__item-btn">
                                            <img
                                                className="autoconvert__item-icon"
                                                width="30"
                                                height="30"
                                                src={copySvg}
                                                alt="copy icon"
                                            />
                                        </button>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <RouterLink to={'/auto-convert-step-two'} className="footer__btn btn" href="#">
                            {translation?.createNewAddress}
                        </RouterLink>
                    </div>
                </div>
            </footer>
        </div>);
}

export default AutoConvertStepOne;
