import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {Objectives} from './objectives.component';

@Component ({
    selector: 'home',
    directives: [Objectives],
    template : `
        <div #image class="home fadeIn">
            <div class="icon-container">
                <img class="icon" src="images/brian-icon-2.png">
            </div>
            <div class="titles-container">
                <div class="titles">
                    <h1 class="blue">Software Engineer</h1>
                    <h1 class="white">Designer</h1>
                    <h1 class="blue">Dreamer</h1>
                </div>
            </div>
        </div>
        <objectives></objectives>
    `
})

export class Home implements AfterViewInit {
    @ViewChild('image') image;

    constructor () {

    }

    ngAfterViewInit () {
        var me = this;
        document.addEventListener('scroll', function(e){
                let scrollTop = window.pageYOffset;
                me.image.nativeElement.style["background-position"] = "0 " + (-scrollTop * .1) + "px";
        });
    }
}
