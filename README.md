# The Office Chat Bot

## Description
The Office Chat Bot is a fun project that uses lines from the famous NBC's sitcom "The Office". It provides responses based on the user's input. If the user's input matches a line from the show, the bot responds with the following line from the script.

The bot has two modes of operation:

1. Fuzzy search: This method finds the closest matching line to the user's input from the show's script.

2. API search: This method sends a request to the API endpoint provided by "The Office Script" and fetches the relevant response based on the user's input.

Moreover, there are three interactive buttons to navigate through the script. The user can fetch the next line, fetch a random line, or toggle between the fuzzy search and API search modes.

The application also features a rotating head of 'Prison Mike' (a character from the show), because, why not?

## Screenshots
Here is a preview of the chat bot in action:

<img src="./public/screenshot.png" alt="Screenshot of The Office Chat Bot" width="700">

## Example

Consider this [scene](https://www.youtube.com/watch?v=T_d3teq6pWw) from "The Office"

If you type, "I declare bankruptcy."

The bot will respond with "Hey, I just wanted you to know that you can't just say the word bankruptcy and expect anything to happen"

## Links
- [Project Code on GitHub](https://github.com/zubyj/the-office-chat-bot)
- [The Office Script API](https://theofficescript.com)
- [Reddit Bots using the same API](https://www.reddit.com/user/the-office-bot/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

- build
- node_modules
- public
  - favicon.ico
  - index.html
  - logo192.png
  - logo512.png
  - manifest.json
  - robots.txt
  - screenshot.png
- src
  - assets
    - prison-mike.png
  - components
    - Footer.js
    - Form.js
    - NextLineBtn.js
    - RandomLineBtn.js
    - ToggleMicBtn.js
    - ToggleSearchModeBtn.js
  - App.css
  - App.js
  - index.css
  - index.js
  - office-lines.js
- .gitignore
- LICENSE
- package-lock.json
- package.json
- README.md

