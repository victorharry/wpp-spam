# Wpp Spam

> Made in Brazil

## What is this?
Wpp Spam is an application written in NodeJS that allows you to send message spam to your friends through WhatsApp.

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

`wpp-spam --phone '553198988787' --message 'Let's play 🎮' --seconds 10`

Notes:

After running it will show a QRCode, read it with your whatsapp to connect and send the messages.

The default time interval is 1 second and nothing below 1 will be accepted to avoid being banned.

## Why!?

"Why would you do such thing!?" Because I'm Brazilian HU3BR

![6096234_700b](https://user-images.githubusercontent.com/1585655/29083653-d40bb660-7c3f-11e7-896c-efd243f32918.jpg)
