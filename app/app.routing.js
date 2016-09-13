System.register(['@angular/router', './components/Blog/blog', './components/home'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, blog_1, home_1;
    var appRoutes, appRoutingProviders, routing, SidebarRoutes, HeaderRoutes;
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
            exports_1("HeaderRoutes", HeaderRoutes = [
                {
                    name: "Home",
                    path: "/home",
                    iconCls: ''
                },
                {
                    name: "Adventures",
                    path: "/adventures",
                    iconCls: 'icon-adventure'
                },
                {
                    name: "Blog",
                    path: "/blog",
                    iconCls: 'icon-blog'
                },
                {
                    name: "Projects",
                    path: "/projects",
                    iconCls: 'icon-github'
                }
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBS00sU0FBUyxFQU9GLG1CQUFtQixFQUVuQixPQUFPLEVBRVAsYUFBYSxFQWdDYixZQUFZOzs7Ozs7Ozs7Ozs7O1lBM0NuQixTQUFTLEdBQVk7Z0JBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBQztnQkFDaEMsaURBQWlEO2dCQUNqRCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO2FBQ3ZELENBQUM7WUFFVyxpQ0FBQSxtQkFBbUIsR0FBVyxFQUFFLENBQUEsQ0FBQztZQUVqQyxxQkFBQSxPQUFPLEdBQXlCLHFCQUFZLENBQUMsT0FBTyxDQUFLLFNBQVMsUUFBQyxDQUFDLENBQUEsQ0FBQztZQUVyRSwyQkFBQSxhQUFhLEdBQVc7Z0JBQ2pDO29CQUNJLElBQUksRUFBRyxNQUFNO29CQUNiLE9BQU8sRUFBRyxXQUFXO29CQUNyQixJQUFJLEVBQUcsT0FBTztvQkFDZCxJQUFJLEVBQUcsc0JBQXNCO29CQUM3QixPQUFPLEVBQUUsRUFBRTtpQkFDZDtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsT0FBTyxFQUFHLFlBQVk7b0JBQ3RCLElBQUksRUFBRyxhQUFhO29CQUNwQixJQUFJLEVBQUcsMEJBQTBCO29CQUNqQyxPQUFPLEVBQUcsZ0JBQWdCO2lCQUM3QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsTUFBTTtvQkFDYixPQUFPLEVBQUcsT0FBTztvQkFDakIsSUFBSSxFQUFHLE9BQU87b0JBQ2QsSUFBSSxFQUFHLHFCQUFxQjtvQkFDNUIsT0FBTyxFQUFHLFdBQVc7aUJBQ3hCO2dCQUNEO29CQUNJLElBQUksRUFBRyxVQUFVO29CQUNqQixPQUFPLEVBQUcsVUFBVTtvQkFDcEIsSUFBSSxFQUFHLFdBQVc7b0JBQ2xCLElBQUksRUFBRyx5QkFBeUI7b0JBQ2hDLE9BQU8sRUFBRyxhQUFhO2lCQUMxQjthQUVKLENBQUEsQ0FBQztZQUVXLDBCQUFBLFlBQVksR0FBYztnQkFDbkM7b0JBQ0ksSUFBSSxFQUFHLE1BQU07b0JBQ2IsSUFBSSxFQUFHLE9BQU87b0JBQ2QsT0FBTyxFQUFFLEVBQUU7aUJBQ2Q7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFHLFlBQVk7b0JBQ25CLElBQUksRUFBRyxhQUFhO29CQUNwQixPQUFPLEVBQUcsZ0JBQWdCO2lCQUM3QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsTUFBTTtvQkFDYixJQUFJLEVBQUcsT0FBTztvQkFDZCxPQUFPLEVBQUcsV0FBVztpQkFDeEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFHLFVBQVU7b0JBQ2pCLElBQUksRUFBRyxXQUFXO29CQUNsQixPQUFPLEVBQUcsYUFBYTtpQkFDMUI7YUFDSixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jsb2d9IGZyb20gJy4vY29tcG9uZW50cy9CbG9nL2Jsb2cnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSc7XG5cbmNvbnN0IGFwcFJvdXRlcyA6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lfSxcbiAgICB7IHBhdGg6ICdibG9nJywgY29tcG9uZW50OiBCbG9nfSxcbiAgICAvLyB7IHBhdGg6ICdhZHZlbnR1cmVzJywgY29tcG9uZW50OiBBZHZlbnR1cmVzIH0sXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRpbmdQcm92aWRlcnMgOiBhbnlbXSA9IFtdO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbLi4uYXBwUm91dGVzXSk7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyUm91dGVzIDogYW55W10gPSBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgIGRpc3BsYXkgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICBwYXRoIDogXCIvaG9tZVwiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9icmlhbi1pY29uLnBuZ1wiLFxuICAgICAgICBpY29uQ2xzOiAnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgIGRpc3BsYXkgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgcGF0aCA6IFwiL2FkdmVudHVyZXNcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvYWR2ZW50dXJlLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1hZHZlbnR1cmUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkJsb2dcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQiBMb2dcIixcbiAgICAgICAgcGF0aCA6IFwiL2Jsb2dcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvYmxvZy1pY29uLnBuZ1wiLFxuICAgICAgICBpY29uQ2xzIDogJ2ljb24tYmxvZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgZGlzcGxheSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgcGF0aCA6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgIGljb24gOiBcImljb25zL3Byb2plY3RzLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1naXRodWInXG4gICAgfVxuXG5dO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyUm91dGVzIDogT2JqZWN0W10gPSBbXG4gICAge1xuICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgIHBhdGggOiBcIi9ob21lXCIsXG4gICAgICAgIGljb25DbHM6ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgcGF0aCA6IFwiL2FkdmVudHVyZXNcIixcbiAgICAgICAgaWNvbkNscyA6ICdpY29uLWFkdmVudHVyZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxuICAgICAgICBwYXRoIDogXCIvYmxvZ1wiLFxuICAgICAgICBpY29uQ2xzIDogJ2ljb24tYmxvZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgcGF0aCA6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1naXRodWInXG4gICAgfVxuXTtcbiJdfQ==