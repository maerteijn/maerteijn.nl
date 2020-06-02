### E-Commerce platform voor Nutricia

![Nutricia voor jou](/images/nutricia-voor-jou.jpg#left =200x*) In samenwerking met [Lukkien](http://www.lukkien.nl) ontwikkelden we een compleet E-commerce platforrm voor [Nutricia voor jou](https://www.nutriciavoorjou.nl) en [Nutricia for professionals](https://www.nutriciavoorprofessionals.nl/), beide gebaseerd op [Django Oscar](https://github.com/django-oscar/django-oscar). De complete front-end en website zijn gebouwd met [Sitecore](https://www.sitecore.com). Voor alle E-commerce toepassingen communiceert deze front-end applicatie met de open source REST API [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/).

Enkele toevoegen die ik tijdens het project heb gebouwd zijn onder andere:
- Diverse fraude detectie mechanismes
- [PIN betalingen](https://payplaza.com/nutricia-implements-point2pay/) met een aparte webshop voor bijvoorbeeld beurzen
- Een realtime vooraad en verkoop dashboard
- Automatische product synchronisatie vanuit een PIM systeem


#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/) met [Django Oscar](https://github.com/django-oscar/django-oscar) en [Django REST Framework](https://www.django-rest-framework.org/)
- Hosting bij [AWS](https://aws.amazon.com/) met [Terraform](https://www.terraform.io/), AWS Postgres RDS, AWS EC2 containers worden gebootstrapt met [Saltstack](https://www.saltstack.com/)
- [Django-Q](https://django-q.readthedocs.io/en/latest/) voor onderhoudscripts, e-mail afhandeling en verzending en diverse import en export tools


| :calendar: Periode | :man_technologist: Rol | :office: Opdrachtgever                | :man_office_worker: Klant                  |
| ------------------ | -----------------------| ------------------------------------- | ------------------------------------------ |
| 2015 - 2018        | Python ontwikkelaar    | [Lukkien](https://www.lukkien.com/)   | [Nutricia](https://www.nutriciavoorjou.nl) |

:link: _Github repository_ : https://github.com/django-oscar/django-oscar-api/