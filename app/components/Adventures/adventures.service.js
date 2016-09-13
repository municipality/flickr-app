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
    var AdventuresService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AdventuresService = (function () {
                function AdventuresService(http) {
                    this.http = http;
                    this.photoCache = {};
                }
                AdventuresService.prototype.getPhotosList = function (season) {
                    var that = this;
                    var promise = new Promise(function (resolve, reject) {
                        debugger;
                        if (that.photoList !== undefined) {
                            var ret = that.photoList.filter(function (album) {
                                if (album["title"]["_content"].indexOf("[" + season + "]") !== -1) {
                                    return true;
                                }
                                return false;
                            });
                            resolve(ret);
                            return;
                        }
                        //If cache is not yet set, call API
                        var params = new http_1.URLSearchParams();
                        var url = document.location.origin + "/api/getseasonalbums";
                        that.http.get(url, {
                            search: params
                        }).map(function (response) {
                            if (response.status === 200) {
                                that.photoList = response.json().photosets.photoset;
                                return that.photoList;
                            }
                            else {
                                throw new Error("No response from brianium.com");
                            }
                        }).toPromise().then(function (list) {
                            var ret = list.filter(function (album) {
                                if (album["title"]["_content"].indexOf("[" + season + "]") !== -1) {
                                    return true;
                                }
                                return false;
                            });
                            resolve(ret);
                        });
                    });
                    return promise;
                };
                AdventuresService.prototype.getPhotos = function (album) {
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
                AdventuresService.prototype.getPhotosViaCache = function (album) {
                    if (this.photoCache[album] !== undefined) {
                        console.warn("from cache");
                        return this.photoCache[album];
                    }
                };
                AdventuresService.prototype.getPhotosViaAPI = function (album) {
                    var _this = this;
                    var params = new http_1.URLSearchParams();
                    params.set('album', album);
                    var url = document.location.origin + "/api/getadventurephotos";
                    return this.http.get(url, {
                        search: params
                    }).map(function (response) {
                        if (response.status === 200) {
                            _this.photoCache[album] = response.json();
                            return response.json();
                        }
                        else {
                            throw new Error("No response from brianium.com");
                        }
                    }).toPromise();
                };
                AdventuresService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdventuresService);
                return AdventuresService;
            }());
            exports_1("AdventuresService", AdventuresService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBR0ksMkJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQseUNBQWEsR0FBYixVQUFjLE1BQU07b0JBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDdEMsUUFBUSxDQUFBO3dCQUNSLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLO2dDQUNqQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQUksTUFBTSxNQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2hCLENBQUM7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDLENBQUM7NEJBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNiLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNELG1DQUFtQzt3QkFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7d0JBQ25DLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO3dCQUM1RCxJQUFJLENBQUMs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QyxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMzQixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQzt3QkFDckQsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkEvRkw7b0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7Z0JBZ0diLHdCQUFDO1lBQUQsQ0FBQyxBQTlGRCxJQThGQztZQTlGRCxpREE4RkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVzU2VydmljZSB7XG4gICAgcGhvdG9MaXN0IDogT2JqZWN0W107XG4gICAgcGhvdG9DYWNoZSA6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHApIHtcbiAgICAgICAgdGhpcy5waG90b0NhY2hlID0ge307XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zTGlzdChzZWFzb24pIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmKHRoYXQucGhvdG9MaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0ID0gdGhhdC5waG90b0xpc3QuZmlsdGVyKGFsYnVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWxidW1bXCJ0aXRsZVwiXVtcIl9jb250ZW50XCJdLmluZGV4T2YoYFske3NlYXNvbn1dYCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9JZiBjYWNoZSBpcyBub3QgeWV0IHNldCwgY2FsbCBBUElcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBsZXQgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luICsgYC9hcGkvZ2V0c2Vhc29uYWxidW1zYDtcbiAgICAgICAgICAgIHRoYXQuaHR0cC5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgICAgICB9KS5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgIHRoYXQucGhvdG9MaXN0ID0gcmVzcG9uc2UuanNvbigpLnBob3Rvc2V0cy5waG90b3NldDtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhhdC5waG90b0xpc3Q7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIGJyaWFuaXVtLmNvbVwiKTtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKCAobGlzdCA6IGFueVtdKSA9PiB7XG4gICAgICAgICAgICAgICBsZXQgcmV0ID0gbGlzdC5maWx0ZXIoYWxidW0gPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKGFsYnVtW1widGl0bGVcIl1bXCJfY29udGVudFwiXS5pbmRleE9mKGBbJHtzZWFzb259XWApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgfSk7XG4gICAgICAgfSlcblxuICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuXG4gICAgZ2V0UGhvdG9zKGFsYnVtKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy9jaGVjayBjYWNoZSBmb3IgcGhvdG9zIGJlZm9yZSBjYWxsaW5nIGFwaVxuICAgICAgICAgICAgdmFyIGNhY2hlID0gdGhpcy5nZXRQaG90b3NWaWFDYWNoZShhbGJ1bSk7XG4gICAgICAgICAgICBpZihjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWNoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DYWxsIHNlcnZpY2UgdG8gY2FsbCBhcGkgdG8gZ2V0IHBob3Rvc1xuICAgICAgICAgICAgdGhpcy5nZXRQaG90b3NWaWFBUEkoYWxidW0pLnRoZW4oKGFsYnVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbGJ1bSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zVmlhQ2FjaGUoYWxidW0pIHtcbiAgICAgICAgaWYodGhpcy5waG90b0NhY2hlW2FsYnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmcm9tIGNhY2hlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGhvdG9DYWNoZVthbGJ1bV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQaG90b3NWaWFBUEkoYWxidW0pIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgnYWxidW0nLCBhbGJ1bSk7XG4gICAgICAgIGxldCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4gKyBgL2FwaS9nZXRhZHZlbnR1cmVwaG90b3NgO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcbiAgICAgICAgICAgICAgICB9KS5tYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waG90b0NhY2hlW2FsYnVtXSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gYnJpYW5pdW0uY29tXCIpO1xuICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgfSkudG9Qcm9taXNlKCk7XG4gICAgfVxufVxuIl19