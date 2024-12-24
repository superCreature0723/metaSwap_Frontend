import {useState, useEffect, useRef} from 'react';
import {getAccount, getCurrencies} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";
import {useNavigate} from "react-router-dom";

const useUserData = () => {

    const { user, triggerVibration, webApp  } = useTelegram();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            fetchUserData();
            isMounted.current = true;
        }
    }, []);

    const fetchUserData = async () => {
        setLoading(true)
        const {error, data} = await getAccount(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);

            // if (error?.kind == "AUTH_OTP_REQUIRED_ERR") {
            //     // navigate('/settings-2fa?type=auth')
            //     window.location.href = 'settings-2fa?type=auth'
            // }
            setError(error);
            setLoading(false);

        } else {

            setUserData(data);
            setLoading(false);

            console.log(data, 'data')

        }

    };
    return { userData, loading, error, fetchUserData };
};

export default useUserData;
