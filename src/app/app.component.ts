import { Component, OnInit } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Choose your dream destination...';
  destinations;

  constructor(private service: ClickTravelService){}

  ngOnInit(): void {
    this.get();
  }
  

  get() {
    this.service.getDestinations()
    .pipe(map(e => e.filter(e => e.isDreamDestination == true)))
    .subscribe((data) => {
      this.destinations = data;
      console.log(this.destinations);     
    });
  }
}
