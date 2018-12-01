import { PipeTransform, Pipe } from "@angular/core";

const BASE_IMAGES_FOLDER = '/assets/images/people';
const DEFAULT_IMG_FORMAT = 'jpg';

@Pipe({
    name: 'photourl'
})
class PhotoUrlPipe implements PipeTransform {
    transform(bindingValue: any, imageFormat: string = DEFAULT_IMG_FORMAT): any {
        let imageUrl = '';

        if (bindingValue !== null) {
            imageUrl = `${BASE_IMAGES_FOLDER}/Customer${bindingValue}.${imageFormat}`;
        }

        return imageUrl;
    }
}

export {
    PhotoUrlPipe
};
