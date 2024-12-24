
import {apiRequest, apiRequestFormData} from './apiRequest';
import {BACKEND_URL} from './constants';
import useDepositCurrencies from "../hooks/useDepositCurrencies";

export const getAccount = async (body, tgId ) => {

    const url = `${BACKEND_URL}/account/`;

    console.log(url, 'url')
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getCurrencies = async (body, tgId ) => {

    const url = `${BACKEND_URL}/currencies/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getDepositCurrencies = async (body, tgId ) => {

    const url = `${BACKEND_URL}/deposit-currencies/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getPayoutCurrencies = async (body, tgId ) => {

    const url = `${BACKEND_URL}/payout-currencies/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getSwapRates = async (body, tgId ) => {

    const url = `${BACKEND_URL}/swap-rates/`;
    const method = 'POST';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getSwapDisplay = async (body, tgId ) => {

    const url = `${BACKEND_URL}/swap-display`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const apiSwapCreate = async (body, tgId ) => {
    const url = `${BACKEND_URL}/swaps`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getLanguages = async (body, tgId ) => {

    const url = `${BACKEND_URL}/languages/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getVerification = async (body, tgId ) => {

    const url = `${BACKEND_URL}/verification/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getVerificationUrl = async (body, tgId ) => {

    const url = `${BACKEND_URL}/getFormUrl/`;
    const method = 'POST';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const sendVerification = async (body, tgId ) => {

    const url = `${BACKEND_URL}/verification/`;
    const method = 'POST';
    const response = await apiRequestFormData(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const updateLanguages = async (body, tgId ) => {

    const url = `${BACKEND_URL}/account/update-language/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getEmailCode = async (body, tgId ) => {

    const url = `${BACKEND_URL}/account/request-email-update/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const checkEmailCode = async (body, tgId ) => {

    const url = `${BACKEND_URL}/account/confirm-email-update/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getTransactions = async (body, tgId ) => {

    const {crypto_token,crypto_chain,category} = body

    let url = `${BACKEND_URL}/transactions`;

    let params = [];

    if (crypto_token) {
        params.push(`crypto-token=${crypto_token}`)
    }
    if (crypto_chain) {
        params.push(`crypto-chain=${crypto_chain}`)
    }
    if (category && category != '') {
        params.push(`category=${category}`)
    }


    if (params.length > 0) {
        url += '?' + params.join('&');
    }

    console.log(url, 'urlurlurlurl')

    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getAssets = async (body, tgId ) => {

    const url = `${BACKEND_URL}/assets/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getPriceCurrencies = async (body, tgId ) => {

    const url = `${BACKEND_URL}/price-currencies/`;
    const method = 'GET';
    const response = await apiRequest(url, method, null, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const updatePriceCurrencies = async (body, tgId ) => {

    const url = `${BACKEND_URL}/account/update-currency/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const createDeposit = async (body, tgId ) => {

    const url = `${BACKEND_URL}/deposits/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const sendInternalTransfers = async (body, tgId ) => {

    const url = `${BACKEND_URL}/internal-transfers/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const sendPayoutTransfers = async (body, tgId ) => {

    const url = `${BACKEND_URL}/payouts/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const createOtpSecret = async (body, tgId ) => {

    const url = `${BACKEND_URL}/otp/create-secret/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const enableOtp = async (body, tgId ) => {

    const url = `${BACKEND_URL}/otp/enable/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const authOtp = async (body, tgId ) => {

    const url = `${BACKEND_URL}/otp/auth`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const disableOtp = async (body, tgId ) => {

    const url = `${BACKEND_URL}/otp/disable/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getOtpData = async (body, tgId ) => {

    const url = `${BACKEND_URL}/otp/`;
    const method = 'GET';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const getAutoconvertsData = async (body, tgId ) => {

    const url = `${BACKEND_URL}/autoconverts/`;
    const method = 'GET';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};

export const sendAutoconverts = async (body, tgId ) => {

    const url = `${BACKEND_URL}/autoconverts/`;
    const method = 'POST';
    const response = await apiRequest(url, method, body, tgId);

    if (response.error) {
        return {error: response.error.response, data: null};
    }

    return {error: null, data: response.data};

};
