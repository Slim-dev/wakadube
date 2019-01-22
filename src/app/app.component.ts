import { Component } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wakadube';
  update = false;
  joke: any;
  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;

  constructor(updates: SwUpdate, private data: DataService) {
    //feature to enable live-reload
    updates.available.subscribe( event => {
      updates.activateUpdate().then(() => document.location.reload())
    })
  }

}
