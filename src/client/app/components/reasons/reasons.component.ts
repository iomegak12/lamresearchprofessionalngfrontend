import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-reasons',
    templateUrl: 'reasons.component.html',
    styleUrls: ['reasons.component.css']
})
class ReasonsComponent {
    constructor() {
        console.log('Reasons Component Initialized!');
    }
}

export {
    ReasonsComponent
};
