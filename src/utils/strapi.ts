// utils/strapi.ts
import axios from 'axios';

const strapi = axios.create({
  baseURL: 'http://localhost:1337', // This is your Strapi API endpoint (locally)
});

export default strapi;
