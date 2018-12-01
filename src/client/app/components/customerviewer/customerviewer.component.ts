import { Component, Input } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    selector: 'crmsystem-customerviewer',
    templateUrl: 'customerviewer.component.html',
    styleUrls: ['customerviewer.component.css']
})
class CustomerViewerComponent {
    @Input() public customerInfo: Customer;
    
    constructor() {
        console.log('CustomerViewer Component Initialized!');
    }
}

export {
    CustomerViewerComponent
};
