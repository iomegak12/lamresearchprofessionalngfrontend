import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-footercontent',
    templateUrl: 'footercontent.component.html',
    styleUrls: ['footercontent.component.css']
})
class FooterContentComponent {
    constructor() {
        console.log('FooterContent Component Initialized!');
    }
}

export {
    FooterContentComponent
};
