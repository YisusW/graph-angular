import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { ChartHorizontalComponent, RepositoryComponent } from './components';
import { URI_API_GITHUB_GRAPHQL } from './graphql.module';

@NgModule({
  declarations: [RepositoryComponent, ChartHorizontalComponent],
  imports: [CommonModule, ApolloModule, HttpClientModule, ChartModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: URI_API_GITHUB_GRAPHQL,
            headers: new HttpHeaders({ Authorization: `Bearer <token>` }),
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  exports: [RepositoryComponent],
})
export class ChallengeModule {}
