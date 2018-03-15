import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  datahub = 'Hi, DataHub';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    const api = `/api/test1`;

    return this
      .http
      .get(api)
      .toPromise()
      .then(response => {
        this.datahub = `Data come from DataHub: ${JSON.stringify(response)}`;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
