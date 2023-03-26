# Kompas Planner

![Kompas Planner](/images/buurtsportcoach-planner.jpg#left =215x147)Buurtsportcoaches spelen in Nederland een belangrijke rol als het gaat om het actief begeleiden en stimuleren van sporten in de wijk. Sportmakelaars zorgen er voor dat sportaanbieders en buurtsportcoaches worden gekoppeld aan de juiste doelgroepen en activiteiten. Dat vergt veel organisatie, met name in grote gemeentes zoals Amsterdam.

Waar [Buurtsportcoach Kompas](https://buurtsportcoach-kompas.nl/) zich vooral richt op het monitoren van het gehele proces is de [Kompas Planner](https://cleversports.nl/cases/kompas-planner/) er met name op gericht om activiteiten te koppelen aan coaches, locaties en aanbieders.

Doordat er via REST direct gecommuniceerd kan worden met [Buurtsportcoach Kompas](https://buurtsportcoach-kompas.nl/) en de achterliggende [AFAS systemen](https://www.afas.nl/software/connector) wordt het plannen van activiteiten een stuk simpeler. Planners zien direct welke buurtsportcoaches en trainers van externe aanbieders geschikt zijn voor een bepaalde activiteit.

Ook kunnen de planners de agenda's van de buurtsportcoaches inzien en worden de geplande activiteiten direct ingeschoten in de agenda's van de buurtsportcoaches.

Met [Django-FSM](https://github.com/viewflow/django-fsm) wordt ervoor gezorgd dat de status van een activiteit alleen kan worden aangepast dmv van vooraf gedefinieerde transities. Dit zorgt voor een duidelijke "flow" voor de eindgebruiker, maar ook voor de ontwikkelaar: Met automatische tests kunnen we alle statussen en transities goed testen en daardoor ook documenteren.

Door [Factory Boy](https://factoryboy.readthedocs.io/en/stable/) en [Pytest Django](https://pytest-django.readthedocs.io/en/latest/) te gebruiken maakten we een testsuite met meer dan 480 tests.

#### Uitgelichte technologieën
- Met [Django Crispy Forms](https://github.com/django-crispy-forms/django-crispy-forms) maak je hebruikbare `Lay-outs` voor formulieren zonder veel HTML templates te hoeven schrijven.
- [MDBootstrap](https://mdbootstrap.com/) zorgt ervoor dat de applicatie er uniform uitziet met minimale "custom front-end". Het integreert makkelijk met Django en veel componenten zijn herbruikbaar en makkelijk aan te passen, ook voor backend developers.
- Met [BeatifulSoup](https://beautiful-soup-4.readthedocs.io/en/latest/) testen we of alle pagina's de juiste HTML elementen bevatten. Daar heb ik ook een [blogpost over geschreven](https://www.maerteijn.nl/en/blog/beautiful-asserts-with-your-django-test-client).

#### Factsheet
|                             |                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------- |
| :calendar: **Periode**      | 2022                                                                               |
| :computer: **Rol**          | Python / front-end ontwikkelaar                                                    |
| :man: **Klant**             | [Clever Sports](https://cleversports.nl/) en [Techonomy](https://www.techonomy.nl) |
| :office: **Opdrachtgever**  | [Vicktor](https://www.vicktor.nl)                                                  |
