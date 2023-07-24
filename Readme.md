# Pokedex - Monolithic Repository

## Overview
- The Pokedex application is constructed as a mono repository using lerna's assistance.
- The concept of a mono repository, also known as a monolithic repository, revolves around the practice of housing numerous projects or components within one centralized repository. This design streamlines the sharing of code, managing dependencies, and overall maintenance of the entire project.
- Lerna represents a widely-used utility for effectively handling mono repositories, providing us with capabilities to version, publish, and proficiently manage interconnected projects.

- Rollup serves as a module bundler, efficiently optimizing and packaging JavaScript code into compact and high-performance bundles. It proves particularly well-suited for developing libraries or applications that prioritize minimal overhead and achieve optimal performance.

- The software includes two packages, specifically identified as '@pokedex/components' and '@pokedex/utils'. These packages are bundled using Rollup and implemented within the primary Pokedex Next.js application.

## Getting started

To run the Pokemon application locally, you'll need to follow these steps:

### Prerequisites

- [Node.js](ttps://nodejs.org/en/) (v16 or higher) installed on your machine.
- npm installed.
- Typescript


### Project Setup

**Install dependencies**
- `npm bootstrap` internally installed the dependencies of parent package.json and then run `lerna bootstrap --hoist` so that the dependencies of packages are installed.

```sh
npm run bootstrap-hoist
```
**Compile packages required for pokedex**
- `npm compile` compile the dependent packages i.e. `@pokedex/components` and `@pokedex/utils` with the help of rollup bundler, which is used in `pokedex` nextjs application.

```sh
npm run compile
```

#### Running the app in development
- `npm run dev` runs the `pokedex` nextjs application in development mode
```sh
 npm run dev
```

#### Running the app for production
- `npm run build` builds the `pokedex` nextjs application.
- `npm run prod` run the `pokedex` nextjs application in production mode.
```bash
# building
npm run build

# production mode
 npm run prod
```

#### Running the app using docker

```bash
# building image from base folder
 docker build .

# runnnig the image
 docker run -d -p exposedPort:containerPort <imageId>
```


```bash
# unit tests
 npm run test

```


## Documentation
- [MUI-Component](https://mui.com/material-ui/react-grid/)
- [MUI datagrid](https://mui.com/x/react-data-grid/)
- [eslint](https://eslint.org/docs/latest/use/getting-started)
- [prettier](https://prettier.io/docs/en/index.html)
- [react-dom](https://react.dev/)
- [react-redux](https://react-redux.js.org/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-scripts](https://react.dev/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [Husky](https://typicode.github.io/husky/)

