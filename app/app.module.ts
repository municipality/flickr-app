import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './main.component';
import {routing, appRoutingProviders} from './app.routing';
import {Home} from './components/home';
import {Blog} from './components/Blog/blog';
import {HttpModule, JsonpModule} from '@angular/http';
import {AdventuresModule} from './components/Adventures/adventures.module';

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
        Blog
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
