# Corporate website for Zumtobel

![Zumtobel homepage](/images/zumtobel-homepage.jpg#left =200x137)[Four Digits](https://www.fourdigits.nl/) asked me to join their team as a lead developer for the complete redevelopment of the Austria based [Zumtobel Group](http://z.lighting) corporate websites. It was challenging on multiple levels: technical, but also on a organisational level as development took place on three different continents.

[Wagtail](https://wagtail.io/) was chosen as the CMS platform to manage all content for the different brands of Zumtobel. Specific portfolio's for each region are made accessible in different languages. Integration of the existing back-end systems, which contain all the product information, are exposed with [GraphQL](https://graphql.org/) and a REST API.


Because of the huge amount of content we used [wagtail-factories](https://github.com/mvantellingen/wagtail-factories) to generate the content during development. Not only very useful for writing tests but needed to show the required functionalities in each sprint demo. The Front-end which was developed by an eternal design agency is tightly integrated into the Wagtail CMS so content editors can see the result immediately.


#### Noticeable technologies
- [Wagtail](https://wagtail.io/), a very user friendly CMS based on [Django](https://www.djangoproject.com/)
- [APIStar](https://github.com/encode/apistar) to develop a test-client generated from an [OpenAPI](https://swagger.io/specification/) specifications
- [Wagtail Trans](https://github.com/wagtail/wagtailtrans) to translate all wagtail based content

| :calendar: Period  | :computer: Role | :office: Contractor                      | :man: Customer         |
| -----------------  | ----------------------- | ---------------------------------------- | ------------------------------------ |
| 2019               | Python Developer        | [Four Digits](https://www.fourdigits.nl) | [Zumtobel Group](https://z.lighting) |
