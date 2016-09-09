import {Component, AfterViewInit} from '@angular/core';
import {BlogService} from './blog.service';

@Component ({
    providers : [BlogService],
    template : `
        <div class="blog fadeIn">
            <h1 class="header" align="center">B Log</h1>
            <div class="entry" *ngFor="let entry of entries">
                <div class="entry-header">
                    <h3 class="title">{{entry.title}}</h3>
                    <h3 class="date">{{entry.date}}</h3>
                </div>
                <p [innerHTML]='entry.entry' class="words"></p>
            </div>
        </div>

    `

})

export class Blog implements AfterViewInit {
    entries;

    constructor (private blogService : BlogService) {
        this.blogService.getEntries()
        .subscribe( (response) => {
            
            response.sort((a, b) => {

            });
            this.entries = response;
        });
    }

    ngAfterViewInit () {

    }
}
