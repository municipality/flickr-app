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
                { path: 'adventures', component: adventures_component_1.Adventure },
                { path: 'adventures/:season', component: adventures_component_1.Events }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWR2ZW50dXJlcy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJTSxnQkFBZ0IsRUFLVCxpQkFBaUIsRUFFakIsVUFBVTs7Ozs7Ozs7OztZQVBqQixnQkFBZ0IsR0FBVztnQkFDL0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxnQ0FBUyxFQUFDO2dCQUMzQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsNkJBQU0sRUFBQzthQUNqRCxDQUFDO1lBRVcsK0JBQUEsaUJBQWlCLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUVqRix3QkFBQSxVQUFVLEdBQWMsQ0FBQztvQkFDbEMsSUFBSSxFQUFHLFlBQVk7b0JBQ25CLElBQUksRUFBRyxhQUFhO2lCQUN2QixFQUFDO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsV0FBVztpQkFDcEIsRUFBQztvQkFDRSxJQUFJLEVBQUcsWUFBWTtvQkFDbkIsSUFBSSxFQUFHLGFBQWE7aUJBQ3ZCLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RXZlbnRzLCBBZHZlbnR1cmV9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnQnO1xuXG5jb25zdCBhZHZlbnR1cmVzUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2FkdmVudHVyZXMnLCBjb21wb25lbnQ6IEFkdmVudHVyZX0sXG4gIHsgcGF0aDogJ2FkdmVudHVyZXMvOnNlYXNvbicsIGNvbXBvbmVudDogRXZlbnRzfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFkdmVudHVyZXNSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKGFkdmVudHVyZXNSb3V0ZXMpO1xuXG5leHBvcnQgY29uc3QgU2Vhc29uc1ZhciA6IE9iamVjdFtdID0gW3tcbiAgICBwYXRoIDogJ1N1bW1lcjIwMTYnLFxuICAgIG5hbWUgOiAnU3VtbWVyIDIwMTYnXG59LHtcbiAgICBwYXRoOiAnRmFsbDIwMTYnLFxuICAgIG5hbWU6ICdGYWxsIDIwMTYnXG59LHtcbiAgICBwYXRoIDogJ1dpbnRlcjIwMTcnLFxuICAgIG5hbWUgOiAnV2ludGVyIDIwMTcnXG59XTtcbiJdfQ==