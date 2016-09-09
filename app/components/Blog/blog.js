System.register(['@angular/core', './blog.service'], function(exports_1, context_1) {
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
    var core_1, blog_service_1;
    var Blog;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            Blog = (function () {
                function Blog(blogService) {
                    var _this = this;
                    this.blogService = blogService;
                    this.blogService.getEntries()
                        .subscribe(function (response) {
                        response.sort(function (a, b) {
                        });
                        _this.entries = response;
                    });
                }
                Blog.prototype.ngAfterViewInit = function () {
                };
                Blog = __decorate([
                    core_1.Component({
                        providers: [blog_service_1.BlogService],
                        template: "\n        <div class=\"blog fadeIn\">\n            <h1 class=\"header\" align=\"center\">B Log</h1>\n            <div class=\"entry\" *ngFor=\"let entry of entries\">\n                <div class=\"entry-header\">\n                    <h3 class=\"title\">{{entry.title}}</h3>\n                    <h3 class=\"date\">{{entry.date}}</h3>\n                </div>\n                <p [innerHTML]='entry.entry' class=\"words\"></p>\n            </div>\n        </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService])
                ], Blog);
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBR0ksY0FBcUIsV0FBeUI7b0JBSGxELGlCQWlCQztvQkFkd0IsZ0JBQVcsR0FBWCxXQUFXLENBQWM7b0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO3lCQUM1QixTQUFTLENBQUUsVUFBQyxRQUFRO3dCQUVqQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7d0JBRW5CLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELDhCQUFlLEdBQWY7Z0JBRUEsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixTQUFTLEVBQUcsQ0FBQywwQkFBVyxDQUFDO3dCQUN6QixRQUFRLEVBQUcsdWRBWVY7cUJBRUosQ0FBQzs7d0JBQUE7Z0JBbUJGLFdBQUM7WUFBRCxDQUFDLEFBakJELElBaUJDO1lBakJELHVCQWlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCbG9nU2VydmljZX0gZnJvbSAnLi9ibG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgcHJvdmlkZXJzIDogW0Jsb2dTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJsb2cgZmFkZUluXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJcIiBhbGlnbj1cImNlbnRlclwiPkIgTG9nPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnRyeVwiICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBlbnRyaWVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPnt7ZW50cnkudGl0bGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRhdGVcIj57e2VudHJ5LmRhdGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF09J2VudHJ5LmVudHJ5JyBjbGFzcz1cIndvcmRzXCI+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQmxvZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIGVudHJpZXM7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBibG9nU2VydmljZSA6IEJsb2dTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0RW50cmllcygpXG4gICAgICAgIC5zdWJzY3JpYmUoIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXNwb25zZS5zb3J0KChhLCBiKSA9PiB7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzID0gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG5cbiAgICB9XG59XG4iXX0=