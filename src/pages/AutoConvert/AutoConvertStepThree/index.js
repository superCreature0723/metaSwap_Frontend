import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import {useLocation, useNavigate} from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import copySvg from '../../../assets/img/icons/copy.svg'
import qrSvg from '../../../assets/img/qr.png'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'
import swapSvg from '../../../assets/img/icons/swap.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useAutoConverts from "../../../hooks/useAutoConverts";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
function AutoConvertStepThree() {

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const {
        autoconvertsData, autoconvertsDataLoading, autoconvertsDataError, fetchGetAutoconvertsData,
        autoconvertsSendData, autoconvertsSendDataLoading, autoconvertsSendDataError, fetchSendAutoconvertsData
    } = useAutoConverts();

    const [isOpenNetwork1,setIsOpenNetwork1] = useState(false);
    const [isOpenToken1,setIsOpenToken1] = useState(false);

    const [isOpenToken2,setIsOpenToken2] = useState(false);
    const [isOpenNetwork2,setIsOpenNetwork2] = useState(false);

    const query = useQuery();
    const currencyfrom = query.get('currencyfrom');
    const currencyfromCryptoChainName = query.get('currencyfromCryptoChainName');
    const currencyto = query.get('currencyto');
    const currencyToCryptoChainName = query.get('currencyToCryptoChainName');



    useEffect(() => {
        if (autoconvertsSendData) {
            console.log(autoconvertsSendData, 'autoconvertsSendData')
            navigate('/auto-convert-step-one')
        }
    }, [autoconvertsSendData]);

    useEffect(() => {
        if (autoconvertsSendDataError) {
            alert(autoconvertsSendDataError?.message)
            console.log(autoconvertsSendDataError, 'autoconvertsSendDataError')
        }
    }, [autoconvertsSendDataError]);

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
                    <h1 className="title">Автоконвертация</h1>

                    <div className="autoconvert">
                        <p className="autoconvert__label">Адрес автоконвертации</p>

                        <div className="autoconvert__group">
                            <div className="autoconvert__row">
                                <p className="autoconvert__text">Из:</p>
                                <p className="autoconvert__text">{currencyfrom}</p>
                            </div>
                            <div className="autoconvert__row">
                                <p className="autoconvert__text">Сеть:</p>
                                <p className="autoconvert__text">{currencyfromCryptoChainName}</p>
                            </div>
                        </div>






                        <div className="autoconvert__group">
                            <div className="autoconvert__row">
                                <p className="autoconvert__text">В: </p>
                                <p className="autoconvert__text">{currencyto}</p>
                            </div>
                            <div className="autoconvert__row">
                                <p className="autoconvert__text">Сеть: </p>
                                <p className="autoconvert__text">{currencyToCryptoChainName}</p>
                            </div>
                        </div>

                        {/*<div className="autoconvert__group">*/}
                        {/*    <div className="autoconvert__row">*/}
                        {/*        <p className="autoconvert__text autoconvert__text--center">*/}
                        {/*            Текущий курс контвертации:*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*    <div className="autoconvert__row">*/}
                        {/*        <p className="autoconvert__text autoconvert__text--center autoconvert__text--bold">*/}
                        {/*            1 USDT— 0.00357 ETH*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <div
                            onClick={()=>{
                                fetchSendAutoconvertsData({
                                    "currencyIdFrom": currencyfrom,
                                    "currencyIdTo": currencyto
                                })
                            }}
                            className="footer__btn btn" href="#"
                        >
                            Создать
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AutoConvertStepThree;
