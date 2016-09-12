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
                // { path: 'adventures', component: Adventures },
                { path: '', redirectTo: '/home', pathMatch: 'full' }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes.slice()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBS00sU0FBUyxFQU9GLG1CQUFtQixFQUVuQixPQUFPLEVBRVAsYUFBYTs7Ozs7Ozs7Ozs7OztZQVhwQixTQUFTLEdBQVk7Z0JBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBQztnQkFDaEMsaURBQWlEO2dCQUNqRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2FBQ3ZELENBQUM7WUFFVyxpQ0FBQSxtQkFBbUIsR0FBVyxFQUFFLENBQUEsQ0FBQztZQUVqQyxxQkFBQSxPQUFPLEdBQXlCLHFCQUFZLENBQUMsT0FBTyxDQUFLLFNBQVMsUUFBQyxDQUFDLENBQUEsQ0FBQztZQUVyRSwyQkFBQSxhQUFhLEdBQVc7Z0JBQ2pDO29CQUNJLElBQUksRUFBRyxNQUFNO29CQUNiLE9BQU8sRUFBRyxXQUFXO29CQUNyQixJQUFJLEVBQUcsT0FBTztvQkFDZCxJQUFJLEVBQUcsc0JBQXNCO29CQUM3QixPQUFPLEVBQUUsRUFBRTtpQkFDZDtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsT0FBTyxFQUFHLFlBQVk7b0JBQ3RCLElBQUksRUFBRyxhQUFhO29CQUNwQixJQUFJLEVBQUcsMEJBQTBCO29CQUNqQyxPQUFPLEVBQUcsZ0JBQWdCO2lCQUM3QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsTUFBTTtvQkFDYixPQUFPLEVBQUcsT0FBTztvQkFDakIsSUFBSSxFQUFHLE9BQU87b0JBQ2QsSUFBSSxFQUFHLHFCQUFxQjtvQkFDNUIsT0FBTyxFQUFHLFdBQVc7aUJBQ3hCO2dCQUNEO29CQUNJLElBQUksRUFBRyxVQUFVO29CQUNqQixPQUFPLEVBQUcsVUFBVTtvQkFDcEIsSUFBSSxFQUFHLFdBQVc7b0JBQ2xCLElBQUksRUFBRyx5QkFBeUI7b0JBQ2hDLE9BQU8sRUFBRyxhQUFhO2lCQUMxQjthQUVKLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmxvZ30gZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cvYmxvZyc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcblxuY29uc3QgYXBwUm91dGVzIDogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWV9LFxuICAgIHsgcGF0aDogJ2Jsb2cnLCBjb21wb25lbnQ6IEJsb2d9LFxuICAgIC8vIHsgcGF0aDogJ2FkdmVudHVyZXMnLCBjb21wb25lbnQ6IEFkdmVudHVyZXMgfSxcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XG5dO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVycyA6IGFueVtdID0gW107XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nIDogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KFsuLi5hcHBSb3V0ZXNdKTtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJSb3V0ZXMgOiBhbnlbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkhvbWVcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgIHBhdGggOiBcIi9ob21lXCIsXG4gICAgICAgIGljb24gOiBcImljb25zL2JyaWFuLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHM6ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQWR2ZW50dXJlc1wiLFxuICAgICAgICBwYXRoIDogXCIvYWR2ZW50dXJlc1wiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9hZHZlbnR1cmUtaWNvbi5wbmdcIixcbiAgICAgICAgaWNvbkNscyA6ICdpY29uLWFkdmVudHVyZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxuICAgICAgICBkaXNwbGF5IDogXCJCIExvZ1wiLFxuICAgICAgICBwYXRoIDogXCIvYmxvZ1wiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9ibG9nLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1ibG9nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJQcm9qZWN0c1wiLFxuICAgICAgICBkaXNwbGF5IDogXCJQcm9qZWN0c1wiLFxuICAgICAgICBwYXRoIDogXCIvcHJvamVjdHNcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvcHJvamVjdHMtaWNvbi5wbmdcIixcbiAgICAgICAgaWNvbkNscyA6ICdpY29uLWdpdGh1YidcbiAgICB9XG5cbl1cbiJdfQ==