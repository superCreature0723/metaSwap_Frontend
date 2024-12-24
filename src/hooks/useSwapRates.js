import {useState, useEffect, useRef} from 'react';
import {apiSwapCreate, getAccount, getCurrencies, getLanguages, getSwapDisplay, getSwapRates} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useSwapRates = () => {
    const { user, triggerVibration, webApp  } = useTelegram();

    const [swapRates, setSwapRates] = useState(null);
    const [loadingSwapRates, setLoadingSwapRates] = useState(true);
    const [errorSwapRates, setErrorSwapRates] = useState(null);


    const [swap, setSwap] = useState(null);
    const [loadingSwap, setLoadingSwap] = useState(true);
    const [errorSwap, setErrorSwap] = useState(null);

    const [swapCreate, setSwapCreate] = useState(null);
    const [loadingSwapCreate, setLoadingSwapCreate] = useState(false);
    const [errorSwapCreate, setErrorSwapCreate] = useState(null);


    const fetchSwapRates = async (currencyFrom, currencyTo, amount) => {

        setLoadingSwapRates(true);

        const {error, data} = await getSwapDisplay({
            "sourceCurrency" : currencyFrom,
            "destinationCurrency" : currencyTo,
            "amount" : amount,
        }, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorSwapRates(error);
            setLoadingSwapRates(false);

        } else {

            setSwapRates(data);
            setLoadingSwapRates(false);

            console.log(data, 'data')

        }

    };

    const fetchSwap = async (currencyFrom, currencyTo, amount) => {

        setLoadingSwap(true);

        const {error, data} = await getSwapDisplay({
            "sourceCurrency" : currencyFrom,
            "destinationCurrency" : currencyTo,
            "amount" : amount,
        }, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorSwap(error);
            setLoadingSwap(false);

        } else {

            setSwap(data);
            setLoadingSwap(false);

            console.log(data, 'data')

        }

    };


    const fetchSwapCreate = async (currencyFrom, currencyTo, amount) => {

        setLoadingSwapCreate(true);

        const {error, data} = await apiSwapCreate({
            sourceCurrency : currencyFrom,
            destinationCurrency : currencyTo,
            amount : amount,
        }, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorSwapCreate(error);
            setLoadingSwapCreate(false);

        } else {

            setSwapCreate(data);
            setLoadingSwapCreate(false);

            console.log(data, 'data')

        }

    };


    return { swapRates, loadingSwapRates, errorSwapRates, fetchSwapRates,
        swap, loadingSwap, errorSwap, fetchSwap,
        swapCreate, loadingSwapCreate, errorSwapCreate, fetchSwapCreate,
    };
};

export default useSwapRates;
