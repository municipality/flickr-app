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
                        { path: '', component: adventures_component_1.Events }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJTSxnQkFBZ0IsRUFnQlQsaUJBQWlCLEVBRWpCLFVBQVU7Ozs7Ozs7Ozs7WUFsQmpCLGdCQUFnQixHQUFXO2dCQUM3QjtvQkFDSSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxpQ0FBVTtvQkFDekMsUUFBUSxFQUFHO3dCQUNQLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsNkJBQU0sRUFBQzt3QkFDcEMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2QkFBTSxFQUFDO3FCQUNoQztpQkFDSjthQU9KLENBQUM7WUFFVywrQkFBQSxpQkFBaUIsR0FBd0IscUJBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDO1lBRWpGLHdCQUFBLFVBQVUsR0FBYyxDQUFDO29CQUNsQyxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsSUFBSSxFQUFHLGFBQWE7aUJBQ3ZCLEVBQUM7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRSxXQUFXO2lCQUNwQixFQUFDO29CQUNFLElBQUksRUFBRyxZQUFZO29CQUNuQixJQUFJLEVBQUcsYUFBYTtpQkFDdkIsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtFdmVudHMsIEFkdmVudHVyZXN9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnQnO1xuXG5jb25zdCBhZHZlbnR1cmVzUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnYWR2ZW50dXJlcycsIGNvbXBvbmVudDogQWR2ZW50dXJlcyxcbiAgICAgICAgY2hpbGRyZW4gOiBbXG4gICAgICAgICAgICB7cGF0aDogJzpzZWFzb24nLCBjb21wb25lbnQ6IEV2ZW50c30sXG4gICAgICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogRXZlbnRzfVxuICAgICAgICBdXG4gICAgfVxuICAgIC8vIHtcbiAgICAvLyAgICAgcGF0aDogJ2FkdmVudHVyZXMvOnNlYXNvbicsIGNvbXBvbmVudDogQWR2ZW50dXJlcyxcbiAgICAvLyAgICAgY2hpbGRyZW4gOiBbXG4gICAgLy8gICAgICAgICB7cGF0aDogJycsIGNvbXBvbmVudDogRXZlbnRzLCBvdXRsZXQ6ICdldmVudHNPdXRsZXQnfVxuICAgIC8vICAgICBdXG4gICAgLy8gfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFkdmVudHVyZXNSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKGFkdmVudHVyZXNSb3V0ZXMpO1xuXG5leHBvcnQgY29uc3QgU2Vhc29uc1ZhciA6IE9iamVjdFtdID0gW3tcbiAgICBwYXRoIDogJ1N1bW1lcjIwMTYnLFxuICAgIG5hbWUgOiAnU3VtbWVyIDIwMTYnXG59LHtcbiAgICBwYXRoOiAnRmFsbDIwMTYnLFxuICAgIG5hbWU6ICdGYWxsIDIwMTYnXG59LHtcbiAgICBwYXRoIDogJ1dpbnRlcjIwMTcnLFxuICAgIG5hbWUgOiAnV2ludGVyIDIwMTcnXG59XTtcbiJdfQ==