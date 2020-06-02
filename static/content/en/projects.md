# Projects

Here you can see some of my projects I did it the past. You can see a complete list of all the projects on my [LinkedIn profile](https://www.linkedin.com/in/maerteijn/). None of these projects I could have done without the awesome efforts of my colleagues and co-workers!

## Overview

- [HPC Cluster API for Rijk Zwaan](#hpc-cluster-api-for-rijk-zwaan)
- [E-Commerce platform for Nutricia](#e-commerce-platform-for-nutricia)


### HPC Cluster API for Rijk Zwaan

![HPC Cluster API](/images/hpc-cluster-api.jpg#left =200x*)Together with [Four Digits](https://www.fourdigits.nl/) we designed and developed an easy accessible REST API for a High Performance Computing Cluster, based on [Django REST Framework](https://www.django-rest-framework.org). Complex and high demanding tasks can be easily created and specific agents will deploy these on the cluster nodes available.


Django and the cluster agents are utilizing a message bus for reliable communication. The status of the tasks and the agents running on the cluster can always be queried using the REST API.


The REST API was developed including:
- Microsoft ADFS authentication and token generation
- A pluggable infrastructure for writing custom cluster agents
- Full [Gitlab CI/CD](https://docs.gitlab.com/ee/ci/) integration including docker image registry publishing and wiki documentation.


#### Noticeable technologies
- [Django](https://www.djangoproject.com/) with [Django REST Framework](https://www.django-rest-framework.org/) using [PostgreSQL](https://www.postgresql.org/)
- The excellent [Dramatiq](https://dramatiq.io/) background task queuer and framework, used with [RabbitMQ](https://www.rabbitmq.com/)
- Authentication and permissions with [Django Auth ADFS](https://github.com/jobec/django-auth-adfs)


| :calendar: Period  | :man_technologist: Role | :office: Contractor                      | :man_office_worker: Customer               |
| ------------------ | ----------------------- | ---------------------------------------- | ------------------------------------------ |
| 2018 - 2019        | Lead developer          | [Four Digits](https://www.fourdigits.nl) | [Rijk Zwaan](https://www.rijkzwaan.com)    |


### E-Commerce platform for Nutricia

![Nutricia voor jou](/images/nutricia-voor-jou.jpg#left =200x*)Developed a E-commerce plaform for [Nutricia voor jou](https://www.nutriciavoorjou.nl) and [Nutricia for professionals](https://www.nutriciavoorprofessionals.nl/) based on [Django Oscar](https://github.com/django-oscar/django-oscar). The front-end and complete website were built using [Sitecore](https://www.sitecore.com) which communicates with the open sourced REST API known as [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/) which I'm still maintaining today.


I've made some custom add-ons during this project by extending the E-commerce backend including:
- Diverse fraud detection mechanisms
- Custom terminal payment possibilities connected to the webhop for exhibitions and fairs
- A realtime stock and sales dashboard
- Automatic product synchronization from an external PIM system


#### Noticeable technologies
- [Django](https://www.djangoproject.com/) with [Django Oscar](https://github.com/django-oscar/django-oscar) and [DRF](https://www.django-rest-framework.org/)
- Hosted on [AWS](https://aws.amazon.com/) with [Terraform](https://www.terraform.io/), AWS Postgres RDS, AWS EC2 containers are bootstrapped with [Saltstack](https://www.saltstack.com/)
- [Django-Q](https://django-q.readthedocs.io/en/latest/) for housekeeping, email queueing and import / export


| :calendar: Period  | :man_technologist: Role | :office: Contractor                   | :man_office_worker: Customer               |
| ------------------ | ----------------------- | ------------------------------------- | ------------------------------------------ |
| 2015 - 2018        | Python developer        | [Lukkien](https://www.lukkien.com/)   | [Nutricia](https://www.nutriciavoorjou.nl) |

