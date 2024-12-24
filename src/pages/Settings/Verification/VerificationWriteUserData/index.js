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


function VerificationWriteUserData() {

    const { user, triggerVibration } = useTelegram();
    const navigate = useNavigate();
    const {
        updateVerification, updateVerificationLoading, updateVerificationError, fetchUpdateVerification,
        getVerificationUrlAnswer, getVerificationUrlLoading, getVerificationUrlError, fetchGetVerificationUrl
    } = useVerification();

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [docId, setDocId] = useState('');
    const [docIdError, setDocIdError] = useState('');

    const [photoDoc, setPhotoDoc] = useState(null);
    const [photoDocError, setPhotoDocError] = useState(null);
    const [photoDocPreviewUrl, setPhotoDocPreviewUrl] = useState(null);

    const [photoUserWithDoc, setPhotoUserWithDoc] = useState(null);
    const [photoUserWithDocError, setPhotoUserWithDocError] = useState(null);
    const [photoUserWithDocPreviewUrl, setPhotoUserWithDocPreviewUrl] = useState(null);


    useEffect(()=>{
        if (getVerificationUrlAnswer) {
            console.log(getVerificationUrlAnswer, 'getVerificationUrlAnswer')
        }
    }, [getVerificationUrlAnswer])

    useEffect(()=>{
        fetchGetVerificationUrl()
    }, [])
    //
    // useEffect(() => {
    //     if (updateVerification) {
    //         navigate('/verification-status-check');
    //         console.log(updateVerification, 'updateVerification---')
    //     }
    //     // checkUser();
    // }, [updateVerification]);

    //
    // useEffect(() => {
    //     if (updateVerificationError) {
    //
    //         let message = updateVerificationError?.message;
    //         if (message?.includes('firstName')) {
    //             setFirstNameError(true);
    //         } else {
    //             setFirstNameError(false);
    //         }
    //
    //         if (message?.includes('lastName')) {
    //             setLastNameError(true);
    //         } else {
    //             setLastNameError(false);
    //         }
    //
    //         if (message?.includes('docId')) {
    //             setDocIdError(true)
    //         } else {
    //             setDocIdError(false);
    //         }
    //
    //         if (message?.includes('photoDoc')) {
    //             setPhotoDocError(true)
    //         } else {
    //             setPhotoDocError(false)
    //         }
    //         if (message?.includes('photoUserWithDoc')) {
    //             setPhotoUserWithDocError(true)
    //         } else {
    //             setPhotoUserWithDocError(false);
    //         }
    //         console.log(updateVerification, 'updateVerification---')
    //     }
    //     // checkUser();
    // }, [updateVerificationError]);

    const goBack = () => {
        navigate(-1);
    };


    const handlePhotoDocFileChange = (event) => {
        const file = event.target.files[0];
        setPhotoDoc(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoDocPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handlePhotoUserWithDocFileChange = (event) => {
        const file = event.target.files[0];
        setPhotoUserWithDoc(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoUserWithDocPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('docId', docId);
        formData.append('photoDoc', photoDoc);
        formData.append('photoUserWithDoc', photoUserWithDoc);

        console.log(formData, 'formDataformData')
        fetchUpdateVerification(formData)
    }

    return (
        <div className="wrapper" >
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div onClick={goBack} style={{cursor: 'pointer'}} className="nav__item" >
                        <img style={{cursor: 'pointer'}} className="nav__icon" width="24" height="24" src={navBack} alt="arrow icon"/>
                    </div>
                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main" style={{display: 'flex', flex:1}}>
                <div className="content" style={{display: 'flex', flexDirection: 'column', flex:1}}>
                    <h1 className="title">Верификация</h1>

                    <div style={{width: '100%', flex:1}}>
                        <iframe
                            src="https://kyc-forms-new.amlbot.com/692bd9c21a243140ff09885610e9542a5c2c"
                            title="KYC Form"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/*<form className="verification__form" action="#">*/}
                    {/*    <div className="form__gorup">*/}
                    {/*        <label className="form__label" htmlFor="name">Имя</label>*/}
                    {/*        <div className="form__input-gorup form__input-gorup--token">*/}
                    {/*            <img className="form__input-token" width="32" height="32" src={accountIcon} alt="account icon"/>*/}
                    {/*            <input*/}
                    {/*                className={`form__input ${firstNameError ? 'error' : ''}`}*/}
                    {/*                type="text"*/}
                    {/*                id="name"*/}
                    {/*                defaultValue=""*/}

                    {/*                placeholder={'Name'}*/}
                    {/*                value={firstName}*/}
                    {/*                onChange={(e) => {*/}
                    {/*                    setFirstName(e.target.value)*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="form__gorup">*/}
                    {/*        <label className="form__label" htmlFor="surname">Фамилия</label>*/}
                    {/*        <div className="form__input-gorup form__input-gorup--token">*/}
                    {/*            <img className="form__input-token" width="32" height="32" src={accountIcon}*/}
                    {/*                 alt="account icon"/>*/}
                    {/*            <input*/}
                    {/*                className={`form__input ${lastNameError ? 'error' : ''}` }*/}
                    {/*                type="text"*/}
                    {/*                id="surname"*/}
                    {/*                defaultValue=""*/}
                    {/*                placeholder={'Surname'}*/}
                    {/*                value={lastName}*/}
                    {/*                onChange={(e) => {*/}
                    {/*                    setLastName(e.target.value);*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="form__gorup">*/}
                    {/*        <label className="form__label" htmlFor="passport">Номер паспорта или ID</label>*/}
                    {/*        <div className="form__input-gorup form__input-gorup--token">*/}
                    {/*            <img className="form__input-token" width="32" height="32" src={addressBookIcon}*/}
                    {/*                 alt="address-book-black icon"/>*/}
                    {/*            <input*/}
                    {/*                className={`form__input ${docIdError ? 'error' : ''}`}*/}
                    {/*                type="number"*/}
                    {/*                id="passport"*/}
                    {/*                defaultValue=""*/}
                    {/*                placeholder={'ID'}*/}
                    {/*                value={docId}*/}
                    {/*                onChange={(e) => {*/}
                    {/*                    setDocId(e.target.value);*/}
                    {/*                }}*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="form__gorup">*/}
                    {/*        <label className="form__label" htmlFor="document-photo">Фото документа</label>*/}

                    {/*        <div className="form__file">*/}
                    {/*            <div className={`form__file-picture ${photoDocError ? 'error' : ''}`}>*/}
                    {/*                <img className="form__file-img" width="48" height="48" src={photoDocPreviewUrl || pictureIcon} alt="picture"/>*/}
                    {/*            </div>*/}

                    {/*            <div className="form__file-main">*/}
                    {/*                <input className="form__file-input" type="file" id="file-1" onChange={handlePhotoDocFileChange}/>*/}
                    {/*                <label className="form__file-label" htmlFor="file-1">*/}
                    {/*                    <div className="form__file-btn btn-outline btn-small-height">*/}
                    {/*                        <span>Прикрепить</span>*/}
                    {/*                    </div>*/}
                    {/*                    <p className="form__file-text">*/}
                    {/*                        Документ должен быть в формате: PNG, JPEG, JPG,*/}
                    {/*                        TIFF. Размер не должен привышать 10 mb.*/}
                    {/*                    </p>*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="form__gorup">*/}
                    {/*        <label className="form__label" htmlFor="selfie-photo">Фото c документом</label>*/}

                    {/*        <div className="form__file">*/}
                    {/*            <div className={`form__file-picture ${photoUserWithDocError ? 'error' : ''}`}>*/}
                    {/*                <img className="form__file-img" width="48" height="48" src={photoUserWithDocPreviewUrl || pictureIcon} alt="picture"/>*/}
                    {/*            </div>*/}

                    {/*            <div className="form__file-main">*/}
                    {/*                <input className="form__file-input" type="file" id="file-2" onChange={handlePhotoUserWithDocFileChange}/>*/}
                    {/*                <label className="form__file-label" htmlFor="file-2">*/}
                    {/*                    <div className="form__file-btn btn-outline btn-small-height">*/}
                    {/*                        <span>Прикрепить</span>*/}
                    {/*                    </div>*/}
                    {/*                    <p className="form__file-text">Фото должно включать ваше лицо и документ.*/}
                    {/*                        Оставьте расстояние до краев снимка около 10 см.</p>*/}
                    {/*                </label>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        {/*<div onClick={handleSubmit} className="footer__btn btn" >*/}
                        {/*    Далее*/}
                        {/*</div>*/}
                        {/*<RouterLink to={'/verification-status-check'} className="footer__btn btn" href="#">Далее</RouterLink>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default VerificationWriteUserData;
