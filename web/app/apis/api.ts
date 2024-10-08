import axios from 'axios';

export const BASE_URL = 'https://blz-refund.liara.run/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
