import { Component } from '@angular/core';
import { CounterStateService } from '../counter-state.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  counter: number = 0;

  constructor(private cState: CounterStateService) {
    // value daki değişimi state servis üzerinden dinliyoruz.
    cState.counterObs.subscribe({
      next: (value) => {
        this.counter = value;
      },
    });
  }

  // actions
  Azalt() {
    this.cState.Azalt();
  }
  Artir() {
    this.cState.Arttir();
  }
}
