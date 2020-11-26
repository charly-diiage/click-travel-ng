import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IDestination } from './idestination';
import { ITicket } from './iticket';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private httpClient: HttpClient) { }

  getDestinations(): Observable<IDestination[]>{
    var t=
    this.httpClient.get<IDestination[]>(environment.apiUrl + '/destinations');
    console.log('destination', t);
    return t;
  }

  getTickets(to: string):Observable<ITicket[]>{
    var t = 
    this.httpClient.get<ITicket[]>(environment.apiUrl + 
      '/tickets?filter=%7B%0A%20%20%22where%22%3A%20%7B%20%22to%22%3A%20%22' + to +'%22%20%7D%0A%7D');
    console.log('tickets', t);
    return t;
  }

  getTicket(id: number): Observable<ITicket>{
    var t = 
    this.httpClient.get<ITicket>(environment.apiUrl + '/tickets/' + id);
    return t;
  }

}
