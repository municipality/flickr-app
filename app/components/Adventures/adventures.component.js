System.register(['@angular/core', './adventures.routing', '@angular/router', './adventures.service'], function(exports_1, context_1) {
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
    var core_1, adventures_routing_1, router_1, adventures_service_1;
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
            },
            function (adventures_service_1_1) {
                adventures_service_1 = adventures_service_1_1;
            }],
        execute: function() {
            Events = (function () {
                function Events(route, adventuresService) {
                    this.route = route;
                    this.adventuresService = adventuresService;
                }
                Events.prototype.ngOnInit = function () {
                    var _this = this;
                    this.seasonSubscribe = this.route.params.subscribe(function (params) {
                        _this.season = params["season"];
                        _this.adventuresService.getPhotosList(_this.season)
                            .then((function (list) {
                            _this.eventsList = [];
                            _this.eventsObjects = list;
                            _this.eventsObjects.forEach(function (val, index, arr) {
                                _this.eventsList.push(arr[index]["title"]["_content"].substring(_this.season.length + 2));
                            });
                        }).bind(_this));
                    });
                };
                Events.prototype.ngOnDestroy = function () {
                    this.seasonSubscribe.unsubscribe();
                };
                Events = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container fadeIn\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventures</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let event of eventsList\"\n            routerLinkedActive=\"active\">\n                <div class=\"event-name-container\">\n                    <h3>{{event}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet name=\"eventOutlet\"></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, adventures_service_1.AdventuresService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFPSSxnQkFBcUIsS0FBb0IsRUFDcEIsaUJBQXFDO29CQURyQyxVQUFLLEdBQUwsS0FBSyxDQUFlO29CQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO2dCQUUxRCxDQUFDO2dCQUVELHlCQUFRLEdBQVI7b0JBQUEsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDOzZCQUM1QyxJQUFJLENBQUMsQ0FBQyxVQUFBLElBQUk7NEJBQ1AsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOzRCQUMxQixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztnQ0FDdkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMxRixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCw0QkFBVyxHQUFYO29CQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBbkRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxeUJBbUJUO3FCQUNKLENBQUM7OzBCQUFBO2dCQStCRixhQUFDO1lBQUQsQ0FBQyxBQTlCRCxJQThCQztZQTlCRCwyQkE4QkMsQ0FBQTtZQTJCRDtnQkFJSSxvQkFBcUIsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLCtCQUFVLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNkJBQVEsR0FBUixVQUFVLE1BQU07Z0JBRWhCLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxtcEJBcUJUO3FCQUNKLENBQUM7OzhCQUFBO2dCQVlGLGlCQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCxtQ0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Vhc29uc1Zhcn0gZnJvbSAnLi9hZHZlbnR1cmVzLnJvdXRpbmcnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBZHZlbnR1cmVzU2VydmljZX0gZnJvbSAnLi9hZHZlbnR1cmVzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtY29udGFpbmVyIGZhZGVJblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PkFkdmVudHVyZXM8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRcIiAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZXZlbnRzTGlzdFwiXG4gICAgICAgICAgICByb3V0ZXJMaW5rZWRBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtbmFtZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7ZXZlbnR9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19IC0ge3thZHZlbnR1cmUuZGF0ZUVuZH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmQgPT0gbnVsbFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19PC9oNT4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24tcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImV2ZW50T3V0bGV0XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHNlYXNvbiA6IHN0cmluZztcbiAgICBzZWFzb25TdWJzY3JpYmUgOiBhbnk7XG4gICAgZXZlbnRzT2JqZWN0cyA6IE9iamVjdFtdO1xuICAgIGV2ZW50c0xpc3QgOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGFkdmVudHVyZXNTZXJ2aWNlIDogQWR2ZW50dXJlc1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5zZWFzb25TdWJzY3JpYmUgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Vhc29uID0gcGFyYW1zW1wic2Vhc29uXCJdO1xuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVzU2VydmljZS5nZXRQaG90b3NMaXN0KHRoaXMuc2Vhc29uKVxuICAgICAgICAgICAgICAgIC50aGVuKChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHNMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzT2JqZWN0cyA9IGxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzT2JqZWN0cy5mb3JFYWNoKCh2YWwsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzTGlzdC5wdXNoKGFycltpbmRleF1bXCJ0aXRsZVwiXVtcIl9jb250ZW50XCJdLnN1YnN0cmluZyh0aGlzLnNlYXNvbi5sZW5ndGgrMikpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLnNlYXNvblN1YnNjcmliZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkdmVudHVyZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFkdmVudHVyZXMgZmFkZUluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzLXJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29ucy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+U2Vhc29uczwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCJsZXQgc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPSdbXCIvYWR2ZW50dXJlc1wiLCBzZWFzb24ucGF0aF0nXG5cbiAgICAgICAgICAgICByb3V0ZXJMaW5rZWRBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVzIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gU2Vhc29uc1ZhcjtcbiAgICB9XG5cbiAgICBvblNlbGVjdCAoc2Vhc29uKSB7XG5cbiAgICB9XG59XG4iXX0=