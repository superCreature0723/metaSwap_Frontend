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

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import useCurrencies from "../../../hooks/useCurrencies";
import useCreateDeposit from "../../../hooks/useCreateDeposit";
import {useClipboard} from "../../../hooks/use-clipboard.ts";
import Loader from "../../../components/Loader";
import useTranslation from "../../../hooks/useTranslation";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

function DepositReplenishment() {
    const {translation} = useTranslation();

    const query = useQuery();
    const id = query.get('id');
    const chainName = query.get('chain-name');
    const cryptoName = query.get('crypto-name');

    const { user, triggerVibration } = useTelegram();
    const { deposit, loadingDeposit, errorDeposit} = useCreateDeposit(id);
    const navigate = useNavigate();
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);

    useEffect(() => {
        // checkUser();
        console.log(deposit, 'depositdeposit')
    }, [deposit]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    const { handleCopy, isCopied } = useClipboard(
        deposit?.address,
        {
            timeout: 1500,
        }
    );


    return (
        <div className="wrapper">
            { (loadingDeposit) && (
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
                    <h1 className="title">{translation?.topUp}</h1>

                    <div className="deposit">
                        <div className="deposit__head">
                            <div className="deposit__head-row">
                                <p className="deposit__head-label">{translation?.currency}:</p>
                                <p className="deposit__head-value">{cryptoName}</p>
                            </div>




                            <div className="deposit__head-row">
                                <p className="deposit__head-label">{translation?.network}:</p>
                                <p className="deposit__head-value">{chainName}</p>
                            </div>
                        </div>
                    </div>

                    <form className="form form-mb-0" action="#">
                        <div className="form__gorup">
                            <label className="form__label" htmlFor="">{translation?.topUpAddress}</label>
                            <div className="form__input-gorup">
                                <input disabled={true} className="form__input" type="text" defaultValue={deposit?.address}/>
                                <button
                                    onClick={handleCopy}
                                    type="button" className="form__input-btn"
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

                        <div className="form__qr" style={{width: '100%'}}>
                            <img
                                style={{width:'100%', height: '100%'}}
                                className="form__qr-img"
                                width="100%"
                                height="268"
                                src={deposit?.addressQrUrl}
                                alt="qr code"
                            />
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <RouterLink to={'/'} className="footer__btn btn" href="#">{translation?.done}</RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default DepositReplenishment;
