#!/usr/bin/env node

/**
 * whatsapp-spam
 * Call your afk friend
 *
 * @author Harry <victor-harry.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();
const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

function whatsapp({ phone, message, secondsInterval }) {
    let victimIsOn = false
    const victimPhone = `${phone}@c.us`

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
            console.log(`✉️  ${counter} message sent.`)
            counter++
            await sleep(secondsInterval * 1000)
        }
    }
}

(async () => {
	init({ clear });
	if (flags.seconds >= 1 && flags.phone && flags.message) {
		whatsapp({ phone: flags.phone, message: flags.message.replaceAll('\\n', '\n'), secondsInterval: flags.seconds })
	} else if (flags.seconds < 1) {
		console.log("To avoid being banned from whatsapp set the seconds above or equals 1")
	} else {
		cli.showHelp(0)
	}
	debug && log(flags);
})();