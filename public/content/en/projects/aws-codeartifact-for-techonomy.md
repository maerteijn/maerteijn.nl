# AWS CodeArtifact for Techonomy

![AWS Codeartifact](/images/aws-codeartifact.jpg#left =215x147)At [Vicktor](https://www.vicktor.nl) we develop a variety of Django based projects which sometimes share *Django apps*. This can be all kind of apps like form tools, data importers and many more. We used git dependencies to include these apps but this isn't *best practice*. Can we use AWS CodeaArtifact to do this in a proper way?


#### What is AWS CodeArtifact
AWS CodeArtifact is a hosted service from AWS which can hold several package formats, like npm, PyPI, Maven, NuGet and generic package formats. The PyPI feature is interesting as it allows us to package and distribute reusable Python applications properly. These packages (wheels) are installable with [pip](https://pip.pypa.io/) or [poetry](https://python-poetry.org/) (or any other python package manager which supports wheels and/or a pypi server).


#### How did we use AWS CodeArtifact

I wrote a [blog article](/en/blog/private-pypi-with-aws-codeartifact) how we setup the repository and how you can use it with pip and/or poetry.


#### Highlighted technologies
- [AWS CodeArtifact](https://aws.amazon.com/codeartifact/), official website
- [Token Documentation](https://docs.aws.amazon.com/codeartifact/latest/ug/tokens-authentication.html), more details about CodeArtifact tokens
- [poetry](https://python-poetry.org/), an alternative full featured CLI for python projects and dependency management
- [Twine](https://github.com/pypa/twine, publish packages to a PyPI server


#### Factsheet
|                            |                                          |
| -------------------------- | ---------------------------------------- |
| :calendar: **Period**      | 2023                                     |
| :computer: **Role**        | DevOps Engineer                          |
| :man: **Customer**         | [Techonomy](https://www.techonomy.nl)    |
| :office: **Contractor**    | [Vicktor](https://www.vicktor.nl)        |

