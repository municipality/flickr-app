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
                            _this.eventsObjects = list;
                            debugger;
                            _this.eventsObjects.forEach(function (val, index, arr) {
                                arr[index]["title"]["_content"] = arr[index]["title"]["_content"].substring(_this.season.length + 2);
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
                        template: "\n        <div class=\"events-container fadeIn\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventures</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let event of eventsObjects\"\n            routerLinkedActive=\"active\">\n                <div class=\"event-name-container\">\n                    <h3>{{event[\"title\"][\"_content\"]}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet name=\"eventOutlet\"></router-outlet>\n        </div>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFNSSxnQkFBcUIsS0FBb0IsRUFDcEIsaUJBQXFDO29CQURyQyxVQUFLLEdBQUwsS0FBSyxDQUFlO29CQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO2dCQUUxRCxDQUFDO2dCQUVELHlCQUFRLEdBQVI7b0JBQUEsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDOzZCQUM1QyxJQUFJLENBQUMsQ0FBQyxVQUFBLElBQUk7NEJBQ1AsS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7NEJBQzFCLFFBQVEsQ0FBQTs0QkFDUixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRztnQ0FDdkMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RHLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDRCQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkMsQ0FBQztnQkFsREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGkwQkFtQlQ7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBOEJGLGFBQUM7WUFBRCxDQUFDLEFBN0JELElBNkJDO1lBN0JELDJCQTZCQyxDQUFBO1lBMkJEO2dCQUlJLG9CQUFxQixNQUFhO29CQUFiLFdBQU0sR0FBTixNQUFNLENBQU87b0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsK0JBQVUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCw2QkFBUSxHQUFSLFVBQVUsTUFBTTtnQkFFaEIsQ0FBQztnQkFuQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLG1wQkFxQlQ7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWFzb25zVmFyfSBmcm9tICcuL2FkdmVudHVyZXMucm91dGluZyc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0FkdmVudHVyZXNTZXJ2aWNlfSBmcm9tICcuL2FkdmVudHVyZXMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1jb250YWluZXIgZmFkZUluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+QWR2ZW50dXJlczwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiICpuZ0Zvcj1cImxldCBldmVudCBvZiBldmVudHNPYmplY3RzXCJcbiAgICAgICAgICAgIHJvdXRlckxpbmtlZEFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1uYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tldmVudFtcInRpdGxlXCJdW1wiX2NvbnRlbnRcIl19fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19IC0ge3thZHZlbnR1cmUuZGF0ZUVuZH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmQgPT0gbnVsbFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19PC9oNT4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24tcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImV2ZW50T3V0bGV0XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHNlYXNvbiA6IHN0cmluZztcbiAgICBzZWFzb25TdWJzY3JpYmUgOiBhbnk7XG4gICAgZXZlbnRzT2JqZWN0cyA6IE9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYWR2ZW50dXJlc1NlcnZpY2UgOiBBZHZlbnR1cmVzU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLnNlYXNvblN1YnNjcmliZSA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZWFzb24gPSBwYXJhbXNbXCJzZWFzb25cIl07XG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZXNTZXJ2aWNlLmdldFBob3Rvc0xpc3QodGhpcy5zZWFzb24pXG4gICAgICAgICAgICAgICAgLnRoZW4oKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c09iamVjdHMgPSBsaXN0O1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c09iamVjdHMuZm9yRWFjaCgodmFsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaW5kZXhdW1widGl0bGVcIl1bXCJfY29udGVudFwiXSA9IGFycltpbmRleF1bXCJ0aXRsZVwiXVtcIl9jb250ZW50XCJdLnN1YnN0cmluZyh0aGlzLnNlYXNvbi5sZW5ndGgrMik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuc2Vhc29uU3Vic2NyaWJlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYWR2ZW50dXJlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWR2ZW50dXJlcyBmYWRlSW5cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFkdmVudHVyZXMtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoND5TZWFzb25zPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvblwiICpuZ0Zvcj1cImxldCBzZWFzb24gb2Ygc2Vhc29uc1wiXG4gICAgICAgICAgICBbcm91dGVyTGlua109J1tcIi9hZHZlbnR1cmVzXCIsIHNlYXNvbi5wYXRoXSdcblxuICAgICAgICAgICAgIHJvdXRlckxpbmtlZEFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxoMz57e3NlYXNvbi5uYW1lfX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFkdmVudHVyZXMge1xuXG4gICAgc2Vhc29ucyA6IE9iamVjdFtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBTZWFzb25zVmFyO1xuICAgIH1cblxuICAgIG9uU2VsZWN0IChzZWFzb24pIHtcblxuICAgIH1cbn1cbiJdfQ==