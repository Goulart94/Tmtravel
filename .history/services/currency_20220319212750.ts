import axios from "axios";

export const currency = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/daily/EUA-BRL/?start_date='
})
