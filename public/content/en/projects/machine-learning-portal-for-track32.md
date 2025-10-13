# Machine learning Portal for Track 32

![Machine learning Portal for Track 32](/images/ml-portal.jpg#left =215x147)Artificial Intelligence, or more accurate: [Machine learning](https://en.wikipedia.org/wiki/Machine_learning) is a hot topic nowadays and implemented in all kind of industries: IT, marketing, health care, automation and many others. In [Horticulture](https://en.wikipedia.org/wiki/Horticulture), specifically trained models are used to detect if young plants are viable and/or healthy. Providing accurate training data for these models is a "must" for the models to be efficient.

#### Machine learning Portal
[Track 32](https://www.track32.nl/) is a company specialising in agriculture AI hardware- and software implementations. One of their customers (who builds agriculture machines) wanted to close the gap between machine learning and their clients by providing a Machine learning Portal: A structured workflow for a complete "machine learning data flow" which includes data set cleaning, model training, model validation (detections), model management, storage, etc. This Portal has been implemented and nowadays also used by data scientists as a model repository, to export / import data and for data exchange.

#### API first

The Portal has to communicate with several services like the training backend(s) for the models. The Portal itself needs to be queried as well by the machines "on the spot", so a clear and future-proof communication API, defined with [OpenAPI](https://swagger.io/specification/), was the main focus from the start. As we built the Portal with [Django](https://www.djangoproject.com/), we used [Django REST Framework](https://www.django-rest-framework.org/) as it's stable, feature complete and easy to extend. We also used [Flask](https://flask.palletsprojects.com/en/stable/) for the API implementation of the training backend(s): A small, simple, mature and easy to maintain web application platform and framework.

#### Highlighted technologies
- [Django](https://www.djangoproject.com/) with [Django REST Framework](https://www.django-rest-framework.org/) using [PostgreSQL](https://www.postgresql.org/)
- [Flask](https://flask.palletsprojects.com/en/stable/) web application framework
- [MinIO](https://min.io/) for data storage of images
- [Docker Compose](https://docs.docker.com/compose/) for testing Docker setups and for local development (including S3 storage via MinIO)
- [Crumbles](https://github.com/maerteijn/crumbles/) A simple breadcrumb library for any python framework (which is a spin-off project from this project)

#### Factsheet
|                            |                                                                         |
| -------------------------- | ----------------------------------------------------------------------- |
| :calendar: **Period**      | 2024                                                                    |
| :computer: **Role**        | Python and Front-end Developer, Consultant                              |
| :man: **Customer**         | [Track 32](https://www.track32.nl)                                      |
| :office: **Contractor**    | [Vicktor](https://www.vicktor.nl)                                       |
| :link: **Repository**      | [Crumbles repository on Github](https://github.com/maerteijn/crumbles/) |

