import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import {useLocation, useNavigate} from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'
import swapSvg from '../../../assets/img/icons/swap.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import {BACKEND_URL} from "../../../utils/constants";
import useSwapRates from "../../../hooks/useSwapRates";
import useTranslation from "../../../hooks/useTranslation";
import Loader from "../../../components/Loader";
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

function SwapStep2() {
    const { user, triggerVibration } = useTelegram();
    const {translation} = useTranslation();

    const {swapRates, loadingSwapRates, errorSwapRates, fetchSwapRates,
            swap, loadingSwap, errorSwap, fetchSwap,
        swapCreate, loadingSwapCreate, errorSwapCreate, fetchSwapCreate,

    } = useSwapRates();

    const navigate = useNavigate();
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);

    const [currencyFromValue,setCurrencyFromValue] = useState('');
    const [currencyToValue,setCurrencyToValue] = useState('');


    const query = useQuery();
    const currencyfrom = query.get('currencyfrom');
    const currencyto = query.get('currencyto');

    useEffect(() => {
        if(currencyfrom && currencyto) {
            fetchSwapRates(currencyfrom, currencyto, currencyFromValue)
            console.log(currencyfrom, 'currencyfrom')
            console.log(currencyto, 'currencyto')
        }
        // checkUser();
    }, [currencyfrom, currencyto]);


    useEffect(() => {

        if(currencyFromValue) {
            fetchSwapRates(currencyfrom, currencyto, currencyFromValue)
            console.log(currencyfrom, 'currencyfrom')
            console.log(currencyto, 'currencyto')
        }
        // checkUser();
    }, [currencyFromValue]);



    useEffect(() => {
        if(errorSwapCreate) {

            alert(errorSwapCreate.message)

            console.log(errorSwapCreate, 'errorSwapCreate')
        }
        // checkUser();
    }, [errorSwapCreate]);


    useEffect(() => {
        if(swapRates) {

            setCurrencyToValue(swapRates?.estimateResult?.amount)
            console.log(swapRates, 'swapRates')
        }
        // checkUser();
    }, [swapRates]);

    useEffect(() => {
        if(swapCreate) {
            window.location = '/swap-operation-completed';
        }
        // checkUser();
    }, [swapCreate]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };


    const handleSwapCreate = () => {

        fetchSwapCreate(currencyfrom, currencyto, parseFloat(currencyFromValue));

    };



    return (
        <div className="wrapper">

            { (loadingSwapCreate) && (
                <Loader/>
            )}

            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <a className="nav__item" style={{cursor: 'pointer'}} href="#" onClick={goBack}>
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
                    <h1 className="title">SWAP</h1>

                    <div className="swap">
                        <form className="form" action="#">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="">{translation?.giving}</label>
                                <div className="form__input-gorup form__input-gorup--token">
                                    <img
                                        className="form__input-token"
                                        width="32"
                                        height="32"
                                        src={`${BACKEND_URL}/static/token-icons/${currencyfrom}.svg`}
                                        alt="token"
                                    />
                                    <input
                                        className="form__input"
                                        type="text"
                                        value={currencyFromValue}
                                        onChange={(e)=>{
                                            setCurrencyFromValue(e.target.value)
                                            if (e.target.value == '') {
                                                setCurrencyToValue('')
                                            }
                                        }}
                                    />
                                    <button type="button" className="form__input-btn">
                                        <span className="primary-color" style={{color:'green'}}>MAX</span>
                                    </button>
                                </div>
                                {/*<p className="form__sub form__label">Баланс: 58.547938 ETH</p>*/}
                            </div>

                            <div className="form__gorup">
                                <label className="form__label" htmlFor="">{translation?.receiving}</label>
                                <div className="form__input-gorup form__input-gorup--token">
                                    <img
                                        className="form__input-token"
                                        width="32"
                                        height="32"
                                        src={`${BACKEND_URL}/static/token-icons/${currencyto}.svg`}
                                        alt="token"
                                    />
                                    <input
                                        onChange={(e)=>{
                                            setCurrencyToValue(e.target.value)
                                        }}
                                        className="form__input"
                                        type="text"
                                        value={currencyToValue}

                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">

                        {currencyFromValue && currencyToValue &&
                            <div
                                onClick={handleSwapCreate}
                                className="footer__btn btn"
                            >
                                SWAP
                            </div>
                        }

                        {/*<RouterLink to={'/swap-operation-completed'} className="footer__btn btn" >SWAP</RouterLink>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SwapStep2;
