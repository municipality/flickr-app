import {Component} from '@angular/core';
import {HeaderRoutes} from '../app.routing';

@Component({
    selector: 'header',
    template: `
        <div class="title">
            <h1>Brianium</h1>
        </div>
        <div class="navbar">
            <div class="icon"
                 *ngFor="let route of routeData; let i = index"
                 routerLink="{{route.path}}" routerLinkedActive="active">
                 <div class="icon-sym {{route.iconCls}}">{{route.name}}</div>
                 <p *ngIf="i != 0">{{route.display}}</p>
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
