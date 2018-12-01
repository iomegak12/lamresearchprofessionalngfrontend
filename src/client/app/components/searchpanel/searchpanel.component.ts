import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'crmsystem-searchpanel',
    templateUrl: 'searchpanel.component.html',
    styleUrls: ['searchpanel.component.css']
})
class SearchPanelComponent {

    @Input() public searchString: string;

    constructor() {
        console.log('SearchPanel Component Initialized!');
    }
}

export {
    SearchPanelComponent
};
