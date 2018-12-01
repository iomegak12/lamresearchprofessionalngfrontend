import { PipeTransform, Pipe } from "@angular/core";

const SYMBOLS = {
    tick: '\u2713',
    cross: '\u2718'
}

@Pipe({
    name: 'symbol'
})
class SymbolPipe implements PipeTransform {
    transform(bindingValue: any): string {
        return bindingValue !== null &&
            bindingValue === true ? SYMBOLS.tick : SYMBOLS.cross;
    }
}

export {
    SymbolPipe
};
