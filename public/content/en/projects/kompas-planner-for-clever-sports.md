# Kompas Planner

![Kompas Planner](/images/buurtsportcoach-planner.jpg#left =215x147)Community Sports Coaches have an important role in The Netherlands when it comes to supervise and stimulate sports in the local communities. Sport brokers make sure that sport providers and community sport coaches are linked to activities and target audiences. This requires organisation, particularly in large municipalities such as Amsterdam.

The [Kompas Planner](https://cleversports.nl/cases/kompas-planner/) application has been developed to serve this purpose: Connect sport activities with coaches, trainers, locations and providers.

Communication with relevant backend systems, including supporting [AFAS systems](https://www.afas.nl/software/connector) is done in real-time via REST. This simplifies the planning of activities drastically. The planners can immediately see which community sport coaches (or external trainers) are suitable for the (to be) planned activities.

The planners can query the community sport coaches agenda's in real-time and enter the newly planned activities directly.

With [Django-FSM](https://github.com/viewflow/django-fsm) the application makes sure the state of an activity can only be adjusted with predefined transitions. This unfolds a clear "flow" for the end user and also for the (future) developers. With automated tests we ensure these status transitions work as expected and can be documented.

[Factory Boy](https://factoryboy.readthedocs.io/en/stable/) and [Pytest Django](https://pytest-django.readthedocs.io/en/latest/) are used to create a test suite with more than 480 tests.

#### Highlighted technologies
- With [Django Crispy Forms](https://github.com/django-crispy-forms/django-crispy-forms) it's easy to create reusable `Lay-outs` for Django forms without writing HTML.
- [MDBootstrap](https://mdbootstrap.com/) ensures a uniform look and feel with minimal "custom front-end". It integrates easily with Django and most components are reusable and adaptable, also for backend developers.
- With [BeatifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) we test if all pages contain the correct HTML elements. I wrote a [blog post on this topic](https://www.maerteijn.nl/en/blog/beautiful-asserts-with-your-django-test-client).

#### Factsheet
|                             |                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------- |
| :calendar: **Period**       | 2022                                                                               |
| :computer: **Role**         | Python / front-end ontwikkelaar                                                    |
| :man: **Customer**          | [Clever Sports](https://cleversports.nl/) en [Techonomy](https://www.techonomy.nl) |
| :office: **Contractor**     | [Vicktor](https://www.vicktor.nl)                                                  |
