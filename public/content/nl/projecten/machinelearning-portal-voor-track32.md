# Machinelearning Portal voor Track 32

![Machinelearning Portal voor Track 32](/images/ml-portal.jpg#left =215x147)Artificial Intelligence, of liever gezegd: [Machinelearning](https://nl.wikipedia.org/wiki/Machinaal_leren) is tegenwoordig overal aanwezig en wordt in allerlei sectoren toegepast: IT, marketing, gezondheidszorg, automatisering, etc. In de land- en tuinbouw worden getrainde modellen gebruikt om te bepalen of jonge plantjes (stekjes) levensvatbaar (en gezond) zijn. Het aanleveren van trainingsdata voor deze modellen is een "must" om zo modellen goed te kunnen trainen.

#### Machinelearning Portal
[Track 32](https://www.track32.nl/) is een bedrijf dat gespecialiseerd is in AI landbouw toepassingen, zowel hardware als software. Voor één van hun klanten (die machines bouwt voor de tuinbouw) wilden ze een Machinelearning Portal ontwikkelen zodat afnemers zelf hun Machinelearning modellen kunnen trainen: Een gestructureerde workflow voor een volledige "machinelearning flow", inclusief het opschonen van datasets, model training, modelvalidatie (detecties), modelbeheer, storage, etc. Deze Portal is geïmplementeerd en uitgeleverd en wordt tegenwoordig door datawetenschappers gebruikt als model storage, om data te exporteren/importeren en voor gegevensuitwisseling.

#### API first
De portal moet kunnen communiceren met verschillende services zoals de trainingsbackend(s) voor de modellen. De portal zelf moet ook door diverse machines worden geraadpleegd, dus een toekomstbestendige API definitie, opgesteld met [OpenAPI](https://swagger.io/specification/), stond als eerste op de roadmap. Omdat we de portal met [Django](https://www.djangoproject.com/) hebben gebouwd gebruikten we [Django REST Framework](https://www.django-rest-framework.org/) omdat het stabiel is, "feature complete" en eenvoudig uit te breiden is. We gebruikten ook [Flask](https://flask.palletsprojects.com/en/stable/) voor de API-implementatie van de trainingsbackend(s): een klein, eenvoudig, makkelijk te onderhouden webapplicatie platform en framework.

#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/) met [Django REST Framework](https://www.django-rest-framework.org/) en [PostgreSQL](https://www.postgresql.org/)
- [Flask](https://flask.palletsprojects.com/en/stable/) webapplicatie platform
- [MinIO](https://min.io/) voor de opslag van afbeeldingen en bestanden
- [Docker Compose](https://docs.docker.com/compose/) het testen van Docker images en voor lokaal development ( inclusief S3 storage via MinIO)
- [Crumbles](https://github.com/maerteijn/crumbles/) Een simpep kruimepad library voor ieder Python framework (afgeleid van de implementatie in dit project

#### Factsheet
|                             |                                                                         |
| --------------------------- | ----------------------------------------------------------------------- |
| :calendar: **Periode**      | 2024                                                                    |
| :computer: **Rol**          | Python en Front-end ontwikkelaar, consultant                            |
| :man: **Klant**             | [Track 32](https://www.track32.nl)                                      |
| :office: **Opdrachtgever**  | [Vicktor](https://www.vicktor.nl)                                       |
| :link: **Repository**       | [Crumbles repository op Github](https://github.com/maerteijn/crumbles/) |
