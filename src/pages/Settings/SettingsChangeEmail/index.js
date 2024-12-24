import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'

import Menu from "../../../components/Menu";
import useUserData from "../../../hooks/useUserData";
import useChangeEmail from "../../../hooks/useChangeEmail";
import useTranslation from "../../../hooks/useTranslation";

function SettingsChangeEmail() {

    const { user, triggerVibration } = useTelegram();
    const {translation} = useTranslation();

    const { userData, loading, error } = useUserData();
    const { getCodeData, getCodeLoading, getCodeError, fetchGetCode,  checkCodeData, checkCodeLoading, checkCodeError, fetchCheckCode } = useChangeEmail();

    const [newEmail, setNewEmail] = useState('');
    const [newEmailError, setNewEmailError] = useState(false);

    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (getCodeData) {
            console.log(getCodeData, 'getCodeData')
        }

    }, [getCodeData]);

    useEffect(() => {
        if (checkCodeData) {
            if (checkCodeData?.kind == 'OK') {
                navigate(`/settings-change-email-completed?oldEmail=${userData?.email}&newEmail=${newEmail}`);
            }
            console.log(checkCodeData, 'checkCodeData')
        }

    }, [checkCodeData]);

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack} className="nav__item" href="#">
                        <img style={{cursor: 'pointer'}} className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>
                    </div>
                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <h1 className="title">E-mail</h1>

                    <div action="#" className="settings">
                        <div className="settings__group">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="current-email">Текущий E-mail</label>
                                <div className="form__input-gorup">
                                    <input className="form__input" disabled={true} type="email" value={userData?.email || 'Не указан'}/>
                                </div>
                            </div>
                        </div>

                        <div className="settings__group">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="new-email">{translation?.newEmail}</label>
                                <div className="form__input-gorup">
                                    <input
                                        placeholder={translation?.enterNewEmail}
                                        className={`form__input ${getCodeError ? 'error' : ''}`}
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => {
                                            setNewEmailError(false)
                                            setNewEmail(e.target.value)
                                        }}
                                    />
                                </div>
                                <button
                                    type={'button'}
                                    style={{opacity: newEmail == '' ? 0.5 : 1}}

                                    onClick={()=>{
                                        fetchGetCode(newEmail);
                                    }}
                                    disabled={newEmail == '' ? true : false}
                                    className="form__btn btn-outline btn-small-height"
                                >
                                    {translation?.sendCode}
                                </button>
                            </div>
                        </div>

                        <div className="settings__group">
                            <div className="form__gorup">
                                <label className="form__label" htmlFor="verification-code">{translation?.enterCode}</label>
                                <div className="form__input-gorup">
                                    <input
                                        placeholder={translation?.enterCode}
                                        className={`form__input ${checkCodeError ? 'error' : ''}`}
                                        type="text"
                                        value={code}
                                        onChange={(e) => {
                                            setCodeError(false)
                                            setCode(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            {/*<div className="form__gorup">*/}
                            {/*    <label className="form__label" htmlFor="2fa">2FA</label>*/}
                            {/*    <div className="form__input-gorup">*/}
                            {/*        <input className="form__input" type="password" value=""/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <button
                            type={"button"}
                            style={{opacity: code == '' ? 0.5 : 1}}
                            onClick={()=>{
                                fetchCheckCode(code);
                            }}
                            disabled={code == '' ? true : false}
                            className="footer__btn btn"
                        >
                            {translation?.changeEmail}
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SettingsChangeEmail;
