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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBR0ksMkJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQseUNBQWEsR0FBYixVQUFjLE1BQU07b0JBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFaEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDdEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUs7Z0NBQ2pDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBSSxNQUFNLE1BQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDMUQsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDaEIsQ0FBQztnQ0FDRCxNQUFNLENBQUMsS0FBSyxDQUFDOzRCQUNqQixDQUFDLENBQUMsQ0FBQzs0QkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ2IsTUFBTSxDQUFDO3dCQUNYLENBQUM7d0JBQ0QsbUNBQW1DO3dCQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQzt3QkFDbkMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUM7d0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxD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LEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO3dCQUNyRCxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQTlGTDtvQkFBQyxpQkFBVSxFQUFFOztxQ0FBQTtnQkErRmIsd0JBQUM7WUFBRCxDQUFDLEFBN0ZELElBNkZDO1lBN0ZELGlEQTZGQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFkdmVudHVyZXNTZXJ2aWNlIHtcbiAgICBwaG90b0xpc3QgOiBPYmplY3RbXTtcbiAgICBwaG90b0NhY2hlIDogT2JqZWN0O1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6SHR0cCkge1xuICAgICAgICB0aGlzLnBob3RvQ2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRQaG90b3NMaXN0KHNlYXNvbikge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZih0aGF0LnBob3RvTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IHRoYXQucGhvdG9MaXN0LmZpbHRlcihhbGJ1bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFsYnVtW1widGl0bGVcIl1bXCJfY29udGVudFwiXS5pbmRleE9mKGBbJHtzZWFzb259XWApICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSWYgY2FjaGUgaXMgbm90IHlldCBzZXQsIGNhbGwgQVBJXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2dldHNlYXNvbmFsYnVtc2A7XG4gICAgICAgICAgICB0aGF0Lmh0dHAuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICAgICAgfSkubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICB0aGF0LnBob3RvTGlzdCA9IHJlc3BvbnNlLmpzb24oKS5waG90b3NldHMucGhvdG9zZXQ7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQucGhvdG9MaXN0O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBicmlhbml1bS5jb21cIik7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgfSkudG9Qcm9taXNlKCkudGhlbiggKGxpc3QgOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgICAgbGV0IHJldCA9IGxpc3QuZmlsdGVyKGFsYnVtID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihhbGJ1bVtcInRpdGxlXCJdW1wiX2NvbnRlbnRcIl0uaW5kZXhPZihgWyR7c2Vhc29ufV1gKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICByZXNvbHZlKHJldCk7XG4gICAgICAgICAgIH0pO1xuICAgICAgIH0pXG5cbiAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cblxuICAgIGdldFBob3RvcyhhbGJ1bSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vY2hlY2sgY2FjaGUgZm9yIHBob3RvcyBiZWZvcmUgY2FsbGluZyBhcGlcbiAgICAgICAgICAgIHZhciBjYWNoZSA9IHRoaXMuZ2V0UGhvdG9zVmlhQ2FjaGUoYWxidW0pO1xuICAgICAgICAgICAgaWYoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoY2FjaGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vQ2FsbCBzZXJ2aWNlIHRvIGNhbGwgYXBpIHRvIGdldCBwaG90b3NcbiAgICAgICAgICAgIHRoaXMuZ2V0UGhvdG9zVmlhQVBJKGFsYnVtKS50aGVuKChhbGJ1bSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYWxidW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGdldFBob3Rvc1ZpYUNhY2hlKGFsYnVtKSB7XG4gICAgICAgIGlmKHRoaXMucGhvdG9DYWNoZVthbGJ1bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZnJvbSBjYWNoZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBob3RvQ2FjaGVbYWxidW1dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zVmlhQVBJKGFsYnVtKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2FsYnVtJywgYWxidW0pO1xuICAgICAgICBsZXQgdXJsID0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luICsgYC9hcGkvZ2V0YWR2ZW50dXJlcGhvdG9zYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgICAgICAgICAgfSkubWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGhvdG9DYWNoZVthbGJ1bV0gPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmcm9tIGJyaWFuaXVtLmNvbVwiKTtcbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgIH1cbn1cbiJdfQ==