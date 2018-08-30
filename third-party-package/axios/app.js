const axios = require('axios');

const serverClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

serverClient.get("/").then((res) => {
   console.log(res);
});