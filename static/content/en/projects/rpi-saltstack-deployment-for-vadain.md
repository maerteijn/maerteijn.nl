# RPI Saltstack deployment voor Vadain

![RPI Saltstack Deployment](/images/rpi-saltstack-deployment.jpg#left =200x*)The employees of curtain manufacturer [Vadain](http://www.vadain.nl) are using [Raspberry PI's](https://www.raspberrypi.org/) to automate several tasks in their workshops, like RFID tag scanning and printing and keeping track of orders. Software for these Raspberry PI's is developed in-house with [TKinter](https://docs.python.org/3/library/tk.html) and is operated with a touchscreen.

I used [Saltstack](https://www.saltstack.com/) to implement a custom solution so all Raspberry PI's in the workshops are remotely manageable and configurable. Performing autoamtic updates of the software was now possible and I used and customized the Open Source Front-end [SaltGIU](https://github.com/erwindon/SaltGUI) so it became much easier to track down and fix problems. This Front-end is still used today and is currently beging maintained by [Erwin Dondorp](https://github.com/erwindon/).

#### Noticeable technologies
- [Saltstack] is an configuration management tool written in [Python](http://www.python.org) and uses [ZeroMQ](https://zeromq.org/) as a communication messagebus
- [SaltGIU](https://github.com/erwindon/SaltGUI) is a Front-end for Saltstack written in ES6 and runs in a browser
- [Jenkins](https://www.jenkins.io/) CI/CD for automatic testing and packaging of the Raspberry PI software and images

| :calendar: Period  | :man_technologist: Role               | :man_office_worker: Customer  |
| ------------------ | ------------------------------------- | ----------------------------- |
| 2017               | Devops Engineer / Front-end Developer | [Vadain](https://vadain.nl/)  |

:link: _Github repository_ : https://github.com/erwindon/SaltGUI