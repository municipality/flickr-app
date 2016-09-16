System.register(['@angular/core', '@angular/platform-browser', './main.component', './app.routing', './components/home', './components/Blog/blog', '@angular/http', './components/Adventures/adventures.module', './loadingscreen.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, main_component_1, app_routing_1, home_1, blog_1, http_1, adventures_module_1, loadingscreen_service_1;
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
            },
            function (adventures_module_1_1) {
                adventures_module_1 = adventures_module_1_1;
            },
            function (loadingscreen_service_1_1) {
                loadingscreen_service_1 = loadingscreen_service_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            adventures_module_1.AdventuresModule,
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
                            app_routing_1.appRoutingProviders,
                            loadingscreen_service_1.LoadingScreenService
                        ],
                        bootstrap: [main_component_1.MainComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFwQkQ7b0JBQUMsZUFBUSxDQUFDO3dCQUNOLE9BQU8sRUFBRTs0QkFDTCxvQ0FBZ0I7NEJBQ2hCLGdDQUFhOzRCQUNiLHFCQUFPOzRCQUNQLGlCQUFVOzRCQUNWLGtCQUFXO3lCQUNkO3dCQUNELFlBQVksRUFBRTs0QkFDViw4QkFBYTs0QkFDYixXQUFJOzRCQUNKLFdBQUk7eUJBQ1A7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLGlDQUFtQjs0QkFDbkIsNENBQW9CO3lCQUN2Qjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOzs2QkFBQTtnQkFFRixnQkFBQztZQUFELENBQUMsQUFERCxJQUNDO1lBREQsaUNBQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSAnLi9tYWluLmNvbXBvbmVudCc7XG5pbXBvcnQge3JvdXRpbmcsIGFwcFJvdXRpbmdQcm92aWRlcnN9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQge0Jsb2d9IGZyb20gJy4vY29tcG9uZW50cy9CbG9nL2Jsb2cnO1xuaW1wb3J0IHtIdHRwTW9kdWxlLCBKc29ucE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0FkdmVudHVyZXNNb2R1bGV9IGZyb20gJy4vY29tcG9uZW50cy9BZHZlbnR1cmVzL2FkdmVudHVyZXMubW9kdWxlJztcbmltcG9ydCB7TG9hZGluZ1NjcmVlblNlcnZpY2V9IGZyb20gJy4vbG9hZGluZ3NjcmVlbi5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBBZHZlbnR1cmVzTW9kdWxlLFxuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICByb3V0aW5nLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBKc29ucE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1haW5Db21wb25lbnQsXG4gICAgICAgIEhvbWUsXG4gICAgICAgIEJsb2dcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzLFxuICAgICAgICBMb2FkaW5nU2NyZWVuU2VydmljZVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbTWFpbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==