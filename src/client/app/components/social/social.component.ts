import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-social',
    templateUrl: 'social.component.html',
    styleUrls: ['social.component.css']
})
class SocialComponent {
    constructor() {
        console.log('Social Component Initialized!');
    }
}

export {
    SocialComponent
};
