import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertiesService } from '../../services/properties.service';
import { error } from 'protractor';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<IProperty>;

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.propertiesService.getAllProperties().subscribe(
      data => {
        this.Properties = data;
      }, err => {
        console.log(err);
      }
    );
  }

}
