import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DEFAULT_QUERY } from './repository.queries';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({ query: DEFAULT_QUERY })
      .valueChanges.subscribe((repositories: any) => {
        console.log(repositories);
      });
  }
}