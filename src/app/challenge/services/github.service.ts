import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { filter, map, Observable } from 'rxjs';
import { DEFAULT_QUERY, GET_REPOSITORIES_BY_TOPIC } from './repository.queries';

export interface Repository {
  name: string;
  stargazerCount: number;
  url: string;
  description: string;
}

export interface ParametersForm {
  topic: string;
  stars: number;
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private apollo: Apollo) {}

  public getTopRepositories(stars: number = 0): Observable<Repository[]> {
    return this.apollo
      .watchQuery({ query: DEFAULT_QUERY })
      .valueChanges.pipe(
        map((collection: any) => {
          const repositories = collection.data.search.nodes;

          return repositories.filter(({stargazerCount}: Repository) => stargazerCount >= stars);
        })
      );
  }

  public getRepositoriesByTopic(parameters: ParametersForm): Observable<Repository[]> {
    return this.apollo.watchQuery({
        query: GET_REPOSITORIES_BY_TOPIC, 
        variables: {
            topic: parameters.topic
          }
      }).valueChanges.pipe(
        map((collection: any) => {
          const repositories = collection.data.topic.repositories.nodes;
          return repositories.filter(({stargazerCount}: Repository) => stargazerCount >= parameters.stars)
        }));
  }
}
