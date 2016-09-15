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
                        _this.moveScreen();
                    });
                };
                MainComponent.prototype.moveScreen = function () {
                    document.getElementsByClassName("app-container")[0].classList.add("move");
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [sidebar_component_1.Sidebar, header_component_1.Header],
                        template: "\n        <headerbar></headerbar>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO2dCQThCQSxDQUFDO2dCQXpCRzs7O21CQUdHO2dCQUNILHVDQUFlLEdBQWY7b0JBQUEsaUJBY0M7b0JBYkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLGlGQUk5QyxDQUFDO29CQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDO3dCQUMxRCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2dCQUdQLENBQUM7Z0JBRUQsa0NBQVUsR0FBVjtvQkFDSSxRQUFRLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixVQUFVLEVBQUUsQ0FBQywyQkFBTyxFQUFFLHlCQUFNLENBQUM7d0JBQzdCLFFBQVEsRUFBRSw4SUFLVDtxQkFDSixDQUFDOztpQ0FBQTtnQkErQkYsb0JBQUM7WUFBRCxDQUFDLEFBOUJELElBOEJDO1lBOUJELHlDQThCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWRlYmFyfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbU2lkZWJhciwgSGVhZGVyXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyYmFyPjwvaGVhZGVyYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgbG9hZGluZ1NjcmVlbiA6IEVsZW1lbnQ7XG4gICAgYXBwO1xuXG5cbiAgICAvKipcbiAgICAgKiAgTG9hZGluZyBzY3JlZW4gYW5kIGFwcCBhcmUgaW4gdGhlIHNhbWUgY29udGFpbmVyIGZvciBmbHVpZCBtb3ZlbWVudFxuICAgICAqICBVc2VkIHRvcCBhbmltYXRpb24gcmF0aGVyIHRoYW4gdHJhbnNmb3JtIHRyYW5zbGF0ZSBmb3Igbm9uLWZpeGVkIGltYWdlIG9mZnNoaWZ0c1xuICAgICAqL1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsb2FkaW5nLXNjcmVlbi1jb250YWluZXJcIilbMF07XG4gICAgICAgIHRoaXMuYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FwcCcpWzBdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWxvYWRpbmctZG93blwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Bpbm5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTY3JlZW4oKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIG1vdmVTY3JlZW4gKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXBwLWNvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcbiAgICB9XG5cblxufVxuIl19