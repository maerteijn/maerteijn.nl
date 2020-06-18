# Corporate website voor Zumtobel

![Zumtobel homepage](/images/zumtobel-homepage.jpg#left =200x*)[Four Digits](https://www.fourdigits.nl/) vroeg mij om hun team tijdelijk te versterken voor het compleet opnieuw ontwikkelen van de in Oostenrijk gevestigde [Zumtobel Group](http://z.lighting) corporate websites. De uitdaging was niet alleen technisch maar ook organisatorisch doordat de ontwikkeling plaats vond op drie verschillende continenten.


[Wagtail](https://wagtail.io/) is gekozen als CMS systeem voor het beheren van de verschillende merken van Zumtobel waarin er portfolio's per regio worden ontsloten in verschillende talen. Integratie van diverse backend systemen zoals de product informatie zijn ontsloten met [GraphQL](https://graphql.org/) en een REST API.


Door de vele content maakten we gebruik van [wagtail-factories](https://github.com/mvantellingen/wagtail-factories) om de content te genereren tijdens de ontwikkelfase. Dat was niet alleen nuttig voor de testsuite maar ook voor de sprint demos om zo de gevraagde functionaliteit te kunnen tonen. De Front-end, ontwikkelt door een extern bureau, is nauw geïntegreerd in het CMS zodat de content beheerders direct het resultaat kunnen zien.


#### Uitgelichte technologieën
- [Wagtail](https://wagtail.io/), een gebruiksvriendelijk CMS gebaseerd op [Django](https://www.djangoproject.com/)
- [APIStar](https://github.com/encode/apistar) om een test-client te genereren op basis van een [OpenAPI](https://swagger.io/specification/) specificatie
- [Wagtail Trans](https://github.com/wagtail/wagtailtrans) voor het vertalen van de Wagtail content

| :calendar: Periode  | :computer: Rol | :office: Opdrachtgever                   | :man: Klant               |
| ------------------  | ---------------------- | ---------------------------------------- | ----------------------------------------|
| 2019                | Python developer       | [Four Digits](https://www.fourdigits.nl) | [Zumtobel Group](https://z.lighting)    |
