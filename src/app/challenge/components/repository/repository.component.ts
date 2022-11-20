import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GithubService, Repository } from '../../services/github.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  constructor(private apollo: Apollo,
    private gitHubService :GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getTopRepositories().subscribe((repos: Repository[]) => {
      console.log(repos);
    });
  }
}
