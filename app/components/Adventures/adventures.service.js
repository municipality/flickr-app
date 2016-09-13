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
                AdventuresService.prototype.setSeason = function (season) {
                    this.currentSeason = season;
                };
                AdventuresService.prototype.getPhotosList = function () {
                    var season = this.currentSeason;
                    var that = this;
                    var promise = new Promise(function (resolve, reject) {
                        if (that.albumList !== undefined) {
                            var ret = that.albumList.filter(function (album) {
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
                                that.albumList = response.json().photosets.photoset;
                                return that.albumList;
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
                    var title = "[" + this.currentSeason + "]" + album;
                    if (this.photoCache[title] !== undefined) {
                        console.warn("from cache");
                        return this.photoCache[title];
                    }
                };
                AdventuresService.prototype.getPhotosViaAPI = function (album) {
                    var title = "[" + this.currentSeason + "]" + album;
                    var albumId;
                    var that = this;
                    this.albumList.forEach(function (val, index, arr) {
                        if (val["title"]["_content"] === title) {
                            albumId = val["id"];
                        }
                    });
                    var params = new http_1.URLSearchParams();
                    params.set('albumId', albumId);
                    var url = document.location.origin + "/api/getadventurephotos";
                    return this.http.get(url, {
                        search: params
                    }).map(function (response) {
                        if (response.status === 200) {
                            that.photoCache[title] = response.json();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBSUksMkJBQXFCLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQscUNBQVMsR0FBVCxVQUFXLE1BQU07b0JBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQseUNBQWEsR0FBYjtvQkFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3RDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLO2dDQUNqQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQUksTUFBTSxNQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2hCLENBQUM7Z0NBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs0QkFDakIsQ0FBQyxDQUFDLENBQUM7NEJBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNiLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNELG1DQUFtQzt3QkFDbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxF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bmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFkdmVudHVyZXNTZXJ2aWNlIHtcbiAgICBhbGJ1bUxpc3QgOiBPYmplY3RbXTtcbiAgICBwaG90b0NhY2hlIDogT2JqZWN0O1xuICAgIGN1cnJlbnRTZWFzb24gOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDpIdHRwKSB7XG4gICAgICAgIHRoaXMucGhvdG9DYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIHNldFNlYXNvbiAoc2Vhc29uKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNlYXNvbiA9IHNlYXNvbjtcbiAgICB9XG5cbiAgICBnZXRQaG90b3NMaXN0KCkge1xuICAgICAgICB2YXIgc2Vhc29uID0gdGhpcy5jdXJyZW50U2Vhc29uO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYodGhhdC5hbGJ1bUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXQgPSB0aGF0LmFsYnVtTGlzdC5maWx0ZXIoYWxidW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihhbGJ1bVtcInRpdGxlXCJdW1wiX2NvbnRlbnRcIl0uaW5kZXhPZihgWyR7c2Vhc29ufV1gKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmV0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0lmIGNhY2hlIGlzIG5vdCB5ZXQgc2V0LCBjYWxsIEFQSVxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4gKyBgL2FwaS9nZXRzZWFzb25hbGJ1bXNgO1xuICAgICAgICAgICAgdGhhdC5odHRwLmdldCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXNcbiAgICAgICAgICAgIH0pLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgdGhhdC5hbGJ1bUxpc3QgPSByZXNwb25zZS5qc29uKCkucGhvdG9zZXRzLnBob3Rvc2V0O1xuICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmFsYnVtTGlzdDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbnNlIGZyb20gYnJpYW5pdW0uY29tXCIpO1xuICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4oIChsaXN0IDogYW55W10pID0+IHtcbiAgICAgICAgICAgICAgIGxldCByZXQgPSBsaXN0LmZpbHRlcihhbGJ1bSA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYoYWxidW1bXCJ0aXRsZVwiXVtcIl9jb250ZW50XCJdLmluZGV4T2YoYFske3NlYXNvbn1dYCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgICAgICB9KTtcbiAgICAgICB9KVxuXG4gICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG5cbiAgICBnZXRQaG90b3MoYWxidW0pIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvL2NoZWNrIGNhY2hlIGZvciBwaG90b3MgYmVmb3JlIGNhbGxpbmcgYXBpXG4gICAgICAgICAgICB2YXIgY2FjaGUgPSB0aGlzLmdldFBob3Rvc1ZpYUNhY2hlKGFsYnVtKTtcbiAgICAgICAgICAgIGlmKGNhY2hlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNhY2hlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0NhbGwgc2VydmljZSB0byBjYWxsIGFwaSB0byBnZXQgcGhvdG9zXG4gICAgICAgICAgICB0aGlzLmdldFBob3Rvc1ZpYUFQSShhbGJ1bSkudGhlbigoYWxidW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFsYnVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXRQaG90b3NWaWFDYWNoZShhbGJ1bSkge1xuICAgICAgICBsZXQgdGl0bGUgPSBgWyR7dGhpcy5jdXJyZW50U2Vhc29ufV0ke2FsYnVtfWA7XG4gICAgICAgIGlmKHRoaXMucGhvdG9DYWNoZVt0aXRsZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZnJvbSBjYWNoZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBob3RvQ2FjaGVbdGl0bGVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGhvdG9zVmlhQVBJKGFsYnVtKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGBbJHt0aGlzLmN1cnJlbnRTZWFzb259XSR7YWxidW19YDtcbiAgICAgICAgbGV0IGFsYnVtSWQ7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5hbGJ1bUxpc3QuZm9yRWFjaCgodmFsLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgICAgICBpZih2YWxbXCJ0aXRsZVwiXVtcIl9jb250ZW50XCJdID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgIGFsYnVtSWQgPSB2YWxbXCJpZFwiXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2FsYnVtSWQnLCBhbGJ1bUlkKTtcbiAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2dldGFkdmVudHVyZXBob3Rvc2A7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICAgICAgICAgIH0pLm1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnBob3RvQ2FjaGVbdGl0bGVdID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSBicmlhbml1bS5jb21cIik7XG4gICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICB9KS50b1Byb21pc2UoKTtcbiAgICB9XG59XG4iXX0=