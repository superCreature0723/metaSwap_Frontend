import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";

import navBack from '../../../assets/img/icons/nav-back.svg'
import navDots from '../../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../../assets/img/icons/select-arrow.svg'
import searchSvg from '../../../assets/img/icons/search.svg'

import svgIcon1 from '../../../assets/img/tokens/1.svg';
import svgIcon2 from '../../../assets/img/tokens/2.svg';
import svgIcon3 from '../../../assets/img/tokens/3.svg';
import svgIcon4 from '../../../assets/img/tokens/4.svg';
import useUserData from "../../../hooks/useUserData";
import useCurrencies from "../../../hooks/useCurrencies";
import Loader from "../../../components/Loader";
import SelectContainer from "../../../components/select/SelectContainer";
import Menu from "../../../components/Menu";
import useTranslation from "../../../hooks/useTranslation";


function OffchainSendCurrencySelection() {
    const { user, triggerVibration } = useTelegram();
    const {translation} = useTranslation();

    const navigate = useNavigate();
    const { currencies, currenciesConvertedData, loading, error } = useCurrencies();
    const [tokensList,setTokensList] = useState(null);

    const [searchTokensList,setSearchTokensList] = useState(null);
    const [searchValue,setSearchValue] = useState('');


    useEffect(() => {
        if (currenciesConvertedData) {
            console.log(currenciesConvertedData, 'currenciesData')
            setTokensList(currenciesConvertedData[0]?.items)
            setSearchTokensList(currenciesConvertedData[0]?.items)

        }
    }, [currenciesConvertedData]);

    const goBack = () => {
        // history.goBack();
        navigate(-1);
    };

    const handleChangeCryptoChains = (item) => {
        console.log(item, 'handleChangeCryptoChains')
        setTokensList(item.items);
        setSearchTokensList(item.items);
    };

    return (
        <div className="wrapper">

            { (loading) && (
                <Loader/>
            )}

            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div style={{cursor: 'pointer'}} className="nav__item" href="#" onClick={goBack}>
                        <img
                            style={{cursor: 'pointer'}}
                            className="nav__icon"
                            width="24"
                            height="24"
                            src={navBack}
                            alt="arrow icon"
                        />
                    </div>

                    <Menu/>
                </nav>
            </header>

            {/* Main Page */}
            <main className="main">
                <div className="content">
                    <h1 className="title">{translation?.currencySelection}</h1>

                    <form className="form form-mb-12" action="#">
                        <div className="form__gorup">
                            <div className="form__input-gorup">
                                <input
                                    value={searchValue}
                                    onChange={(e) => {
                                        setSearchValue(e.target.value)
                                        const result = tokensList.filter(item =>
                                            item.cryptoTokenName.toLowerCase().includes(e.target.value.toLowerCase())
                                        );
                                        setSearchTokensList(result)
                                    }}
                                    className="form__input" type="text"
                                    placeholder={translation?.searchToken}
                                />
                                <button type="button" className="form__input-btn">
                                    <img
                                        className="form__input-icon"
                                        width="24"
                                        height="24"
                                        src={searchSvg}
                                        alt="search icon"
                                    />
                                </button>
                            </div>
                        </div>
                    </form>

                    {currenciesConvertedData &&
                        <SelectContainer
                            translation={translation}
                            data={currenciesConvertedData}
                            defaultIndex={0}
                            onChange={(item)=>{
                                handleChangeCryptoChains(item)
                            }}
                        />
                    }


                    <div className="tokens">
                        <ul className="tokens__list">

                            {(!searchTokensList || searchTokensList.length === 0) &&
                                <li style={{color: '#2a2a2a'}} className="tokens__item">
                                    {translation?.tokenNotFound}
                                </li>
                            }
                            {searchTokensList && searchTokensList.map((item, index) => (
                                <li className="tokens__item" key={index}>
                                    <RouterLink to={`/offchain-send-set-price-and-walet?id=${item?.id}&chain-name=${item?.cryptoChainName}&crypto-name=${item?.cryptoTokenName}`} className="tokens__item-link">
                                        <div className="tokens__info">
                                            <img
                                                className="tokens__icon"
                                                width="36"
                                                height="36"
                                                src={item?.crypticon}
                                                alt="token icon"
                                            />
                                            <div className="tokens__texts">
                                                <p className="tokens__text tokens__text--bold">{item?.cryptoTokenName}</p>
                                                <p className="tokens__text">{item?.cryptoChainName}</p>
                                            </div>
                                        </div>
                                        <div className="tokens__texts tokens__texts--right">
                                            <p className="tokens__text tokens__text--bold">0</p>
                                            <p className="tokens__text">$0</p>
                                        </div>
                                    </RouterLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default OffchainSendCurrencySelection;
