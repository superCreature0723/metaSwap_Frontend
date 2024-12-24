import { useState, useEffect, useRef } from 'react';
import {getAccount, getAssets, getCurrencies, getPriceCurrencies, getTransactions} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const usePriceCurrencies = () => {
    const { user, triggerVibration, webApp  } = useTelegram();
    const [priceCurrencies, setPriceCurrencies] = useState(null);
    const [loadingPriceCurrencies, setLoadingPriceCurrencies] = useState(true);
    const [errorPriceCurrencies, setErrorPriceCurrencies] = useState(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            fetchPriceCurrencies();
            isMounted.current = true;
        }
    }, []);

    const fetchPriceCurrencies = async () => {

        setLoadingPriceCurrencies(true)
        const {error, data} = await getPriceCurrencies(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorPriceCurrencies(error);
            setLoadingPriceCurrencies(false);

        } else {

            setPriceCurrencies(data);
            setLoadingPriceCurrencies(false);
            console.log(data, 'data')

        }

    };


    return { priceCurrencies, loadingPriceCurrencies, errorPriceCurrencies, fetchPriceCurrencies };
};

export default usePriceCurrencies;
