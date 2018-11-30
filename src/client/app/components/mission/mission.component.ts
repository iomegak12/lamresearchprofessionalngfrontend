import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-mission',
    templateUrl: 'mission.component.html',
    styleUrls: ['mission.component.css']
})
class MissionComponent {
    constructor() {
        console.log('Mission Component Initialized!');
    }
}

export {
    MissionComponent
};
