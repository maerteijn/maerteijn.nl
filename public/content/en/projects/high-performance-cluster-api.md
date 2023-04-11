# High Performance Cluster API

![HPC Cluster API](/images/hpc-cluster-api.jpg#left =215x147)Commissioned by [Four Digits](https://www.fourdigits.nl/) we designed and developed an easy to understand and accessible REST API for a High Performance Computing Cluster, based on [Django REST Framework](https://www.django-rest-framework.org). Complex and high demanding tasks can be easily created and specific agents will deploy these on the cluster nodes available.


The Django based task management application and the cluster agents are utilizing a [RabbitMQ](https://www.rabbitmq.com/) message bus for reliable communication. The status of the tasks and the status of the agents running on the cluster can always be queried using the REST API.


The REST API was developed including:
- [Microsoft ADFS](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services) authentication and token generation
- A pluggable infrastructure for writing custom cluster agents
- Full [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) integration including docker image registry publishing and wiki documentation


#### Highlighted technologies
- [Django](https://www.djangoproject.com/) with [Django REST Framework](https://www.django-rest-framework.org/) using [PostgreSQL](https://www.postgresql.org/)
- The excellent [Dramatiq](https://dramatiq.io/) background task queuer and framework, used with [RabbitMQ](https://www.rabbitmq.com/)
- Authentication and permissions with [Django Auth ADFS](https://github.com/jobec/django-auth-adfs)


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Period**      | 2018 - 2019                              |
| :computer: **Role**        | Python Developer                         |
| :office: **Contractor**    | [Four Digits](https://www.fourdigits.nl) |
