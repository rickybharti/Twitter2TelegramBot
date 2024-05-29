# Twitter to Telegram Bot

## Overview

Welcome to the **Twitter to Telegram Bot** repository! This project is designed to monitor a specific Twitter user's tweets and send real-time notifications to a designated Telegram chat. Built with Node.js, this bot leverages the Twitter API and Telegram Bot API to ensure seamless and efficient communication between platforms.

## Features

- **Real-Time Monitoring:** Continuously monitors tweets from a specified Twitter user.
- **Telegram Notifications:** Sends instant messages to a Telegram chat whenever a new tweet is posted.
- **Robust Logging:** Utilizes `tslog` for detailed logging and error handling.
- **Progress Bar:** Includes a CLI progress bar to visually represent the waiting period between checks.
- **Environment Variables:** Securely manages sensitive data using environment variables.
- **Error Handling:** Comprehensive error handling and logging for easy debugging.

## Installation

To get started with the Twitter to Telegram Bot, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/twitter-to-telegram-bot.git
   cd twitter-to-telegram-bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```plaintext
   TWITTER_BEARER_TOKEN=your_twitter_bearer_token
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_telegram_chat_id
   USER_TO_MONITOR=twitter_username_to_monitor
   ```

4. **Run the bot:**
   ```bash
   npm start
   ```

## Configuration

Ensure you have the following environment variables set in your `.env` file:

- `TWITTER_BEARER_TOKEN`: Your Twitter API Bearer Token.
- `TELEGRAM_BOT_TOKEN`: Your Telegram Bot API Token.
- `TELEGRAM_CHAT_ID`: The Telegram chat ID where notifications will be sent.
- `USER_TO_MONITOR`: The Twitter username of the user to monitor.

## Usage

After configuring the environment variables and starting the bot, it will:

1. **Initialize connections** to the Twitter and Telegram APIs.
2. **Send a test message** to the specified Telegram chat to confirm successful connection.
3. **Fetch the latest tweets** from the specified Twitter user.
4. **Send notifications** to the Telegram chat whenever new tweets are posted.
5. **Repeat the process** at regular intervals, using a CLI progress bar to show waiting times.

## Contributing

We welcome contributions to the Twitter to Telegram Bot project! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project uses the following libraries and APIs:

- [dotenv](https://github.com/motdotla/dotenv) for managing environment variables.
- [twitter-api-sdk](https://github.com/twitterdev/twitter-api-java-sdk) for interacting with the Twitter API.
- [telegraf](https://github.com/telegraf/telegraf) for Telegram Bot API integration.
- [tslog](https://github.com/fullstack-build/tslog) for logging.
- [cli-progress](https://github.com/AndiDittrich/Node.CLI-Progress) for CLI progress bars.
Created & Managed by Ricky Bharti
