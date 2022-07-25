import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any> = [
    {
      Id: 1,
      Type: 'House1',
      Price: 12000
    },
    {
      Id: 2,
      Type: 'House2',
      Price: 15000
    },
    {
      Id: 3,
      Type: 'House3',
      Price: 18000
    },
    {
      Id: 4,
      Type: 'House4',
      Price: 18000
    },
    {
      Id: 5,
      Type: 'House5',
      Price: 18000
    },
    {
      Id: 6,
      Type: 'House6',
      Price: 18000
    }
];

  constructor() { }

  ngOnInit() {
  }

}
