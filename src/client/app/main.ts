import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './modules/app/app.module';

let buildType = String('<%= BUILD_TYPE %>');

if (buildType === 'prod') {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
        console.log('Application Initialized!');
    })
    .catch(error => {
        console.log("There's a problem in initializing the application!");
    });
