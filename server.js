const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx3APJGKSsKrdhwceDQ4pBzhkWH4tf5aACNDfq4WsSrewTMiAMSYT3Lk3DS-Gp_g9hD/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send('Ocurrió un error en el proxy.');
    }
});

app.listen(3001, () => {
    console.log('Proxy escuchando en http://localhost:3001');
});