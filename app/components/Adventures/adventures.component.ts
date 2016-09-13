import {Component, OnInit, OnDestroy} from '@angular/core';
import {SeasonsVar} from './adventures.routing';
import {Router, ActivatedRoute} from '@angular/router';
import {AdventuresService} from './adventures.service';
@Component({
    selector: 'events',
    template: `
        <div class="events-container fadeIn">
        <div class="events">
            <div class="header">
                <h4>Adventures</h4>
            </div>
            <div class="event" *ngFor="let event of eventsList"
            routerLinkedActive="active">
                <div class="event-name-container">
                    <h3>{{event}}</h3>
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
    eventsObjects : Object[];
    eventsList : string[];

    constructor (private route:ActivatedRoute,
                 private adventuresService : AdventuresService) {

    }

    ngOnInit () {
        this.seasonSubscribe = this.route.params.subscribe(params => {
            this.season = params["season"];
            this.adventuresService.getPhotosList(this.season)
                .then((list => {
                    this.eventsList = [];
                    this.eventsObjects = list;
                    this.eventsObjects.forEach((val, index, arr) => {
                        this.eventsList.push(arr[index]["title"]["_content"].substring(this.season.length+2));
                    });
                }).bind(this));
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
