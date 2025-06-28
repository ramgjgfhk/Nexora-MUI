import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_UAT_URL, // replace with your API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
