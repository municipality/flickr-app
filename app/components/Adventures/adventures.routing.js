System.register(['@angular/router', './adventures.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, adventures_component_1;
    var adventuresRoutes, adventuresRouting, SeasonsVar;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adventures_component_1_1) {
                adventures_component_1 = adventures_component_1_1;
            }],
        execute: function() {
            adventuresRoutes = [
                {
                    path: 'adventures', component: adventures_component_1.Adventures,
                    children: [
                        { path: ':season', component: adventures_component_1.Events },
                        { path: '' }
                    ]
                }
            ];
            exports_1("adventuresRouting", adventuresRouting = router_1.RouterModule.forChild(adventuresRoutes));
            exports_1("SeasonsVar", SeasonsVar = [{
                    path: 'Summer2016',
                    name: 'Summer 2016'
                }, {
                    path: 'Fall2016',
                    name: 'Fall 2016'
                }, {
                    path: 'Winter2017',
                    name: 'Winter 2017'
                }]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJTSxnQkFBZ0IsRUFnQlQsaUJBQWlCLEVBRWpCLFVBQVU7Ozs7Ozs7Ozs7WUFsQmpCLGdCQUFnQixHQUFXO2dCQUM3QjtvQkFDSSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQ0FBVTtvQkFDekMsUUFBUSxFQUFHO3dCQUNQLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsNkJBQU0sRUFBQzt3QkFDcEMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDO3FCQUNiO2lCQUNKO2FBT0osQ0FBQztZQUVXLCtCQUFBLGlCQUFpQixHQUF3QixxQkFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUM7WUFFakYsd0JBQUEsVUFBVSxHQUFjLENBQUM7b0JBQ2xDLElBQUksRUFBRyxZQUFZO29CQUNuQixJQUFJLEVBQUcsYUFBYTtpQkFDdkIsRUFBQztvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsSUFBSSxFQUFFLFdBQVc7aUJBQ3BCLEVBQUM7b0JBQ0UsSUFBSSxFQUFHLFlBQVk7b0JBQ25CLElBQUksRUFBRyxhQUFhO2lCQUN2QixDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0V2ZW50cywgQWR2ZW50dXJlc30gZnJvbSAnLi9hZHZlbnR1cmVzLmNvbXBvbmVudCc7XG5cbmNvbnN0IGFkdmVudHVyZXNSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdhZHZlbnR1cmVzJywgY29tcG9uZW50OiBBZHZlbnR1cmVzLFxuICAgICAgICBjaGlsZHJlbiA6IFtcbiAgICAgICAgICAgIHtwYXRoOiAnOnNlYXNvbicsIGNvbXBvbmVudDogRXZlbnRzfSxcbiAgICAgICAgICAgIHtwYXRoOiAnJ31cbiAgICAgICAgXVxuICAgIH1cbiAgICAvLyB7XG4gICAgLy8gICAgIHBhdGg6ICdhZHZlbnR1cmVzLzpzZWFzb24nLCBjb21wb25lbnQ6IEFkdmVudHVyZXMsXG4gICAgLy8gICAgIGNoaWxkcmVuIDogW1xuICAgIC8vICAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEV2ZW50cywgb3V0bGV0OiAnZXZlbnRzT3V0bGV0J31cbiAgICAvLyAgICAgXVxuICAgIC8vIH1cbl07XG5cbmV4cG9ydCBjb25zdCBhZHZlbnR1cmVzUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChhZHZlbnR1cmVzUm91dGVzKTtcblxuZXhwb3J0IGNvbnN0IFNlYXNvbnNWYXIgOiBPYmplY3RbXSA9IFt7XG4gICAgcGF0aCA6ICdTdW1tZXIyMDE2JyxcbiAgICBuYW1lIDogJ1N1bW1lciAyMDE2J1xufSx7XG4gICAgcGF0aDogJ0ZhbGwyMDE2JyxcbiAgICBuYW1lOiAnRmFsbCAyMDE2J1xufSx7XG4gICAgcGF0aCA6ICdXaW50ZXIyMDE3JyxcbiAgICBuYW1lIDogJ1dpbnRlciAyMDE3J1xufV07XG4iXX0=