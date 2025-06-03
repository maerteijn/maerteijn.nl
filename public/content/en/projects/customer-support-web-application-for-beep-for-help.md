# Customer Support application for Beep for Help

![Customer Support application for Beep for Help](/images/beep-for-help.jpg#left =215x147)Everyone needs a little extra help sometimes, including a fast growing company like [Beep for Help](https://www.beepforhelp.nl). With services expanding and demands growing quickly, the customer support flow needed some optimisations. So Vicktor was asked to help out and develop a user friendly, easy maintainable and testable web front-end so customer support can serve their clients more quickly.

#### API first

The new developed web application should be stateless and fully integrated with the Beep for Help API, which encapsulates all required business logic like status workflows, scheduling and data aggregation. Writing a pure front-end app with Vue, React or any other front-end framework would be an obvious choice but this also requires specific knowledge and maintenance is always a thing in the "front-end world". 

So we decided to build a web front-end in [Django](https://www.djangoproject.com/), a platform already known by the customer. Having a server-side application consume an API introduces IO related concurrency challenges (which can be solved with sync and async flavors nowadays). I decided to do some research regarding this subject and wrote a [blog post about it](/en/blog/django-sync-or-async).

#### Service layer

While the existing Beep for Help API was more or less sufficient for querying and storing required data, the implementation was tailored for a specific IOS application and not for a customer support web application. To ease the transition to a more generic usable API we designed a platform independent service layer in python, you could say an SDK for the API. This makes the Beep for Help API accessible for any other application, specific Django requirements have been added to a specific Django service. An architectural overview:

![Service layer](/images/service-layer.png)

#### Highlighted technologies
- [Django](https://www.djangoproject.com/)
- [Pydantic](https://docs.pydantic.dev/), for validating API calls and data transitions
- [VCR.py](https://github.com/kevin1024/vcrpy), for easy API mocking and testing
- [Docker Compose](https://docs.docker.com/compose/), for testing the dockerised version of the application

#### Factsheet
|                              |                                                       |
| ---------------------------- | ----------------------------------------------------- |
| :calendar: **Period**        | 2025                                                  |
| :computer: **Role**          | Python Developer, Consultant                          |
| :man: **Customer**           | [Beep for Help](https://www.beepforhelp.nl/)          |
| :office: **Contractor**      | [Vicktor](https://www.vicktor.nl)                     |
| :mortar_board: **Blog post** | [Django sync or async](/en/blog/django-sync-or-async) |

