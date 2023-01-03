import { Component, Input } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})

export class DonaComponent {

  @Input('title') titleGraphic:string = '';
  @Input('labels') labelsGraphic: Label[] = [];
  @Input('data') dataSource: MultiDataSet = [];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
  ];
}
