System.register(['@angular/core', '../app.routing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_routing_1;
    var Sidebar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            Sidebar = (function () {
                function Sidebar() {
                    this.routeData = app_routing_1.SidebarRoutes;
                }
                Sidebar = __decorate([
                    core_1.Component({
                        selector: 'bar',
                        template: "\n        <div class=\"container\" #container>\n            <div [ngClass]=\"{'logo': i==0, 'icon': i!=0}\"\n                 *ngFor=\"let route of routeData; let i = index\"\n                 routerLink=\"{{route.path}}\" routerLinkedActive=\"active\">\n                 <img *ngIf=\"i==0\" src={{route.icon}}>\n                 <div *ngIf=\"i!=0\" class=\"icon-sym {{route.iconCls}}\"></div>\n                 <p *ngIf=\"i != 0\">{{route.display}}</p>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Sidebar);
                return Sidebar;
            }());
            exports_1("Sidebar", Sidebar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFFSTtvQkFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUFhLENBQUM7Z0JBQ25DLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLGlmQVVUO3FCQUNKLENBQUM7OzJCQUFBO2dCQU1GLGNBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxELDZCQUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtTaWRlYmFyUm91dGVzfSBmcm9tICcuLi9hcHAucm91dGluZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgI2NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydsb2dvJzogaT09MCwgJ2ljb24nOiBpIT0wfVwiXG4gICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByb3V0ZSBvZiByb3V0ZURhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tyb3V0ZS5wYXRofX1cIiByb3V0ZXJMaW5rZWRBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImk9PTBcIiBzcmM9e3tyb3V0ZS5pY29ufX0+XG4gICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpIT0wXCIgY2xhc3M9XCJpY29uLXN5bSB7e3JvdXRlLmljb25DbHN9fVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImkgIT0gMFwiPnt7cm91dGUuZGlzcGxheX19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhciB7XG4gICAgcm91dGVEYXRhIDogYW55W107XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IFNpZGViYXJSb3V0ZXM7XG4gICAgfVxufVxuIl19