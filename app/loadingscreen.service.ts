import {Injectable} from '@angular/core';

@Injectable()
export class LoadingScreenService {

    hideLoadingScreen() {
        document.getElementsByClassName("app-container")[0].classList.add("move");
    }

    showLoadingScreen() {
        document.getElementsByClassName("app-container")[0].classList.remove("move");
    }
}
