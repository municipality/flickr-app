import {Component} from '@angular/core';
import {Sidebar} from './components/sidebar.component';
import {Header} from './components/header.component';
@Component({
    selector: 'app',
    directives: [Sidebar, Header],
    template: `
        <header></header>
        <div class="body-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent {

}
