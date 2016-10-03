import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {SeasonsVar} from './adventures.routing';
import {Router, ActivatedRoute} from '@angular/router';
import {AdventuresService} from './adventures.service';

@Component ({
    template : `
        <div *ngFor="let photo of photos" class="photo" tabindex="0" (click)="handleClick(item)">
            <img src={{photo.sizes[4].source}}>
        </div>
    `,
    selector : `photogallery`
})


export class PhotoGallery implements OnInit {
    photos : any[];
    album : string;
    eventSubscribe : any;
    constructor (private adventuresService:AdventuresService, private route:ActivatedRoute) {
        //Workaround for getting router path
        //Call service to call api to get photos
        //this.adventureService.getPhotosViaAPI(this.album).subscribe(response => this.setupPhotos(response));


    }

    ngOnInit () {
        this.eventSubscribe = this.route.params.subscribe(params => {
            this.album = params["event"];
            this.adventuresService.getPhotosList()
                .then(()=> {
                    //return another promise to chain promises
                    return this.adventuresService.getPhotos(this.album);
                })
                .then(photos => {
                    this.setupPhotos(photos)
                });
        });
    }
    handleClick(item) {

    }

    //Set photos[i].url to image url
    setupPhotos(photos) {
        this.photos = photos.photoset.photo;
        this.photos.forEach((val, index, arr) => {
            arr[index]["url"] = this.buildUrl(val.farm, val.server, val.id, val.secret);
        });
    }

    buildUrl(farm, server, id, secret) {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }
}



@Component({
    selector: 'events',
    template: `
        <div class="events-container fadeIn">
        <div class="events">
            <div #mask class="app-loading-mask">
                <div class="loading-tag">
                    <div class="loader"></div>
                </div>
            </div>
            <div class="events-header">
                <h4>Adventures</h4>
            </div>
            <div class="event" *ngFor="let event of eventsList"
            [routerLink]='["/adventures/"+season, event]'
            routerLinkActive="active">
                <div class="event-name-container">
                    <h3>{{event}}</h3>
                    <!--<h5 *ngIf="adventure.dateEnd">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>
                    <h5 *ngIf="adventure.dateEnd == null">{{adventure.dateStart}}</h5>-->
                </div>
            </div>
        </div>
        </div>
        <div class="presentation-router-container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class Events implements OnInit, OnDestroy {

    season : string;
    seasonSubscribe : any;
    eventsObjects : Object[];
    eventsList : string[];
    @ViewChild('mask') mask;
    constructor (private route:ActivatedRoute,
                 private adventuresService : AdventuresService) {

    }

    ngOnInit () {
        this.seasonSubscribe = this.route.params.subscribe(params => {
            this.mask.nativeElement.style.display = "";
            this.season = params["season"];
            //Store season in adventuresService so it can retrieve photos for
            //photogallery based on season
            this.adventuresService.setSeason(this.season);

            this.adventuresService.getPhotosList()
                .then((list => {
                    this.mask.nativeElement.style.display = "none";
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
            <div class="seasons-header">
                <h4>Seasons</h4>
            </div>
            <div class="season" *ngFor="let season of seasons"
            [routerLink]='["/adventures", season.path]'

             routerLinkActive="active">
                <h3>{{season.name}}</h3>
            </div>
        </div>
        </div>
        <div class="events-router-container">
            <router-outlet>
            </router-outlet>
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
