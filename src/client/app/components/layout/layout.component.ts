import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.css']
})
class LayoutComponent {
    constructor() {
        console.log('Layout Component Initialized!');
    }
}

export {
    LayoutComponent
};
