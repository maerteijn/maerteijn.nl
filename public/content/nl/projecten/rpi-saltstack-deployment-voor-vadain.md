# RPI Saltstack deployment voor Vadain

![RPI Saltstack Deployment](/images/rpi-saltstack-deployment.jpg#left =215x147)De medewerkers in de ateliers van gordijnenfabrikant [Vadain](http://www.vadain.nl) gebruiken [Raspberry PI's](https://www.raspberrypi.org/) om diverse taken te automatiseren zoals het scannen en printen van RFID tags en het bijhouden van bestellingen. De software voor deze Raspberry PI's wordt in-house ontwikkeld met [TKinter](https://docs.python.org/3/library/tk.html) en wordt bediend door middel van een touchscreen.

Met [Saltstack](https://www.saltstack.com/) heb ik ervoor gezorgd dat de Raspberry's in de ateliers op afstand geconfigureerd konden worden en dat de software up-to-date kon worden gehouden. De Open Source front-end [SaltGUI](https://github.com/erwindon/SaltGUI) heb ik daarvoor deels uitgebreid en aangepast. Zo werd het ook makkelijk om problemen op te sporen mocht er in het productieproces iets misgaan. Deze front-end wordt nu nog steeds verder ontwikkeld door [Erwin Dondorp](https://github.com/erwindon/).

#### Uitgelichte technologieën
- [Saltstack](https://www.saltstack.com/) is een configuratie management tool geschreven in [Python](http://www.python.org) en gebruikt [ZeroMQ](https://zeromq.org/) als messagebus
- [SaltGUI](https://github.com/erwindon/SaltGUI) is een ES6 gebaseerde front-end voor Saltstack
- [Jenkins](https://www.jenkins.io/) CI/CD voor het automatisch testen en packagen van de Raspberry PI software en images


#### Factsheet
|                            |                                               |
| -------------------------- | --------------------------------------------- |
| :calendar: **Periode**     | 2017                                          |
| :computer: **Rol**         | Devops Engineer / Front-end Developer         |
| :man: **Klant**            | [Vadain](https://vadain.nl/)                  |
| :link: **Repository**      | [Github](https://github.com/erwindon/SaltGUI) |
