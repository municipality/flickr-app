import {Component} from '@angular/core';
import {HeaderRoutes} from '../app.routing';

@Component({
    selector: 'headerbar',
    template: `
        <div class="title">
            <h1>Brianium</h1>
        </div>
        <div class="navbar">
            <div tabindex=0 class="link"
                 *ngFor="let route of routeData; let i = index"
                 routerLink="{{route.path}}" routerLinkedActive="active">
                <!-- <div class="icon-sym {{route.iconCls}}"> -->
                 <p>{{route.name}}</p>
                 <!-- </div> -->
            </div>
        </div>
    `
})
export class Header {

    routeData : Object[];
    constructor () {
        this.routeData = HeaderRoutes;
    }
}
