import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-footerlinks',
    templateUrl: 'footerlinks.component.html',
    styleUrls: ['footerlinks.component.css']
})
class FooterLinksComponent {
    constructor() {
        console.log('FooterLinks Component Initialized!');
    }
}

export {
    FooterLinksComponent
};
