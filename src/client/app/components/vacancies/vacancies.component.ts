import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'shared-vacancies',
    templateUrl: 'vacancies.component.html',
    styleUrls: ['vacancies.component.css']
})
class VacanciesComponent {
    constructor() {
        console.log('Vacancies Component Initialized!');
    }
}

export {
    VacanciesComponent
};
