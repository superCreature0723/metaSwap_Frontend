import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../../assets/img/icons/nav-back.svg'
import navDots from '../../../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../../../assets/img/icons/select-arrow.svg'
import pencilSvg from '../../../../assets/img/icons/pencil.svg'

import svgIcon1 from '../../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../../assets/img/tokens/4.svg';
import Menu from "../../../../components/Menu";
import useVerification from "../../../../hooks/useVerification";
import Loader from "../../../../components/Loader";
import useTranslation from "../../../../hooks/useTranslation";


function VerificationLimitsPage() {
    const {translation} = useTranslation();

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
               return  translation?.translations//'Переводы';
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
            { (getVerificationLoading ) && (
                <Loader/>
            )}
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack}  className="nav__item">
                        <img style={{cursor: 'pointer'}} className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>
                    </div>
                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <h1 className="title">Лимиты и верификация</h1>

                    <div className="status">
                        <div className="status__head">
                            <p className="status__head-text">Ваш статус: </p>
                            <p className={`status__head-text  ${getVerificationData?.status == 'NON_VERIFIED' ? 'error-color' :  getVerificationData?.status == 'PENDING' ? '' : 'green-color'} `}>
                                {getVerificationData?.status == 'NON_VERIFIED' ? 'Не верифицирован' :  getVerificationData?.status == 'PENDING' ? 'В ожидание' : 'Верифицирован'}
                            </p>
                        </div>

                        <div className="status__rows">
                            <div className="status__row">
                                <p className="status__text">Текущие лимиты</p>
                            </div>

                            {getVerificationData?.status == 'NON_VERIFIED' && getVerificationData && getVerificationData?.nonVerifiedLimits.map((item, index)=>{
                                    return (
                                        <div key={index} className="status__row">
                                            <p className="status__text"> {getTitle(item)}: </p>
                                            <p className="status__text status__text--bold"> {item?.value} {item?.currencyName} в месяц</p>
                                        </div>
                                    )
                                })
                            }

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

                    <div className="status status--primary-border">
                        <div className="status__head">
                            <p className="status__head-text status__head-text--center">Пройдите верификацию и получите
                                повышенные лимиты</p>
                        </div>

                        <div className="status__rows">

                            {getVerificationData && getVerificationData?.nonVerifiedLimits.map((item, index)=>{
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
                    <div className="footer__btns">
                        {/*{getVerificationData?.status == 'NON_VERIFIED' &&*/}
                            <RouterLink to={'/verification-write-user-data'} className="footer__btn btn" >Пройти верификацию</RouterLink>
                        {/*}*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default VerificationLimitsPage;
