import { NgModule } from "@angular/core";
import { LayoutComponent } from "../../components/layout/layout.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { FooterLinksComponent } from "../../components/footerlinks/footerlinks.component";
import { FooterContentComponent } from "../../components/footercontent/footercontent.component";
import { CompactContactComponent } from "../../components/compactcontact/compactcontact.component";
import { MissionComponent } from "../../components/mission/mission.component";
import { SocialComponent } from "../../components/social/social.component";
import { HomeComponent } from "../../components/home/home.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { ReasonsComponent } from "../../components/reasons/reasons.component";
import { AboutUsComponent } from "../../components/aboutus/aboutus.component";
import { VacanciesComponent } from "../../components/vacancies/vacancies.component";
import { sharedRouteDefinitions } from "../../routing/shared/shared.routes";
import { SecurityModule } from "../security/security.module";
import { CommonModule } from "@angular/common";

const MODULE_DEF: any = {
    imports: [
        CommonModule,
        sharedRouteDefinitions,
        SecurityModule
    ],
    declarations: [
        HeaderComponent, NavigationComponent, FooterComponent,
        FooterLinksComponent, FooterContentComponent,
        CompactContactComponent, MissionComponent, SocialComponent,
        LayoutComponent,
        HomeComponent, FaqComponent, ReasonsComponent,
        AboutUsComponent, VacanciesComponent
    ],
    exports: [
        LayoutComponent
    ]
};

@NgModule(MODULE_DEF)
class SharedModule {
    constructor() {
        console.log('Shared Module Initialized!');
    }
}

export {
    SharedModule
};
