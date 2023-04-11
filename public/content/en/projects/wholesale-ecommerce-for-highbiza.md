# Wholesale E-commerce for Highbiza

![Highbiza](/images/highbiza.jpg#left =215x147)[Highbiza](https://highbiza.nl/) developed a sophisticated plugin system for [Django Oscar](https://github.com/django-oscar/django-oscar) to offer features to their customers with as less code as possible. For a wholesaler it was needed to develop several addons so they could easily integrate with several backend systems. These systems are mostly based on [MS SQL Server](https://www.microsoft.com/en-us/sql-server), [Bloom](https://www.werkenmetbloom.nl/) and [Exact Online](https://www.exact.com/nl/software/exact-online).

A custom REST API was developed, helped by defining several database views specially for this purpose. It then became possible for the wholesaler to provide all kinds of information to Django Oscar. All employees of the wholesale company can now place orders with the correct prices and surcharges, and these orders are synced back into the customer backend systems.

A [Netcore C# client](https://openapi-generator.tech/docs/generators/csharp-netcore) was generated from an [OpenAPI schema](https://swagger.io/specification/) which made the integration for the customer fast and reliable.

#### Highlighted technologies
- [Django](https://www.djangoproject.com/) with [Django Oscar](https://github.com/django-oscar/django-oscar) and [DRF](https://www.django-rest-framework.org/)
-  [MS SQL Server](https://www.microsoft.com/en-us/sql-server) with the [MS SQL docker images](https://hub.docker.com/_/microsoft-mssql-server) for developing on Mac OS
- [Azure Data Studio](https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio) to manage and adjust the database views
- [DRF Spectacular](https://github.com/tfranzel/drf-spectacular) to generate an [OpenAPI schema](https://swagger.io/specification/)


#### Factsheet
|                            |                                                             |
| -------------------------- | ----------------------------------------------------------- |
| :calendar: **Period**      | 2020                                                        |
| :computer: **Role**        | Python Developer                                            |
| :office: **Contractor**    | [Highbiza](https://www.highbiza.nl/)                        |
