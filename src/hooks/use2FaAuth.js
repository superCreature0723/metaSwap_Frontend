import {useState, useEffect, useRef} from 'react';
import {
    authOtp,
    createDeposit,
    createOtpSecret,
    disableOtp,
    enableOtp, getOtpData,
    getVerification,
    sendVerification
} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const use2FaAuth = () => {

    const { user, triggerVibration, webApp  } = useTelegram();

    const [otpCreateSecret, setOtpCreateSecret] = useState(null);
    const [otpCreateSecretLoading, setOtpCreateSecretLoading] = useState(false);
    const [otpCreateSecretError, setOtpCreateSecretError] = useState(null);

    const [otpEnable, setOtpEnable] = useState(null);
    const [otpEnableLoading, setOtpEnableLoading] = useState(false);
    const [otpEnableError, setOtpEnableError] = useState(null);

    const [otpDisable, setOtpDisable] = useState(null);
    const [otpDisableLoading, setOtpDisableLoading] = useState(false);
    const [otpDisableError, setOtpDisableError] = useState(null);

    const [getOtp, setGetOtp] = useState(null);
    const [getOtpLoading, setGetOtpLoading] = useState(false);
    const [getOtpError, setGetOtpError] = useState(null);

    const [authOtpData, setAuthOtpData] = useState(null);
    const [authOtpDataLoading, setAuthOtpDataLoading] = useState(false);
    const [authOtpDataError, setAuthOtpDataError] = useState(null);

    const isMounted = useRef(false);


    useEffect(() => {

        // if (!isMounted.current) {
        //     fetchGetVerification();
        //     isMounted.current = true;
        // }

    }, []);

    const fetchCreateOtpSecret = async () => {

        setOtpCreateSecretLoading(true);

        const {error, data} = await createOtpSecret(null, webApp?.initData);

        if (error) {

            console.log('ERRROR!', error);
            setOtpCreateSecretError(error);
            setOtpCreateSecretLoading(false);

        } else {

            setOtpCreateSecretError(null);
            setOtpCreateSecret(data);
            setOtpCreateSecretLoading(false);

            console.log(data, 'data')

        }

    };


    const fetchEnableOtp = async (secret, passcode) => {

        setOtpEnableLoading(true);

        const {error, data} = await enableOtp({
            secret:secret,
            passcode: passcode
        }, webApp?.initData);

        if (error) {

            console.log('ERRROR!', error);
            setOtpEnableError(error);
            setOtpEnableLoading(false);

        } else {

            setOtpEnableError(null);
            setOtpEnable(data);
            setOtpEnableLoading(false);

            console.log(data, 'data')

        }

    };


    const fetchDisableOtp = async (passcode) => {

        setOtpEnableLoading(true);
        const {error, data} = await disableOtp({
            passcode: passcode
        }, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setOtpDisableError(error);
            setOtpDisableLoading(false);
        } else {
            setOtpDisableError(null);
            setOtpDisable(data);
            setOtpDisableLoading(false);

            console.log(data, 'data')
        }

    };


    const fetchAuthOtp = async (passcode) => {

        setAuthOtpDataLoading(true);
        const {error, data} = await authOtp({
            passcode: passcode
        }, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setAuthOtpDataError(error);
            setAuthOtpDataLoading(false);
        } else {
            setAuthOtpDataError(null);
            setAuthOtpData(data);
            setAuthOtpDataLoading(false);

            if (data?.kind == 'OK') {
                await localStorage.setItem('session', data?.session )
            }

            console.log(data, 'data')
        }

    };


    const fetchGetOtp = async () => {

        setGetOtpLoading(true);
        const {error, data} = await getOtpData(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setGetOtpError(error);
            setGetOtpLoading(false);
        } else {
            setGetOtpError(null);
            setGetOtp(data);
            setGetOtpLoading(false);

            console.log(data, 'data')
        }

    };


    return {otpCreateSecret, otpCreateSecretLoading, otpCreateSecretError, fetchCreateOtpSecret,
        otpEnable, otpEnableLoading, otpEnableError, fetchEnableOtp,
        otpDisable, otpDisableLoading, otpDisableError, fetchDisableOtp,
        getOtp, getOtpLoading, getOtpError, fetchGetOtp,
        authOtpData, authOtpDataLoading, authOtpDataError, fetchAuthOtp,
    };

};

export default use2FaAuth;
