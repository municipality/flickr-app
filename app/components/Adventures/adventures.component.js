System.register(['@angular/core', './adventures.routing', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, adventures_routing_1, router_1;
    var Events, Adventure;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adventures_routing_1_1) {
                adventures_routing_1 = adventures_routing_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Events = (function () {
                function Events() {
                }
                Events = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        evemts\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Events);
                return Events;
            }());
            exports_1("Events", Events);
            Adventure = (function () {
                function Adventure(router) {
                    this.router = router;
                    this.seasons = adventures_routing_1.SeasonsVar;
                }
                Adventure.prototype.onSelect = function (season) {
                    this.router.navigate(["/adventure", season.path]);
                };
                Adventure = __decorate([
                    core_1.Component({
                        selector: 'adventure',
                        template: "\n    <div class=\"adventures fadeIn\">\n        <div class=\"adventures-row\">\n        <div class=\"seasons-container\">\n        <div class=\"seasons\">\n            <div class=\"header\">\n                <h4>Seasons</h4>\n            </div>\n            <div class=\"season\" *ngFor=\"let season of seasons\"\n             (click)=\"onSelect(season)\"\n             routerLinkedActive=\"active\">\n                <h3>{{season.name}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"events-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Adventure);
                return Adventure;
            }());
            exports_1("Adventure", Adventure);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBUkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHdCQUVUO3FCQUNKLENBQUM7OzBCQUFBO2dCQUdGLGFBQUM7WUFBRCxDQUFDLEFBRkQsSUFFQztZQUZELDJCQUVDLENBQUE7WUEwQkQ7Z0JBSUksbUJBQXFCLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRywrQkFBVSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELDRCQUFRLEdBQVIsVUFBVSxNQUFNO29CQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsaW9CQW9CVDtxQkFDSixDQUFDOzs2QkFBQTtnQkFZRixnQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsaUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Vhc29uc1Zhcn0gZnJvbSAnLi9hZHZlbnR1cmVzLnJvdXRpbmcnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgZXZlbXRzXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudHMge1xuXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWR2ZW50dXJlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzIGZhZGVJblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWR2ZW50dXJlcy1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PlNlYXNvbnM8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uXCIgKm5nRm9yPVwibGV0IHNlYXNvbiBvZiBzZWFzb25zXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3Qoc2Vhc29uKVwiXG4gICAgICAgICAgICAgcm91dGVyTGlua2VkQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7c2Vhc29uLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQWR2ZW50dXJlIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gU2Vhc29uc1ZhcjtcbiAgICB9XG5cbiAgICBvblNlbGVjdCAoc2Vhc29uKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9hZHZlbnR1cmVcIiwgc2Vhc29uLnBhdGhdKTtcbiAgICB9XG59XG4iXX0=