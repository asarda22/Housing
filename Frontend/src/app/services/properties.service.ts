import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/Property';
import { IProperty } from 'src/app/models/IProperty';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

constructor(private http: HttpClient) { }

getProperty(id: number) {
  return 0;
}

getAllProperties(SellRent?: number): Observable<IProperty[]> {
  return this.http.get('data/properties.json').pipe(
  map(data => {
    const propertiesArray: Array<IProperty> = [];
    for (const id in data) {
      if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
        propertiesArray.push(data[id]);
      }
    }
    return propertiesArray;
  })
  );
  }

  addProperty(property: Property) {
    localStorage.setItem('newProperty', JSON.stringify(property));
  }
}
