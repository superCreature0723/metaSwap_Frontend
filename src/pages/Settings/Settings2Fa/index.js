// import React, {useEffect, useRef, useState} from 'react';
// import { useTelegram } from '../../../TelegramContext';
// import {useLocation, useNavigate} from "react-router-dom";
// import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
// import { LinkProps, Link as RouterLink } from "react-router-dom";
//
// import navBack from '../../../assets/img/icons/nav-back.svg'
// import navDots from '../../../assets/img/icons/nav-dots.svg'
// import copySvg from '../../../assets/img/icons/copy.svg'
// import qrSvg from '../../../assets/img/qr.png'
// import selectArrow from '../../../assets/img/icons/select-arrow.svg'
// import searchSvg from '../../../assets/img/icons/search.svg'
// import swapSvg from '../../../assets/img/icons/swap.svg'
// import pencilSvg from '../../../assets/img/icons/pencil.svg'
//
// import svgIcon1 from '../../../assets/img/tokens/1.svg';
// import svgIcon2 from '../../../assets/img/tokens/2.svg';
// import svgIcon3 from '../../../assets/img/tokens/3.svg';
// import svgIcon4 from '../../../assets/img/tokens/4.svg';
// import Menu from "../../../components/Menu";
// import use2FaAuth from "../../../hooks/use2FaAuth";
// import useTranslation from "../../../hooks/useTranslation";
//
// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// };
//
// function Settings2Fa () {
//     const {translation} = useTranslation();
//
//     const query = useQuery();
//     const type = query.get('type');
//
//     const { user, triggerVibration } = useTelegram();
//     const { otpCreateSecret, otpCreateSecretLoading, otpCreateSecretError, fetchCreateOtpSecret,
//             otpEnable, otpEnableLoading, otpEnableError, fetchEnableOtp,
//             otpDisable, otpDisableLoading, otpDisableError, fetchDisableOtp,
//             authOtpData, authOtpDataLoading, authOtpDataError, fetchAuthOtp,
//           } = use2FaAuth();
//
//     const navigate = useNavigate();
//     const isMounted = useRef(false);
//
//     const [code1, setCode1] = useState('')
//     const [code2, setCode2] = useState('')
//     const [code3, setCode3] = useState('')
//     const [code4, setCode4] = useState('')
//     const [code5, setCode5] = useState('')
//     const [code6, setCode6] = useState('')
//
//     useEffect(() => {
//
//         if (type && type == 'enable') {
//
//             if (!isMounted.current) {
//                 fetchCreateOtpSecret();
//                 isMounted.current = true;
//             }
//         }
//
//     }, [type]);
//
//     useEffect(() => {
//
//         if (otpCreateSecret) {
//             console.log(otpCreateSecret, 'otpCreateSecret')
//         }
//         // checkUser();
//     }, [otpCreateSecret]);
//
//
//     useEffect(() => {
//
//         if (otpEnable) {
//             navigate('/settings')
//             console.log(otpEnable, 'otpEnable')
//         }
//
//         if (otpDisable) {
//             navigate('/settings')
//             console.log(otpDisable, 'otpDisable')
//         }
//
//         if (authOtpData) {
//             if (authOtpData.kind == 'OK') {
//                 navigate('/')
//             }
//             // navigate('/settings')
//             console.log(authOtpData, 'authOtpData')
//         }
//
//         // checkUser();
//     }, [otpEnable, authOtpData, otpDisable]);
//
//     const goBack = () => {
//         navigate(-1);
//     };
//
//     return (
//         <div className="wrapper">
//             {/* Header */}
//             <header className="header">
//                 <nav className="nav">
//
//                     <div onClick={goBack} className="nav__item" >
//                         <img className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>
//                     </div>
//
//                     <Menu/>
//
//                 </nav>
//             </header>
//
//             {/* Main Page */}
//             <main className="main">
//                 <div className="content">
//                     <h1 className="title">Google Authenticator</h1>
//
//                     <form className="form" action="#">
//                         <h2 className="form__title">
//                             {/*Отсканируйте QR или введите код*/}
//                             {translation?.scanQrOrEnterCode}
//                         </h2>
//                         {type == 'enable' &&
//                             <div className="form__qr" style={{width: '100%'}}>
//                                 {otpCreateSecret &&
//                                     <img
//                                         className="form__qr-img"
//                                         width="178"
//                                         height="174"
//                                         src={otpCreateSecret?.qrUrl}
//                                         alt="qr code"
//                                     />
//                                 }
//                             </div>
//                         }
//
//
//                         <div className="form__gorup">
//                             <label className="form__label" htmlFor="">{translation?.googleAuthCode}</label>
//                             <div className={`form__codes ${authOtpDataError ? 'error' : ''}`}>
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code1}
//                                     onChange={(e)=>{
//                                         setCode1(e.target.value)
//                                     }}
//                                 />
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code2}
//                                     onChange={(e)=>{
//                                         setCode2(e.target.value)
//                                     }}
//                                 />
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code3}
//                                     onChange={(e)=>{
//                                         setCode3(e.target.value)
//                                     }}
//                                 />
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code4}
//                                     onChange={(e)=>{
//                                         setCode4(e.target.value)
//                                     }}
//                                 />
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code5}
//                                     onChange={(e)=>{
//                                         setCode5(e.target.value)
//                                     }}
//                                 />
//                                 <input
//                                     className="form__code"
//                                     maxLength="1"
//                                     type="text"
//                                     value={code6}
//                                     onChange={(e)=>{
//                                         setCode6(e.target.value)
//                                     }}
//                                 />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </main>
//
//             {/* Footer */}
//             <footer className="footer">
//                 <div className="footer__inner">
//                     <div className="footer__btns">
//                         {code1 != '' && code2 != '' && code3 != '' && code4 != '' && code5 != '' && code6 != '' &&
//                             <div
//                                 onClick={() => {
//                                     const code = `${code1}${code2}${code3}${code4}${code5}${code6}`;
//
//                                     if (code1 != '' && code2 != '' && code3 != '' && code4 != '' && code5 != '' && code6 != '') {
//                                         if ( type == 'enable') {
//                                             fetchEnableOtp(otpCreateSecret?.secret, code)
//                                         } else  if ( type == 'disable'){
//                                             fetchDisableOtp(code)
//                                         } else  if ( type == 'auth'){
//                                             fetchAuthOtp(code)
//                                         }
//                                     }
//
//                                 }}
//                                 className="footer__btn btn"
//                             >
//                                 {translation?.done}
//                             </div>
//
//                         }
//
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }
//
// export default Settings2Fa;
import React, {useEffect, useRef, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import {useLocation, useNavigate} from "react-router-dom";
import '../../../assets/css/style.css';
import Menu from "../../../components/Menu";
import use2FaAuth from "../../../hooks/use2FaAuth";
import useTranslation from "../../../hooks/useTranslation";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

function Settings2Fa () {
    const {translation} = useTranslation();
    const query = useQuery();
    const type = query.get('type');

    const { user, triggerVibration } = useTelegram();
    const {
        otpCreateSecret, otpCreateSecretLoading, otpCreateSecretError, fetchCreateOtpSecret,
        otpEnable, otpEnableLoading, otpEnableError, fetchEnableOtp,
        otpDisable, otpDisableLoading, otpDisableError, fetchDisableOtp,
        authOtpData, authOtpDataLoading, authOtpDataError, fetchAuthOtp,
    } = use2FaAuth();

    const navigate = useNavigate();
    const isMounted = useRef(false);

    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [code3, setCode3] = useState('');
    const [code4, setCode4] = useState('');
    const [code5, setCode5] = useState('');
    const [code6, setCode6] = useState('');

    // Создаем 6 рефов для каждого поля
    const codeRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    useEffect(() => {
        if (type && type === 'enable') {
            if (!isMounted.current) {
                fetchCreateOtpSecret();
                isMounted.current = true;
            }
        }
    }, [type]);

    useEffect(() => {
        if (otpCreateSecret) {
            console.log(otpCreateSecret, 'otpCreateSecret');
        }
    }, [otpCreateSecret]);

    useEffect(() => {
        if (otpEnable) {
            navigate('/settings');
            console.log(otpEnable, 'otpEnable');
        }

        if (otpDisable) {
            navigate('/settings');
            console.log(otpDisable, 'otpDisable');
        }

        if (authOtpData && authOtpData.kind === 'OK') {
            navigate('/');
        }

        console.log(authOtpData, 'authOtpData');
    }, [otpEnable, authOtpData, otpDisable]);

    const handleInputChange = (value, index) => {
        const setters = [setCode1, setCode2, setCode3, setCode4, setCode5, setCode6];

        // Устанавливаем значение в соответствующее поле
        setters[index](value);

        // Переход на следующее поле, если есть, и значение введено
        if (value && index < codeRefs.length - 1) {
            codeRefs[index + 1].current?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value) {
            // Если удаляем значение и поле пустое, переходим на предыдущее поле
            if (index > 0) {
                codeRefs[index - 1].current?.focus();
            }
        }
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="wrapper">
            <header className="header">
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} onClick={goBack} className="nav__item">
                        <img style={{cursor: 'pointer'}} className="nav__icon" width="24" height="24" src="../../../assets/img/icons/nav-back.svg" alt="arrow icon" />
                    </div>
                    <Menu />
                </nav>
            </header>

            <main className="main">
                <div className="content">
                    <h1 className="title">Google Authenticator</h1>

                    <form className="form" action="#">
                        <h2 className="form__title">{translation?.scanQrOrEnterCode}</h2>
                        {type === 'enable' && (
                            <div className="form__qr" style={{ width: '100%' }}>
                                {otpCreateSecret && (
                                    <img
                                        className="form__qr-img"
                                        width="178"
                                        height="174"
                                        src={otpCreateSecret?.qrUrl}
                                        alt="qr code"
                                    />
                                )}
                            </div>
                        )}

                        <div className="form__gorup">
                            <label className="form__label" htmlFor="">{translation?.googleAuthCode}</label>
                            <div className={`form__codes ${authOtpDataError ? 'error' : ''}`}>
                                {[code1, code2, code3, code4, code5, code6].map((value, index) => (
                                    <input
                                        key={index}
                                        ref={codeRefs[index]} // Привязываем реф к полю
                                        className="form__code"
                                        maxLength="1"
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleInputChange(e.target.value, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        {code1 && code2 && code3 && code4 && code5 && code6 && (
                            <div
                                onClick={() => {
                                    const code = `${code1}${code2}${code3}${code4}${code5}${code6}`;

                                    if (type === 'enable') {
                                        fetchEnableOtp(otpCreateSecret?.secret, code);
                                    } else if (type === 'disable') {
                                        fetchDisableOtp(code);
                                    } else if (type === 'auth') {
                                        fetchAuthOtp(code);
                                    }
                                }}
                                className="footer__btn btn"
                            >
                                {translation?.done}
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Settings2Fa;
