// import React, {useEffect, useState} from 'react';
// import { useTelegram } from '../../../TelegramContext';
// import { useNavigate } from "react-router-dom";
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
//
// import svgIcon1 from '../../../assets/img/tokens/1.svg';
// import svgIcon2 from '../../../assets/img/tokens/2.svg';
// import svgIcon3 from '../../../assets/img/tokens/3.svg';
// import svgIcon4 from '../../../assets/img/tokens/4.svg';
// import Menu from "../../../components/Menu";
//
//
// function AutoConvertStepTwo() {
//
//     const { user, triggerVibration } = useTelegram();
//     const navigate = useNavigate();
//
//     const [isOpenNetwork1,setIsOpenNetwork1] = useState(false);
//     const [isOpenToken1,setIsOpenToken1] = useState(false);
//
//     const [isOpenToken2,setIsOpenToken2] = useState(false);
//     const [isOpenNetwork2,setIsOpenNetwork2] = useState(false);
//
//     useEffect(() => {
//         // checkUser();
//     }, [user]);
//
//     const goBack = () => {
//         navigate(-1);
//     };
//
//
//     return (
//         <div className="wrapper">
//             {/* Header */}
//             <header className="header">
//                 {/* Navbar */}
//                 <nav className="nav">
//                     <a className="nav__item" href="#" onClick={goBack}>
//                         <img
//                             className="nav__icon"
//                             width="24"
//                             height="24"
//                             src={navBack}
//                             alt="arrow icon"
//                         />
//                     </a>
//                     <Menu/>
//                 </nav>
//             </header>
//
//             {/* Main Page */}
//             <main className="main">
//                 <div className="content">
//                     <h1 className="title">Автоконвертация</h1>
//
//                     <div className="swap">
//                         <div className="swap__group">
//                             <p className="swap__label">Валюта которую отдаете</p>
//
//                             <div className={`select ${isOpenNetwork1 && 'open' }`}>
//                                 <p className="select__label">Сеть</p>
//                                 <button
//                                     onClick={()=>{
//                                         setIsOpenNetwork1(!isOpenNetwork1);
//                                     }}
//                                     type="button"
//                                     className="select__selected"
//                                 >
//                                     <div className="select__info">
//                                         <img
//                                             className="select__icon"
//                                             width="36"
//                                             height="36"
//                                             src={svgIcon2}
//                                             alt="token img"
//                                         />
//                                         <p className="select__text">BNB Smart Chain</p>
//                                     </div>
//                                     <div className="select__btn">
//                                         <img
//                                             className="select__btn-arrow"
//                                             width="14"
//                                             height="8"
//                                             src={selectArrow}
//                                             alt="arrow icon"
//                                         />
//                                     </div>
//                                 </button>
//
//                                 <ul className="select__tokens">
//                                     {Array(10).fill().map((_, index) => (
//                                         <li key={index} className="select__token">
//                                             <a className="select__token-link" href="#">
//                                                 <div className="select__token-info">
//                                                     <img
//                                                         className="select__token-icon"
//                                                         width="36"
//                                                         height="36"
//                                                         src={svgIcon1}
//                                                         alt="token icon"
//                                                     />
//                                                     <div className="select__token-texts">
//                                                         <p className="select__token-text">Ethereum</p>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//
//                             <div className={`select ${isOpenToken1 && 'open' }`}>
//                                 <p className="select__label">Токен</p>
//                                 <button
//                                     onClick={()=>{
//                                         setIsOpenToken1(!isOpenToken1);
//                                     }}
//                                     type="button"
//                                     className="select__selected"
//                                 >
//                                     <div className="select__info">
//                                         <img
//                                             className="select__icon"
//                                             width="36"
//                                             height="36"
//                                             src={svgIcon2}
//                                             alt="token img"
//                                         />
//                                         <p className="select__text">BNB Smart Chain</p>
//                                     </div>
//                                     <div className="select__btn">
//                                         <img
//                                             className="select__btn-arrow"
//                                             width="14"
//                                             height="8"
//                                             src={selectArrow}
//                                             alt="arrow icon"
//                                         />
//                                     </div>
//                                 </button>
//
//                                 <ul className="select__tokens">
//                                     {Array(10).fill().map((_, index) => (
//                                         <li key={index} className="select__token">
//                                             <a className="select__token-link" href="#">
//                                                 <div className="select__token-info">
//                                                     <img
//                                                         className="select__token-icon"
//                                                         width="36"
//                                                         height="36"
//                                                         src={svgIcon1}
//                                                         alt="token icon"
//                                                     />
//                                                     <div className="select__token-texts">
//                                                         <p className="select__token-text">Ethereum</p>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//
//                         <img
//                             className="swap__icon"
//                             width="32"
//                             height="32"
//                             src={swapSvg}
//                             alt="swap icon"
//                         />
//
//                         <div className="swap__group">
//                             <p className="swap__label">Валюта которую получите</p>
//
//                             <div className={`select ${isOpenNetwork2 && 'open' }`}>
//                                 <p className="select__label">Сеть</p>
//                                 <button
//                                     onClick={()=>{
//                                         setIsOpenNetwork2(!isOpenNetwork2);
//                                     }}
//                                     type="button"
//                                     className="select__selected"
//                                 >
//                                     <div className="select__info">
//                                         <img
//                                             className="select__icon"
//                                             width="36"
//                                             height="36"
//                                             src={svgIcon2}
//                                             alt="token img"
//                                         />
//                                         <p className="select__text">BNB Smart Chain</p>
//                                     </div>
//                                     <div className="select__btn">
//                                         <img
//                                             className="select__btn-arrow"
//                                             width="14"
//                                             height="8"
//                                             src={selectArrow}
//                                             alt="arrow icon"
//                                         />
//                                     </div>
//                                 </button>
//
//                                 <ul className="select__tokens">
//                                     {Array(10).fill().map((_, index) => (
//                                         <li key={index} className="select__token">
//                                             <a className="select__token-link" href="#">
//                                                 <div className="select__token-info">
//                                                     <img
//                                                         className="select__token-icon"
//                                                         width="36"
//                                                         height="36"
//                                                         src={svgIcon1}
//                                                         alt="token icon"
//                                                     />
//                                                     <div className="select__token-texts">
//                                                         <p className="select__token-text">Ethereum</p>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//
//                             <div className={`select ${isOpenToken2 && 'open' }`}>
//                                 <p className="select__label">Токен</p>
//                                 <button
//                                     onClick={()=>{
//                                         setIsOpenToken2(!isOpenToken2);
//                                     }}
//                                     type="button"
//                                     className="select__selected"
//                                 >
//                                     <div className="select__info">
//                                         <img
//                                             className="select__icon"
//                                             width="36"
//                                             height="36"
//                                             src={svgIcon2}
//                                             alt="token img"
//                                         />
//                                         <p className="select__text">BNB Smart Chain</p>
//                                     </div>
//                                     <div className="select__btn">
//                                         <img
//                                             className="select__btn-arrow"
//                                             width="14"
//                                             height="8"
//                                             src={selectArrow}
//                                             alt="arrow icon"
//                                         />
//                                     </div>
//                                 </button>
//
//                                 <ul className="select__tokens">
//                                     {Array(10).fill().map((_, index) => (
//                                         <li key={index} className="select__token">
//                                             <a className="select__token-link" href="#">
//                                                 <div className="select__token-info">
//                                                     <img
//                                                         className="select__token-icon"
//                                                         width="36"
//                                                         height="36"
//                                                         src={svgIcon1}
//                                                         alt="token icon"
//                                                     />
//                                                     <div className="select__token-texts">
//                                                         <p className="select__token-text">Ethereum</p>
//                                                     </div>
//                                                 </div>
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//
//             {/* Footer */}
//             <footer className="footer">
//                 <div className="footer__inner">
//                     <div className="footer__btns">
//                         <RouterLink to={'/auto-convert-step-three'} className="footer__btn btn">
//                             Далее
//                         </RouterLink>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }
//
// export default AutoConvertStepTwo;

