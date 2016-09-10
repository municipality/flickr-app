import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {adventuresRouting} from './adventures.routing';
import {Events, Adventure} from './adventures.component';
import {AdventureService} from './adventures.service';

@NgModule ({
    imports: [
        adventuresRouting,
        CommonModule,
        FormsModule
    ],
    declarations: [
        Events,
        Adventure
    ],
    providers: [
        AdventureService
    ]
})
export class AdventuresModule {}
