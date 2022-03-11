# Rickandmorty sample APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Api Endpoint

The project is using https://rickandmortyapi.com/graphql API for local dev and production.

## Libs folder

Here all the modules of the project are located, almost all the components are on a sep module for future usage and extension.

## NgRx

Some events and states of the application use this, like the Search Module, LoadingModule and the BreadCrumb module, and saves the state for all the app usage.

## Modules

### Characters Grid

Characters Grid module contains all the characters logic for filtering and searching for characters, by all, name, episode, location. 

Has pagination to interact with the API to navigate throughout all characters, expect when is filtering by episode or location.

### Characters Detail

Character detail will show a character by id, will show all the info and picture.

### Episodes

Will show all episodes, you can filter by name with the searchbar. From here you can go to characters grid to filter by episode.
Has pagination to interact with the API to navigate throughout all episodes.

### Locations

Will show all locations, you can filter by name with the searchbar. From here you can go to characters last located here.
Has pagination to interact with the API to navigate throughout all locations.

## Graphql module

The libs/graphql/graphql.module.ts file contains all the graphql configuration of the project.
It has a cache configuration by default to ensure all data already loaded is persistent on the UI.

## Build Prod

Run `ng build` to build the project for production.

## Compress

Run npm run compress to run the compression algorithm. Just to reduce bundle size.

## Deployment

To deploy it only uses a hook to master on a AWS Code Pipeline, runs de Code Build with buildspec.yml and uploads to a S3 bucket.

## Lazy Loading 

It uses lazy loading on the routing module to ensure all data is loaded only when called, no before. 

## UI

It uses angular material modules for some elements of the ui like buttons, menu, toolbar, paginator, icons. 

It also uses bootstrap to help with the grid and some elements of the layout.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

it covers some apollo services and some components, not all of them and some could be more specific in the future.