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
    var Header;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            Header = (function () {
                function Header() {
                    this.routeData = app_routing_1.HeaderRoutes;
                }
                Header = __decorate([
                    core_1.Component({
                        selector: 'header',
                        template: "\n        <div class=\"title\">\n            <h1>Brianium</h1>\n        </div>\n        <div class=\"navbar\">\n            <div class=\"icon\"\n                 *ngFor=\"let route of routeData; let i = index\"\n                 routerLink=\"{{route.path}}\" routerLinkedActive=\"active\">\n                 <div class=\"icon-sym {{route.iconCls}}\">{{route.name}}</div>\n                 <p *ngIf=\"i != 0\">{{route.display}}</p>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Header);
                return Header;
            }());
            exports_1("Header", Header);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBWSxDQUFDO2dCQUNsQyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMGRBWVQ7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBT0YsYUFBQztZQUFELENBQUMsQUFORCxJQU1DO1lBTkQsMkJBTUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGVhZGVyUm91dGVzfSBmcm9tICcuLi9hcHAucm91dGluZyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxoMT5Ccmlhbml1bTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByb3V0ZSBvZiByb3V0ZURhdGE7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tyb3V0ZS5wYXRofX1cIiByb3V0ZXJMaW5rZWRBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tc3ltIHt7cm91dGUuaWNvbkNsc319XCI+e3tyb3V0ZS5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpICE9IDBcIj57e3JvdXRlLmRpc3BsYXl9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlciB7XG5cbiAgICByb3V0ZURhdGEgOiBPYmplY3RbXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMucm91dGVEYXRhID0gSGVhZGVyUm91dGVzO1xuICAgIH1cbn1cbiJdfQ==