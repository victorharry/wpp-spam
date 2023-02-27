# Wpp Spam

> Made in Brazil

## What is this?
Wpp Spam is an application written in NodeJS that allows you to send message spam to your friends through WhatsApp. The bot will continue sending messages within the predefined interval until the victim responds with anything, thus successfully calling them.

## What do I need?

`node` above version **6**.

## Installation

`sudo npm install -g wpp-spam`

You will have the `wpp-spam` command available globally.

### Parameters

| Parameter | Required        | Description                                                 |
|-----------|--------------------|-----------------------------------------------------------|
| `--phone` | :white_check_mark: | Victim's phone number.                        |
| `--message`  | :white_check_mark: | Message that will be sent.                      |
| `--seconds`   |                    | Time interval in seconds between sending messages. |

### Example

`wpp-spam --phone '553198988787' --message "Let's play 🎮" --seconds 10` :shipit:

Notes:

After running it will show a QRCode, read it with your whatsapp to connect and send the messages.

The default time interval is 1 second and nothing below 1 will be accepted to avoid being banned.

## Formatting messages

### Line break

You can line break and even leave blank lines if you repeat \n

\n
``` sh
wpp-spam --phone '553198988787' --message "Let's play 🎮\nThis text is on the bottom line." --seconds 10
```
### Italic

To italicize your message, place an underscore on both sides of the text:

\_text\_
``` sh
wpp-spam --phone '553198988787' --message "_Italic Let's play 🎮_Normal Let's play 🎮" --seconds 10
```

### Bold

To bold your message, place an asterisk on both sides of the text:

\*text\*
``` sh
wpp-spam --phone '553198988787' --message "*Bolder Let's play 🎮*Normal Let's play 🎮" --seconds 10
```

### Strikethrough

To strikethrough your message, place a tilde on both sides of the text:

\~text\~
``` sh
wpp-spam --phone '553198988787' --message "˜Strikethrough Let's play 🎮˜Normal Let's play 🎮" --seconds 10
```

### Monospace

To monospace your message, place three backticks on both sides of the text:

\`\`\`text\`\`\`
``` sh
wpp-spam --phone '553198988787' --message "```Monospace Let's play 🎮```Normal Let's play 🎮" --seconds 10
```

## Why!?

"Why would you do such thing!?" Because I'm Brazilian HU3BR

![6096234_700b](https://user-images.githubusercontent.com/1585655/29083653-d40bb660-7c3f-11e7-896c-efd243f32918.jpg)
