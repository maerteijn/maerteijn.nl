# Corporate website for Zumtobel

![Zumtobel homepage](/images/zumtobel-homepage.jpg#left =200x137)[Four Digits](https://www.fourdigits.nl/) asked me to join their team as a developer for the complete redevelopment of several corporate websites on behalf of the Austria based [Zumtobel Group](http://z.lighting). It was challenging on multiple levels: technical, but also on a organisational level as development took place on three different continents.


[Wagtail](https://wagtail.io/) was chosen as the CMS platform to manage all content for the different brands. The existing back-end systems of Zumtobel, containing all the product information details, are exposed on the websites with [GraphQL](https://graphql.org/) and a REST API. This way, specific portfolio's for each region were made accessible in different languages.


Because of the huge amount of content we used [wagtail-factories](https://github.com/mvantellingen/wagtail-factories) to generate dummy content during development. Not only very useful for writing tests but also needed to demonstrate the newly developed functionalities in each sprint demo. The Front-end (developed by an external design agency) is tightly integrated into the Wagtail CMS so content editors can see the result of their work immediately in the correct design.


#### Noticeable technologies
- [Wagtail](https://wagtail.io/), a very user friendly CMS based on [Django](https://www.djangoproject.com/)
- [APIStar](https://github.com/encode/apistar) to develop a test-client generated from an [OpenAPI](https://swagger.io/specification/) specifications
- [Wagtail Trans](https://github.com/wagtail/wagtailtrans) to translate all wagtail based content

#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Period**      | 2019                                     |
| :computer: **Role**        | Python Developer                         |
| :office: **Contractor**    | [Four Digits](https://www.fourdigits.nl) |
| :man: **Customer**         | [Zumtobel Group](https://z.lighting)     |
