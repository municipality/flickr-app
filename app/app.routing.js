System.register(['@angular/router', './components/Blog/blog', './components/home'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, blog_1, home_1;
    var appRoutes, appRoutingProviders, routing, SidebarRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'home', component: home_1.Home },
                { path: 'blog', component: blog_1.Blog },
                //{ path: 'adventures', component: },
                { path: '**', component: home_1.Home } //Wildcard path
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
            exports_1("SidebarRoutes", SidebarRoutes = [
                {
                    name: "Home",
                    display: "Brian Lee",
                    path: "/home",
                    icon: "icons/brian-icon.png",
                    iconCls: ''
                },
                {
                    name: "Adventures",
                    display: "Adventures",
                    path: "/adventures",
                    icon: "icons/adventure-icon.png",
                    iconCls: 'icon-adventure'
                },
                {
                    name: "Blog",
                    display: "B Log",
                    path: "/blog",
                    icon: "icons/blog-icon.png",
                    iconCls: 'icon-blog'
                },
                {
                    name: "Projects",
                    display: "Projects",
                    path: "/projects",
                    icon: "icons/projects-icon.png",
                    iconCls: 'icon-github'
                }
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSU0sU0FBUyxFQU9GLG1CQUFtQixFQUVuQixPQUFPLEVBRVAsYUFBYTs7Ozs7Ozs7Ozs7OztZQVhwQixTQUFTLEdBQVk7Z0JBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRTtnQkFDakMscUNBQXFDO2dCQUNyQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBQyxDQUFDLGVBQWU7YUFDakQsQ0FBQztZQUVXLGlDQUFBLG1CQUFtQixHQUFXLEVBQUUsQ0FBQSxDQUFDO1lBRWpDLHFCQUFBLE9BQU8sR0FBeUIscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUVoRSwyQkFBQSxhQUFhLEdBQVc7Z0JBQ2pDO29CQUNJLElBQUksRUFBRyxNQUFNO29CQUNiLE9BQU8sRUFBRyxXQUFXO29CQUNyQixJQUFJLEVBQUcsT0FBTztvQkFDZCxJQUFJLEVBQUcsc0JBQXNCO29CQUM3QixPQUFPLEVBQUUsRUFBRTtpQkFDZDtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsT0FBTyxFQUFHLFlBQVk7b0JBQ3RCLElBQUksRUFBRyxhQUFhO29CQUNwQixJQUFJLEVBQUcsMEJBQTBCO29CQUNqQyxPQUFPLEVBQUcsZ0JBQWdCO2lCQUM3QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsTUFBTTtvQkFDYixPQUFPLEVBQUcsT0FBTztvQkFDakIsSUFBSSxFQUFHLE9BQU87b0JBQ2QsSUFBSSxFQUFHLHFCQUFxQjtvQkFDNUIsT0FBTyxFQUFHLFdBQVc7aUJBQ3hCO2dCQUNEO29CQUNJLElBQUksRUFBRyxVQUFVO29CQUNqQixPQUFPLEVBQUcsVUFBVTtvQkFDcEIsSUFBSSxFQUFHLFdBQVc7b0JBQ2xCLElBQUksRUFBRyx5QkFBeUI7b0JBQ2hDLE9BQU8sRUFBRyxhQUFhO2lCQUMxQjthQUVKLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmxvZ30gZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cvYmxvZyc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcbmNvbnN0IGFwcFJvdXRlcyA6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnYmxvZycsIGNvbXBvbmVudDogQmxvZyB9LFxuICAgIC8veyBwYXRoOiAnYWR2ZW50dXJlcycsIGNvbXBvbmVudDogfSxcbiAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogSG9tZX0gLy9XaWxkY2FyZCBwYXRoXG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVycyA6IGFueVtdID0gW107XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nIDogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyUm91dGVzIDogYW55W10gPSBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgIGRpc3BsYXkgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICBwYXRoIDogXCIvaG9tZVwiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9icmlhbi1pY29uLnBuZ1wiLFxuICAgICAgICBpY29uQ2xzOiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgIGRpc3BsYXkgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgcGF0aCA6IFwiL2FkdmVudHVyZXNcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvYWR2ZW50dXJlLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1hZHZlbnR1cmUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkJsb2dcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQiBMb2dcIixcbiAgICAgICAgcGF0aCA6IFwiL2Jsb2dcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvYmxvZy1pY29uLnBuZ1wiLFxuICAgICAgICBpY29uQ2xzIDogJ2ljb24tYmxvZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgZGlzcGxheSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgcGF0aCA6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgIGljb24gOiBcImljb25zL3Byb2plY3RzLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1naXRodWInXG4gICAgfVxuXG5dXG4iXX0=