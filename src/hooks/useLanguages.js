import {useState, useEffect, useRef} from 'react';
import {getAccount, getCurrencies, getLanguages} from "../utils/userApi";
import {useTelegram} from "../TelegramContext";

const useLanguages = () => {
    const { user, triggerVibration, webApp  } = useTelegram();
    const [languages, setLanguages] = useState(null);
    const [loadingLanguages, setLoadingLanguages] = useState(true);
    const [errorLanguages, setErrorLanguages] = useState(null);
    const isMounted = useRef(false);

    useEffect(() => {

        const fetchLanguages = async () => {

            const {error, data} = await getLanguages(null, webApp?.initData);

            if (error) {
                console.log('ERRROR!', error);
                setErrorLanguages(error);
                setLoadingLanguages(false);

            } else {

                setLanguages(data);
                setLoadingLanguages(false);

                console.log(data, 'data')

            }

        };

        if (!isMounted.current) {
            fetchLanguages();
            isMounted.current = true;
        }
    }, []);

    return { languages, loadingLanguages, errorLanguages };
};

export default useLanguages;
