# Mijn website met Vue.js

![Mijn website](/images/vue-js-based-personal-website.jpg#left =215x147)De wereld van Front-end development verandert in een razend tempo en daarom is het goed om als (backend) ontwikkelaar up-to-date te blijven en er een project mee te doen. [Vue.js](https://vuejs.org/) heb ik gebruikt als framework omdat het relatief makkelijk te leren is. Vue.js is een een populaire tegenhanger van het veel gebruikte [React](https://reactjs.org/).

Door de komst en populariteit van allerlei Cloud platformen en API's is er met web-development anno nu een duidelijke scheiding mogelijk tussen presentatie en data, ook op de Front-end. Deze website wilde ik bouwen om te zien wat er nu mogelijk is vanuit dat principe.

De site structuur is vanuit een [JSON bestand](https://github.com/maerteijn/maerteijn.nl/blob/master/static/content/site.json) opgebouwd (deze zou ook uit een REST API kunnen komen) en wordt met [Vue Router](https://router.vuejs.org/installation.html) omgezet naar URL's. De content is opgemaakt met [Markdown](https://www.markdownguide.org/) en wordt dynamisch ingeladen en dan omgezet naar HTML.


#### Uitgelichte technologieën
- [Vue CLI](https://cli.vuejs.org/) - Handige tool voor het ontwikkelen en releasen van Vue applicaties, inclusief webpack configuratie en testing tools
- [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html), ieder *.vue* bestand bevat de template, JavaScript en styling (zowel CSS als [SASS](https://sass-lang.com/)) van het component
- [Microsoft Playwright](https://playwright.dev/) met [Express](https://expressjs.com/) voor het schrijven van [E2E tests](https://github.com/maerteijn/maerteijn.nl/tree/master/tests/e2e)
- [Github actions](https://github.com/maerteijn/maerteijn.nl/actions?query=workflow%3A%22maerteijn.nl+ci%22) voor CI/CD en de site wordt gehost op het [Vercel](https://vercel.com/) (ZEIT) platform


#### Factsheet
|                            |                                                     |
| -------------------------- | --------------------------------------------------- |
| :calendar: **Periode**     | 2020                                                |
| :computer: **Rol**         | (Full-stack) Front-end ontwikkelaar                 |
| :man: **Klant**            | [Maerteijn](https://www.maerteijn.nl)               |
| :link: **Repository**      | [Github](https://github.com/maerteijn/maerteijn.nl) |
