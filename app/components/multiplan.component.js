"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var multiplan_service_1 = require("../services/multiplan.service");
var MultiPlanComponent = (function () {
    function MultiPlanComponent(multiplanservice) {
        this.multiplanservice = multiplanservice;
        this.multiplans = [];
        this.multiplanservice.getCurrentTime().subscribe(function (posts) {
            console.log(posts);
        });
    }
    MultiPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('B ngssssssssssssOnInit');
        this.multiplanservice.getMultiplan()
            .subscribe(function (resMultiplanData) { return _this.multiplans = resMultiplanData; });
        console.log('B ngOnInit');
        //  this.multiplan=  this.multiplanservice.getMultiplan();
    };
    return MultiPlanComponent;
}());
MultiPlanComponent = __decorate([
    core_1.Component({
        selector: 'multiplans',
        template: "<h1>Multiplan</h1><ul *ngFor=\"let multiplan of multiplans\"><li>{{multiplan.title}}</li></ul>"
    }),
    __metadata("design:paramtypes", [multiplan_service_1.Multiplanservice])
], MultiPlanComponent);
exports.MultiPlanComponent = MultiPlanComponent;
//# sourceMappingURL=multiplan.component.js.map