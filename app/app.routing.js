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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBS00sU0FBUyxFQU1GLG1CQUFtQixFQUVuQixPQUFPLEVBRVAsYUFBYTs7Ozs7Ozs7Ozs7OztZQVZwQixTQUFTLEdBQVk7Z0JBQ3ZCLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFO2dCQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRTtnQkFDakMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUMsQ0FBQyxlQUFlO2FBQ2pELENBQUM7WUFFVyxpQ0FBQSxtQkFBbUIsR0FBVyxFQUFFLENBQUEsQ0FBQztZQUVqQyxxQkFBQSxPQUFPLEdBQXlCLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFFaEUsMkJBQUEsYUFBYSxHQUFXO2dCQUNqQztvQkFDSSxJQUFJLEVBQUcsTUFBTTtvQkFDYixPQUFPLEVBQUcsV0FBVztvQkFDckIsSUFBSSxFQUFHLE9BQU87b0JBQ2QsSUFBSSxFQUFHLHNCQUFzQjtvQkFDN0IsT0FBTyxFQUFFLEVBQUU7aUJBQ2Q7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFHLFlBQVk7b0JBQ25CLE9BQU8sRUFBRyxZQUFZO29CQUN0QixJQUFJLEVBQUcsYUFBYTtvQkFDcEIsSUFBSSxFQUFHLDBCQUEwQjtvQkFDakMsT0FBTyxFQUFHLGdCQUFnQjtpQkFDN0I7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFHLE1BQU07b0JBQ2IsT0FBTyxFQUFHLE9BQU87b0JBQ2pCLElBQUksRUFBRyxPQUFPO29CQUNkLElBQUksRUFBRyxxQkFBcUI7b0JBQzVCLE9BQU8sRUFBRyxXQUFXO2lCQUN4QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUcsVUFBVTtvQkFDakIsT0FBTyxFQUFHLFVBQVU7b0JBQ3BCLElBQUksRUFBRyxXQUFXO29CQUNsQixJQUFJLEVBQUcseUJBQXlCO29CQUNoQyxPQUFPLEVBQUcsYUFBYTtpQkFDMUI7YUFFSixDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jsb2d9IGZyb20gJy4vY29tcG9uZW50cy9CbG9nL2Jsb2cnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSc7XG5cbmNvbnN0IGFwcFJvdXRlcyA6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnYmxvZycsIGNvbXBvbmVudDogQmxvZyB9LFxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBIb21lfSAvL1dpbGRjYXJkIHBhdGhcbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzIDogYW55W10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcblxuZXhwb3J0IGNvbnN0IFNpZGViYXJSb3V0ZXMgOiBhbnlbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkhvbWVcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgIHBhdGggOiBcIi9ob21lXCIsXG4gICAgICAgIGljb24gOiBcImljb25zL2JyaWFuLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHM6ICcnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgZGlzcGxheSA6IFwiQWR2ZW50dXJlc1wiLFxuICAgICAgICBwYXRoIDogXCIvYWR2ZW50dXJlc1wiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9hZHZlbnR1cmUtaWNvbi5wbmdcIixcbiAgICAgICAgaWNvbkNscyA6ICdpY29uLWFkdmVudHVyZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxuICAgICAgICBkaXNwbGF5IDogXCJCIExvZ1wiLFxuICAgICAgICBwYXRoIDogXCIvYmxvZ1wiLFxuICAgICAgICBpY29uIDogXCJpY29ucy9ibG9nLWljb24ucG5nXCIsXG4gICAgICAgIGljb25DbHMgOiAnaWNvbi1ibG9nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lIDogXCJQcm9qZWN0c1wiLFxuICAgICAgICBkaXNwbGF5IDogXCJQcm9qZWN0c1wiLFxuICAgICAgICBwYXRoIDogXCIvcHJvamVjdHNcIixcbiAgICAgICAgaWNvbiA6IFwiaWNvbnMvcHJvamVjdHMtaWNvbi5wbmdcIixcbiAgICAgICAgaWNvbkNscyA6ICdpY29uLWdpdGh1YidcbiAgICB9XG5cbl1cbiJdfQ==