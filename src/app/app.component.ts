import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Airways';

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get<any>('v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2023-05-02&adults=1&nonStop=false&max=250')
    .pipe(
      map(response => {
      return response;
      })
    ).subscribe(data => console.log(data));
  }
}
