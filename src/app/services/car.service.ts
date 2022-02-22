import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get('assets/customers-large.json')
                .toPromise()
                .then((res:any) =>  res.data)
                .then(data => { return data; });
}
}
