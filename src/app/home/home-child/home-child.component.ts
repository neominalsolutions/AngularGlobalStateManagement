import { Component, OnInit } from '@angular/core';
import { CounterStateService } from 'src/app/counter-state.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css'],
})
export class HomeChildComponent implements OnInit {
  counter: number = 0;

  constructor(private cState: CounterStateService) {}
  ngOnInit(): void {
    this.cState.counterObs.subscribe((value) => {
      this.counter = value;
    });
  }
}
