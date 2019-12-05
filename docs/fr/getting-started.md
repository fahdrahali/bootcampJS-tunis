# Démarrage

Pour travailler dans de bonnes conditions, rien de tel qu'un environnement complet et à jour ! Voici ci-dessous la liste des outils à avoir à disposition.

## Environnnement d'exécution JS

[Node](https://nodejs.org/en/)

## IDE

- [Visual studio code](https://code.visualstudio.com/)

## Gestionnaire de packages

- [NPM](https://www.npmjs.com/) : il vous sera directement livré et installé via Node
- [Yarn](https://yarnpkg.com/en/) : plus performant que NPM, à installer une fois en global sur votre poste (`npm i -g yarn`)

## Navigateur - DevTools

- [Google Chrome](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en-GB)

Une fois votre chrome intallé, lancez le et installer de précieux devtools :

- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)

## Git

[Git](https://git-scm.com/)

## Client Git

Parce qu'il est intéressant de pouvoir visualiser les diffs et proposer des commits fins et thématiques, l'adoption d'un client git est préconisée :

- [GitHub Desktop](https://desktop.github.com/)
- [GitKraken](https://www.gitkraken.com/)

Ces clients n'offrent toutefois pas toutes les fonctionnalités de Git. Il est alors intéressant d'effectuer les opérations "simples" via le client, et les opérations spécifiques en ligne de commande.

## Application initiale

[Create React App](https://github.com/facebook/create-react-app) est un archétype puissant permettant de disposer rapidement et facilement d'un squelette applicatif React.

Une surcouche, incluant `ESLint` et `Prettier` vous est proposée :

```bash
git clone https://github.com/InseeFrLab/BootcampJS-JS.git
cd BootcampJS-JS
git checkout 77dad7dcc1962a020d32c44e8e868b84b2e04ac4
```
