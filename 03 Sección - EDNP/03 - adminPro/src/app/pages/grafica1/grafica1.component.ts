import { Component } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {

  public title1: string = 'Grafica1';
  public data1 = [[350, 450, 100]];
  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public title2: string = 'Grafica2';
  public data2 = [[350, 450, 100]];
  public labels2 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public title3: string = 'Grafica3';
  public data3 = [[350, 450, 100]];
  public labels3 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  
  public title4: string = 'Grafica4';
  public data4 = [[350, 450, 100]];
  public labels4 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  // Doughnut
  // public doughnutChartLabels: Label[]

  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
}
