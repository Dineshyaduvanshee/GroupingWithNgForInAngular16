import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroupingWithNgForInAngular16';
  
  constructor() {
    
  }
  CountryDetails :any[]=[
    {
      'country':'India','people':[
        {
          "name":'Dinesh Kuamr'
        },
        {
          "name":'Ramesh'
        },
        {
          "name":"Devesh"
        },
        {
          "name":"Pawan"
        },
        {
          "name":""
        }
      ]
    },
    {
      'country':'UK','people':[
        {
          "name":'Jack toxin'
        },
        {
          "name":'David'
        },
        {
          "name":"Furnisdish"
        },
        {
          "name":"cuto"
        },
        {
          "name":"twancle"
        }
      ]
    }
  ]
}
