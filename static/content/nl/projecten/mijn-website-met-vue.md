# Mijn website met Vue.js

![Mijn website](/images/vue-js-based-personal-website.jpg#left =200x*)De wereld van Front-end development verandert in een razend tempo en daarom is het goed om als (backend) ontwikkelaar up-to-date te blijven en er een project mee te doen. [Vue.js](https://vuejs.org/) heb ik gebruikt als framework en is een populaire tegenhanger van [React](https://reactjs.org/) omdat het relatief makkelijk te leren is.

Door de komst en populariteit van allerlei Cloud platforms en API's is er met web development anno nu een duidelijke scheiding mogelijk tussen presentatie en data. Vanuit dat principe wilde ik deze website bouwen om te zien wat er nu mogelijk is. De site structuur is vanuit een [JSON bestand](https://github.com/maerteijn/maerteijn.nl/blob/master/static/content/site.json) opgebouwd en deze wordt met [Vue Router](https://router.vuejs.org/installation.html) omgezet naar URL's. De content is opgemaakt met [Markdown](https://www.markdownguide.org/) en wordt dynamisch ingeladen en dan omgezet naar HTML.


#### Uitgelichte technologieën
- [Parcel](https://parceljs.org/) web application bundler met een eigen [plugin](https://github.com/maerteijn/maerteijn.nl/blob/master/src/parcel-plugin/main.js) voor het genereren van een XML sitemap
- [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html), ieder `.vue` bestand bevat de template, javascript en styling (zowel CSS als [SASS](https://sass-lang.com/) van het component
- [Microsoft Playwright](https://playwright.dev/) met [Express](https://expressjs.com/) voor het schrijven van [E2E tests](https://github.com/maerteijn/maerteijn.nl/tree/master/tests/e2e)
- [Github actions](https://github.com/maerteijn/maerteijn.nl/actions?query=workflow%3A%22maerteijn.nl+ci%22) voor CI/CD en de site wordt gehost op het [Vercel](https://vercel.com/)(ZEIT) platform

| :calendar: Periode  | :man_technologist: Rol  | :man_office_worker: Klant             |
| ------------------- | ------------------------| ------------------------------------- |
| 2020                | Front-end Developer     | [Maerteijn](https://www.maerteijn.nl) |

:link: _Github repository_ : https://github.com/maerteijn/maerteijn.nl