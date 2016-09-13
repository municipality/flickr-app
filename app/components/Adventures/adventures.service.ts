import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()

export class AdventuresService {
    albumList : Object[];
    photoCache : Object;
    currentSeason : string;
    constructor (private http:Http) {
        this.photoCache = {};
    }

    setSeason (season) {
        this.currentSeason = season;
    }

    getPhotosList() {
        var season = this.currentSeason;
        var that = this;
        var promise = new Promise((resolve, reject) => {
            if(that.albumList !== undefined) {
                let ret = that.albumList.filter(album => {
                    if(album["title"]["_content"].indexOf(`[${season}]`) !== -1) {
                        return true;
                    }
                    return false;
                });

                resolve(ret);
                return;
            }
            //If cache is not yet set, call API
            let params = new URLSearchParams();
            let url = document.location.origin + `/api/getseasonalbums`;
            that.http.get(url, {
                    search: params
            }).map((response) => {
               if(response.status === 200) {
                   that.albumList = response.json().photosets.photoset;
                   return that.albumList;
               }
               else {
                   throw new Error("No response from brianium.com");
               }

           }).toPromise().then( (list : any[]) => {
               let ret = list.filter(album => {
                   if(album["title"]["_content"].indexOf(`[${season}]`) !== -1) {
                       return true;
                   }
                   return false;
               });

               resolve(ret);
           });
       })

       return promise;
    }


    getPhotos(album) {
        var promise = new Promise((resolve, reject) => {
            //check cache for photos before calling api
            var cache = this.getPhotosViaCache(album);
            if(cache !== undefined) {
                resolve(cache);
                return;
            }
            //Call service to call api to get photos
            this.getPhotosViaAPI(album).then((album) => {
                resolve(album);
            });
        });

        return promise;
    }

    getPhotosViaCache(album) {
        let title = `[${this.currentSeason}]${album}`;
        if(this.photoCache[title] !== undefined) {
            console.warn("from cache");
            return this.photoCache[title];
        }
    }

    getPhotosViaAPI(album) {
        let title = `[${this.currentSeason}]${album}`;
        let albumId;
        var that = this;
        this.albumList.forEach((val, index, arr) => {
            if(val["title"]["_content"] === title) {
                albumId = val["id"];
            }
        });
        let params = new URLSearchParams();
        params.set('albumId', albumId);
        let url = document.location.origin + `/api/getadventurephotos`;
        return this.http.get(url, {
                    search: params
                }).map((response) => {
                   if(response.status === 200) {
                       that.photoCache[title] = response.json();
                       return response.json();
                   }
                   else {
                       throw new Error("No response from brianium.com");
                   }

               }).toPromise();
    }
}
