# Webshop en Microservices API voor Liander

![HPC Cluster API](/images/liander-sk-webshop.jpg#left =215x147)[Lab Digital](https://www.labdigital.nl/) ontwikkelde een POC webshop samen met [Liander](https://www.liander.nl/) waarmee klanten makkelijk hun stroomaansluiting kunnen verlichten of verzwaren. Als backend-developer heb ik een REST API ontwikkeld op basis van [Django Oscar API](https://github.com/django-oscar/django-oscar-api). Deze API integreerde met diverse [SAP](https://www.sap.com/index.html) gebaseerde micro-services en met een [iDEAL](https://www.ideal.nl/en/businesses/offer-ideal/)-koppeling.

Bij de aanvang van het project creëerden we ook een aantal mock microservices om snel van start te kunnen gaan. Deze services bestonden onder andere uit een aanvraagtool, een login-token-generator en een afsprakenplanner. Op deze manier konden we bij iedere sprint demo een functionele applicatie laten zien en konden we vanaf het begin van het project al tests schrijven.

#### Uitgelichte technologieën
- Een SPA applicatie ontwikkeld met [React](https://reactjs.org/), we gebruikten de [webpack dev server](https://webpack.js.org/guides/development/#using-webpack-dev-server) om deze te integreren in onze Django gebaseerde stack.
- De [python-ideal](https://github.com/maykinmedia/python-ideal) integratie die we compatible hebben gemaakt met Python 3.x
- [Django Oscar](https://github.com/django-oscar/django-oscar) voor de producten matrix en webshop-integratie


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Periode**     | 2018                                     |
| :computer: **Rol**         | Python backend ontwikkelaar              |
| :office: **Opdrachtgever** | [Lab Digital](https://www.labdigital.nl) |
| :man: **Klant**            | [Liander](http://www.liander.nl)         |
