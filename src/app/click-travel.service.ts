import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IDestination } from './idestination';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private httpClient: HttpClient) { }

  getDestinations(): Observable<IDestination[]>{
    var t=
     this.httpClient.get<IDestination[]>(environment.apiUrl + '/destinations');
     console.log(t);
    
     return t;

  }

}
