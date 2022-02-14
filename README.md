# maerteijn.nl
![](https://github.com/maerteijn/maerteijn.nl/workflows/maerteijn.nl%20ci/badge.svg)

My professional website build with Vue.js, deployed on [https://www.maerteijn.nl](https://www.maerteijn.nl)

## Development requirements

A recent LTS version of `NodeJS` (tested with v14.15.4).

I'm adjusted with something

## Development server

Setting up a development server is as simple as:
```bash
    npm install
    npm run dev
```

Then browse to [http://localhost:1234/](http://localhost:1234/)

## Linting

The js, templates and scss are linted with the following commands:
```bash
    npm run eslint
    npm run eslint:fix
    npm run stylelint
    npm run stylelint:fix
```

The `Prettier` opinionated code formatter is used:
```bash
    npm run prettier
    npm run prettier:fix
```

## Tests
We have unit and functional tests with `mocha`:
```bash
    npm run test
```
We can also run e2e tests with `playwright`:
```bash
    npm run test:e2e
```

## Github actions

All linting and tests are run automatically using [Github Actions](https://github.com/maerteijn/maerteijn.nl/actions)


## Deployment to Vercel

Each commit will build a new version of the site (when the pipeline succeeds) on [Vercel](https://vercel.com/). That is also the platform where the site is hosted.

To locally create a production build:
```bash
    npm run build
```

The production build can be found in the `./dist/release` directory.

