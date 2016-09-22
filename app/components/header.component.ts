import {Component, ViewChild} from '@angular/core';
import {HeaderRoutes} from '../app.routing';
import {Router} from '@angular/router';

@Component({
    selector: 'headerbar',
    template: `
        <nav>
            <div class="title">
                <div class="logo icon-simple-logo"></div>
                <div class="logo-text">
                    <h1>Brianium</h1>
                </div>
            </div>
            <div class="navbar">
                <div class="menu-button" tabindex=0 (click)="clickMenu(menu)">
                    <h3>MENU</h3>
                </div>
            <!--
                <div tabindex=0 class="link"
                     *ngFor="let route of routeData; let i = index"
                     routerLink="{{route.path}}" routerLinkActive="active">
                     <p>{{route.name}}</p>
                </div>
                -->
            </div>
        </nav>
        <div #menu class="navmenu">
            <div tabindex=0 class="link"
                 *ngFor="let route of routeData; let i = index"
                 routerLinkActive="active"
                 (click)="hideMenu(); goTo(route);">
                 <p>{{route.name}}</p>
            </div>
        </div>
    `
})
export class Header {

    isMenuShown: boolean;
    @ViewChild('menu') menu;
    routeData : Object[];
    constructor (private router:Router) {
        this.routeData = HeaderRoutes;
        this.isMenuShown = false;
    }

    clickMenu () {
        if(!this.isMenuShown) {
            this.showMenu();
        }
        else {
            this.hideMenu();
        }
    }

    showMenu () {
        this.menu.nativeElement.classList.add("showMenu");
        this.isMenuShown = true;
    }

    hideMenu () {
        this.menu.nativeElement.classList.remove("showMenu");
        this.isMenuShown = false;
    }

    goTo(route) {
        this.router.navigateByUrl(route.path);
    }
}
