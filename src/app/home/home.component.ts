import { Component } from '@angular/core';
import { CounterStateService } from '../counter-state.service';
import { Store } from '@ngrx/store';
import { CounterState, decrement, increment } from '../store/counter/counter';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  counter: number = 0;
  counter2: number = 0;

  constructor(
    private cState: CounterStateService,
    private store: Store<{ counterReducer: CounterState }>
  ) // private store: Store<{ counterReducer: CounterState, aReducer:any }>
  {
    // NgRx ile yazılan hali
    store.select('counterReducer').subscribe((value: CounterState) => {
      console.log('val', value);
      this.counter2 = value.counter;
    });

    // ikinci bir reducer tanımı varsa ikisinede aynı component üzerinden bağlanmak istersek bu durumda aşağıdaki gibi kullan
    // private store: Store<{ counterReducer: CounterState, aReducer:any }>

    // store.select('aReducer').subscribe((value => {

    // }))

    // value daki değişimi state servis üzerinden dinliyoruz.
    cState.counterObs.subscribe({
      next: (value) => {
        this.counter = value;
      },
    });
  }

  // actions
  Azalt() {
    // NgRx
    this.store.dispatch(decrement()); // ilgili action isimleri çağırılıyor.

    this.cState.Azalt();
  }
  Artir() {
    this.store.dispatch(increment()); // ilgili action isimleri çağırılıyor.
    this.cState.Arttir();
  }
}
