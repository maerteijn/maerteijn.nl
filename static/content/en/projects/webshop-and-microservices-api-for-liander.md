# Webshop and Microservices API for Liander

![HPC Cluster API](/images/liander-sk-webshop.jpg#left =200x*)[Lab Digital](https://www.labdigital.nl/) developed a POC webshop together with [Liander](https://www.liander.nl/) so customers can manage their power capacity in an easy way. I was asked to develop the backend functionalities which includes a REST API based on [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/), integration with [SAP](https://www.sap.com/index.html) based micro-services and payment with [IDEAL](https://www.ideal.nl/en/businesses/offer-ideal/).

At the start of the project we also created several mock microservices. These included a customer request handler, a login token generator and an appointment scheduler so we could demonstrate a functional part of the application with each sprint demo and write tests in a very early phase of the development process.

#### Noticeable technologies
- [x] A SPA application was written in [React](https://reactjs.org/) using [webpack dev server](https://webpack.js.org/guides/development/#using-webpack-dev-server) to develop this in conjuction with our [Django](https://www.djangoproject.com/) based API.
- [x] The [python-ideal](https://github.com/maykinmedia/python-ideal) package which we ported to Python 3.x
- [x] [Django Oscar](https://github.com/django-oscar/django-oscar) Product catalogue for easy webshop integration


| :calendar: Period  | :man_technologist: Role  | :office: Contractor                      | :man_office_worker: Customer     |
| ------------------ | ------------------------ | ---------------------------------------- | -------------------------------- |
| 2018               | Python Backend Developer | [Lab Digital](https://www.labdigital.nl) | [Liander](http://www.liander.nl) |
