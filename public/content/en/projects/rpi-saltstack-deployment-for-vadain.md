# RPI Saltstack deployment voor Vadain

![RPI Saltstack Deployment](/images/rpi-saltstack-deployment.jpg#left =215x147)The employees of curtain manufacturer [Vadain](http://www.vadain.nl) are using [Raspberry PI's](https://www.raspberrypi.org/) to automate several tasks in their workshops, like RFID tag scanning and printing and keeping track of orders. Software for these Raspberry PI's is developed in-house with [TKinter](https://docs.python.org/3/library/tk.html) and is operated with a touchscreen.

I used [Saltstack](https://www.saltstack.com/) to implement a custom solution so all Raspberry PI's in the workshops are remotely manageable and configurable. Performing automatic updates of the software was now possible and I used and customized the Open Source Front-end [SaltGUI](https://github.com/erwindon/SaltGUI) so it became much easier to track down and fix problems. This Front-end is still used today and is currently being maintained by [Erwin Dondorp](https://github.com/erwindon/).

#### Highlighted technologies
- [Saltstack] is an configuration management tool written in [Python](http://www.python.org) and uses [ZeroMQ](https://zeromq.org/) as a communication message-bus
- [SaltGUI](https://github.com/erwindon/SaltGUI) is a Front-end for Saltstack written in ES6 and runs in a browser
- [Jenkins](https://www.jenkins.io/) CI/CD for automatic testing and packaging of the Raspberry PI software and images


#### Factsheet
|                            |                                               |
| -------------------------- | --------------------------------------------- |
| :calendar: **Period**      | 2017                                          |
| :computer: **Role**        | Devops Engineer / Front-end Developer         |
| :man: **Customer**         | [Vadain](https://vadain.nl/)                  |
| :link: **Repository**      | [Github](https://github.com/erwindon/SaltGUI) |
