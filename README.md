# GraphQL - Angular - Apollo - GitHubAPI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `npm install`

 * @description add the token (tokens classic)
 * https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

```typescript
import { FormsModule } from '@angular/forms';

/**
 * @description add the token very recommended for me (tokens classic)
 * https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
 */
const tokenG = "ADD_TOKEN_HERE";

@NgModule({

```

Paste the token (tokens classic) in the file => `/src/app/challenge/challenge.module.ts` line 21 where it was a constant created to use Authentication
This step it is very required to get data from GitHub API
---------------------------------------------------------------------------------------------------------

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
