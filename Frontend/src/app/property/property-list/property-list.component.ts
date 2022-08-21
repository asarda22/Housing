import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertiesService } from '../../services/properties.service';
import { error } from 'protractor';
// import { IProperty } from '../IProperty.interface';
import { IProperty } from 'src/app/models/IProperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<IProperty>;
  SellRent = 1;

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) { }

  ngOnInit() {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.propertiesService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
        const newProperty = JSON.parse(localStorage.getItem('newProperty'));

        if (newProperty.SellRent === this.SellRent) {
          this.Properties = [newProperty, ...this.Properties];
        }

      }, err => {
        console.log(err);
      }
    );
  }

}
