import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  faStar = faStar;
  background: any;

  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [90, 80, 90, 70, 80, 60, 100, 0] }
  ];

  public chartLabels: Array<any> = ['HTML - CSS', 'Javascript', 'SQL', 'Python', 'Java - JEE', 'C++', 'C'];

  public chartColors: Array<any> = [
      {
          backgroundColor: [
              '#A372D1',
              '#7975DB',
              '#749BCF',
              '#71A3B8',
              '#74CBCF',
              '#6EC4AF',
              '#6BD17D'
          ],
          borderColor: [
              '#301BDB',
              '#0E4CC4',
              '#0E82CF',
              '#17a2b8',
              '#0ECFB4',
              '#0EC477',
              '#04D108'
          ],
          borderWidth: 2,
      }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      display: false
   },
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
    constructor() { }

    ngOnInit(): void {
    }

}
