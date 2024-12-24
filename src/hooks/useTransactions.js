import { useState, useEffect } from 'react';
import {getAccount, getCurrencies, getTransactions} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useTransactions = () => {
    const { user, triggerVibration, webApp  } = useTelegram();
    const [transactions, setTransactions] = useState(null);
    const [loadingTransactions, setLoadingTransactions] = useState(true);
    const [errorTransactions, setErrorTransactions] = useState(null);

    useEffect(() => {

        const fetchTransactions = async () => {

            const {error, data} = await getTransactions(null, webApp?.initData);

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

        fetchTransactions();

    }, []);

    return { transactions, loadingTransactions, errorTransactions };
};

export default useTransactions;
