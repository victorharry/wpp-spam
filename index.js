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
const Whatsapp = require('./whatsapp')

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	if (input.includes(`call`) && flags.seconds >= 1) {
		input.includes(`call`) && Whatsapp({ phone: flags.phone, message: flags.message, secondsInterval: flags.seconds })
	} else if (flags.seconds < 1) {
		console.log("To avoid being banned from whatsapp set the seconds above or equals 1")
	}
	debug && log(flags);
})();
