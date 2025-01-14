# maerteijn.nl
![](https://github.com/maerteijn/maerteijn.nl/actions/workflows/ci-push-main.yml/badge.svg)

My professional website build with Vue.js, deployed on [https://www.maerteijn.nl](https://www.maerteijn.nl)

## Development requirements

A recent LTS version of `NodeJS` (tested with v18).

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
    npm run lint
```

The `Prettier` opinionated code formatter is used:
```bash
    npm run format
```

## Tests
We have unit and functional tests with `mocha`:
```bash
    npm run test:unit
    npm run test:functional
```
We can also run e2e tests with `playwright`:
```bash
    npm run test:e2e
```

## Bundle size
See how much javascript / assets are bundled:
```bash
    npm run visualize
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

