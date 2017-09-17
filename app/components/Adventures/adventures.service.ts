import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';

@Injectable()

export class AdventuresService {
    albumList : Object[];
    photoCache : Object;
    currentSeason : string;
    seasons : any[];
    fullscreenMask : HTMLElement;
    fullscreenPhoto: HTMLImageElement;
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

    getSeasons() {
        let url = document.location.origin + `/api/getseasonalbums`;

        return this.http.get(url).map((response) => {
                if(response.status === 200) {
                    let map = {};
                    let res = response.json();
                    res = res.photosets.photoset;
                    var seasons = {
                        Winter : 0,
                        Spring: 1,
                        Summer : 2,
                        Fall : 3
                    }
                    res.forEach((val, index, arr) => {
                        var albumName = val["title"]["_content"];
                        var season = albumName.substring(1, albumName.indexOf("]"));
                        var check = season.substring(0, season.length - 4);
                        if(seasons[check] != null) {
                          season = season.substring(0, season.length - 4) + " " + Number(season.substring(season.length - 4));
                          map[season] = true;
                        }
                    });
                    this.seasons = Object.keys(map).sort((a, b) => {
                        var [a1, a2] : any[] = a.split(" ");
                        var [b1, b2] : any[] = b.split(" ");
                        a2 = Number(a2);
                        b2 = Number(b2);

                        //Sort seasons in descending order
                        if(a2 != b2) {
                            return b2 - a2;
                        }
                        return seasons[b1] - seasons[a1];
                    });

                    //Format each season string text
                    this.seasons.forEach((val, index, arr) => {
                        arr[index] = {
                            path : val.split(" ").join(""),
                            name : val
                        };
                    });


                    return this.seasons;
                }
        }).toPromise();

    }

    //Sets up div components to be able to alter
    //mask, photo are HTMLElements
    setupFullscreenComponents(mask, photo) {
        this.fullscreenMask = mask.nativeElement;
        this.fullscreenPhoto = photo.nativeElement;
    }

    setFullscreenPhoto(photo) {
        //Get URL of original photo
        var url;
        photo.sizes.map(function(x){
            if(x.label === 'Large') {
                url = x.source;
            }
        })
        this.fullscreenMask.classList.remove('hidden');
        this.fullscreenMask.style['background-image'] = "url('"+ url + "')";
    }

    hideMask() {
        this.fullscreenMask.classList.add('hidden');
    }
}
