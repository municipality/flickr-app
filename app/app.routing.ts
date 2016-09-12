import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Blog} from './components/Blog/blog';
import {Home} from './components/home';

const appRoutes : Routes = [
    { path: 'home', component: Home},
    { path: 'blog', component: Blog},
    // { path: 'adventures', component: Adventures },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingProviders : any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot([...appRoutes]);

export const SidebarRoutes : any[] = [
    {
        name : "Home",
        display : "Brian Lee",
        path : "/home",
        icon : "icons/brian-icon.png",
        iconCls: ''
    },
    {
        name : "Adventures",
        display : "Adventures",
        path : "/adventures",
        icon : "icons/adventure-icon.png",
        iconCls : 'icon-adventure'
    },
    {
        name : "Blog",
        display : "B Log",
        path : "/blog",
        icon : "icons/blog-icon.png",
        iconCls : 'icon-blog'
    },
    {
        name : "Projects",
        display : "Projects",
        path : "/projects",
        icon : "icons/projects-icon.png",
        iconCls : 'icon-github'
    }

]
