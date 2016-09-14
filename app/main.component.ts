import {Component, AfterViewInit} from '@angular/core';
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
export class MainComponent implements AfterViewInit {
    loadingScreen : Element;
    app;
    ngAfterViewInit () {
        this.loadingScreen = document.getElementsByClassName("loading-screen-container")[0];
        this.app = document.getElementsByTagName('app')[0];
        document.getElementById('spinner').addEventListener('click', e => {
            this.moveScreen();
        });
    }

    moveScreen () {
        this.loadingScreen.classList.add("move");
        this.app.classList.add("move");
    }


}
