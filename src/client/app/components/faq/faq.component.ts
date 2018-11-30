import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-faq',
    templateUrl: 'faq.component.html',
    styleUrls: ['faq.component.css']
})
class FaqComponent {
    constructor() {
        console.log('Faq Component Initialized!');
    }
}

export {
    FaqComponent
};
