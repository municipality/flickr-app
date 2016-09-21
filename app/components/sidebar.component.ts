import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {SidebarRoutes} from '../app.routing';

@Component({
    selector: 'bar',
    template: `
        <div class="container" #container>
            <div [ngClass]="{'logo': i==0, 'icon': i!=0}"
                 *ngFor="let route of routeData; let i = index"
                 routerLink="{{route.path}}" routerLinkActive="active">
                 <img *ngIf="i==0" src={{route.icon}}>
                 <div *ngIf="i!=0" class="icon-sym {{route.iconCls}}"></div>
                 <p *ngIf="i != 0">{{route.display}}</p>
            </div>
        </div>
    `
})
export class Sidebar {
    routeData : any[];
    constructor () {
        this.routeData = SidebarRoutes;
    }
}
