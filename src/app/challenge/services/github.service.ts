import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { DEFAULT_QUERY } from './repository.queries';

export interface Repository {
  name: string;
  stargazerCount: number
  url: string;
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private apollo: Apollo) {}

  public getTopRepositories(): Observable<Repository[]> { 
    
    return this.apollo
    .watchQuery({ query: DEFAULT_QUERY })
    .valueChanges.pipe(
      map((collection: any) => collection.data.search.nodes)
    );
  }

}
