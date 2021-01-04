import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID j-8uAWb8lNvy4yqBPGZS5BpzWndGtOQpjX_gDNULZS0'
    }
})