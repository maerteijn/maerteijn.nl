# Klantcontact webapplicatie voor Beep for Help

![Customer Support application for Beep for Help](/images/beep-for-help.jpg#left =215x147)Iedereen heeft wel eens wat extra hulp nodig, ook een snelgroeiend bedrijf als [Beep for Help](https://www.beepforhelp.nl). Met een toenemende dienstverlening en groeiende vraag werd het tijd de klantenservice verder te professionaliseren. Daarom werd Vicktor gevraagd om te helpen een gebruiksvriendelijke en eenvoudig te onderhouden web-frontend te implementeren voor de klantenservice zodat de klanten sneller en efficiënter kunnen worden geholpen.

#### API first

De nieuw ontwikkelde webapplicatie moest stateless zijn en volledig geïntegreerd worden met de API van Beep for Help. Deze implementeert alle bedrijfslogica, zoals status-workflows, planning en dataverzameling. Het ontwikkelen van een front-end applicatie met Vue, React of een ander front-end framework zou een voor de hand liggende keuze zijn, maar dit vereist ook specifieke kennis en onderhoud of "abandonware" zijn altijd een "dingetje" in de wereld van de front-end frameworks.

Daarom besloten we een web-front-end te bouwen met Django, een platform al welbekend bij de klant. Het queryen van een API door een server-side applicatie brengt uitdagingen met zich mee op het gebied van concurrency (IO) (die kunnen worden opgelost met sync als async oplossingen). Ik heb dit verder onderzocht en daar een [blogpost over geschreven](/en/blog/django-sync-or-async).

#### Service layer

Hoewel de bestaande Beep for Help API min of meer voldeed voor het opvragen en opslaan van de benodigde gegevens, was de implementatie ervan gericht op een specifieke iOS-applicatie en niet op een webapplicatie voor klantenservice. 

Om de transitie naar een meer generieke API te vergemakkelijken, hebben we een servicelaag in Python toegevoegd die ook bruikbaar is voor andere applicaties. Je zou kunnen zeggen dat we een SDK voor de API hebben ontwikkeld. Voor Django implementeerden we een specifieke servicelaag met o.a. authenticatie en sessie management. Een architectuuroverzicht:

![Servicelaag](/images/service-layer.png)

#### Uitgelichte technologieën
- [Django](https://www.djangoproject.com/)
- [Pydantic](https://docs.pydantic.dev/), voor het valideren van API calls en data transities
- [VCR.py](https://github.com/kevin1024/vcrpy), voor API mocking en testing
- [Docker Compose](https://docs.docker.com/compose/), voor het testen van de docker container van de applicatie

#### Factsheet
|                              |                                                       |
| ---------------------------- | ----------------------------------------------------- |
| :calendar: **Periode**       | 2025                                                  |
| :computer: **Rol**           | Python ontwikkelaar, consultant                       |
| :man: **Klant**              | [Beep for Help](https://www.beepforhelp.nl/)          |
| :office: **Opdrachtgever**   | [Vicktor](https://www.vicktor.nl)                     |
| :mortar_board: **Blog post** | [Django sync or async](/en/blog/django-sync-or-async) |

