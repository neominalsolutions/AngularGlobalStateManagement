import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  private counterState = new BehaviorSubject(0);
  // About Component de counterObs dinleyeceğiz.subscribe olup güncel değeri counterState üzerinden okuyacağız.
  public counterObs = this.counterState.asObservable();
  // counterstate counterObs üzerinden takip edeceğiz

  constructor() {}

  // actions

  Arttir(): void {
    this.counterState.next(this.counterState.value + 1);
  }

  Azalt(): void {
    this.counterState.next(this.counterState.value - 1);
  }
}
