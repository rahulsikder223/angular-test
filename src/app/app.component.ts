import { Component } from '@angular/core';
import { DataService } from './utility/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSubscription: Subscription;

  constructor(private dataService: DataService) {
    this.dataSubscription = this.dataService.get("https://api.publicapis.org/entries", null).subscribe(response => {
      console.log(response);
    });
  }
}
