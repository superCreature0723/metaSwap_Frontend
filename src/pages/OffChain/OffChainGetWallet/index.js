import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import logoSvg from '../../../assets/img/logo.svg'
import copySvg from '../../../assets/img/icons/copy.svg'

import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import useUserData from "../../../hooks/useUserData";
import Loader from "../../../components/Loader";

import {useClipboard} from "../../../hooks/use-clipboard.ts";
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";

function OffChainGetWallet() {
    const {translation} = useTranslation();

    const { user, triggerVibration, webApp } = useTelegram();
    const { userData, loading, error } = useUserData();

    const navigate = useNavigate();
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);

    useEffect(() => {
        // checkUser();
    }, [user]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    const { handleCopy, isCopied } = useClipboard(
        userData?.id,
        {
            timeout: 1500,
        }
    );

    return (
        <div className="wrapper">

            { (loading) && (
                <Loader/>
            )}

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
                    <h1 className="title">Offchain</h1>

                    <a className="logo" href="#">
                        <img
                            className="logo__img"
                            width="182"
                            height="124"
                            src={logoSvg}
                            alt="logo img"
                        />
                    </a>

                    <form className="form" action="#">
                        <div className="form__gorup">
                            <label className="form__label" htmlFor="">
                                {translation?.yourOffchainReceivingAddress}:
                            </label>
                            <div className="form__input-gorup">
                                <input
                                    className="form__input"
                                    type="text"
                                    defaultValue={userData?.id}
                                    placeholder="Ваш адрес для получения Offchain"
                                />
                                <button
                                    onClick={handleCopy}
                                    type="button"
                                    className="form__input-btn"
                                >
                                    <img
                                        className="form__input-icon"
                                        width="24"
                                        height="24"
                                        src={copySvg}
                                        alt="copy icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        {/*<div className="footer__btn btn-outline" >*/}
                        {/*    Записать в сохраненные реквизиты*/}
                        {/*</div>*/}
                        <RouterLink to={'/'} className="footer__btn btn" >
                            {translation?.done}
                        </RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default OffChainGetWallet;
