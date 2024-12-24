import { useState, useEffect } from 'react';
import {checkEmailCode, getAccount, getCurrencies, getEmailCode} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useChangeEmail = () => {

    const { user, triggerVibration, webApp  } = useTelegram();

    const [getCodeData, setGetCodeData] = useState(null);
    const [getCodeLoading, setGetCodeLoading] = useState(false);
    const [getCodeError, setGetCodeError] = useState(null);


    const [checkCodeData, setCheckCodeData] = useState(null);
    const [checkCodeLoading, setCheckCodeLoading] = useState(false);
    const [checkCodeError, setCheckCodeError] = useState(null);


    const fetchGetCode = async (email) => {
        setGetCodeLoading(true)
        const {error, data} = await getEmailCode({email:email}, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setGetCodeError(error);
            setGetCodeLoading(false);

        } else {
            setGetCodeError(null);
            setGetCodeData(data);
            setGetCodeLoading(false);

            console.log(data, 'data')

        }

    };



    const fetchCheckCode = async (code) => {
        setCheckCodeLoading(true)
        const {error, data} = await checkEmailCode({code:code}, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setCheckCodeError(error);
            setCheckCodeLoading(false);

        } else {
            setCheckCodeError(null);
            setCheckCodeData(data);
            setCheckCodeLoading(false);

            console.log(data, 'data')

        }

    };
    return { getCodeData, getCodeLoading, getCodeError, fetchGetCode,  checkCodeData, checkCodeLoading, checkCodeError, fetchCheckCode};
};

export default useChangeEmail;
