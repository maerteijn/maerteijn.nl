# AWS CodeaArtifact

![AWS Codeartifact](/images/aws-codeartifact.jpg#left =215x147)Techonomy develops a lot of different Django based projects which all share "generic" Django apps. This can be all kind of apps like form tools, survey tools and many more in the future. We can use git dependencies to include these apps but that's not how it should be. Can we use AWS CodeaArtifact to do this in a "proper" way?

####  What is AWS CodeArtifact
AWS CodeArtifact is a hosted service from AWS which can hold several package formats, like npm, PyPI, Maven, NuGet and generic package formats. The PyPI feature is interesting as it allows us to package reusable python packages properly with an index server which can be used with [pip](https://pip.pypa.io/) or [poetry](https://python-poetry.org/).

#### Why should you create packages
There are several reasons why a Private PyPI server is beneficial when your company works with reusable applications:
- You can "compile" front-end artifacts (images, javascript, css etc) into assets and have them properly packed in your "wheel" (which is a Python Package): Otherwise you'll need to rebuild your assets when you install these dependencies from a source distribution (git).
- The same goes for other arttifacts like translation files (no more binary `.mo` files in your repository!), c / Rust extensions or just copying plain assets.
- Eventually it speeds up your CI / CD pipeline: Reusable packages only need to be build and released once, instead of each time you need to build your project.
- It forces you to separate concerns: Reusable apps can also be tested in isolated sandboxes, making the code less dependant on your project requirements.

And there are many more advantages, like forcing you to version your packages, think about update strategies or even decide to open source one of your private packages.
