import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()

export class AdventuresService {
    photoList : Object[];
    photoCache : Object;
    constructor (private http:Http) {
        this.photoCache = {};
    }

    getPhotosList(season) {
        var that = this;

        var promise = new Promise((resolve, reject) => {
            if(that.photoList !== undefined) {
                let ret = that.photoList.filter(album => {
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
                   that.photoList = response.json().photosets.photoset;
                   return that.photoList;
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
        if(this.photoCache[album] !== undefined) {
            console.warn("from cache");
            return this.photoCache[album];
        }
    }

    getPhotosViaAPI(album) {
        let params = new URLSearchParams();
        params.set('album', album);
        let url = document.location.origin + `/api/getadventurephotos`;
        return this.http.get(url, {
                    search: params
                }).map((response) => {
                   if(response.status === 200) {
                       this.photoCache[album] = response.json();
                       return response.json();
                   }
                   else {
                       throw new Error("No response from brianium.com");
                   }

               }).toPromise();
    }
}
