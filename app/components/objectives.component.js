System.register(['@angular/core', '../scrolling.service', '../mobile.service'], function(exports_1, context_1) {
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
    var core_1, scrolling_service_1, mobile_service_1;
    var Objectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Objectives = (function () {
                function Objectives(scrollingService, mobileService) {
                    this.scrollingService = scrollingService;
                    this.mobileService = mobileService;
                    this.loaded = false;
                    this.loadedCount = 0;
                    this.imageCount = 3;
                }
                Objectives.prototype.ngAfterViewInit = function () {
                    if (this.mobileService.isDesktop()) {
                        if (this.container == null) {
                            document.addEventListener("scroll", function func(e) {
                                this.panels = document.getElementsByClassName("outro-panel");
                                var panel = this.panels[this.panels.length / 2];
                                this.container = document.getElementsByClassName("outro-container")[0];
                                if (this.container && !this.container.className.includes("desktop")) {
                                    this.container.className += " desktop";
                                }
                                if (this.container && panel && panel.getBoundingClientRect().top > 0) {
                                    this.container.style["background-image"] = "url(images/outro1.jpg)";
                                }
                                else if (this.container) {
                                    this.container.style["background-image"] = "url(images/outro2.jpg)";
                                }
                            });
                        }
                    }
                };
                Objectives = __decorate([
                    core_1.Component({
                        selector: 'objectives',
                        providers: [scrolling_service_1.ScrollingService, mobile_service_1.MobileService],
                        template: "\n        <div class=\"outro-container\">\n\n            <div class=\"title\">\n                <h1 align=\"center\" class=\"blue\">Objectives</h1>\n            </div>\n            <div class=\"outro-panel first\">\n\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h1>Influence</h1>\n                        <p>Positively influence my surroundings and peers</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h1>Connect</h1>\n                        <p>Unite others through positive attitude and friendly vibes</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h1>Inspire</h1>\n                        <p>Be a role model amongst peers and inspire others</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h1>Change the World</h1>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService, mobile_service_1.MobileService])
                ], Objectives);
                return Objectives;
            }());
            exports_1("Objectives", Objectives);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0aXZlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvYmplY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlEQTtnQkFXSSxvQkFBcUIsZ0JBQW1DLEVBQ25DLGFBQTZCO29CQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO29CQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7b0JBVmxELFdBQU0sR0FBRyxLQUFLLENBQUM7b0JBRWYsZ0JBQVcsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBU2YsQ0FBQztnQkFFRCxvQ0FBZSxHQUFmO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDO2dDQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQ0FDN0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FHOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FHdkUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQztnQ0FDM0MsQ0FBQztnQ0FFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQztnQ0FDeEUsQ0FBQztnQ0FDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0NBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsd0JBQXdCLENBQUM7Z0NBQ3hFLENBQUM7NEJBR0wsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFFTCxDQUFDO2dCQUVMLENBQUM7Z0JBekZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFlBQVk7d0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixFQUFFLDhCQUFhLENBQUM7d0JBQzVDLFFBQVEsRUFBRyx3NENBdUNWO3FCQUNKLENBQUM7OzhCQUFBO2dCQWdERixpQkFBQztZQUFELENBQUMsQUE5Q0QsSUE4Q0M7WUE5Q0QsbUNBOENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4uL3Njcm9sbGluZy5zZXJ2aWNlJztcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi4vbW9iaWxlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdvYmplY3RpdmVzJyxcbiAgICBwcm92aWRlcnM6IFtTY3JvbGxpbmdTZXJ2aWNlLCBNb2JpbGVTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDEgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImJsdWVcIj5PYmplY3RpdmVzPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIGZpcnN0XCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5JbmZsdWVuY2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG9zaXRpdmVseSBpbmZsdWVuY2UgbXkgc3Vycm91bmRpbmdzIGFuZCBwZWVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q29ubmVjdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Vbml0ZSBvdGhlcnMgdGhyb3VnaCBwb3NpdGl2ZSBhdHRpdHVkZSBhbmQgZnJpZW5kbHkgdmliZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5JbnNwaXJlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJlIGEgcm9sZSBtb2RlbCBhbW9uZ3N0IHBlZXJzIGFuZCBpbnNwaXJlIG90aGVyczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5DaGFuZ2UgdGhlIFdvcmxkPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIE9iamVjdGl2ZXMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBvdXRyb0ltYWdlO1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgbG9hZGVkQ291bnQgPSAwO1xuICAgIGltYWdlQ291bnQgPSAzO1xuICAgIGNvbnRhaW5lcjtcbiAgICBvdXRyb0ltYWdlMTtcbiAgICBvdXRyb0ltYWdlMjtcbiAgICBtb29uO1xuICAgIHBhbmVscztcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlU2VydmljZS5pc0Rlc2t0b3AoKSkge1xuICAgICAgICAgICAgaWYodGhpcy5jb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gZnVuYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLXBhbmVsXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFuZWwgPSB0aGlzLnBhbmVsc1t0aGlzLnBhbmVscy5sZW5ndGgvMl07XG5cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XG5cblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnRhaW5lciAmJiAhdGhpcy5jb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZGVza3RvcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lICs9IFwiIGRlc2t0b3BcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiBwYW5lbCAmJiBwYW5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInVybChpbWFnZXMvb3V0cm8xLmpwZylcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVtcImJhY2tncm91bmQtaW1hZ2VcIl0gPSBcInVybChpbWFnZXMvb3V0cm8yLmpwZylcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==