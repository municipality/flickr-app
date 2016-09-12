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
    var Events, Adventures;
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
                function Events(route) {
                    this.route = route;
                }
                Events.prototype.ngOnInit = function () {
                    var _this = this;
                    this.seasonSubscribe = this.route.params.subscribe(function (params) {
                        _this.season = params["season"];
                        console.log(_this.season);
                    });
                };
                Events.prototype.ngOnDestroy = function () {
                    this.seasonSubscribe.unsubscribe();
                };
                Events = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventures</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let adventure of listItems\"\n            [routerLink]=\"[adventure.path, adventure.path]\"\n            routerLinkedActive=\"active\">\n                <div class=\"event-name-container\">\n                    <h3>{{adventure.display}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet name=\"eventOutlet\"></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], Events);
                return Events;
            }());
            exports_1("Events", Events);
            Adventures = (function () {
                function Adventures(router) {
                    this.router = router;
                    this.seasons = adventures_routing_1.SeasonsVar;
                }
                Adventures.prototype.onSelect = function (season) {
                };
                Adventures = __decorate([
                    core_1.Component({
                        selector: 'adventures',
                        template: "\n    <div class=\"adventures fadeIn\">\n        <div class=\"adventures-row\">\n        <div class=\"seasons-container\">\n        <div class=\"seasons\">\n            <div class=\"header\">\n                <h4>Seasons</h4>\n            </div>\n            <div class=\"season\" *ngFor=\"let season of seasons\"\n            [routerLink]='[\"/adventures\", season.path]'\n\n             routerLinkedActive=\"active\">\n                <h3>{{season.name}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"events-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Adventures);
                return Adventures;
            }());
            exports_1("Adventures", Adventures);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFLSSxnQkFBcUIsS0FBb0I7b0JBQXBCLFVBQUssR0FBTCxLQUFLLENBQWU7Z0JBRXpDLENBQUM7Z0JBRUQseUJBQVEsR0FBUjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQ3JELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCw0QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0MkJBb0JUO3FCQUNKLENBQUM7OzBCQUFBO2dCQXFCRixhQUFDO1lBQUQsQ0FBQyxBQXBCRCxJQW9CQztZQXBCRCwyQkFvQkMsQ0FBQTtZQTJCRDtnQkFJSSxvQkFBcUIsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLCtCQUFVLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNkJBQVEsR0FBUixVQUFVLE1BQU07Z0JBRWhCLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxtcEJBcUJUO3FCQUNKLENBQUM7OzhCQUFBO2dCQVlGLGlCQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCxtQ0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Vhc29uc1Zhcn0gZnJvbSAnLi9hZHZlbnR1cmVzLnJvdXRpbmcnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+QWR2ZW50dXJlczwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiICpuZ0Zvcj1cImxldCBhZHZlbnR1cmUgb2YgbGlzdEl0ZW1zXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIlthZHZlbnR1cmUucGF0aCwgYWR2ZW50dXJlLnBhdGhdXCJcbiAgICAgICAgICAgIHJvdXRlckxpbmtlZEFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1uYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3thZHZlbnR1cmUuZGlzcGxheX19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxoNSAqbmdJZj1cImFkdmVudHVyZS5kYXRlRW5kXCI+e3thZHZlbnR1cmUuZGF0ZVN0YXJ0fX0gLSB7e2FkdmVudHVyZS5kYXRlRW5kfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZCA9PSBudWxsXCI+e3thZHZlbnR1cmUuZGF0ZVN0YXJ0fX08L2g1Pi0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZXZlbnRPdXRsZXRcIj48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIHNlYXNvblN1YnNjcmliZSA6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuc2Vhc29uU3Vic2NyaWJlID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXNvbiA9IHBhcmFtc1tcInNlYXNvblwiXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Vhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLnNlYXNvblN1YnNjcmliZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkdmVudHVyZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFkdmVudHVyZXMgZmFkZUluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29ucy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+U2Vhc29uczwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCJsZXQgc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPSdbXCIvYWR2ZW50dXJlc1wiLCBzZWFzb24ucGF0aF0nXG5cbiAgICAgICAgICAgICByb3V0ZXJMaW5rZWRBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVzIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gU2Vhc29uc1ZhcjtcbiAgICB9XG5cbiAgICBvblNlbGVjdCAoc2Vhc29uKSB7XG5cbiAgICB9XG59XG4iXX0=