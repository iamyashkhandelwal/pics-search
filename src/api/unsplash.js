import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BySTZJXixlEQjbmcwC-OrC9gs-CVGV6vbFAYn15L3FQ'
    }
});