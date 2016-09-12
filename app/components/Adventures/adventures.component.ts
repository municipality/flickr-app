import {Component, OnInit, OnDestroy} from '@angular/core';
import {SeasonsVar} from './adventures.routing';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'events',
    template: `
        <div class="events-container">
        <div class="events">
            <div class="header">
                <h4>Adventures</h4>
            </div>
            <div class="event" *ngFor="let adventure of listItems"
            [routerLink]="[adventure.path, adventure.path]"
            routerLinkedActive="active">
                <div class="event-name-container">
                    <h3>{{adventure.display}}</h3>
                    <!--<h5 *ngIf="adventure.dateEnd">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>
                    <h5 *ngIf="adventure.dateEnd == null">{{adventure.dateStart}}</h5>-->
                </div>
            </div>
        </div>
        </div>
        <div class="presentation-router-container">
            <router-outlet name="eventOutlet"></router-outlet>
        </div>
    `
})
export class Events implements OnInit, OnDestroy {

    season : string;
    seasonSubscribe : any;

    constructor (private route:ActivatedRoute) {

    }

    ngOnInit () {
        this.seasonSubscribe = this.route.params.subscribe(params => {
            this.season = params["season"];
            console.log(this.season);
        });
    }

    ngOnDestroy () {
        this.seasonSubscribe.unsubscribe();
    }

}

@Component({
    selector: 'adventures',
    template: `
    <div class="adventures fadeIn">
        <div class="adventures-row">
        <div class="seasons-container">
        <div class="seasons">
            <div class="header">
                <h4>Seasons</h4>
            </div>
            <div class="season" *ngFor="let season of seasons"
            [routerLink]='["/adventures", season.path]'

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
export class Adventures {

    seasons : Object[];

    constructor (private router:Router) {
        this.seasons = SeasonsVar;
    }

    onSelect (season) {

    }
}
