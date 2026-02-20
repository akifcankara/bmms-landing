import axios from 'axios';

const strapiClient = axios.create({
  baseURL: process.env.STRAPI_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default strapiClient;
