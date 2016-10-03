import {Component} from '@angular/core';

@Component({
    selector: 'brianium',
    template: `

        <div class="brianium-video">

        </div>
        <div class="brianium-themes">
            <p *ngFor="let theme of themes">{{theme}}</p>
        </div>
    `
})

export class Brianium {

    themes : string[];
    constructor() {
        //this.themes = ["Inspire", "Change"];
    }
}
