import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";
import { BACKEND_URL } from '../../utils/constants';

import navBack from '../../assets/img/icons/nav-back.svg'
import navVerified from '../../assets/img/icons/nav-verified.svg'

import navAuthenticator from '../../assets/img/icons/nav-authenticator.svg'
import navHelpCenter from '../../assets/img/icons/nav-help-center.svg'
import navNotificationBell from '../../assets/img/icons/nav-notification-bell.svg'
import navDots from '../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../assets/img/icons/select-arrow.svg'


import actionArrowDown from '../../assets/img/icons/action-arrow-down.svg'
import actionArrowTop from '../../assets/img/icons/action-arrow-top.svg'
import actionArrowSwap from '../../assets/img/icons/action-arrow-swap.svg'
import actionArrowOffchain from '../../assets/img/icons/action-arrow-offchain.svg'
import actionAutoconvert from '../../assets/img/icons/action-autoconvert.svg'

import svgplus from '../../assets/img/icons/plus.svg';
import Loader from "../../components/Loader";
import useUserData from "../../hooks/useUserData";
import useTransactions from "../../hooks/useTransactions";
import useAssets from "../../hooks/useAssets";
import Menu from '../../components/Menu'
import usePriceCurrencies from "../../hooks/usePriceCurrencies";
import {getPriceCurrencies, updatePriceCurrencies} from "../../utils/userApi";
import useTranslation from "../../hooks/useTranslation";

