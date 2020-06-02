# E-Commerce platform for Nutricia

![Nutricia voor jou](/images/nutricia-voor-jou.jpg#left =200x*)In conjunction with [Lukkien](http://www.lukkien.nl) we developed a E-commerce plaform for [Nutricia voor jou](https://www.nutriciavoorjou.nl) and [Nutricia for professionals](https://www.nutriciavoorprofessionals.nl/) based on [Django Oscar](https://github.com/django-oscar/django-oscar). The front-end and complete website were built using [Sitecore](https://www.sitecore.com) which communicates with the open sourced REST API known as [Django Oscar API](https://django-oscar-api.readthedocs.io/en/latest/) which I'm still maintaining today.


I've made some custom add-ons during this project by extending the E-commerce backend including:
- Diverse fraud detection mechanisms
- Custom [terminal payment possibilities](https://payplaza.com/nutricia-implements-point2pay/) connected to the webhop for exhibitions and fairs
- A realtime stock and sales dashboard
- Automatic product synchronization from an external PIM system


#### Noticeable technologies
- [Django](https://www.djangoproject.com/) with [Django Oscar](https://github.com/django-oscar/django-oscar) and [DRF](https://www.django-rest-framework.org/)
- Hosted on [AWS](https://aws.amazon.com/) with [Terraform](https://www.terraform.io/), AWS Postgres RDS, AWS EC2 containers are bootstrapped with [Saltstack](https://www.saltstack.com/)
- [Django-Q](https://django-q.readthedocs.io/en/latest/) for housekeeping, email queueing and import / export


| :calendar: Period  | :man_technologist: Role | :office: Contractor                   | :man_office_worker: Customer               |
| ------------------ | ----------------------- | ------------------------------------- | ------------------------------------------ |
| 2015 - 2018        | Python Developer        | [Lukkien](https://www.lukkien.com/)   | [Nutricia](https://www.nutriciavoorjou.nl) |


 :link: _Github repository_ : https://github.com/django-oscar/django-oscar-api/