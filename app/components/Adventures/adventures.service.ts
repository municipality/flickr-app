import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()

export class AdventuresService {

    cache : Object;
    constructor (private http:Http) {
        this.cache = {};
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
        if(this.cache[album] !== undefined) {
            console.warn("from cache");
            return this.cache[album];
        }
    }

    getPhotosViaAPI(album) {
        let params = new URLSearchParams();
        params.set('album', album);
        let url = document.location.origin + `/api/adventurephotos`;
        return this.http.get(url, {
                    search: params
                }).map((response) => {
                   if(response.status === 200) {
                       this.cache[album] = response.json();
                       console.warn("api call");
                       return response.json();
                   }
                   else {
                       throw new Error("No response from municipality.herokuapp.com");
                   }

               }).toPromise();
    }
}
