import { Component } from '@angular/core';
import { CounterStateService } from '../counter-state.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  constructor(public cState:CounterStateService) {

      
  }

}
