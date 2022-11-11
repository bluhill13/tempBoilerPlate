import axios, { AxiosError } from 'axios';
import { env_var } from '../env';
import { removeTokens } from './localStorage';
import { getHeaderInfo } from './tokenCreator';
const handleResponse = (response: any) => {

    if (response.status === 401) {
        removeTokens();
        //history.push('/v1');
        window.location.reload();
    }
    if (response.data.status !== 'OK') {
        return response.data;
    }
    return response;
}

export const post = async function (url: string, body: any) {
    let header = await getHeaderInfo();
    try {
        let resp = await axios.post(env_var.BASE_URL + url, body, header);
        return handleResponse(resp);
    } catch (err) {
        const error = err as AxiosError
        return handleResponse(error.response)
    }
};

export const get = async function (url: any, params: any = {}) {
    let header = await getHeaderInfo();
    try {
        let resp = await axios.get(url, { ...header, params });
        return handleResponse(resp);
    } catch (err) {
        const error = err as AxiosError
        throw handleResponse(error.response)
    }
};

export const put = async function (body: any, url: any) {
    let header = await getHeaderInfo();

    try {
        let resp = await axios.put(env_var.BASE_URL + url, body, header);

        return handleResponse(resp);
    } catch (err) {
        const error = err as AxiosError
        throw handleResponse(error.response)
    }
};

export const deleteApi = async function (url: any) {
    let header = await getHeaderInfo();

    try {
        let resp = await axios.delete(env_var.BASE_URL + url, header);

        return handleResponse(resp);
    } catch (err) {
        const error = err as AxiosError
        throw handleResponse(error.response)
    }
};