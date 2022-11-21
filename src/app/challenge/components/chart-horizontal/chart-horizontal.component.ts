import { Component, Input, OnChanges } from '@angular/core';
import { Repository } from '../../services/github.service';

@Component({
  selector: 'app-chart-horizontal',
  templateUrl: './chart-horizontal.component.html',
  styleUrls: ['./chart-horizontal.component.scss']
})
export class ChartHorizontalComponent implements OnChanges {

  @Input() data: Repository[] = [];

  basicData: any;

  horizontalOptions: any;

  ngOnChanges(): void {
    const values = this.data.map((repo) => repo.name);

    this.basicData = {
      labels: values,
      datasets: [
        {
          label: 'Top 10',
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#26C6DA",
            "#7E57C2",
            "#FF6699",
            "#FFFFCC",
            "#660000",
            "#CCFFFF",
            "#FFCE56"
          ],
          data: this.data.map((repo) => repo.stargazerCount)
        }
      ]
    };

    this.horizontalOptions = {
  
      plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
      },
      scales: {
          r: {
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };
  }

}
