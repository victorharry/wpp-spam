const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

module.exports = ({ phone, message }) => {
    let victimIsOn = false
    const victimPhone = `55${phone}@c.us`

    client.on('qr', (qr) => {
        // Generate and scan this code with your phone
        // qrcode.generate(qr, {small: true});
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        callVictim()
    });

    client.on('message_create', msg => {
        if (msg.from === victimPhone) victimIsOn = true
    });

    client.initialize();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const callVictim = async () => {
        let counter = 1
        while (!victimIsOn) {
            client.sendMessage(victimPhone, `${counter}: ${message}`)
            console.log(`✉️&nbsp&nbsp${counter} message sent.`)
            counter++
            await sleep(1000)
        }
    }
}
