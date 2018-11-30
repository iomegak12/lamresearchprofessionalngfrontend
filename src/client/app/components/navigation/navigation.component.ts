import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})
class NavigationComponent {
    constructor() {
        console.log('Navigation Component Initialized!');
    }
}

export {
    NavigationComponent
};
