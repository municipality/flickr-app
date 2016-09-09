import {Component} from '@angular/core';
import {Sidebar} from './components/sidebar.component';

@Component({
    selector: 'app',
    directives: [Sidebar],
    template: `
        <bar></bar>
        <div class="body-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent {

}
