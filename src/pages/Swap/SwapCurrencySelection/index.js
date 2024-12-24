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


function SwapCurrencySelection() {

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
        setSelectedToken1(item.items[0])
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
        setSelectedToken2(item.items[0])

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
                    <a className="nav__item" style={{cursor: 'pointer'}} href="#" onClick={goBack}>
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
                    <h1 className="title">SWAP</h1>


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

                        <div className="footer__btns">
                            <RouterLink to={`/swap-step-two?currencyfrom=${selectedToken1?.cryptoToken}&currencyto=${selectedToken2?.cryptoToken}`} className="footer__btn btn">{translation?.next}</RouterLink>
                        </div>
                    }

                </div>
            </footer>
        </div>
    );
}

export default SwapCurrencySelection;
