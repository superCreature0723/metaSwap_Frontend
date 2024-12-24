import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate, useLocation } from "react-router-dom";

import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg';
import navDots from '../../../assets/img/icons/nav-dots.svg';
import logoSvg from '../../../assets/img/logo.svg';
import PhotoCamera from '../../../assets/img/icons/photo-camera.svg';

import {getTransactions, internalTransfers, sendInternalTransfers} from "../../../utils/userApi";
import Loader from "../../../components/Loader";
import {EnIcon, RuIcon} from "../../../assets/svg/LanguageIcons";
import Menu from "../../../components/Menu";
import {Scanner} from "@yudiel/react-qr-scanner";
import useTranslation from "../../../hooks/useTranslation";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

function OffchainSendSetPriceAndWalet() {
    const {translation} = useTranslation();

    const { user, triggerVibration, webApp } = useTelegram();
    const navigate = useNavigate();

    const query = useQuery();
    const id = query.get('id');
    const chainName = query.get('chain-name');
    const cryptoName = query.get('crypto-name');

    const [loading,setLoading] = useState(true);

    const [amount,setAmount] = useState('0');
    const [amountError,setAmountError] = useState(false);

    const [address,setAddress] = useState('');
    const [addressError,setAddressError] = useState(false);
    const [showScanner,setShowScanner] = useState(false);

    useEffect(() => {
        // checkUser();
        setLoading(false)
        console.log(id, 'id')
    }, [id]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    const handleSendInternalTransactions = async () => {

        setLoading(true);

        const body = {
            userTo: address, // получатель средств; cм. /account
            value: parseFloat(amount), // сумма перевода
            currencyId: id // см. /currencies
        }

        console.log(body, 'body')
        const {error, data} = await sendInternalTransfers(body, webApp?.initData);

        if (error?.message) {
            if (error?.message == 'userTo should not be empty') {
                setAddressError(true);
            }
            if (error?.message == 'value must be a positive number,value must be a number conforming to the specified constraints') {
                setAmountError(true);
            }
        }
        console.log(data, error)
        if (error) {
            console.log('ERRROR!', error);

            if (error?.kind && error?.message) {
                switch (error?.kind) {
                    case 'INSUFFICIENT_FUNDS_ERR':
                        setAmountError(true);
                        break;
                    case 'INTERNAL_USER_NOT_FOUND_ERR':
                        setAddressError(true);
                        break;
                    case 'UNSUPPORTED_CURRENCY_ERR':
                        break;
                    default:

                }
            }
            setLoading(false);
            return;
        }

        if (data?.kind && data?.message) {
            switch (data?.kind) {
                case 'INSUFFICIENT_FUNDS_ERR':
                    setAmountError(true);
                    break;
                case 'INTERNAL_USER_NOT_FOUND_ERR':
                    setAddressError(true);
                    break;
                case 'UNSUPPORTED_CURRENCY_ERR':

                    break;
                default:

            }
        } else {
            if (data?.kind == 'OK' && data?.transactionId) {
                navigate(`/offchain-operation-completed?amount=${amount}&address=${address}&id=${id}&transactionId=${data?.transactionId}&chain-name=${chainName}`);
            }
        }

        setLoading(false)

    }

    return (
        <div className="wrapper">

            { (loading) && (
                <Loader/>
            )}

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
                    <h1 className="title">{translation?.offchainTransfer}</h1>

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
                            <label className="form__label" htmlFor="">{translation?.amount}</label>
                            <div className="form__input-gorup">
                                <input
                                    className={`form__input ${amountError ? 'error' : ''}`}
                                    type="number"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmountError(false)
                                        setAmount(e.target.value)
                                    }}
                                />
                                <div className="form__input-btn">
                                    <span>{cryptoName}</span>
                                </div>
                            </div>

                            <a className="form__sub primary-color" href="#">{translation?.network}: {chainName}</a>
                        </div>

                        <div className="form__gorup">
                            <label className="form__label" htmlFor="">{translation?.recipientAddress}</label>
                            <div className="form__input-gorup">
                                <input
                                    className={`form__input ${addressError ? 'error' : ''}`}
                                    type="text"
                                    placeholder="0...xPiUyg6jk9RQQuDfA6YGP"
                                    value={address}
                                    onChange={(e) => {
                                        setAddressError(false)
                                        setAddress(e.target.value)
                                    }}
                                />
                                <button
                                    onClick={()=>{
                                        setShowScanner(true);
                                    }}
                                    type="button"
                                    className={`form__camera-btn `}
                                >
                                    <img
                                        className="form__input-icon"
                                        width="36"
                                        height="36"
                                        src={PhotoCamera}
                                        alt="photo-camera icon"
                                    />
                                </button>
                            </div>

                            {/*<a className="form__sub" href="#">Выбрать из адресной книги</a>*/}
                        </div>

                        {/*<div className="form__gorup">*/}
                        {/*    <div className="form__comission"><span*/}
                        {/*        className="primary-color">Комиссия сети: 3 USDT</span></div>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <div
                            onClick={handleSendInternalTransactions}
                            className="footer__btn btn"
                        >
                            {translation?.send} {amount} USDT
                        </div>
                        {/*<RouterLink to={'/offchain-operation-completed'} className="footer__btn btn" href="#"</RouterLink>*/}
                    </div>
                </div>
            </footer>

            {showScanner &&
                <div className={'scanner-main-wrapper'}>
                    <Scanner styles={{height: 200}} onScan={(result) => {
                        if (result[0]?.format == "qr_code" ) {
                            setShowScanner(false)
                            setAddress(result[0]?.rawValue)
                        }

                        console.log(result, 'result')
                    }} />
                </div>
            }
        </div>
    );
}

export default OffchainSendSetPriceAndWalet;
