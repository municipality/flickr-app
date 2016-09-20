import {Component} from '@angular/core';
import {HeaderRoutes} from '../app.routing';

@Component({
    selector: 'headerbar',
    template: `
        <nav>
            <div class="title">
                <h1>Brianium</h1>
            </div>
            <div class="navbar">
                <div class="menu-button" (click)="clickMenu(menu)">
                    <h3>MENU</h3>
                </div>
            <!--
                <div tabindex=0 class="link"
                     *ngFor="let route of routeData; let i = index"
                     routerLink="{{route.path}}" routerLinkedActive="active">
                     <p>{{route.name}}</p>
                </div>
                -->
            </div>
        </nav>
        <div #menu class="navmenu">

        </div>
    `
})
export class Header {

    isMenuShown: boolean;

    routeData : Object[];
    constructor () {
        this.routeData = HeaderRoutes;
        this.isMenuShown = false;
    }

    clickMenu (menu) {
        if(!this.isMenuShown) {
            menu.classList.add("showMenu");
            this.isMenuShown = true;
        }
        else {
            menu.classList.remove("showMenu");
            this.isMenuShown = false;
        }

    }
}
