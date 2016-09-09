System.register(['@angular/core', '@angular/platform-browser', './main.component', './app.routing', './components/home', './components/Blog/blog', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, main_component_1, app_routing_1, home_1, blog_1, http_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_1.routing,
                            http_1.HttpModule,
                            http_1.JsonpModule
                        ],
                        declarations: [
                            main_component_1.MainComponent,
                            home_1.Home,
                            blog_1.Blog
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [main_component_1.MainComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFsQkQ7b0JBQUMsZUFBUSxDQUFDO3dCQUNOLE9BQU8sRUFBRTs0QkFDTCxnQ0FBYTs0QkFDYixxQkFBTzs0QkFDUCxpQkFBVTs0QkFDVixrQkFBVzt5QkFDZDt3QkFDRCxZQUFZLEVBQUU7NEJBQ1YsOEJBQWE7NEJBQ2IsV0FBSTs0QkFDSixXQUFJO3lCQUNQO3dCQUNELFNBQVMsRUFBRTs0QkFDUCxpQ0FBbUI7eUJBQ3RCO3dCQUNELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzdCLENBQUM7OzZCQUFBO2dCQUVGLGdCQUFDO1lBQUQsQ0FBQyxBQURELElBQ0M7WUFERCxpQ0FDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7cm91dGluZywgYXBwUm91dGluZ1Byb3ZpZGVyc30gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcbmltcG9ydCB7QmxvZ30gZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cvYmxvZyc7XG5pbXBvcnQge0h0dHBNb2R1bGUsIEpzb25wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIHJvdXRpbmcsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIEpzb25wTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWFpbkNvbXBvbmVudCxcbiAgICAgICAgSG9tZSxcbiAgICAgICAgQmxvZ1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnNcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW01haW5Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19