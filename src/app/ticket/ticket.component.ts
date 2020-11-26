import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { ClickTravelService } from '../click-travel.service';
import { ITicket } from '../iticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tickets: ITicket[];
  code: string;
  passenger: string;
  flight: string;
  from: string;
  to: string;
  class: string;
  gate: string;
  time: string;
  seat: string;
  number: number
  ticket: ITicket;

  constructor(private activatedRoute: ActivatedRoute, private service: ClickTravelService) { }

  ngOnInit(): void {  
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('code'));
      this.code = params.get('code');
      this.service.getTickets(this.code).subscribe((data) => {
        this.tickets = data;
        console.log('aaaaaaaa',this.tickets);      
      });
    });
  }

  //Y'A PAS D'ID........
  // getById(id){
  //   this.service.getTicket(id).subscribe(data => {
  //     this.ticket = data;
  //     console.log(this.ticket);   
  //   })
  // }
}
