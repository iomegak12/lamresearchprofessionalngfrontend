import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { BootComponent } from "../../components/boot/boot.component";
import { SharedModule } from "../shared/shared.module";
import { CrmSystemModule } from "../crmsystem/crmsystem.module";

const MODULE_DEF: any = {
    imports: [
        BrowserModule,
        SharedModule,
        CrmSystemModule
    ],
    exports: [],
    declarations: [BootComponent],
    bootstrap: [BootComponent]
};

@NgModule(MODULE_DEF)
class AppModule {
    constructor() {
        console.info('Application Module Initialized!');
    }
}

export {
    AppModule
};
