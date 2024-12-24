import {useState, useEffect, useRef} from 'react';
import {getAutoconvertsData, sendAutoconverts} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";
import {useNavigate} from "react-router-dom";

const useAutoConverts = () => {

    const { user, triggerVibration, webApp  } = useTelegram();

    const [autoconvertsData, setAutoconvertsData] = useState(null);
    const [autoconvertsDataLoading, setAutoconvertsDataLoading] = useState(true);
    const [autoconvertsDataError, setAutoconvertsDataError] = useState(null);

    const [autoconvertsSendData, setAutoconvertsSendData] = useState(null);
    const [autoconvertsSendDataLoading, setAutoconvertsSendDataLoading] = useState(true);
    const [autoconvertsSendDataError, setAutoconvertsSendDataError] = useState(null);

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            fetchGetAutoconvertsData();
            isMounted.current = true;
        }
    }, []);

    const fetchGetAutoconvertsData = async () => {
        setAutoconvertsDataLoading(true)
        const {error, data} = await getAutoconvertsData(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            // if (error?.kind == "AUTH_OTP_REQUIRED_ERR") {
            //     // navigate('/settings-2fa?type=auth')
            //     window.location.href = 'settings-2fa?type=auth'
            // }
            setAutoconvertsDataError(error);
            setAutoconvertsDataLoading(false);

        } else {
            setAutoconvertsData(data);
            setAutoconvertsDataLoading(false);

            console.log(data, 'data')

        }

    };

    const fetchSendAutoconvertsData = async (body) => {
        setAutoconvertsSendDataLoading(true)
        const {error, data} = await sendAutoconverts(body, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            // if (error?.kind == "AUTH_OTP_REQUIRED_ERR") {
            //     // navigate('/settings-2fa?type=auth')
            //     window.location.href = 'settings-2fa?type=auth'
            // }
            setAutoconvertsSendDataError(error);
            setAutoconvertsSendDataLoading(false);

        } else {
            setAutoconvertsSendData(data);
            setAutoconvertsSendDataLoading(false);

            console.log(data, 'data')

        }

    };
    return {
        autoconvertsData, autoconvertsDataLoading, autoconvertsDataError, fetchGetAutoconvertsData,
        autoconvertsSendData, autoconvertsSendDataLoading, autoconvertsSendDataError, fetchSendAutoconvertsData,
    };
};

export default useAutoConverts;
