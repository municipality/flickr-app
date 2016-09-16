System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var LoadingScreenService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoadingScreenService = (function () {
                function LoadingScreenService() {
                }
                LoadingScreenService.prototype.hideLoadingScreen = function () {
                    document.getElementsByClassName("app-container")[0].classList.add("move");
                };
                LoadingScreenService.prototype.showLoadingScreen = function () {
                    document.getElementsByClassName("app-container")[0].classList.remove("move");
                };
                LoadingScreenService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoadingScreenService);
                return LoadingScreenService;
            }());
            exports_1("LoadingScreenService", LoadingScreenService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZ3NjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9hZGluZ3NjcmVlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFQRyxnREFBaUIsR0FBakI7b0JBQ0ksUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlFLENBQUM7Z0JBRUQsZ0RBQWlCLEdBQWpCO29CQUNJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRixDQUFDO2dCQVRMO29CQUFDLGlCQUFVLEVBQUU7O3dDQUFBO2dCQVViLDJCQUFDO1lBQUQsQ0FBQyxBQVRELElBU0M7WUFURCx1REFTQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRpbmdTY3JlZW5TZXJ2aWNlIHtcblxuICAgIGhpZGVMb2FkaW5nU2NyZWVuKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXBwLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcbiAgICB9XG5cbiAgICBzaG93TG9hZGluZ1NjcmVlbigpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFwcC1jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcIm1vdmVcIik7XG4gICAgfVxufVxuIl19