import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
})
export default class ContainerComponent {
    onIncrement(count: number): void {
        console.log(`The count is ${ count }.`);
    }
}
