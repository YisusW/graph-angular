import { Component, OnInit } from '@angular/core';
import { GithubService, Repository } from '../../services/github.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getTopRepositories().subscribe(
        (repositories: Repository[]) => {
          console.log(repositories)
        }
      );
  }
}