function Main() {

    const { user, triggerVibration, webApp  } = useTelegram();
    const navigate = useNavigate();
    const {translation} = useTranslation();

    const [isOpenAssets,setIsOpenAssets] = useState(false);
    const { userData, loading, error, fetchUserData } = useUserData();
    const { assets, loadingAssets, errorAssets, fetchAssets } = useAssets();
    const { priceCurrencies, loadingPriceCurrencies, errorPriceCurrencies } = usePriceCurrencies();

    useEffect(()=>{
        console.log(priceCurrencies)
    }, [priceCurrencies])

    if (loading || loadingAssets || loadingPriceCurrencies) {
        return (
            <Loader/>
        )
    }

    const handleChangePriceCurrency = async (item) => {

        const {error, data} = await updatePriceCurrencies({currencyId:item?.id}, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            // setErrorPriceCurrencies(error);
            // setLoadingPriceCurrencies(false);

        } else {

            fetchUserData();
            fetchAssets();
            // setPriceCurrencies(data);
            // setLoadingPriceCurrencies(false);
            console.log(data, 'data')

        }

        console.log(item, 'handleChangePriceCurrency')
        setIsOpenAssets(false)
    }

    return (
        <div className="wrapper">


            {/*Header*/}
            <header className="header">
                <nav className="nav">
                    <a className="nav__item" style={{width:24, height:24}}>
                        {/*<img className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon" />*/}
                    </a>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" >
                                <img className="nav__icon" width="28" height="28" src={navVerified} alt="verified icon" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" >
                                <img className="nav__icon" width="24" height="24" src={navAuthenticator} alt="authenticator icon" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" >
                                <img className="nav__icon" width="24" height="24" src={navHelpCenter} alt="help-center icon" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" >
                                <img className="nav__icon" width="24" height="24" src={navNotificationBell} alt="notification-bell icon" />
                            </a>
                        </li>
                    </ul>
                    <Menu/>

                </nav>
            </header>

            {/*Main Page*/}
            <main className="main">
                <div className="content">
                    <div className="balanse">
                        <div className="balanse__head">
                            <h1 className="balanse__label">{translation?.balance} </h1>
                            <div className="balanse__sums">
                                <p className="balanse__sum">{userData?.balance}</p>

                                <div className={'balanse__select_main_wrapper'}>
                                    <button

                                        onClick={()=>{
                                            setIsOpenAssets(true)
                                        }}
                                        type="button"
                                        className="balanse__select"
                                    >
                                        <p className="balanse__select-text">{userData?.priceCurrency?.code}</p>
                                        <div className="balanse__btn">
                                            <img className="balanse__btn-arrow" width="12" height="12" src={selectArrow}
                                                 alt="arrow icon"/>
                                        </div>
                                    </button>

                                    {isOpenAssets &&

                                        <div className={'balanse__select_wraper'}>
                                            {priceCurrencies && priceCurrencies?.items.map((item, index)=>{
                                                return (
                                                    <div
                                                        onClick={() => {
                                                            handleChangePriceCurrency(item)
                                                        }}
                                                        className={'balanse__select_item'}
                                                    >
                                                        {item?.code}
                                                    </div>
                                                )
                                            })}

                                        </div>

                                    }
                                </div>


                            </div>
                        </div>

                        <div className="balanse__actions">
                            <RouterLink to={'/deposit-currency-selection'} className="balanse__action">
                                <div className="balanse__action-icon">
                                    <img className="balanse__action-img" width="13" height="15" src={actionArrowDown} alt="arrow icon" />
                                </div>
                                <p className="balanse__action-text">{translation?.deposit}</p>
                            </RouterLink>
                            <RouterLink to={'/currency-selection'} className="balanse__action" >
                                <div className="balanse__action-icon">
                                    <img className="balanse__action-img" width="13" height="15" src={actionArrowTop} alt="arrow icon" />
                                </div>
                                <p className="balanse__action-text">{translation?.send}</p>
                            </RouterLink>
                            <RouterLink to={'/swap-currenc-selection'} className="balanse__action" >
                                <div className="balanse__action-icon">
                                    <img className="balanse__action-img" width="22" height="22" src={actionArrowSwap} alt="swap icon" />
                                </div>
                                <p className="balanse__action-text">{translation?.swap}</p>
                            </RouterLink>
                            <RouterLink to={'/offchain-main'} className="balanse__action">
                                <div className="balanse__action-icon">
                                    <img className="balanse__action-img" width="22" height="22" src={actionArrowOffchain} alt="offchain icon" />
                                </div>
                                <p className="balanse__action-text">Offchain</p>
                            </RouterLink>
                            <RouterLink to={'/auto-convert-step-one'} className="balanse__action" >
                                <div className="balanse__action-icon">
                                    <img className="balanse__action-img" width="22" height="22" src={actionAutoconvert} alt="autoconvert icon" />
                                </div>
                                <p className="balanse__action-text">{translation?.autoconvert} </p>
                            </RouterLink>
                        </div>
                    </div>
                    <div className="tokens">
                        <div className="tokens__head">
                            <div className="tokens__actives">
                                <p className="tokens__actives-text">{translation?.assets}</p>
                                <button type="button" className="tokens__actives-btn">
                                    <img className="tokens__actives-img" width="16" height="16" src={svgplus} alt="" />
                                </button>
                            </div>

                            <RouterLink to={'transactions-history'}>
                                <p className="tokens__history" >{translation?.history}</p>
                            </RouterLink>
                        </div>
                        <ul className="tokens__list">

                            {assets?.items.length == 0 &&
                                <p className={'empty-transactions'}>{translation?.noData}</p>
                            }

                            {assets?.items.map((item, index)=>{
                                return (
                                    <li className="tokens__item">
                                        <a  className="tokens__item-link">
                                            <div className="tokens__info">
                                                <img
                                                    className="tokens__icon"
                                                    width="36" height="36"
                                                    src={`${BACKEND_URL}/static/token-icons/${item?.currency?.cryptoCode}.svg`}
                                                     alt="token icon"
                                                />
                                                <div className="tokens__texts">
                                                    <p className="tokens__text tokens__text--bold">{item?.currency?.cryptoTokenName}</p>
                                                    <p className="tokens__text">{item?.currency?.cryptoChainName}</p>
                                                </div>
                                            </div>
                                            <div className="tokens__texts tokens__texts--right">
                                                <p className="tokens__text tokens__text--bold">{item?.value}</p>
                                                <p className="tokens__text">{item?.priceCurrency?.symbol}{item?.price}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
