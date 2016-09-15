import {Component, AfterViewInit} from '@angular/core';
import {Sidebar} from './components/sidebar.component';
import {Header} from './components/header.component';
@Component({
    selector: 'app',
    directives: [Sidebar, Header],
    template: `
        <headerbar></headerbar>
        <div class="body-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent implements AfterViewInit {
    loadingScreen : Element;
    app;


    /**
     *  Loading screen and app are in the same container for fluid movement
     *  Used top animation rather than transform translate for non-fixed image offshifts
     */
    ngAfterViewInit () {
        this.loadingScreen = document.getElementsByClassName("loading-screen-container")[0];
        this.app = document.getElementsByTagName('app')[0];
        document.getElementById('spinner').innerHTML = `
            <div class="icon-loading-down">

            </div>
        `;
        document.getElementById('spinner').classList.add("loaded");
        document.getElementById('spinner').addEventListener('click', e => {
            this.moveScreen();
        });


    }

    moveScreen () {
        document.getElementsByClassName("app-container")[0].classList.add("move");
    }


}
