import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../../assets/img/icons/nav-back.svg'
import navDots from '../../../../assets/img/icons/nav-dots.svg'
import accountIcon from '../../../../assets/img/icons/account.svg'
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


function VerificationStatusCheck() {

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const { getVerificationData, getVerificationLoading, getVerificationError, fetchGetVerification } = useVerification();
    const [verified, setVerified] = useState(false);

    let intervalId = null

    useEffect(() => {
         intervalId = setInterval(() => {
            fetchGetVerification();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    useEffect(() => {
        if (getVerificationData) {
            if (getVerificationData?.status == 'VERIFIED' ) {
                setVerified(true)
                clearInterval(intervalId);
            }
            console.log(getVerificationData, 'getVerificationData')
        }
        // checkUser();
    }, [getVerificationData]);

    const goBack = () => {
        navigate(-1);
    };


    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack} className="nav__item" >
                        {/*<img className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>*/}
                    </div>
                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <h1 className="title">Верификация</h1>

                    {/* Progress bar */}
                    <div className="verification__percent" role="progressbar" aria-valuenow="31" aria-valuemin="0"
                         aria-valuemax="100" style={{'--value':verified ? 100 : getVerificationData ? getVerificationData?.progress : 0}}></div>

                    <p className="verification__text">Ваши документы успешно загруженны. Подождите пока они пройдут
                        проверку
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div
                        onClick={()=>{
                            if (verified) {
                                navigate('/verification-completed')
                            }
                        }}
                        className="footer__btns">
                        <div  className={`footer__btn ${verified ? 'btn-enable' : 'btn-disabled'}`} > {verified ? 'Готова' : 'Ждите'}</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default VerificationStatusCheck;
