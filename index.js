const express = require('express');
const twilio = require("twilio");

const main = async () => {
    const app = express();

    app.post('/', async (req, res) => {
        const body = req.body;

        sendSms();
        res.send('coucou')
    });

    app.listen(4999)
}

const sendSms = async () => {
    const accountSid = "ACae634fff025dfbbda2e8ef2ef79714ec"
    const authToken = "eeb862509764416d724b0061647615fc"

    const client = new twilio(accountSid, authToken);

    try {
        await client.messages
            .create({body: 'BOUGE TOI LE CUL EUR/USD', from: '+13465508162', to: '+33771694489'})

    } catch (e) {
        console.log(e)
    }
}


main();
