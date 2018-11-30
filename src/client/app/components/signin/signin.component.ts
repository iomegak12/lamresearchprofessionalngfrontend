import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
class SigninComponent {
    constructor() {
        console.log('Signin Component Initialized!');
    }
}

export {
    SigninComponent
};
