# AWS CodeArtifact voor Techonomy

![AWS Codeartifact](/images/aws-codeartifact.jpg#left =215x147)Bij [Vicktor](https://www.vicktor.nl) ontwikkelen we diverse Django gebaseerde projecten, vaak met generieke en herbruikbare *Django apps*. Dit kunnen allerlei soorten apps zijn: formulieren tools, enquêtes, data importers, koppelingen etc. We gebruiken git dependencies om deze apps te gebruiken, maar kunnen we AWS CodeaArtifact inzetten om dit te doen "volgens het boekje"?


#### Wat is AWS CodeArtifact
AWS CodeArtifact is a een hosted dienst van Amazon dat verschillende package formaten aanbiedt zoals npm, PyPI, Maven, NuGet en generieke formaten. Het PyPI formaat is interessant voor onze projecten omdat we daardoor Python applicaties kunnen distribueren. Deze packages (wheels) zijn dan te installeren met [pip](https://pip.pypa.io/) of [poetry](https://python-poetry.org/) (of ieder andere python package manager die wheels ondersteunt via een pypi server).


#### Hoe hebben we AWS CodeArtifact gebruikt

Ik heb een [blog artikel](/en/blog/private-pypi-with-aws-codeartifact)) geschreven hoe we de repository hebben opgezet en hoe je deze kunt gebruiken met pip en/of poetry.


#### Uitgelichte technologieën
- [AWS CodeArtifact](https://aws.amazon.com/codeartifact/), officiële website
- [Token Documentatie](https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html), meer informatie over token-authenticatie
- [poetry](https://python-poetry.org/), een alternatieve full featured CLI voor python project management en dependencies
- [Twine](https://github.com/pypa/twine, publiceer packages naar een PyPI server


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Periode**     | 2023                                     |
| :computer: **Rol**         | DevOps Engineer                          |
| :man: **Klant**            | [Techonomy](https://www.techonomy.nl)    |
| :office: **Opdrachtgever** | [Vicktor](https://www.vicktor.nl)        |

