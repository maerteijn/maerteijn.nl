# High Performance Cluster API

![HPC Cluster API](/images/hpc-cluster-api.jpg#left =200x137)In opdracht van [Four Digits](https://www.fourdigits.nl/) ontwierpen én ontwikkelden we met [Django REST Framework](https://www.django-rest-framework.org) een makkelijk te begrijpen en toegankelijke REST API om een High Performance Computing Cluster te ontsluiten. Complexe en veeleisende taken kunnen zo makkelijk op het cluster worden afgevuurd door specifieke agents die op het cluster draaien.

De op Django gebaseerde beheerapplicatie en de agents gebruiken een [RabbitMQ](https://www.rabbitmq.com/) message bus voor betrouwbare communicatie tussen het cluster en de clients. De status van de taken die op het cluster draaien en de status van de agents kunnen altijd via de REST API worden opgevraagd.


De REST API is ontwikkeld inclusief:
- [Microsoft ADFS](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services) authenticatie en token-beheer
- een makkelijk uit te breiden framework om nieuwe cluster agents te implementeren
- volledige [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) integratie inclusief het publiceren van Docker images in de registry en wiki-documentatie


#### Uitgelichte technologieën
- [Django REST Framework](https://www.django-rest-framework.org/) gebruikmakend van [PostgreSQL](https://www.postgresql.org/)
- Het uitmuntende [Dramatiq](https://dramatiq.io/) als communicatie-framework samen met [RabbitMQ](https://www.rabbitmq.com/)
- Authenticatie en permissies met [Django Auth ADFS](https://github.com/jobec/django-auth-adfs)


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Periode**     | 2018 - 2019                              |
| :computer: **Rol**         | Python ontwikkelaar                      |
| :office: **Opdrachtgever** | [Four Digits](https://www.fourdigits.nl) |
