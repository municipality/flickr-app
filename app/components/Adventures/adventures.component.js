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
    var PhotoGallery, Events, Adventures;
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
            PhotoGallery = (function () {
                function PhotoGallery(adventuresService, route) {
                    //Workaround for getting router path
                    //Call service to call api to get photos
                    //this.adventureService.getPhotosViaAPI(this.album).subscribe(response => this.setupPhotos(response));
                    this.adventuresService = adventuresService;
                    this.route = route;
                }
                PhotoGallery.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventSubscribe = this.route.params.subscribe(function (params) {
                        _this.album = params["event"];
                        _this.adventuresService.getPhotosList()
                            .then(function () {
                            //return another promise to chain promises
                            return _this.adventuresService.getPhotos(_this.album);
                        })
                            .then(function (photos) {
                            _this.setupPhotos(photos);
                        });
                    });
                };
                PhotoGallery.prototype.handleClick = function (item) {
                };
                //Set photos[i].url to image url
                PhotoGallery.prototype.setupPhotos = function (photos) {
                    var _this = this;
                    this.photos = photos.photoset.photo;
                    this.photos.forEach(function (val, index, arr) {
                        arr[index]["url"] = _this.buildUrl(val.farm, val.server, val.id, val.secret);
                    });
                };
                PhotoGallery.prototype.buildUrl = function (farm, server, id, secret) {
                    return "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + ".jpg";
                };
                PhotoGallery = __decorate([
                    core_1.Component({
                        template: "\n        <div *ngFor=\"let item of photos\" class=\"photo\" tabindex=\"0\" (click)=\"handleClick(item)\">\n            <img src={{item.url}}>\n        </div>\n    ",
                        selector: "photogallery"
                    }), 
                    __metadata('design:paramtypes', [adventures_service_1.AdventuresService, router_1.ActivatedRoute])
                ], PhotoGallery);
                return PhotoGallery;
            }());
            exports_1("PhotoGallery", PhotoGallery);
            Events = (function () {
                function Events(route, adventuresService) {
                    this.route = route;
                    this.adventuresService = adventuresService;
                }
                Events.prototype.ngOnInit = function () {
                    var _this = this;
                    this.seasonSubscribe = this.route.params.subscribe(function (params) {
                        _this.mask.nativeElement.style.display = "";
                        _this.season = params["season"];
                        //Store season in adventuresService so it can retrieve photos for
                        //photogallery based on season
                        _this.adventuresService.setSeason(_this.season);
                        _this.adventuresService.getPhotosList()
                            .then((function (list) {
                            _this.mask.nativeElement.style.display = "none";
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
                __decorate([
                    core_1.ViewChild('mask'), 
                    __metadata('design:type', Object)
                ], Events.prototype, "mask", void 0);
                Events = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container fadeIn\">\n        <div class=\"events\">\n            <div #mask class=\"app-loading-mask\">\n                <div class=\"loading-tag\">\n                    <div class=\"loader\"></div>\n                </div>\n            </div>\n            <div class=\"header\">\n                <h4>Adventures</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let event of eventsList\"\n            [routerLink]='[\"/adventures/\"+season, event]'\n            routerLinkedActive=\"active\">\n                <div class=\"event-name-container\">\n                    <h3>{{event}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
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
                        template: "\n    <div class=\"adventures fadeIn\">\n        <div class=\"adventures-row\">\n        <div class=\"seasons-container\">\n        <div class=\"seasons\">\n            <div class=\"header\">\n                <h4>Seasons</h4>\n            </div>\n            <div class=\"season\" *ngFor=\"let season of seasons\"\n            [routerLink]='[\"/adventures\", season.path]'\n\n             routerLinkedActive=\"active\">\n                <h3>{{season.name}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"events-router-container\">\n            <router-outlet>\n            </router-outlet>\n        </div>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Adventures);
                return Adventures;
            }());
            exports_1("Adventures", Adventures);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUlJLHNCQUFxQixpQkFBbUMsRUFBVSxLQUFvQjtvQkFDbEYsb0NBQW9DO29CQUNwQyx3Q0FBd0M7b0JBQ3hDLHNHQUFzRztvQkFIckYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFBVSxVQUFLLEdBQUwsS0FBSyxDQUFlO2dCQU10RixDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQUEsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNwRCxLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRTs2QkFDakMsSUFBSSxDQUFDOzRCQUNGLDBDQUEwQzs0QkFDMUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN4RCxDQUFDLENBQUM7NkJBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTs0QkFDUixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dCQUM1QixDQUFDLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUNELGtDQUFXLEdBQVgsVUFBWSxJQUFJO2dCQUVoQixDQUFDO2dCQUVELGdDQUFnQztnQkFDaEMsa0NBQVcsR0FBWCxVQUFZLE1BQU07b0JBQWxCLGlCQUtDO29CQUpHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHO3dCQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hGLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsK0JBQVEsR0FBUixVQUFTLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU07b0JBQzdCLE1BQU0sQ0FBQyxpQkFBZSxJQUFJLDBCQUFxQixNQUFNLFNBQUksRUFBRSxTQUFJLE1BQU0sU0FBTSxDQUFDO2dCQUNoRixDQUFDO2dCQWpETDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxzS0FJVjt3QkFDRCxRQUFRLEVBQUcsY0FBYztxQkFDNUIsQ0FBQzs7Z0NBQUE7Z0JBMkNGLG1CQUFDO1lBQUQsQ0FBQyxBQXhDRCxJQXdDQztZQXhDRCx1Q0F3Q0MsQ0FBQTtZQWlDRDtnQkFPSSxnQkFBcUIsS0FBb0IsRUFDcEIsaUJBQXFDO29CQURyQyxVQUFLLEdBQUwsS0FBSyxDQUFlO29CQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO2dCQUUxRCxDQUFDO2dCQUVELHlCQUFRLEdBQVI7b0JBQUEsaUJBa0JDO29CQWpCRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07d0JBQ3JELEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUMzQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDL0IsaUVBQWlFO3dCQUNqRSw4QkFBOEI7d0JBQzlCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUU5QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFOzZCQUNqQyxJQUFJLENBQUMsQ0FBQyxVQUFBLElBQUk7NEJBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7NEJBQy9DLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs0QkFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUc7Z0NBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUYsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsNEJBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQTVCRDtvQkFBQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQzs7b0RBQUE7Z0JBbkN0QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNGdDQXlCVDtxQkFDSixDQUFDOzswQkFBQTtnQkFxQ0YsYUFBQztZQUFELENBQUMsQUFwQ0QsSUFvQ0M7WUFwQ0QsMkJBb0NDLENBQUE7WUE0QkQ7Z0JBSUksb0JBQXFCLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRywrQkFBVSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELDZCQUFRLEdBQVIsVUFBVSxNQUFNO2dCQUVoQixDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsaXFCQXNCVDtxQkFDSixDQUFDOzs4QkFBQTtnQkFZRixpQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsbUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2Vhc29uc1Zhcn0gZnJvbSAnLi9hZHZlbnR1cmVzLnJvdXRpbmcnO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtBZHZlbnR1cmVzU2VydmljZX0gZnJvbSAnLi9hZHZlbnR1cmVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGhvdG9zXCIgY2xhc3M9XCJwaG90b1wiIHRhYmluZGV4PVwiMFwiIChjbGljayk9XCJoYW5kbGVDbGljayhpdGVtKVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3tpdGVtLnVybH19PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHNlbGVjdG9yIDogYHBob3RvZ2FsbGVyeWBcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFBob3RvR2FsbGVyeSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGhvdG9zIDogYW55W107XG4gICAgYWxidW0gOiBzdHJpbmc7XG4gICAgZXZlbnRTdWJzY3JpYmUgOiBhbnk7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgYWR2ZW50dXJlc1NlcnZpY2U6QWR2ZW50dXJlc1NlcnZpY2UsIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgLy9Xb3JrYXJvdW5kIGZvciBnZXR0aW5nIHJvdXRlciBwYXRoXG4gICAgICAgIC8vQ2FsbCBzZXJ2aWNlIHRvIGNhbGwgYXBpIHRvIGdldCBwaG90b3NcbiAgICAgICAgLy90aGlzLmFkdmVudHVyZVNlcnZpY2UuZ2V0UGhvdG9zVmlhQVBJKHRoaXMuYWxidW0pLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnNldHVwUGhvdG9zKHJlc3BvbnNlKSk7XG5cblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZSA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGJ1bSA9IHBhcmFtc1tcImV2ZW50XCJdO1xuICAgICAgICAgICAgdGhpcy5hZHZlbnR1cmVzU2VydmljZS5nZXRQaG90b3NMaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gYW5vdGhlciBwcm9taXNlIHRvIGNoYWluIHByb21pc2VzXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkdmVudHVyZXNTZXJ2aWNlLmdldFBob3Rvcyh0aGlzLmFsYnVtKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHBob3RvcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBQaG90b3MocGhvdG9zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVDbGljayhpdGVtKSB7XG5cbiAgICB9XG5cbiAgICAvL1NldCBwaG90b3NbaV0udXJsIHRvIGltYWdlIHVybFxuICAgIHNldHVwUGhvdG9zKHBob3Rvcykge1xuICAgICAgICB0aGlzLnBob3RvcyA9IHBob3Rvcy5waG90b3NldC5waG90bztcbiAgICAgICAgdGhpcy5waG90b3MuZm9yRWFjaCgodmFsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdW1widXJsXCJdID0gdGhpcy5idWlsZFVybCh2YWwuZmFybSwgdmFsLnNlcnZlciwgdmFsLmlkLCB2YWwuc2VjcmV0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYnVpbGRVcmwoZmFybSwgc2VydmVyLCBpZCwgc2VjcmV0KSB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly9mYXJtJHtmYXJtfS5zdGF0aWNmbGlja3IuY29tLyR7c2VydmVyfS8ke2lkfV8ke3NlY3JldH0uanBnYDtcbiAgICB9XG59XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1jb250YWluZXIgZmFkZUluXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgI21hc2sgY2xhc3M9XCJhcHAtbG9hZGluZy1tYXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoND5BZHZlbnR1cmVzPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCIgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50c0xpc3RcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPSdbXCIvYWR2ZW50dXJlcy9cIitzZWFzb24sIGV2ZW50XSdcbiAgICAgICAgICAgIHJvdXRlckxpbmtlZEFjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1uYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tldmVudH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxoNSAqbmdJZj1cImFkdmVudHVyZS5kYXRlRW5kXCI+e3thZHZlbnR1cmUuZGF0ZVN0YXJ0fX0gLSB7e2FkdmVudHVyZS5kYXRlRW5kfX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZCA9PSBudWxsXCI+e3thZHZlbnR1cmUuZGF0ZVN0YXJ0fX08L2g1Pi0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIHNlYXNvblN1YnNjcmliZSA6IGFueTtcbiAgICBldmVudHNPYmplY3RzIDogT2JqZWN0W107XG4gICAgZXZlbnRzTGlzdCA6IHN0cmluZ1tdO1xuICAgIEBWaWV3Q2hpbGQoJ21hc2snKSBtYXNrO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGFkdmVudHVyZXNTZXJ2aWNlIDogQWR2ZW50dXJlc1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5zZWFzb25TdWJzY3JpYmUgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFzay5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5zZWFzb24gPSBwYXJhbXNbXCJzZWFzb25cIl07XG4gICAgICAgICAgICAvL1N0b3JlIHNlYXNvbiBpbiBhZHZlbnR1cmVzU2VydmljZSBzbyBpdCBjYW4gcmV0cmlldmUgcGhvdG9zIGZvclxuICAgICAgICAgICAgLy9waG90b2dhbGxlcnkgYmFzZWQgb24gc2Vhc29uXG4gICAgICAgICAgICB0aGlzLmFkdmVudHVyZXNTZXJ2aWNlLnNldFNlYXNvbih0aGlzLnNlYXNvbik7XG5cbiAgICAgICAgICAgIHRoaXMuYWR2ZW50dXJlc1NlcnZpY2UuZ2V0UGhvdG9zTGlzdCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2submF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c09iamVjdHMgPSBsaXN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c09iamVjdHMuZm9yRWFjaCgodmFsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c0xpc3QucHVzaChhcnJbaW5kZXhdW1widGl0bGVcIl1bXCJfY29udGVudFwiXS5zdWJzdHJpbmcodGhpcy5zZWFzb24ubGVuZ3RoKzIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5zZWFzb25TdWJzY3JpYmUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhZHZlbnR1cmVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzIGZhZGVJblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWR2ZW50dXJlcy1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PlNlYXNvbnM8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uXCIgKm5nRm9yPVwibGV0IHNlYXNvbiBvZiBzZWFzb25zXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT0nW1wiL2FkdmVudHVyZXNcIiwgc2Vhc29uLnBhdGhdJ1xuXG4gICAgICAgICAgICAgcm91dGVyTGlua2VkQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7c2Vhc29uLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVzIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gU2Vhc29uc1ZhcjtcbiAgICB9XG5cbiAgICBvblNlbGVjdCAoc2Vhc29uKSB7XG5cbiAgICB9XG59XG4iXX0=