import { Component, Input } from "@angular/core";
import { Customer } from "../../models/crmsystem/customer";

@Component({
    moduleId: module.id,
    selector: 'crmsystem-customerdetailviewer',
    templateUrl: 'customerdetailviewer.component.html',
    styleUrls: ['customerdetailviewer.component.css']
})
class CustomerDetailViewerComponent {
    @Input() public customerDetail: Customer;
    
    constructor() {
        console.log('CustomerDetailViewer Component Initialized!');
    }
}

export {
    CustomerDetailViewerComponent
};
