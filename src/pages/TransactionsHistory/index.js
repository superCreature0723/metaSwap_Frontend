import React, {useEffect, useState} from 'react';
import { useTelegram } from '../../TelegramContext';
import { useNavigate } from "react-router-dom";
import '../../assets/css/style.css'; // Assuming you have a CSS file for styles
import { LinkProps, Link as RouterLink } from "react-router-dom";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import navBack from '../../assets/img/icons/nav-back.svg'
import navDots from '../../assets/img/icons/nav-dots.svg'
import selectArrow from '../../assets/img/icons/select-arrow.svg'


import checkSvg from '../../assets/img/icons/check.svg';
import downloadSharp from '../../assets/img/icons/download-sharp.svg';
import useCurrencies from "../../hooks/useCurrencies";
import SelectContainer from "../../components/select/SelectContainer";
import useTransactions from "../../hooks/useTransactions";
import Loader from "../../components/Loader";
import {getTransactions} from "../../utils/userApi";
import Menu from "../../components/Menu";
import {EnIcon, RuIcon} from "../../assets/svg/LanguageIcons";
import useTranslation from "../../hooks/useTranslation";



function TransactionsHistory() {
    const {translation} = useTranslation();

    const { user, triggerVibration, webApp } = useTelegram();
    const navigate = useNavigate();

    const [isOpenToken,setIsOpenToken] = useState(false);
    const [isOpenNetwork,setIsOpenNetwork] = useState(false);
    const [isOpenSort,setIsOpenSort] = useState(false);

    const { currencies, currenciesConvertedData, loading, error } = useCurrencies();
    // const { transactions, loadingTransactions, errorTransactions } = useTransactions();

    const [transactions, setTransactions] = useState(null);
    const [loadingTransactions, setLoadingTransactions] = useState(true);
    const [errorTransactions, setErrorTransactions] = useState(null);



    const [searchTransactions, setSearchTransactions] = useState(transactions);

    const [tokensList,setTokensList] = useState(null);
    const [selectedChain,setSelectedChain] = useState(null);
    const [selectedToken,setSelectedToken] = useState(null);
    const [selectedCats,setSelectedCats] = useState([]);


    useEffect(() => {
        if (currenciesConvertedData) {
            setTokensList(currenciesConvertedData[0]?.items)

            setSelectedChain(currenciesConvertedData[0])
            setSelectedToken(currenciesConvertedData[0]?.items[0])
        }
    }, [currenciesConvertedData]);


    useEffect(() => {
        setSearchTransactions(transactions);
    }, [transactions]);


    useEffect(() => {

        console.log(selectedCats, 'selectedCats')
        console.log(selectedChain, 'selectedChain')
        console.log(selectedToken, 'selectedToken')

        handleGetTransactions(selectedCats, selectedChain, selectedToken);

    }, [selectedCats, selectedChain, selectedToken]);


    const goBack = () => {
        // history.goBack();
        navigate(-1);

    };

    const handleGetTransactions = async (selectedCats, selectedChain, selectedToken) => {

        const EXCHANGE_ = translation?.swap;
        const TRANSFER_ = translation?.translations;
        const INCOMING_ = translation?.incoming;
        const OUTCOMING_ = translation?.outgoing;

        const dictionary = {
            [TRANSFER_]: 'TRANSFER', //'Переводы': 'TRANSFER',
            [EXCHANGE_] : 'EXCHANGE',//'Обмен': 'EXCHANGE',
            'Offchain': 'OFFCHAIN',
            [INCOMING_]: 'INCOMING', //'Входящие': 'INCOMING',
            [OUTCOMING_]: 'OUTCOMING' //'Исходящие': 'OUTCOMING'
        };

        const category = selectedCats.map(item => dictionary[item]).join(',');


        const body = {
            crypto_token: selectedToken?.cryptoToken,
            crypto_chain: selectedToken?.cryptoChain,
            category: category
        }

        console.log(body, 'body')
        const {error, data} = await getTransactions(body, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorTransactions(error);
            setLoadingTransactions(false);

        } else {

            setTransactions(data);
            setLoadingTransactions(false);
            console.log(data, 'data')

        }

    };


    const handleChangeCryptoChains = (item) => {
        console.log(item, 'handleChangeCryptoChains')
        setTokensList(item.items);
        setSelectedChain(item);
        setSelectedToken(item.items[0])
    };
    const handleChangeCryptoToken = (item) => {
        console.log(item, 'handleChangeCryptoChains')
        setSelectedToken(item);
    };

    const getTransactionsOptions = (item) => {

        if (item?.type == 'INTERNAL_TRANSFER_OUTPUT') {
            return {
                name1: translation?.output,//'Вывод',
                name2: translation?.sent, //'Отправленно',
                color: 'orange-color',
                address: item?.userTo,
                date: format(new Date(item?.createdAt), "dd MMMM yyyy  HH:mm:ss", { locale: ru })
            };


        } else if (item?.type == 'INTERNAL_TRANSFER_INPUT') {
            return {
                name1: translation?.topUp,//'Пополнение',
                name2: translation?.received,
                color: 'primary-color',
                address: item?.userFrom,
                date: format(new Date(item?.createdAt), "dd MMMM yyyy  HH:mm:ss", { locale: ru })

            };
        } else if (item?.type == 'DEPOSIT') {

            return {
                name1: translation?.topUp,//'Пополнение',
                name2: getDepositName2Status(item),
                color: getDepositColor(item),
                address: item?.userFrom,
                date: format(new Date(item?.createdAt), "dd MMMM yyyy  HH:mm:ss", { locale: ru })

            };

        } else if (item?.type == 'PAYOUT') {

            return {
                name1: translation?.output ,//'Вывод',
                name2: getPayoutName2Status(item),
                color: getPayoutColor(item),
                address: item?.userFrom,
                date: format(new Date(item?.createdAt), "dd MMMM yyyy  HH:mm:ss", { locale: ru })

            };
        }
    }

    const getDepositName2Status = (item) => {

        switch (item.depositState) {
            case 'PENDING_PAYMENT':
                return translation?.unpaid;//'Не оплачен';
                break;
            case 'MEM_POOL_FOUND':
                return translation?.awaitingConfirmations; //'Ожидание подтверждений';
                break;
            case 'PAID':
                return translation?.paid ;//'Оплачено';
                break;
            case 'PENDING_INTERVENTION':
                return translation?.underReview;//'На расмотрение';
                break;
            case 'COMPLETED':
                return translation?.paid; //'Оплачено';
                break;
            case 'PENDING_COMPLIANCE_CHECK':
                return translation?.pendingVerification;//'На проверке';
                break;
            case 'DECLINED':
                return translation?.blocked//'Заблокированно';
                break;
            case 'EXPIRED':
                return translation?.expired; //'Истек';
                break;
            default:
                return '';
                break
        }
    }
    const getDepositColor = (item) => {

        switch (item.depositState) {
            case 'PENDING_PAYMENT':
                return 'red-color';
                break;
            case 'MEM_POOL_FOUND':
                return 'orange-color';
                break;
            case 'PAID':
                return 'primary-color';
                break;
            case 'PENDING_INTERVENTION':
                return 'orange-color';
                break;
            case 'COMPLETED':
                return 'primary-color';
                break;
            case 'PENDING_COMPLIANCE_CHECK':
                return 'orange-color';
                break;
            case 'DECLINED':
                return 'red-color';
                break;
            case 'EXPIRED':
                return 'red-color';
                break;
            default:
                return '';
                break
        }
    }


    const getPayoutName2Status = (item) => {

        switch (item.payoutState) {
            case 'IN_PROGRESS':
                return  translation?.inProgress;//'В обработке';
                break;
            case 'COMPLETED':
                return  translation?.completed;//'Завершен';
                break;
            case 'FAILED':
                return  translation?.error;//'Ошибка';
                break;
            case 'CANCELED':
                return  translation?.canceled;//'Отменен';
                break;
            default:
                return '';
                break
        }
    }
    const getPayoutColor = (item) => {

        switch (item.payoutState) {
            case 'IN_PROGRESS':
                return 'orange-color';
                break;
            case 'COMPLETED':
                return 'primary-color';
                break;
            case 'FAILED':
                return 'red-color';
                break;
            case 'CANCELED':
                return 'red-color';
                break;
            default:
                return '';
                break
        }
    }


    return (
        <div className="wrapper">

            { (loading || loadingTransactions) && (
                <Loader/>
            )}

            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div onClick={goBack} style={{cursor: 'pointer'}} className="nav__item">
                        <img
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
                    <h1 className="title">История транзакций</h1>

                    <div className="selects">

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

                            <SelectContainer
                                translation={translation}
                                data={tokensList}
                                defaultIndex={0}
                                onChange={(item)=>{
                                    handleChangeCryptoToken(item)
                                }}
                            />

                    </div>

                    <div className={`select ${isOpenSort ? 'open' : ''}`} style={{zIndex:10}}>
                        <p className="select__label">   {translation?.sorting}</p>
                        <button
                            onClick={()=>{
                                setIsOpenSort(prevState => !prevState);
                            }}
                            type="button"
                            className="select__selected"
                        >
                            <div className="select__info">
                                <p className="select__text">

                                    {selectedCats.length == 0 ? translation?.select : selectedCats.length == 5 ? `${translation?.all}`: `${translation?.selected} ${selectedCats.length}`}

                                </p>
                            </div>

                            <div className="select__btn">
                                <img
                                    className="select__btn-arrow"
                                    width="14"
                                    height="8"
                                    src={selectArrow}
                                    alt="arrow icon"
                                />
                            </div>
                        </button>

                        <form action="#" className="select__sorts" style={{zIndex:2}}>
                            {[translation?.translations,translation?.swap, 'Offchain', translation?.incoming, translation?.outgoing].map(
                                (label, index) => {
                                    let selected = selectedCats.findIndex(item => item === label);
                                   return (
                                       <div className="select__sort" key={index}>
                                           <div
                                               onClick={() => {
                                                   // setSelectedCats([...selectedCats, label]);
                                                   setSelectedCats((prevItems) => {
                                                       if (prevItems.includes(label)) {
                                                           return prevItems.filter(i => i !== label);
                                                       } else {
                                                           return [...prevItems, label];
                                                       }
                                                   });
                                                   setIsOpenSort(false)

                                               }}
                                               className="select__sort-group"
                                           >
                                               <label className="select__sort-label" htmlFor={`sort-${index + 1}`}>
                                                   {label}
                                               </label>
                                               {/*<input*/}
                                               {/*    className="select__sort-input"*/}
                                               {/*    type="checkbox"*/}
                                               {/*    id={`sort-${index + 1}`}*/}
                                               {/*    defaultChecked={index < 2}*/}
                                               {/*/>*/}

                                           </div>

                                           {selected != -1 &&
                                               <img
                                                   className="select__sort-checked"
                                                   width="16"
                                                   height="16"
                                                   src={checkSvg}
                                                   alt="check icon"
                                                   style={{opacity:1}}
                                               />
                                           }

                                       </div>
                                   )
                                }
                            )}
                        </form>
                    </div>

                    <div className="transactions">
                        <ul className="transactions__list">

                            {searchTransactions?.items.map((item, index) => {
                                let options = getTransactionsOptions(item);
                                return (
                                    <li className="transactions__item" key={index}>
                                        <RouterLink
                                            to={`/transactions-history-details?cryptoToken=${item?.currency?.cryptoTokenName}&amount=${item?.value}&chainName=${item?.currency?.cryptoChainName}&date=${options?.date}&name1=${options?.name1}&name2=${options?.name2}&color=${options?.color}&address=${options?.address}`}
                                            className="transactions__item-link"
                                        >

                                            <div className="transactions__info">
                                                <img
                                                    className="transactions__icon"
                                                    width="16"
                                                    height="16"
                                                    src={downloadSharp}
                                                    alt="download-sharp"
                                                />

                                                <div className="transactions__texts">
                                                    <p className="transactions__text">
                                                        <b>  {options?.name1}: </b>{options?.address}
                                                    </p>
                                                    <div className="transactions__times">
                                                  <span className="transactions__time">
                                                      {options?.date}
                                                  </span>
                                                        {/*<span className="transactions__time"> 14:37:18</span>*/}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="transactions__sums">
                                                <div className="transactions__sum">
                                                    <span>+{item?.value} </span>
                                                    <span>{item?.currency?.cryptoTokenName}</span>
                                                </div>

                                                <div className={`transactions__action ${options?.color} `}>
                                                    {options?.name2}
                                                </div>
                                            </div>
                                        </RouterLink>
                                    </li>

                                )
                            })}

                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TransactionsHistory;
