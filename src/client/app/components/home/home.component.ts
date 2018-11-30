import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
class HomeComponent {
    constructor() {
        console.log('Home Component Initialized!');
    }
}

export {
    HomeComponent
};
