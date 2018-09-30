import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tshirt } from '../models/tshirt';

@Injectable({
  providedIn: 'root'
})
export class tshirtService {

  tshirtURL = "/tshirts"
  constructor(private http: HttpClient) { }

  getTshirts(): Observable<Tshirt[]>{
    return this.http.get<Tshirt[]>(this.tshirtURL);
  }
}
