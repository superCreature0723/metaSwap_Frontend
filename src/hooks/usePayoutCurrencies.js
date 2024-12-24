import { useState, useEffect } from 'react';
import {getAccount, getCurrencies, getDepositCurrencies, getPayoutCurrencies} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";
import { BACKEND_URL } from '../utils/constants';

const usePayoutCurrencies = () => {

    const { user, triggerVibration, webApp  } = useTelegram();
    const [currencies, setCurrencies] = useState(null);
    const [currenciesConvertedData,setCurrenciesConvertedData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const convertCurrencies = (data) => {
        const uniqueChains = getUniqueCryptoChains(data);
        let newData = [];

        for (let i = 0; i < uniqueChains.length; i++) {

            let item = {
                cryptoChain: uniqueChains[i]?.cryptoChain,
                cryptoChainName: uniqueChains[i]?.cryptoChainName,
                label: uniqueChains[i]?.cryptoChainName,
                crypticon: `${BACKEND_URL}/static/chain-icons/${uniqueChains[i]?.cryptoChain}.svg`,
                items: []
            };
            for (let j = 0; j < data.items.length; j++) {

                if (data.items[j].cryptoChainName === uniqueChains[i]?.cryptoChainName) {
                    data.items[j].crypticon = `${BACKEND_URL}/static/token-icons/${data.items[j]?.cryptoCode}.svg`
                    data.items[j].label = data.items[j]?.cryptoTokenName
                    item.items.push(data.items[j]);
                }

            }
            newData.push(item);
        }

        return newData;
    };


    const getUniqueCryptoChains =  (data) => {
        const uniqueChains = [];
        const seen = new Set();

        data.items.forEach(item => {
            if (!seen.has(item.cryptoChainName)) {
                seen.add(item.cryptoChainName);
                uniqueChains.push({
                    cryptoChainName: item.cryptoChainName,
                    cryptoChain: item.cryptoChain,
                    cryptoToken: item.cryptoToken,
                    label: item.cryptoChainName
                });
            }
        });

        return uniqueChains;
    }

    useEffect(() => {

        const fetchCurrencies = async () => {

            const {error, data} = await getPayoutCurrencies(null, webApp?.initData);

            if (error) {
                console.log('ERRROR!', error);
                setError(error);
                setLoading(false);

            } else {

                setCurrencies(data);
                setCurrenciesConvertedData(convertCurrencies(data));
                setLoading(false);

            }

        };

        fetchCurrencies();
    }, []);

    return { currencies, currenciesConvertedData,   loading, error };
};

export default usePayoutCurrencies;
