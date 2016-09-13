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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO2dCQUVBLENBQUM7Z0JBWkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsS0FBSzt3QkFDZixVQUFVLEVBQUUsQ0FBQywyQkFBTyxFQUFFLHlCQUFNLENBQUM7d0JBQzdCLFFBQVEsRUFBRSx3SUFLVDtxQkFDSixDQUFDOztpQ0FBQTtnQkFHRixvQkFBQztZQUFELENBQUMsQUFGRCxJQUVDO1lBRkQseUNBRUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcCcsXG4gICAgZGlyZWN0aXZlczogW1NpZGViYXIsIEhlYWRlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG5cbn1cbiJdfQ==