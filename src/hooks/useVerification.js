import {useState, useEffect, useRef} from 'react';
import {createDeposit, getVerification, getVerificationUrl, sendVerification} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useVerification = () => {

    const { user, triggerVibration, webApp  } = useTelegram();

    const [getVerificationData, setGetVerification] = useState(null);
    const [getVerificationLoading, setGetVerificationLoading] = useState(false);
    const [getVerificationError, setGetVerificationError] = useState(null);

    const [getVerificationUrlAnswer, setGetVerificationUrlAnswer] = useState(null);
    const [getVerificationUrlLoading, setGetVerificationUrlLoading] = useState(false);
    const [getVerificationUrlError, setGetVerificationUrlError] = useState(null);


    const [updateVerification, setUpdateVerification] = useState(null);
    const [updateVerificationLoading, setUpdateVerificationLoading] = useState(false);
    const [updateVerificationError, setUpdateVerificationError] = useState(null);

    const isMounted = useRef(false);


    useEffect(() => {

        if (!isMounted.current) {
            fetchGetVerification();
            isMounted.current = true;
        }

    }, []);

    const fetchGetVerification = async () => {

        setGetVerificationLoading(true);
        const {error, data} = await getVerification(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setGetVerificationError(error);
            setGetVerificationLoading(false);

        } else {
            setGetVerificationError(null);
            setGetVerification(data);
            setGetVerificationLoading(false);

            console.log(data, 'data')

        }

    };


    const fetchGetVerificationUrl = async () => {

        setGetVerificationUrlLoading(true);
        const {error, data} = await getVerificationUrl(null, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setGetVerificationUrlError(error);
            setGetVerificationUrlLoading(false);

        } else {
            setGetVerificationUrlError(null);
            setGetVerificationUrlAnswer(data);
            setGetVerificationUrlLoading(false);

            console.log(data, 'data')

        }

    };



    const fetchUpdateVerification = async (formData) => {
        setUpdateVerificationLoading(true)
        const {error, data} = await sendVerification(formData, webApp?.initData);

        if (error) {
            console.log('ERRROR!', error);
            setUpdateVerificationError(error);
            setUpdateVerificationLoading(false);

        } else {
            setUpdateVerificationError(null);
            setUpdateVerification(data);
            setUpdateVerificationLoading(false);

            console.log(data, 'data')

        }

    };
    return {
        getVerificationData, getVerificationLoading, getVerificationError, fetchGetVerification,
        updateVerification, updateVerificationLoading, updateVerificationError, fetchUpdateVerification,

        getVerificationUrlAnswer,
        getVerificationUrlLoading,
        getVerificationUrlError,
        fetchGetVerificationUrl
    };
};

export default useVerification;
