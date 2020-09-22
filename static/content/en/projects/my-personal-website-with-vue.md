# My Personal Website with Vue.js

![My personal website](/images/vue-js-based-personal-website.jpg#left =215x147) Front-end development is still changing rapidly so I found it useful to do a project with the current technologies to stay up-to-date as a (back-end) developer. I used [Vue.js](https://vuejs.org/) as a framework to build my personal website as it's easy to learn. Vue.js is considered a good alternative for the very popular [React](https://reactjs.org/) framework.

Due to the popularity of all kinds of cloud based platforms and API's there is a more clear separation possible between presentation and data with nowadays web-development, also on the Front-end. From that point of view I wanted to build this website to explore the possibilities.

The website structure is defined in a [JSON file](https://github.com/maerteijn/maerteijn.nl/blob/master/static/content/site.json) (which could be served from a REST API) and transformed with [Vue Router](https://router.vuejs.org/installation.html) to usable URL's. The website content is formatted with [Markdown](https://www.markdownguide.org/) and dynamically loaded and converted to HTML when you browse the pages.


#### Noticeable technologies
- [Parcel](https://parceljs.org/) web application bundler with a custom [plugin](https://github.com/maerteijn/maerteijn.nl/blob/master/src/parcel-plugin/main.js) to generate a XML site-map
- [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html), the template, JavaScript and styling (CSS and [SASS](https://sass-lang.com/) for each component are contained in a single *.vue* file
- [Microsoft Playwright](https://playwright.dev/) with [Express](https://expressjs.com/) for E2E browser-tests
- [Github actions](https://github.com/maerteijn/maerteijn.nl/actions?query=workflow%3A%22maerteijn.nl+ci%22) for CI/CD including deployment to [Vercel](https://vercel.com/) (ZEIT)


#### Factsheet
|                            |                                                     |
| -------------------------- | --------------------------------------------------- |
| :calendar: **Period**      | 2020                                                |
| :computer: **Role**        | (Full-stack) Front-end Developer                    |
| :man: **Customer**         | [Maerteijn](https://www.maerteijn.nl)               |
| :link: **Repository**      | [Github](https://github.com/maerteijn/maerteijn.nl) |
