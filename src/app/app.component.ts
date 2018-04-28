import {AfterContentInit, Component} from '@angular/core';
import APP_CONFIG from './app.config';
import {Chart} from './chart';

// import {type} from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements AfterContentInit*/ {
  title = 'Wach';

  constructor() {
  }
}
