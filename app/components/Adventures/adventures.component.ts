import {Component} from '@angular/core';
import {SeasonsVar} from './adventures.routing';
import {Router} from '@angular/router';
@Component({
    selector: 'events',
    template: `
        evemts
    `
})
export class Events {

}

@Component({
    selector: 'adventure',
    template: `
    <div class="adventures fadeIn">
        <div class="adventures-row">
        <div class="seasons-container">
        <div class="seasons">
            <div class="header">
                <h4>Seasons</h4>
            </div>
            <div class="season" *ngFor="let season of seasons"
             (click)="onSelect(season)"
             routerLinkedActive="active">
                <h3>{{season.name}}</h3>
            </div>
        </div>
        </div>
        <div class="events-router-container">
            <router-outlet></router-outlet>
        </div>
        </div>
    </div>
    `
})
export class Adventure {

    seasons : Object[];

    constructor (private router:Router) {
        this.seasons = SeasonsVar;
    }

    onSelect (season) {
        this.router.navigate(["/adventure", season.path]);
    }
}
