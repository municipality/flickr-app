import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Events, Adventures} from './adventures.component';

const adventuresRoutes: Routes = [
    {
        path: 'adventures', component: Adventures,
        children : [
            {path: ':season', component: Events},
            {path: '', component: Events}
        ]
    }
    // {
    //     path: 'adventures/:season', component: Adventures,
    //     children : [
    //         {path: '', component: Events, outlet: 'eventsOutlet'}
    //     ]
    // }
];

export const adventuresRouting: ModuleWithProviders = RouterModule.forChild(adventuresRoutes);

export const SeasonsVar : Object[] = [{
    path : 'Summer2016',
    name : 'Summer 2016'
},{
    path: 'Fall2016',
    name: 'Fall 2016'
},{
    path : 'Winter2017',
    name : 'Winter 2017'
}];
