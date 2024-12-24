import { useState, useEffect } from 'react';
import {getAccount, getAssets, getCurrencies, getTransactions} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useTransactions = () => {
    const { user, triggerVibration, webApp  } = useTelegram();
    const [assets, setAssets] = useState(null);
    const [loadingAssets, setLoadingAssets] = useState(true);
    const [errorAssets, setErrorAssets] = useState(null);

    useEffect(() => {
        fetchAssets();
    }, []);

    const fetchAssets = async () => {
        setLoadingAssets(true)
        const {error, data} = await getAssets(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setErrorAssets(error);
            setLoadingAssets(false);

        } else {

            setAssets(data);
            setLoadingAssets(false);
            console.log(data, 'data')

        }

    };

    return { assets, loadingAssets, errorAssets, fetchAssets };
};

export default useTransactions;
