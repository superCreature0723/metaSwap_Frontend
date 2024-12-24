import React, { useEffect, useRef } from 'react';
import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useTelegram } from '../src/TelegramContext/index';
import {TonConnectUIProvider} from '@tonconnect/ui-react';


import Main from './pages/Main';
import TransactionsHistory from './pages/TransactionsHistory';
import TransactionsHistoryDetails from "./pages/TransactionsHistoryDetails";

// Send
import CurrencySelection from "./pages/Send/CurrencySelection";
import OutgoingTransfer from "./pages/Send/OutgoingTransfer";
import OperationCompleted from "./pages/Send/OperationCompleted";

// Deposit
import DepositCurrencySelection from "./pages/Deposit/DepositCurrencySelection";
import DepositReplenishment from "./pages/Deposit/DepositReplenishment";

// Swap
import SwapCurrencySelection from "./pages/Swap/SwapCurrencySelection";
import SwapStep2 from "./pages/Swap/SwapStep2";
import SwapOperationCompleted from "./pages/Swap/SwapOperationCompleted";

// Offchain
import OffChainMain from "./pages/OffChain/OffChainMain";
import OffchainSendCurrencySelection from "./pages/OffChain/OffchainSendCurrencySelection";
import OffchainSendSetPriceAndWalet from "./pages/OffChain/OffchainSendSetPriceAndWalet";
import OffchainOperationCompleted from "./pages/OffChain/OffchainOperationCompleted";
import OffChainGetWallet from "./pages/OffChain/OffChainGetWallet";

// Autoconvert
import AutoConvertStepOne from "./pages/AutoConvert/AutoConvertStepOne";
import AutoConvertStepTwo from "./pages/AutoConvert/AutoConvertStepTwo";
import AutoConvertStepThree from "./pages/AutoConvert/AutoConvertStepThree";

// Settings
import SettingsMain from "./pages/Settings/SettingsMain";
import SettingsChangeEmail from "./pages/Settings/SettingsChangeEmail";
import SettingsChangeEmailCompleted from "./pages/Settings/SettingsChangeEmailCompleted";

import VerificationLimitsPage from "./pages/Settings/Verification/VerificationLimitsPage";
import VerificationWriteUserData from "./pages/Settings/Verification/VerificationWriteUserData";
import VerificationStatusCheck from "./pages/Settings/Verification/VerificationStatusCheck";
import VerificationCompleted from "./pages/Settings/Verification/VerificationCompleted";

import Settings2Fa from "./pages/Settings/Settings2Fa";
import {getAccount} from "./utils/userApi";
import Loader from "./components/Loader";
import useTranslation from "./hooks/useTranslation";


function App() {
    const { user, webApp } = useTelegram();
    const {translation, handleLanguageChange} = useTranslation();

    const [loader, setLoader] = React.useState(true);
    const [show2FaPage, setShow2FaPage] = React.useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const [connectSocket, setConnectSocket] = React.useState(false);
    const [socket, setSocket] = React.useState(null);

    const isMounted = useRef(false);

    useEffect(() => {


        if (process.env.REACT_APP_DEBUG == 'true') {

            if (!isMounted.current) {

                console.log(user, 'user------111')
                checkUser();
                isMounted.current = true;
            }
        } else {
            // PROD
            if (webApp?.initData && webApp?.initData != '') {

                if (webApp?.initData) {
                    checkUser();
                }
            }
        }

    }, [webApp?.initData]);

    const getDeviceType = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            return "mobile";
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "mobile";
        }
        return "desktop";
    };


    const checkUser = async () => {

        const {error, data} = await getAccount(null, webApp?.initData);

        console.log(error, 'errorerror')
        console.log(data, 'data')

        if (error) {

            console.log(window.location, 'window.location')

            if (error?.kind == "AUTH_OTP_REQUIRED_ERR" && window.location?.pathname != '/settings-2fa') {
                // navigate('/settings-2fa?type=auth')
                window.location.href = 'settings-2fa?type=auth'
            }
            setLoader(false)

            console.log('ERRROR!', error);
            return ;
        }

        console.log(data, 'data------')

        handleLanguageChange(data?.language)

        setTimeout(()=>{
            setLoader(false)
        }, 1000)
    };

    if (loader) {
        return (
            <Loader/>
        )
    }


    return (
        <TonConnectUIProvider manifestUrl="https://mindl.in/tonconnect-manifest.json">
            <Routes>
                <>
                    <Route path="/" element={<Main />} />
                    <Route path="/transactions-history" element={<TransactionsHistory />} />
                    <Route path="/transactions-history-details" element={<TransactionsHistoryDetails />} />

                    {/*Send*/}
                    <Route path="/currency-selection" element={<CurrencySelection />} />
                    <Route path="/outgoing-transfer" element={<OutgoingTransfer />} />
                    <Route path="/operation-completed" element={<OperationCompleted />} />

                    {/*Deposit*/}
                    <Route path="/deposit-currency-selection" element={<DepositCurrencySelection />} />
                    <Route path="/deposit-replenishment" element={<DepositReplenishment />} />

                    {/*Swap*/}
                    <Route path="/swap-currenc-selection" element={<SwapCurrencySelection />} />
                    <Route path="/swap-step-two" element={<SwapStep2 />} />
                    <Route path="/swap-operation-completed" element={<SwapOperationCompleted />} />

                    {/*Offchain*/}
                    <Route path="/offchain-main" element={<OffChainMain />} />
                    <Route path="/offchain-send-currency-selection" element={<OffchainSendCurrencySelection />} />
                    <Route path="/offchain-send-set-price-and-walet" element={<OffchainSendSetPriceAndWalet />} />
                    <Route path="/offchain-operation-completed" element={<OffchainOperationCompleted />} />
                    <Route path="/offchain-get-wallet" element={<OffChainGetWallet />} />

                    {/*AutoConvert*/}
                    <Route path="/auto-convert-step-one" element={<AutoConvertStepOne />} />
                    <Route path="/auto-convert-step-two" element={<AutoConvertStepTwo />} />
                    <Route path="/auto-convert-step-three" element={<AutoConvertStepThree />} />

                    {/*Settings*/}
                    <Route path="/settings" element={<SettingsMain />} />
                    <Route path="/settings-change-email" element={<SettingsChangeEmail />} />
                    <Route path="/settings-change-email-completed" element={<SettingsChangeEmailCompleted />} />

                    <Route path="/verification-limits-page" element={<VerificationLimitsPage />} />
                    <Route path="/verification-write-user-data" element={<VerificationWriteUserData />} />
                    <Route path="/verification-status-check" element={<VerificationStatusCheck />} />
                    <Route path="/verification-completed" element={<VerificationCompleted />} />

                    <Route path="/settings-2fa" element={<Settings2Fa />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </>

            </Routes>
        </TonConnectUIProvider>
    );
}

export default App;
