# Whatsapp Spam

> Made in Brazil

## What is this?
Whatsapp Spam is an application written in NodeJS that allows you to send message spam to your friends via WhatsApp.

## What do I need?

Do `node` acima da **versão 6**.

## Installation

`sudo npm install -g whatsapp-spam`

You will have the `whatsapp-spam` command available globally.

### Parâmetros

| Parameter | Required        | Description                                                 |
|-----------|--------------------|-----------------------------------------------------------|
| `--phone` | :white_check_mark: | Victim's phone number.                        |
| `--message`  | :white_check_mark: | Message that will be sent.                      |
| `--seconds`   |                    | Time interval in seconds between sending messages. |

### Example

`whatsapp-spam --phone '553198988787' --message 'Let's play 🎮' --seconds 10`

Notes:

After running it will show a QRCode, read it with your whatsapp to connect and send the messages.

The default time interval is 1 second and nothing below 1 will be accepted to avoid being banned.

## Why!?

"Why would you do such thing!?" Because I'm Brazilian HU3BR

![6096234_700b](https://user-images.githubusercontent.com/1585655/29083653-d40bb660-7c3f-11e7-896c-efd243f32918.jpg)
