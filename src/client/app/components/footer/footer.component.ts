import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
class FooterComponent {
    constructor() {
        console.log('Footer Component Initialized!');
    }
}

export {
    FooterComponent
};
