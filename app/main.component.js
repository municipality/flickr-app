System.register(['@angular/core', './components/sidebar.component', './components/header.component'], function(exports_1, context_1) {
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
    var core_1, sidebar_component_1, header_component_1;
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
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.loadingScreen = document.getElementsByClassName("loading-screen-container")[0];
                    this.app = document.getElementsByTagName('app')[0];
                    document.getElementById('spinner').addEventListener('click', function (e) {
                        _this.moveScreen();
                    });
                };
                MainComponent.prototype.moveScreen = function () {
                    this.loadingScreen.classList.add("move");
                    this.app.classList.add("move");
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [sidebar_component_1.Sidebar, header_component_1.Header],
                        template: "\n        <header></header>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO2dCQWlCQSxDQUFDO2dCQWRHLHVDQUFlLEdBQWY7b0JBQUEsaUJBTUM7b0JBTEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUEsQ0FBQzt3QkFDMUQsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGtDQUFVLEdBQVY7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsVUFBVSxFQUFFLENBQUMsMkJBQU8sRUFBRSx5QkFBTSxDQUFDO3dCQUM3QixRQUFRLEVBQUUsd0lBS1Q7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBa0JGLG9CQUFDO1lBQUQsQ0FBQyxBQWpCRCxJQWlCQztZQWpCRCx5Q0FpQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgZGlyZWN0aXZlczogW1NpZGViYXIsIEhlYWRlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGxvYWRpbmdTY3JlZW4gOiBFbGVtZW50O1xuICAgIGFwcDtcbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9hZGluZy1zY3JlZW4tY29udGFpbmVyXCIpWzBdO1xuICAgICAgICB0aGlzLmFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcHAnKVswXTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU2NyZWVuKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vdmVTY3JlZW4gKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZChcIm1vdmVcIik7XG4gICAgICAgIHRoaXMuYXBwLmNsYXNzTGlzdC5hZGQoXCJtb3ZlXCIpO1xuICAgIH1cblxuXG59XG4iXX0=