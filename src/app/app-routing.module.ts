import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { JournalComponent } from './journal/journal.component';
import { CommunityComponent } from './community/community.component';
import { SettingsComponent } from './settings/settings.component';

export const COMPONENTS = [ HomeComponent, IntroComponent, JournalComponent, CommunityComponent, SettingsComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(home:home//journal:journal//community:community//settings:settings)", pathMatch: "full" },
    { path: "intro", component: IntroComponent, outlet: "home" },
    { path: "home", component: HomeComponent, outlet: "home" },    
    { path: "journal", component: JournalComponent, outlet: "journal" },    
    { path: "community", component: CommunityComponent, outlet: "community" },
    { path: "settings", component: SettingsComponent, outlet: "settings" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
