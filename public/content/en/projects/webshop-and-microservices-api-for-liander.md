# Webshop and Microservices API for Liander

![HPC Cluster API](/images/liander-sk-webshop.jpg#left =215x147)[Lab Digital](https://www.labdigital.nl/) developed a POC web-shop together with [Liander](https://www.liander.nl/) so customers can manage their power capacity in their homes very easily. I was asked to develop the back-end functionalities which includes a REST API based on [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/), integration with [SAP](https://www.sap.com/index.html) based micro-services and payment with [iDEAL](https://www.ideal.nl/en/businesses/offer-ideal/).

At the start of the project we also created several mock micro-services. These included a customer request handler, a login token generator and an appointment scheduler so we could demonstrate a functional part of the application with each sprint demo and write tests in a very early phase of the development process.

#### Highlighted technologies
- A SPA application was written in [React](https://reactjs.org/) using [webpack-dev-erver](https://webpack.js.org/guides/development/#using-webpack-dev-server) to develop this in conjunction with our [Django](https://www.djangoproject.com/) based API.
- The [python-ideal](https://github.com/maykinmedia/python-ideal) package which we ported to Python 3.x
- [Django Oscar](https://github.com/django-oscar/django-oscar) Product catalogue for easy web-shop integration


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Period**      | 2018                                     |
| :computer: **Role**        | Python Backend Developer                 |
| :office: **Contractor**    | [Lab Digital](https://www.labdigital.nl) |
| :man: **Customer**         | [Liander](http://www.liander.nl)         |
