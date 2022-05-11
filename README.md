<div align="center">
    <h1>Chat App</h1>
    <p>Simple chat application written on vanilla JS.</p>
</div>

##

[![Netlify Status](https://api.netlify.com/api/v1/badges/58de0fda-5720-4461-a0fd-c18d484a4255/deploy-status)](https://app.netlify.com/sites/shimmering-chaja-2e2182/deploys)

## How to start

1. Clone the repository
2. Install dependencies. Run in the root folder:
   `npm install`
3. Run build & node server:
   `npm run start`

That's it. App should be running locally on port 3000.

## Other scripts:

- `npm run dev` — starts application in dev mode;
- `npm run test` — starts tests (not implemented yet);
- `npm run start:server` — starts node.js server;
- `npm run prettier` — starts prettier;
- `npm run typecheck` — starts TS type check;
- `npm run lint` — starts ESLint inside src folder;
- `npm run lint:fix` — starts ESLint inside src folder with --fix flag;
- `npm run stylelint` — starts stylelint;
- `npm run stylelint:fix` — starts stylelint with --fix flag;
- `npm run prepare` — husky package installation for enabling git hooks;

## App routes:

- Page with lists of chats `/chat`
- Authorization page `/authorization`
- Registration page `/registration`
- Profile page `/profile`
- 404 error page `/404`
- 500 error page `/500`

## Useful links:

- [Figma prototype](https://www.figma.com/file/qSOTTp0dwf3wNYLAVJI04B/Chat?node-id=0%3A1)
- [Deployed version on Netlify](https://shimmering-chaja-2e2182.netlify.app/)

## Pull Requests:

- [Sprint 1](https://github.com/maxim-dmi3ev/middle.messenger.praktikum.yandex/pull/1)
