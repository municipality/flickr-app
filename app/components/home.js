System.register(['@angular/core', './objectives.component'], function(exports_1, context_1) {
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
    var core_1, objectives_component_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (objectives_component_1_1) {
                objectives_component_1 = objectives_component_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home.prototype.ngAfterViewInit = function () {
                    var me = this;
                    document.addEventListener('scroll', function (e) {
                        var scrollTop = window.pageYOffset;
                        me.image.nativeElement.style["background-position"] = "0 " + (-scrollTop * .1) + "px";
                    });
                };
                __decorate([
                    core_1.ViewChild('image'), 
                    __metadata('design:type', Object)
                ], Home.prototype, "image", void 0);
                Home = __decorate([
                    core_1.Component({
                        selector: 'home',
                        directives: [objectives_component_1.Objectives],
                        template: "\n        <div #image class=\"home fadeIn\">\n            <div class=\"icon-container\">\n                <img class=\"icon\" src=\"images/brian-icon-2.png\">\n            </div>\n            <div class=\"titles-container\">\n                <div class=\"titles\">\n                    <h1 class=\"blue\">Software Engineer</h1>\n                    <h1 class=\"white\">Designer</h1>\n                    <h1 class=\"blue\">Dreamer</h1>\n                </div>\n            </div>\n        </div>\n        <objectives></objectives>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            }());
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBR0k7Z0JBRUEsQ0FBQztnQkFFRCw4QkFBZSxHQUFmO29CQUNJLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVMsQ0FBQzt3QkFDdEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOzttREFBQTtnQkFyQnZCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLGlDQUFVLENBQUM7d0JBQ3hCLFFBQVEsRUFBRywwaEJBY1Y7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBZ0JGLFdBQUM7WUFBRCxDQUFDLEFBZEQsSUFjQztZQWRELHVCQWNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JqZWN0aXZlc30gZnJvbSAnLi9vYmplY3RpdmVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIGRpcmVjdGl2ZXM6IFtPYmplY3RpdmVzXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAjaW1hZ2UgY2xhc3M9XCJob21lIGZhZGVJblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJpbWFnZXMvYnJpYW4taWNvbi0yLnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiYmx1ZVwiPlNvZnR3YXJlIEVuZ2luZWVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwid2hpdGVcIj5EZXNpZ25lcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImJsdWVcIj5EcmVhbWVyPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG9iamVjdGl2ZXM+PC9vYmplY3RpdmVzPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnaW1hZ2UnKSBpbWFnZTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICAgICAgbWUuaW1hZ2UubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtcG9zaXRpb25cIl0gPSBcIjAgXCIgKyAoLXNjcm9sbFRvcCAqIC4xKSArIFwicHhcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19