import React, {useEffect, useState} from 'react';
import '../assets/css/header.css'
import { LngArrow, RuIcon} from "../assets/svg/LanguageIcons";
import {BrainIcon, EnergyIcon, LapkaIcon, Question1Icon} from "../assets/svg/icons";
import LanguageModal from "./LanguageModal";
import {useTelegram} from "../TelegramContext";
import QuestionModal from "./QuestionModal";
import CatDefault from "../assets/images/cat.png";
import PayModal from "./PayModal";
function Header({userData,staminaMin,staminaMax,staminaLevel}) {

    const { user, triggerVibration } = useTelegram();

    const [selectedLanguage, setSelectedLanguage] = useState('ru');
    const [isOpenLngModal, setIsOpenLngModal] = useState(false);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [payModalType, setPayModalType] = useState('');

    // const [userData, setUserData] = useState(null);
    // const [staminaMin, setStaminaMin] = useState('0');
    // const [staminaMax, setStaminaMax] = useState('0');
    // const [staminaLevel, setStaminaLevel] = useState('0');

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(false);

        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 10); // Анимация длится 3 секунды

        return () => clearTimeout(timer);
    }, []);


    function formatNumber(num) {
        if (num < 1000) {
            return num.toString();
        }

        const units = ["K", "M", "B", "T"];
        const order = Math.floor(Math.log10(num) / 3);
        const unitname = units[order - 1];
        const scaled = num / Math.pow(1000, order);

        // Округление до двух знаков после запятой
        const rounded = Math.floor(scaled * 100) / 100;

        return `+${rounded.toFixed(2).replace('.', '.')}${unitname}`;
    }

    function calculatePercentage(part, whole) {
        if (whole === 0) {
            throw new Error("The whole number cannot be zero.");
        }
        const percentage = (parseFloat(part) / parseFloat(whole)) * 100;
        return percentage.toFixed(2); // Округление до двух знаков после запятой
    }

    return (
        <header className={``}>

            <div className={`top ${isAnimating ? 'show' : ''}`}>
                <div className="top-left">
                    {userData?.cat_avatar &&
                        <img
                            className={"user-avatar"}
                            src={userData?.cat_avatar ? userData?.cat_avatar : CatDefault }
                        />
                    }

                    <div className="top-left-texts">
                        <p className="top-right-text1">
                            {userData?.cat_name ? userData?.cat_name : ''}
                        </p>
                        <p className="top-right-text2" style={{display:'flex'}}>
                            {userData?.cat_level?.num} уровень
                            <div
                                style={{marginLeft:5}}
                                onClick={() => {
                                    setShowQuestionModal(true)
                                    setPayModalType('user')
                                }}
                            >
                                <Question1Icon/>
                            </div>
                        </p>
                    </div>

                </div>

                <div className="top-right">
                    <div
                        className="headerLanguageWrapper"
                        onClick={() => {
                            setIsOpenLngModal(true)
                        }}
                    >
                        {/*<img src={RuIcon}/>*/}
                        <RuIcon/>
                        <LngArrow style={{marginLeft:8}}/>
                    </div>
                </div>

            </div>

            <div className={`header-center ${isAnimating ? 'show' : ''}`}>

                <div className={'property-wrapper header-center-left'}>
                    <div className={'property-wrapper-top'}>
                        <BrainIcon/>

                        <div className={'property-wrapper-top-text'}>
                            Интеллект: <br/> + {userData?.intelligence_level?.bonus ? formatNumber(userData?.intelligence_level?.bonus) : '0'}
                        </div>
                        <div
                            onClick={()=> {
                                setShowQuestionModal(true)
                                setPayModalType('intelekt')
                            }}
                        >
                            <Question1Icon/>
                        </div>
                    </div>
                    <div className={'property-wrapper-bottom'}>
                        {userData?.intelligence_level?.num ? userData?.intelligence_level?.num : ''} уровень
                    </div>
                </div>

                <div className={'property-wrapper'}>
                    <div className={'property-wrapper-top'}>
                        <LapkaIcon/>

                        <div className={'property-wrapper-top-text'}>
                            Лапка: <br/>
                            {userData?.attack_level?.bonus ? userData?.attack_level?.bonus : ''} за тап
                        </div>
                        <div
                            onClick={()=> {
                                setShowQuestionModal(true);
                                setPayModalType('atack')
                            }}
                        >
                            <Question1Icon/>

                        </div>
                    </div>
                    <div className={'property-wrapper-bottom'}>
                        {userData?.attack_level?.num ? userData?.attack_level?.num : ''} уровень
                    </div>
                </div>
            </div>

            <div className={`energy-block-main-wrapper ${isAnimating ? 'show' : ''}`}>
                <div className={'energy-block-wrapper'}>
                    <EnergyIcon/>
                    <div className={'energy-block-wrapper-title'}>Энергия:</div>

                    <div className={'energy-progress'}>
                        <div className={'energy-active-progress'}
                             style={{width: `${calculatePercentage(staminaMin, staminaMax)}%`}}>
                        </div>
                        <div className={'energy-progress-value'}>
                            {staminaMin} / {staminaMax}
                        </div>
                    </div>
                </div>

                <div className={'energy-bottom'}>
                    <div className={'energy-bottom-left'}>
                        {staminaLevel ? staminaLevel : ''} уровень
                    </div>

                    <div className={'energy-bottom-right'}>
                        <div
                            onClick={() => {
                                setShowQuestionModal(true)
                                setPayModalType('stamina')
                                triggerVibration('heavy');
                            }}
                        >
                            <Question1Icon/>

                        </div>
                    </div>
                </div>
            </div>


            <LanguageModal
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
                isOpen={isOpenLngModal}
                onclose={() => {
                    setIsOpenLngModal(false)
                }}
            />


            <QuestionModal
                isActive={showQuestionModal}
                onClose={() => setShowQuestionModal(false)}
                userData={userData}
                payModalType={payModalType}
            />

        </header>
    );
}

export default Header;
