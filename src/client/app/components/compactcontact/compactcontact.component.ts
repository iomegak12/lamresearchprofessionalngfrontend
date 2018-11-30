import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-compactcontact',
    templateUrl: 'compactcontact.component.html',
    styleUrls: ['compactcontact.component.css']
})
class CompactContactComponent {
    constructor() {
        console.log('CompactContact Component Initialized!');
    }
}

export {
    CompactContactComponent
};
