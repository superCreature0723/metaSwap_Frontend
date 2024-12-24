import { useState, useEffect, useRef } from 'react';
import {createDeposit, getAccount, getAssets, getCurrencies, getTransactions} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useTransactions = (id) => {
    const { user, triggerVibration, webApp  } = useTelegram();
    const [deposit, setDeposit] = useState(null);
    const [loadingDeposit, setLoadingDeposit] = useState(true);
    const [errorDeposit, setErrorDeposit] = useState(null);
    const isMounted = useRef(false);

    useEffect(() => {

        const fetchDeposit = async () => {

            const {error, data} = await createDeposit({currencyId:id}, webApp?.initData);

            if (error) {
                console.log('ERRROR!', error);
                setErrorDeposit(error);
                setLoadingDeposit(false);

            } else {
                setDeposit(data);
                setLoadingDeposit(false);
                console.log(data, 'data')
            }

        };


        if (!isMounted.current) {
            fetchDeposit();
            isMounted.current = true;
        }


    }, []);

    return { deposit, loadingDeposit, errorDeposit };
};

export default useTransactions;
