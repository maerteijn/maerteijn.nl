# Wagtail Gorilla Forms

![Gorilla Forms Editor](/images/wagtail-gorilla-forms-editor.jpg#left =215x147)Sports marketing is all about the fans and the athletes. Their needs and wishes are important for decision makers. This is exactly why [Techonomy](https://www.techonomy.nl) developed a user-friendly and extensive survey tool with [React](https://reactjs.org/): Gorilla Forms. It also includes a full featured editor so organisations can easily create and edit their own sureys.

Techonomy is using the CMS system [Wagtail](https://wagtail.io/) for their sport related projects so an integration between Wagtail and Gorilla Forms would make perfectly sense to do so. They asked me to implement this integration.

The survey editor and viewer are React components which take a JSON file which includes the questions and settings. In this context, settings are things like the background image and font color.

In the Wagtail integration package, this JSON data is provisioned by a Django model with a [JSON field](https://docs.djangoproject.com/en/3.2/ref/models/fields/#jsonfield). This field is now supported by all database backends since [Django version 3.1](https://docs.djangoproject.com/en/3.2/releases/3.1/#jsonfield-for-all-supported-database-backends). The exact JSON data the editor and viewer are expecting is stored "as is" in the database. This resulted in the fact that only a small and elegant amount of code was needed for the integration.

As [querying JSON keys](https://docs.djangoproject.com/en/3.1/topics/db/queries/#querying-jsonfield) is now also possible with the [Django ORM](https://docs.djangoproject.com/en/3.2/topics/db/queries/), it became easy to create dashboards and statistics out of the survey results.

By making the Survey model [abstract](https://docs.djangoproject.com/en/3.2/topics/db/models/#abstract-base-classes), the model can be overriden and extended in any project.


#### Highlighted technologies
- [Wagtail ModelAdmin](https://docs.wagtail.io/en/stable/reference/contrib/modeladmin/index.html), a nice Wagtail contrib application so you can create and edit plain Django models with the Wagtail UI
- [Microsoft Playwright](https://playwright.dev/) with [Express](https://expressjs.com/) for writing E2E browser-tests, so we can test if the React components are loaded correctly
- [Webpack Output](https://webpack.js.org/configuration/output/#outputlibrarytype), by specifying the `output.library.type` to `var`, we can export the React components as plain javascript variables, so it becomes very easy to integrate the components in the Wagtail UI


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Period**      | 2021                                     |
| :computer: **Role**        | Python and Front-end Developer           |
| :man: **Customer**         | [Techonomy](https://www.techonomy.nl)    |
| :office: **Contractor**    | [Vicktor](https://www.vicktor.nl)        |
