import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
class HeaderComponent {
    constructor() {
        console.log('Header Component Initialized!');
    }
}

export {
    HeaderComponent
};
