import { PipeTransform, Pipe } from "@angular/core";

const MIN_INDEX = 0;

@Pipe({
    name: 'where'
})
class WherePipe implements PipeTransform {
    transform(bindingValues: any[], searchColumn: string, searchValue: string): any[] {
        let filteredResults: any[] = [];

        let validation = bindingValues !== null &&
            searchColumn !== null && (searchValue != null && searchValue !== '');

        if (!validation) {
            filteredResults = bindingValues;
        } else {
            for (let bindingValue of bindingValues) {
                let columnValue = bindingValue[searchColumn];

                if (columnValue.toString().indexOf(searchValue) >= MIN_INDEX) {
                    filteredResults.push(bindingValue);
                }
            }
        }

        return filteredResults;
    }
}

export {
    WherePipe
};
