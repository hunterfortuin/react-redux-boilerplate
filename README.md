# React and Redux Boilerplate

A boilerplate for creating React and Redux applications!

# Getting Started

## Installation

```
$ git@github.com:HunterFortuin/react-redux-boilerplate.git
$ cd react-redux-boilerplate
$ npm install
```

## Scripts

### Development
All Javascript in the `frontend/scripts/` folder is built using Webpack to the `public/javascripts/main.js` file. All Sass in the `frontend/styles` is built using Webpack to the `public/stylesheets/main.css` file. It utilizes Hot Module Reloading in development. To build your JS/CSS and run your server run:

```
$ npm run start-dev
```
### Linting
Linting is done using XO. It's integrated to lint code in the frontend in the webpack development file while running in your dev environment. To run a manual lint that also checks server files:

```
$ npm run lint
```


# Todo
- Add MongoDB
- Add Nodemon for Development
- Add Test Suite
