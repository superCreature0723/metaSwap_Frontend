import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../../assets/img/icons/nav-back.svg'
import navDots from '../../../../assets/img/icons/nav-dots.svg'
import bigCheck from '../../../../assets/img/icons/big-check.svg'
import addressBookIcon from '../../../../assets/img/icons/address-book.svg'
import pictureIcon from '../../../../assets/img/icons/picture.svg'

import selectArrow from '../../../../assets/img/icons/select-arrow.svg'
import pencilSvg from '../../../../assets/img/icons/pencil.svg'

import svgIcon1 from '../../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../../assets/img/tokens/4.svg';
import Menu from "../../../../components/Menu";
import useVerification from "../../../../hooks/useVerification";


function VerificationCompleted() {

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const { getVerificationData, getVerificationLoading, getVerificationError, fetchGetVerification } = useVerification();



    useEffect(() => {
        // checkUser();
    }, [user]);

    const goBack = () => {
        navigate(-1);
    };

    const getTitle = (item) => {
        switch (item?.kind) {
            case 'TRANSFER_MONTH':
                return 'Переводы';
                break;
            case 'SWAP_MONTH':
                return 'SWAP';
                break;
            case 'AUTOCONVERT_MONTH':
                return 'Конвертация';
                break;
            default:
        }
    };
    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack} className="nav__item" href="#">
                        {/*<img className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>*/}
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

                    <h1 className="title">Верификация успешно пройдена!</h1>

                    <div className="status">
                        <div className="status__head">
                            <p className="status__head-text">Ваш статус: </p>
                            <p className="status__head-text primary-color">Верифицирован</p>
                        </div>

                        <div className="status__rows">
                            <div className="status__row">
                                <p className="status__text">Текущие лимиты</p>
                            </div>
                            {getVerificationData?.status == 'VERIFIED' && getVerificationData && getVerificationData?.verifiedLimits.map((item, index)=>{
                                return (
                                    <div key={index} className="status__row">
                                        <p className="status__text"> {getTitle(item)}: </p>
                                        <p className="status__text status__text--bold"> {item?.value} {item?.currencyName} в месяц</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <RouterLink to={'/'} className="footer__btns">
                        <div className="footer__btn btn" >Готова</div>
                    </RouterLink>
                </div>
            </footer>
        </div>);
}

export default VerificationCompleted;
