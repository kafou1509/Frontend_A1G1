# AIE Front end project A1G1
![W](https://user-images.githubusercontent.com/68516549/118410087-0165eb80-b68e-11eb-8556-eec3f9cb3b72.png)

> Le front-end du projet

## Installation and Build Setup


### clone the project

Pour cloner le projet:
``` bash
git clone https://github.com/Alterhi99/Frontend_A1G1.git
```

### install nodejs and npm

[Télécharger Node.js et NPM](https://nodejs.org/en/)


### install dependencies
``` bash
npm install
```
##### Lancer le serveur à hot-reload dans localhost:8080
``` bash
npm run dev
```
##### Build for production with minification
``` bash
npm run build
```
##### Build for production and view the bundle analyzer report
``` bash
npm run build --report
```
##### Executer les testes unitaires
``` bash
npm run unit
```
##### Executer les testes e2e
``` bash
npm run e2e
```
##### Executer tout les testes
``` bash
npm test
```

### Project Structure
``` bash
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── eslintrc            # config file for eslint with extra settings only for unit tests
│   │   ├── index.js            # test build entry file
│   │   ├── jest.conf.js        # Config file when using Jest for unit tests
│   │   └── karma.conf.js       # test runner config file when using Karma for unit tests
│   │   ├── setup.js            # file that runs before Jest runs your unit tests
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .editorconfig               # indentation, spaces/tabs and similar settings for your editor
├── .eslintrc.js                # eslint config
├── .eslintignore               # eslint ignore rules
├── .gitignore                  # sensible defaults for gitignore
├── .postcssrc.js               # postcss config
├── index.html                  # index.html template
├── package.json                # build scripts and dependencies
└── README.md                   # Default README file
```

### Admin Maquette
![Recuiter](https://user-images.githubusercontent.com/68516549/118410192-8224e780-b68e-11eb-8efd-967769f57390.png)



## RQ
Pour une explication détaillée du fonctionnement, consultez le [guide](http://vuejs-templates.github.io/webpack/) et la [documentation pour vue-loader](http://vuejs.github.io/vue-loader).
