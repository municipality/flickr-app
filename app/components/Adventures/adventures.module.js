System.register(['@angular/core', '@angular/common', '@angular/forms', './adventures.routing', './adventures.component', './adventures.service'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, adventures_routing_1, adventures_component_1, adventures_service_1;
    var AdventuresModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (adventures_routing_1_1) {
                adventures_routing_1 = adventures_routing_1_1;
            },
            function (adventures_component_1_1) {
                adventures_component_1 = adventures_component_1_1;
            },
            function (adventures_service_1_1) {
                adventures_service_1 = adventures_service_1_1;
            }],
        execute: function() {
            AdventuresModule = (function () {
                function AdventuresModule() {
                }
                AdventuresModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            adventures_routing_1.adventuresRouting,
                            common_1.CommonModule,
                            forms_1.FormsModule
                        ],
                        declarations: [
                            adventures_component_1.Events,
                            adventures_component_1.Adventures,
                            adventures_component_1.PhotoGallery
                        ],
                        providers: [
                            adventures_service_1.AdventuresService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdventuresModule);
                return AdventuresModule;
            }());
            exports_1("AdventuresModule", AdventuresModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZHZlbnR1cmVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFBQTtnQkFBK0IsQ0FBQztnQkFmaEM7b0JBQUMsZUFBUSxDQUFFO3dCQUNQLE9BQU8sRUFBRTs0QkFDTCxzQ0FBaUI7NEJBQ2pCLHFCQUFZOzRCQUNaLG1CQUFXO3lCQUNkO3dCQUNELFlBQVksRUFBRTs0QkFDViw2QkFBTTs0QkFDTixpQ0FBVTs0QkFDVixtQ0FBWTt5QkFDZjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1Asc0NBQWlCO3lCQUNwQjtxQkFDSixDQUFDOztvQ0FBQTtnQkFDNkIsdUJBQUM7WUFBRCxDQUFDLEFBQWhDLElBQWdDO1lBQWhDLCtDQUFnQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7YWR2ZW50dXJlc1JvdXRpbmd9IGZyb20gJy4vYWR2ZW50dXJlcy5yb3V0aW5nJztcbmltcG9ydCB7RXZlbnRzLCBBZHZlbnR1cmVzLCBQaG90b0dhbGxlcnl9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtBZHZlbnR1cmVzU2VydmljZX0gZnJvbSAnLi9hZHZlbnR1cmVzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUgKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIGFkdmVudHVyZXNSb3V0aW5nLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRXZlbnRzLFxuICAgICAgICBBZHZlbnR1cmVzLFxuICAgICAgICBQaG90b0dhbGxlcnlcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBZHZlbnR1cmVzU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQWR2ZW50dXJlc01vZHVsZSB7fVxuIl19