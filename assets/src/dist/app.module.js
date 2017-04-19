"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const static_1 = require("@angular/upgrade/static");
let AppModule = class AppModule {
    ngDoBootstrap() { }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            static_1.UpgradeModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {
    const upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, ['app'], { strictDi: true });
});
//# sourceMappingURL=app.module.js.map