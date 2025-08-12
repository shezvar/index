// utils/strapi.ts
import axios from 'axios';

const strapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
  headers: {
    'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
  }
});

export default strapi;

// utils/strapi.ts
