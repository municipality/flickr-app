System.register(['@angular/core', './components/sidebar.component', './components/header.component', './loadingscreen.service'], function(exports_1, context_1) {
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
    var core_1, sidebar_component_1, header_component_1, loadingscreen_service_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (loadingscreen_service_1_1) {
                loadingscreen_service_1 = loadingscreen_service_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(loadingScreenService) {
                    this.loadingScreenService = loadingScreenService;
                }
                /**
                 *  Loading screen and app are in the same container for fluid movement
                 *  Used top animation rather than transform translate for non-fixed image offshifts
                 */
                MainComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.loadingScreen = document.getElementsByClassName("loading-screen-container")[0];
                    this.app = document.getElementsByTagName('app')[0];
                    document.getElementById('spinner').innerHTML = "\n            <div class=\"icon-loading-down\">\n\n            </div>\n        ";
                    document.getElementById('spinner').classList.add("loaded");
                    document.getElementById('spinner').addEventListener('click', function (e) {
                        _this.loadingScreenService.hideLoadingScreen();
                    });
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [sidebar_component_1.Sidebar, header_component_1.Header],
                        template: "\n        <headerbar></headerbar>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [loadingscreen_service_1.LoadingScreenService])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUlJLHVCQUFxQixvQkFBeUM7b0JBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBRTlELENBQUM7Z0JBRUQ7OzttQkFHRztnQkFDSCx1Q0FBZSxHQUFmO29CQUFBLGlCQWNDO29CQWJHLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxpRkFJOUMsQ0FBQztvQkFDRixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNELFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxDQUFDO2dCQUdQLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsVUFBVSxFQUFFLENBQUMsMkJBQU8sRUFBRSx5QkFBTSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsOElBS1Q7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBOEJGLG9CQUFDO1lBQUQsQ0FBQyxBQTdCRCxJQTZCQztZQTdCRCx5Q0E2QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvYWRpbmdTY3JlZW5TZXJ2aWNlfSBmcm9tICcuL2xvYWRpbmdzY3JlZW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbU2lkZWJhciwgSGVhZGVyXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyYmFyPjwvaGVhZGVyYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgbG9hZGluZ1NjcmVlbiA6IEVsZW1lbnQ7XG4gICAgYXBwO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgbG9hZGluZ1NjcmVlblNlcnZpY2U6TG9hZGluZ1NjcmVlblNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBMb2FkaW5nIHNjcmVlbiBhbmQgYXBwIGFyZSBpbiB0aGUgc2FtZSBjb250YWluZXIgZm9yIGZsdWlkIG1vdmVtZW50XG4gICAgICogIFVzZWQgdG9wIGFuaW1hdGlvbiByYXRoZXIgdGhhbiB0cmFuc2Zvcm0gdHJhbnNsYXRlIGZvciBub24tZml4ZWQgaW1hZ2Ugb2Zmc2hpZnRzXG4gICAgICovXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvYWRpbmctc2NyZWVuLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgdGhpcy5hcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXBwJylbMF07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJykuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbG9hZGluZy1kb3duXCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NjcmVlblNlcnZpY2UuaGlkZUxvYWRpbmdTY3JlZW4oKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG59XG4iXX0=