# My Personal Website with Vue.js

![My personal website](/images/vue-js-based-personal-website.jpg#left =200x*) Front-end development is still changing rapidly so it's useful to do a project with the new technologies to stay up-to-date as a (back-end) developer. I used [Vue.js](https://vuejs.org/) as a framework to build my personal website as it's easy to learn and a viable alternative for [React](https://reactjs.org/).

Due to the popularity of all kinds of cloud based platforms and API's there is a more clear separation possible between presentation and data with nowadays web-development. From that point of view I wanted to build this website to explore the possibilities. The website structure is defined in a [JSON file](https://github.com/maerteijn/maerteijn.nl/blob/master/static/content/site.json) and transformed with [Vue Router](https://router.vuejs.org/installation.html) to usable URL's. The website content is formatted with [Markdown](https://www.markdownguide.org/) and dynamically loaded and converted to HTML when you browse the pages.


#### Noticeable technologies
- [Parcel](https://parceljs.org/) web application bundler with a custom [plugin](https://github.com/maerteijn/maerteijn.nl/blob/master/src/parcel-plugin/main.js) to generate a XML site-map
- [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html), each Vue component template, JavaScript and styling (CSS and [SASS](https://sass-lang.com/) are contained in a single *.vue* file
- [Microsoft Playwright](https://playwright.dev/) with [Express](https://expressjs.com/) for E2E browser-tests
- [Github actions](https://github.com/maerteijn/maerteijn.nl/actions?query=workflow%3A%22maerteijn.nl+ci%22) for CI/CD including deployment to [Vercel](https://vercel.com/) (ZEIT)

| :calendar: Period  | :man_technologist: Role  | :man_office_worker: Customer          |
| ------------------ | ------------------------ | ------------------------------------- |
| 2020               | Front-end Developer      | [Maerteijn](https://www.maerteijn.nl) |

:link: _Github repository_ : https://github.com/maerteijn/maerteijn.nl