import { Component } from "@angular/core";

const COMPONENT_DEF: any = {
    moduleId: module.id,
    templateUrl: 'boot.component.html',
    styleUrls: ['boot.component.css'],
    selector: 'app-boot'
};

@Component(COMPONENT_DEF)
class BootComponent {
    constructor() {
        console.log('Boot Component Initialized!');
    }
}

export {
    BootComponent
};
