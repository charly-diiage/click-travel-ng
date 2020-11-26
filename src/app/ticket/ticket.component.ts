import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { ClickTravelService } from '../click-travel.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tickets;
  code: string;

  constructor(private activatedRoute: ActivatedRoute, private service: ClickTravelService) { }

  ngOnInit(): void {  
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('code'));
      this.code = params.get('code');
      this.service.getTickets(this.code).subscribe((data) => {
        this.tickets = data;
        console.log('aaaaaaaa',this.tickets);
        
      })
    });
  }
}
