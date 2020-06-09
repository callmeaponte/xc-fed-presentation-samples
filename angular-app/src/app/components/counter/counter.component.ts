import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment } from '../../store/counter.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.pipe(select('count'));
    }

    handleIncrement(): void {
        this.store.dispatch(increment());
    }
}
