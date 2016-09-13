import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {adventuresRouting} from './adventures.routing';
import {Events, Adventures, PhotoGallery} from './adventures.component';
import {AdventuresService} from './adventures.service';

@NgModule ({
    imports: [
        adventuresRouting,
        CommonModule,
        FormsModule
    ],
    declarations: [
        Events,
        Adventures,
        PhotoGallery
    ],
    providers: [
        AdventuresService
    ]
})
export class AdventuresModule {}
