# Groothandel E-commerce voor Highbiza

![Highbiza](/images/highbiza.jpg#left =215x147)[Highbiza](https://highbiza.nl/) ontwikkelde een plugin systeem voor [Django Oscar](https://github.com/django-oscar/django-oscar) om zo heel makkelijk en met weinig code veel features aan te kunnen bieden aan hun klanten. Voor een groothandel was het noodzakelijk om maatwerk te leveren om zo te kunnen koppelen met diverse backend systemen. Deze systemen zijn gebaseerd op [MS SQL Server](https://www.microsoft.com/en-us/sql-server), [Bloom](https://www.werkenmetbloom.nl/) en [Exact Online](https://www.exact.com/nl/software/exact-online).

Met het definiëren van specifieke database views konden we daaropvolgend een REST API ontwikelen. De groothandel kon daarna op een makkelijke manier prijsinformatie inschieten in Django Oscar, mede door het automatisch genereren van een [Netcore C# client](https://openapi-generator.tech/docs/generators/csharp-netcore) vanuit een [OpenAPI schema](https://swagger.io/specification/).

Voor het berekenen van de prijzen en toeslagen zijn diverse delen van Django Oscar aangepast en uitgebreid. Nu kunnen alle medewerkers van de groothandel bestellingen plaatsen die vervolgens met alle juiste prijsinformatie en toeslagen weer in hun eigen systeem terecht komen.

#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/) met [Django Oscar](https://github.com/django-oscar/django-oscar) en [Django REST Framework](https://www.django-rest-framework.org/)
-  [MS SQL Server](https://www.microsoft.com/en-us/sql-server) met de [MS SQL docker images](https://hub.docker.com/_/microsoft-mssql-server) voor het ontwikkelen op Mac OS
- [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio) voor het aanpassen en managen van de database views
- [DRF Spectacular](https://github.com/tfranzel/drf-spectacular) voor het genereren van een [OpenAPI schema](https://swagger.io/specification/)


#### Factsheet
|                            |                                                             |
| -------------------------- | ----------------------------------------------------------- |
| :calendar: **Periode**     | 2020                                                        |
| :computer: **Rol**         | Python ontwikkelaar                                         |
| :office: **Opdrachtgever** | [Highbiza](https://www.highbiza.nl/)                        |
