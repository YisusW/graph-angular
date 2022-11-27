import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ChartHorizontalComponent, RepositoryComponent } from './components';
import { URI_API_GITHUB_GRAPHQL } from './graphql.module';
import { ParametersComponent } from './components/repository/parameters/parameters.component';
import { FormsModule } from '@angular/forms';

/**
 * @description add the token very recommended for me (tokens classic)
 * https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
 */
const tokenG = "__PASTE_TOKEN_HERE__";

if (tokenG === '__PASTE_TOKEN_HERE__') {
  console.error('HEY, please add token from github');
}

@NgModule({
  declarations: [RepositoryComponent, ChartHorizontalComponent, ParametersComponent],
  imports: [CommonModule, ApolloModule, HttpClientModule, ChartModule, FormsModule, InputNumberModule, InputTextModule, ButtonModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: URI_API_GITHUB_GRAPHQL,
            headers: new HttpHeaders({ Authorization: `Bearer ${tokenG}` }),
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  exports: [RepositoryComponent],
})
export class ChallengeModule {}
