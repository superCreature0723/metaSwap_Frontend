import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import pencilSvg from '../../../assets/img/icons/pencil.svg'
import SelectContainer from "../../../components/select/SelectContainer";

import useUserData from "../../../hooks/useUserData";
import useLanguages from "../../../hooks/useLanguages";

import Loader from "../../../components/Loader";


import {
    ChIcon,
    DeIcon,
    EnIcon,
    EsIcon,
    FrIcon,
    ItIcon,
    KazakhIcon, LngArrow,
    PortIcon,
    RuIcon, TurqIcon,
    UkIcon,
    UzIcon
} from "../../../assets/svg/LanguageIcons";
import {getLanguages, updateLanguages} from "../../../utils/userApi";
import Menu from "../../../components/Menu";
import useVerification from "../../../hooks/useVerification";
import useTranslation from "../../../hooks/useTranslation";

function AutoConvertStepTwo() {
    const {translation, handleLanguageChange} = useTranslation();

    const { user, triggerVibration, webApp } = useTelegram();
    const navigate = useNavigate();

    const { userData, loading, error } = useUserData();
    const { languages, loadingLanguages, errorLanguages } = useLanguages();
    const { getVerificationData, getVerificationLoading, getVerificationError, fetchGetVerification } = useVerification();

    const [changedLanguages, setChangedLanguages] = useState([]);


    useEffect(()=>{
        if (getVerificationData) {
            console.log(getVerificationData, 'getVerification')
        }
    }, [getVerificationData])

    useEffect(() => {
        // checkUser();

        if (languages) {
            console.log(languages, 'languageslanguages')
            const updatedLanguages = languages?.items.map(language => {
                let icon = '';
                let label = '';

                switch (language.code) {
                    case 'en':
                        icon = <EnIcon/>; // Иконка для английского
                        label = 'English'; // Метка для английского
                        break;
                    case 'ru':
                        icon = <RuIcon/>; // Иконка для русского
                        label = 'Русский'; // Метка для русского
                        break;
                    default:
                        icon = '🌐'; // Иконка по умолчанию
                        label = 'Unknown'; // Метка по умолчанию
                }

                return { ...language, icon, label };
            });

            console.log(updatedLanguages ,'updatedLanguages')

            setChangedLanguages(updatedLanguages)
        }


    }, [languages, userData?.language]);

    const goBack = () => {
        navigate(-1);
    };


     const handleChangeUserLanguage = async (item) => {
         const {error, data} = await updateLanguages({language: item?.code}, webApp?.initData);
         if (error) {
             console.log('ERRROR!', error);
         }
         handleLanguageChange(item?.code)
         console.log(item, '040404')
         console.log(data, 'handleChangeUserLanguage')
     };


    return (
        <div className="wrapper">

            { (loading || loadingLanguages) && (
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
                    <h1 className="title">{translation?.settings}</h1>

                    <form action="#" className="settings">
                        <div className="settings__group">

                            {changedLanguages && changedLanguages.length > 0 &&
                                <SelectContainer
                                    label={translation?.language}
                                    translation={translation}
                                    type={'languages'}
                                    data={changedLanguages}
                                    defaultIndex={0}
                                    defaultByCode={userData?.language}
                                    onChange={(item)=>{
                                        handleChangeUserLanguage(item)
                                    }}
                                />
                            }

                        </div>

                        <div className="settings__group">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="">
                                    {translation?.email}
                                </label>
                                <div className="form__input-gorup">
                                    <input
                                        className="form__input"
                                        type="email"
                                        value={userData?.email || translation?.notSpecified}
                                        placeholder={translation?.enterYourEmail}
                                        readOnly
                                    />
                                    <RouterLink to={'/settings-change-email'} type="button" className="form__input-btn">
                                        <img
                                            className="form__input-icon"
                                            width="24"
                                            height="24"
                                            src={pencilSvg}
                                            alt="pencil icon"
                                        />
                                    </RouterLink>
                                </div>
                            </div>
                        </div>

                        <div className="settings__group">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="">
                                    2FA
                                </label>
                                {/*<div className="form__input-gorup">*/}
                                {/*    <input*/}
                                {/*        className="form__input-radio"*/}
                                {/*        type="radio"*/}
                                {/*        name="Google Authenticator"*/}
                                {/*        id="radio-1"*/}
                                {/*        defaultChecked*/}
                                {/*    />*/}
                                {/*    <label className="form__input-radio-label" htmlFor="radio-1">*/}
                                {/*        <div className="form__input-radio-decor"></div>*/}
                                {/*        <p className="form__input-radio-text">Enable Google Authenticator</p>*/}
                                {/*    </label>*/}
                                {/*</div>*/}

                                {/*<div className="form__input-gorup">*/}
                                {/*    <input*/}
                                {/*        className="form__input-radio"*/}
                                {/*        type="radio"*/}
                                {/*        name="Google Authenticator"*/}
                                {/*        id="radio-2"*/}
                                {/*    />*/}
                                {/*    <label className="form__input-radio-label" htmlFor="radio-2">*/}
                                {/*        <div className="form__input-radio-decor"></div>*/}
                                {/*        <p className="form__input-radio-text">Disable Google Authenticator</p>*/}
                                {/*    </label>*/}
                                {/*</div>*/}

                                {userData?.auth2fa ?
                                    <RouterLink to={'/settings-2fa?type=disable'} className="form__btn btn-outline btn-small-height" href="#">
                                        {translation?.unlinkGoogleAuthenticator}
                                    </RouterLink>
                                    :
                                    <RouterLink to={'/settings-2fa?type=enable'} className="form__btn btn-outline btn-small-height" href="#">
                                        {translation?.linkGoogleAuthenticator}
                                    </RouterLink>
                                }

                            </div>
                        </div>

                        <div className="settings__group">
                            <p className="settings__verificaty-label">{translation?.verificationAndLimits}</p>
                            <div className="settings__verificaty">
                                <p className="settings__verificaty-text">{translation?.yourStatus}: </p>
                                <b className="settings__verificaty-text">
                                    {getVerificationData?.status == 'NON_VERIFIED' ? translation?.notVerified :  getVerificationData?.status == 'PENDING' ? translation?.pending :  translation?.verified}
                                </b>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <RouterLink to={'/verification-limits-page'} className="footer__btn btn" href="#">
                            {translation?.verify}
                        </RouterLink>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AutoConvertStepTwo;
