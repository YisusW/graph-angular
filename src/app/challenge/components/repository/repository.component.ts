import { Component, OnInit } from '@angular/core';
import { GithubService, ParametersForm, Repository } from '../../services/github.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {

  topRepositories: Repository[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getTopRepositories().subscribe(
        (repositories: Repository[]) => {
          this.topRepositories = repositories;
        }
      )
  }

  getTopRepositories(parameters: ParametersForm): void {
    if(parameters.topic !== "") {
      this.githubService.getRepositoriesByTopic(parameters).subscribe(
        (repositories: Repository[]) => {
          this.topRepositories = repositories;
        }
      );
    } else {
      this.githubService
      .getTopRepositories(parameters.stars).subscribe(
        (repositories: Repository[]) => {
          this.topRepositories = repositories;
        }
      )
    }
  }
}
