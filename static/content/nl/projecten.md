# Projecten

Een greep uit de projecten die ik heb gedaan staan hieronder beschreven. Een complete lijst kun je terugvinden op mijn [LinkedIn profiel](https://www.linkedin.com/in/maerteijn/). Ik had geen enkel project kunnen doen zonder de hulp en medewerking van alle collega's en mede-ontwikkelaars!


## Overzicht

- [HPC Cluster API voor Rijk Zwaan](#hpc-cluster-api-voor-rijk-zwaan)
- [E-Commerce platform voor Nutricia](#e-commerce-platform-voor-nutricia)


### HPC Cluster API voor Rijk Zwaan

![HPC Cluster API](/images/hpc-cluster-api.jpg#left =200x*)Samen met [Four Digits](https://www.fourdigits.nl/) ontwierpen én ontwikkelden we met [Django REST Framework](https://www.django-rest-framework.org) een makkelijk toegangbare REST API om een High Performance Computing Cluster te ontsluiten. Complexe en veeleisende taken kunnen zo makkelijk op het cluster worden afgevuurd door specifieke agents die op het cluster draaien.

Django en de agent gebruiken een message bus voor betrouwbare communicatie tussen het cluster en de clients. De status van de taken die op het cluster draaien en de agents kunnen altijd via de REST API worden opgevraagd


De REST API is ontwikkeld inclusief:
- Microsoft ADFS authenticatiie en tokenbeheer
- Een makkelijk uit te breiden framework om nieuwe cluster agents te implementeren
- Volledoge [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) integratie inclusief het publiceren van docker images in de registry en wiki documentatie


#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/) met [Django REST Framework](https://www.django-rest-framework.org/) gebruikmakend van [PostgreSQL](https://www.postgresql.org/)
- Het uitmuntende [Dramatiq](https://dramatiq.io/) als communicatie-framework samen met [RabbitMQ](https://www.rabbitmq.com/)
- Authenticatie en permissiies met [Django Auth ADFS](https://github.com/jobec/django-auth-adfs)


| :calendar: Periode  | :man_technologist: Rol | :office: Opdrachtgever                   | :man_office_worker: Klant               |
| ------------------  | ---------------------- | ---------------------------------------- | ----------------------------------------|
| 2018 - 2019         | Lead developer         | [Four Digits](https://www.fourdigits.nl) | [Rijk Zwaan](https://www.rijkzwaan.com) |



### E-Commerce platform voor Nutricia

![Nutricia voor jou](/images/nutricia-voor-jou.jpg#left =200x*) Ontwikkeling van een compleet E-commerce platforrm voor [Nutricia voor jou](https://www.nutriciavoorjou.nl) en [Nutricia for professionals](https://www.nutriciavoorprofessionals.nl/), beide gebaseerd op [Django Oscar](https://github.com/django-oscar/django-oscar). De complete front-end en website zijn gebouwd met [Sitecore](https://www.sitecore.com). Voor alle E-commerce toepassingen communiceert deze front-end applicatie met de inmiddels open source REST API [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/).

Enkele toevoegen die ik tijdens het project heb gebouwd zijn onder andere:
- Diverse fraude detectie mechanismes
- PIN betalingen met een aparte webshop voor bijvoorbeeld beurzen
- Een realtime vooraad en verkoop dashboard
- Automatische product synchronisatie vanuit een PIM systeem


#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/) met [Django Oscar](https://github.com/django-oscar/django-oscar) en [Django REST Framework](https://www.django-rest-framework.org/)
- Hosting bij [AWS](https://aws.amazon.com/) met [Terraform](https://www.terraform.io/), AWS Postgres RDS, AWS EC2 containers worden gebootstrapt met [Saltstack](https://www.saltstack.com/)
- [Django-Q](https://django-q.readthedocs.io/en/latest/) voor onderhoudscripts, e-mail afhandeling en verzending en diverse import en export tools.


| :calendar: Periode | :man_technologist: Rol | :office: Opdrachtgever                | :man_office_worker: Klant                  |
| ------------------ | -----------------------| ------------------------------------- | ------------------------------------------ |
| 2015 - 2018        | Python ontwikkelaar    | [Lukkien](https://www.lukkien.com/)   | [Nutricia](https://www.nutriciavoorjou.nl) |
