# Wagtail Gorilla Forms

![Gorilla Forms Editor](/images/wagtail-gorilla-forms-editor.jpg#left =215x147)Sportmarketing gaat vooral over de sporters en de fans: wat willen ze? Om dat te weten te komen ontwikkelde [Techonomy](https://www.techonomy.nl) een gebruiksvriendelijke vragenlijst-tool met behulp van [React](https://reactjs.org/): Gorilla Forms. Met een complete drag en drop editor zodat sportorganisaties zelf hun vragenlijsten kunnen aanmaken en samenstellen.

Techonomy gebruikt het CMS systeem [Wagtail](https://wagtail.io/) voor veel van hun sportgerelateerde projecten, dus een integratie tussen Wagtail en Gorilla Forms was dan ook een logische keus om te maken. Ik werd gevraagd om deze integratie te realiseren.

De vragenlijst-editor en de viewer zijn allebei React componenten die een JSON bestand als input gebruiken voor zowel de vragen als de instellingen. In dit geval zijn de instellingen bijvoorbeeld het achtergrondplaatje of de kleuren van het lettertype.

In de Wagtail integratie worden de vragen en de instellingen opgeslagen in een Django model dat gebruikt maakt van een [JSON field](https://docs.djangoproject.com/en/3.2/ref/models/fields/#jsonfield). Dit type veld wordt sinds [Django versie 3.1](https://docs.djangoproject.com/en/3.2/releases/3.1/#jsonfield-for-all-supported-database-backends) ondersteund door alle database backends. Doordat we middels dit veld precies opslaan en teruggeven wat de editor en viewer nodig hebben is de integratie qua code simpel en elegant.

Aangezien de [Django ORM](https://docs.djangoproject.com/en/3.2/topics/db/queries/) ook het queryen van JSON fields mogelijk maakt werd het ook zeer makkelijk om dashboards of statistieken te genereren op basis van de vragenlijstresultaten.

Door het Vragenlijst model [abstract](https://docs.djangoproject.com/en/3.2/topics/db/models/#abstract-base-classes) te maken kan dit model in ieder project makkelijk worden aangepast en uitgebreid.

#### Uitgelichte technologieën
- [Wagtail ModelAdmin](https://docs.wagtail.io/en/stable/reference/contrib/modeladmin/index.html), een uitstekende  Wagtail contrib applicatie om zo ieder Django model te kunnen beheren met de Wagtail UI
- [Microsoft Playwright](https://playwright.dev/) met [Express](https://expressjs.com/) voor het schrijven van [E2E tests](https://github.com/maerteijn/maerteijn.nl/tree/master/tests/e2e), dit om zo te kunnen testen of de React componenten naar behoren functioneren
- [Webpack Output](https://webpack.js.org/configuration/output/#outputlibrarytype), door `output.library.type` op `var` te zetten kunnen we de React componenten als javascript variabelen exporteren. Dit maakt het makkelijk om de compontenten met simpele javascript te integreren in de Wagtail UI


#### Factsheet
|                            |                                        |
| -------------------------- | ---------------------------------------|
| :calendar: **Periode**     | 2021                                   |
| :computer: **Rol**         | Python en Front-end ontwikkelaar       |
| :man: **Klant**            | [Techonomy](https://www.techonomy.nl)  |
| :office: **Opdrachtgever** | [Vicktor](https://www.vicktor.nl)      |

