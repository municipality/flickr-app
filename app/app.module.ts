import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './main.component';
import {routing, appRoutingProviders} from './app.routing';
import {Home} from './components/home';
import {Blog} from './components/Blog/blog';
import {HttpModule, JsonpModule} from '@angular/http';
import {AdventuresModule} from './components/Adventures/adventures.module';
import {LoadingScreenService} from './loadingscreen.service';
import {Brianium} from './components/brianium/brianium';


@NgModule({
    imports: [
        AdventuresModule,
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        MainComponent,
        Home,
        Blog,
        Brianium
    ],
    providers: [
        appRoutingProviders,
        LoadingScreenService
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
