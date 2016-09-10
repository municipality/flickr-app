System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AdventureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AdventureService = (function () {
                function AdventureService(http) {
                    this.http = http;
                    this.cache = {};
                }
                AdventureService.prototype.getPhotos = function (album) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        //check cache for photos before calling api
                        var cache = _this.getPhotosViaCache(album);
                        if (cache !== undefined) {
                            resolve(cache);
                            return;
                        }
                        //Call service to call api to get photos
                        _this.getPhotosViaAPI(album).then(function (album) {
                            resolve(album);
                        });
                    });
                    return promise;
                };
                AdventureService.prototype.getPhotosViaCache = function (album) {
                    if (this.cache[album] !== undefined) {
                        console.warn("from cache");
                        return this.cache[album];
                    }
                };
                AdventureService.prototype.getPhotosViaAPI = function (album) {
                    var _this = this;
                    var params = new http_1.URLSearchParams();
                    params.set('album', album);
                    var url = document.location.origin + "/api/adventurephotos";
                    return this.http.get(url, {
                        search: params
                    }).map(function (response) {
                        if (response.status === 200) {
                            _this.cache[album] = response.json();
                            console.warn("api call");
                            return response.json();
                        }
                        else {
                            throw new Error("No response from municipality.herokuapp.com");
                        }
                    }).toPromise();
                };
                AdventureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdventureService);
                return AdventureService;
            }());
            exports_1("AdventureService", AdventureService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBR0ksMEJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQUs7b0JBQWYsaUJBZUM7b0JBZEcsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDdEMsMkNBQTJDO3dCQUMzQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2YsTUFBTSxDQUFDO3dCQUNYLENBQUM7d0JBQ0Qsd0NBQXdDO3dCQUN4QyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7NEJBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBSztvQkFDbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDBDQUFlLEdBQWYsVUFBZ0IsS0FBSztvQkFBckIsaUJBaUJDO29CQWhCRyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzNCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO29CQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO3dCQUNkLE1BQU0sRUFBRSxNQUFNO3FCQUNqQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUTt3QkFDYixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQzt3QkFDbkUsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFsREw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBbURiLHVCQUFDO1lBQUQsQ0FBQyxBQWpERCxJQWlEQztZQWpERCwrQ0FpREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVTZXJ2aWNlIHtcblxuICAgIGNhY2hlIDogT2JqZWN0O1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zKGFsYnVtKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy9jaGVjayBjYWNoZSBmb3IgcGhvdG9zIGJlZm9yZSBjYWxsaW5nIGFwaVxuICAgICAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5nZXRQaG90b3NWaWFDYWNoZShhbGJ1bSk7XG4gICAgICAgICAgICBpZihjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DYWxsIHNlcnZpY2UgdG8gY2FsbCBhcGkgdG8gZ2V0IHBob3Rvc1xuICAgICAgICAgICAgdGhpcy5nZXRQaG90b3NWaWFBUEkoYWxidW0pLnRoZW4oKGFsYnVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbGJ1bSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zVmlhQ2FjaGUoYWxidW0pIHtcbiAgICAgICAgaWYodGhpcy5jYWNoZVthbGJ1bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZnJvbSBjYWNoZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2FsYnVtXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBob3Rvc1ZpYUFQSShhbGJ1bSkge1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KCdhbGJ1bScsIGFsYnVtKTtcbiAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2FkdmVudHVyZXBob3Rvc2A7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICAgICAgICAgIH0pLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2FsYnVtXSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYXBpIGNhbGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIG11bmljaXBhbGl0eS5oZXJva3VhcHAuY29tXCIpO1xuICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgfSkudG9Qcm9taXNlKCk7XG4gICAgfVxufVxuIl19