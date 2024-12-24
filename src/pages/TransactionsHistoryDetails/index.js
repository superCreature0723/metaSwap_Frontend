import React from 'react';
import {useNavigate, LinkProps, Link as RouterLink, useLocation} from 'react-router-dom';

import navBack from '../../assets/img/icons/nav-back.svg';
import navDots from '../../assets/img/icons/nav-dots.svg'
import addressBook from '../../assets/img/icons/address-book.svg'
import Menu from "../../components/Menu";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const TransactionsHistoryDetails = () => {
    const navigate = useNavigate();

    const query = useQuery();
    const cryptoToken = query.get('cryptoToken');
    const amount = query.get('amount');
    const chainName = query.get('chainName');
    const date = query.get('date');
    const name1 = query.get('name1');
    const name2 = query.get('name2');
    const color = query.get('color');
    const address = query.get('address');


    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="wrapper">
            {/* Header */}
            <header className="header">
                {/* Navbar */}
                <nav className="nav">
                    <div className="nav__item" style={{cursor: 'pointer'}} href="#" onClick={goBack}>
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
                    <h1 className="title">Детали транзакции</h1>

                    <div className="detalies">
                        <div className="detalies__inner">
                            <div className="detalies__head">
                                <p className="detalies__head-label">
                                    {/*Исходящий перевод*/}
                                    {name1}
                                </p>
                                <p className="detalies__head-sum">{amount} {cryptoToken}</p>
                            </div>

                            <div className="detalies__rows">
                                <div className="detalies__row">
                                    <p className="detalies__text">Сеть:</p>
                                    <p className="detalies__text">
                                        {/*BNB Smart Chain (bep20)*/}
                                        {chainName}
                                    </p>
                                </div>

                                <div className="detalies__row">
                                    <p className="detalies__text">Дата:</p>
                                    <p className="detalies__text">{date.split('  ')[0]}</p>
                                </div>

                                <div className="detalies__row">
                                    <p className="detalies__text">Время</p>
                                    <p className="detalies__text">{date.split('  ')[1]}</p>
                                </div>

                                <div className="detalies__row">
                                    <p className="detalies__text">Статус</p>
                                    <p className={`detalies__text ${color}`}>{name2}</p>
                                </div>

                                <div className="detalies__row">
                                    <p className="detalies__text">Получатель:</p>
                                    <div href="#" className="detalies__text">{address}</div>
                                </div>

                            </div>

                            <div className="detalies__contact">
                                <div className="form__input-gorup">
                                    <input className="form__input" type="text" placeholder="Name Tag Mark" />
                                    <button type="button" className="form__input-btn">
                                        <img
                                            className="form__input-icon"
                                            width="24"
                                            height="24"
                                            src={addressBook}
                                            alt="address-book icon"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer__inner">
                    <div className="footer__btns">
                        <div className="footer__btn btn" href="#">Повторить</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TransactionsHistoryDetails;


