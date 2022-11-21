import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent  {
  @Output() parameters = new EventEmitter();

  public topic = "";
  public stars = 0;

  searchRepositories() {
    this.parameters.emit({
      topic: this.topic.trim(),
      stars: this.stars
    })
  }
}