import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'
import swapSvg from '../../../assets/img/icons/swap.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import Menu from "../../../components/Menu";
import usePayoutCurrencies from "../../../hooks/usePayoutCurrencies";
import useSwapCurrencies from "../../../hooks/useSwapCurrencies";
import SelectContainer from "../../../components/select/SelectContainer";
import useTranslation from "../../../hooks/useTranslation";


function AutoConvertStepTwo() {

    const { user, triggerVibration } = useTelegram();
    const {translation} = useTranslation();

    const navigate = useNavigate();
    const { currencies, currenciesConvertedData, loading, error } = useSwapCurrencies();

    const [tokensList1,setTokensList1] = useState(null);
    const [tokensList2,setTokensList2] = useState(null);


    const [isOpenNetwork1,setIsOpenNetwork1] = useState(false);
    const [isOpenToken1,setIsOpenToken1] = useState(false);

    const [isOpenToken2,setIsOpenToken2] = useState(false);
    const [isOpenNetwork2,setIsOpenNetwork2] = useState(false);


    const [selectedNetwork1,setSelectedNetwork1] = useState(null);
    const [selectedToken1,setSelectedToken1] = useState(null);

    const [selectedNetwork2,setSelectedNetwork2] = useState(null);
    const [selectedToken2,setSelectedToken2] = useState(null);


    useEffect(() => {
        if (currenciesConvertedData) {
            console.log(currenciesConvertedData, 'currenciesData')
            setTokensList1(currenciesConvertedData[0]?.items)
            setTokensList2(currenciesConvertedData[0]?.items)

            setSelectedNetwork1(currenciesConvertedData[0])
            setSelectedNetwork2(currenciesConvertedData[0])
            setSelectedToken1(currenciesConvertedData[0]?.items[0])
            setSelectedToken2(currenciesConvertedData[0]?.items[0])
            // setSearchTokensList(currenciesConvertedData[0]?.items)
        }
    }, [currenciesConvertedData]);

    useEffect(() => {
        // checkUser();
        console.log(selectedNetwork1,selectedToken1,selectedNetwork2,selectedToken2)
    }, [selectedNetwork1,selectedToken1,selectedNetwork2,selectedToken2]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    const handleChangeCryptoChains1 = (item) => {
        console.log(item, 'handleChangeCryptoChains')
        setSelectedNetwork1(item)
        setTokensList1(item.items);
        // setSearchTokensList(item.items);
    };

    const handleChangeCryptoToken1 = (item) => {
        console.log(item, 'handleChangeCryptoToken')
        setSelectedToken1(item);
        // setSearchTokensList(item.items);
    };



    const handleChangeCryptoChains2 = (item) => {
        setSelectedNetwork2(item)
        console.log(item, 'handleChangeCryptoChains')
        setTokensList2(item.items);
    };

    const handleChangeCryptoToken2 = (item) => {
        console.log(item, 'handleChangeCryptoToken')
        setSelectedToken2(item);
    };

    return (
        <div className="wrapper">
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
                    <h1 className="title">{translation?.autoconvert}</h1>


                    <div className="swap">
                        <div className="swap__group">
                            <p className="swap__label">{translation?.giving}</p>

                            {currenciesConvertedData &&
                                <div className={'beeg-zindex'}>
                                    <SelectContainer
                                        translation={translation}
                                        label={translation?.network}
                                        data={currenciesConvertedData}
                                        defaultIndex={0}
                                        onChange={(item)=>{
                                            handleChangeCryptoChains1(item)
                                        }}
                                    />
                                </div>
                            }
                            {tokensList1 &&
                                <SelectContainer
                                    translation={translation}
                                    label={translation?.token}
                                    data={tokensList1}
                                    defaultIndex={0}
                                    onChange={(item)=>{
                                        handleChangeCryptoToken1(item)
                                    }}
                                />
                            }

                        </div>

                        <img
                            className="swap__icon"
                            width="32"
                            height="32"
                            src={swapSvg}
                            alt="swap icon"
                        />

                        <div className="swap__group">
                            <p className="swap__label">Получаем</p>
                            {currenciesConvertedData &&
                                <div className={'beeg-zindex'}>
                                    <SelectContainer
                                        label={translation?.network}
                                        translation={translation}
                                        data={currenciesConvertedData}
                                        defaultIndex={0}
                                        onChange={(item)=>{
                                            handleChangeCryptoChains2(item)
                                        }}
                                    />
                                </div>
                            }
                            {tokensList1 &&
                                <SelectContainer
                                    label={translation?.token}
                                    translation={translation}
                                    data={tokensList2}
                                    defaultIndex={0}
                                    onChange={(item)=>{
                                        handleChangeCryptoToken2(item)
                                    }}
                                />
                            }


                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    {selectedNetwork1 && selectedToken1 && selectedNetwork2 && selectedToken2 &&

                        <div
                            onClick={()=>{
                                console.log(selectedToken1, 'selectedToken1')
                                console.log(selectedToken2, 'selectedToken2')
                            }}
                            className="footer__btns"
                        >
                            <RouterLink to={`/auto-convert-step-three?currencyfrom=${selectedToken1?.cryptoToken}&currencyfromCryptoChainName=${selectedToken1?.cryptoChainName}&currencyto=${selectedToken2?.cryptoToken}&currencyToCryptoChainName=${selectedToken2?.cryptoChainName}`} className="footer__btn btn">{translation?.next}</RouterLink>
                        </div>
                    }

                </div>
            </footer>
        </div>
    );
}

export default AutoConvertStepTwo;
