import {Component, AfterViewInit} from '@angular/core';
import {Sidebar} from './components/sidebar.component';
import {Header} from './components/header.component';
import {LoadingScreenService} from './loadingscreen.service';

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

    constructor (private loadingScreenService:LoadingScreenService) {

    }

    /**
     *  Loading screen and app are in the same container for fluid movement
     *  Used top animation rather than transform translate for non-fixed image offshifts
     */
    ngAfterViewInit () {
        this.loadingScreen = document.getElementsByClassName("loading-screen-container")[0];
        this.app = document.getElementsByTagName('app')[0];
        //Hide loading animation
        document.getElementsByClassName('loader-logo')[0].classList.add("hide");
        //Show down arrow
        document.getElementsByClassName('icon-loading-down')[0].classList.add("show");
        //Enable hover styling for load
        document.getElementById('spinner').classList.add("loaded");

        document.getElementById('spinner').addEventListener('click', e => {
            this.loadingScreenService.hideLoadingScreen();
        });

        document.addEventListener("keydown", function(e) {
            var code = e.which;
            //User pressed enter
            if(code === 13) {
                if(e.target["tabIndex"] > -1) {
                    e.target.dispatchEvent(new Event('click'));
                }
            }
        });

        this.loadingScreenService.hideLoadingScreen();
    }


}
