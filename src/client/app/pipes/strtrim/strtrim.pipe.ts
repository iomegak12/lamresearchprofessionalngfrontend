import { PipeTransform, Pipe } from "@angular/core";

const DEFAULT_MAX_LENGTH = 200;
const START_POS = 0;

@Pipe({
    name: 'strtrim'
})
class StringTrimPipe implements PipeTransform {
    transform(bindingValue: any, thresholdLength: number = DEFAULT_MAX_LENGTH): any {
        let trimmedValue = '';

        if (bindingValue !== null) {
            if (bindingValue.length >= thresholdLength) {
                trimmedValue = `${bindingValue.substr(START_POS, thresholdLength)} ...`;
            } else {
                trimmedValue = bindingValue;
            }
        }

        return trimmedValue;
    }
}

export {
    StringTrimPipe
};
