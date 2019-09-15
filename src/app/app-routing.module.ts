import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { JournalComponent } from './journal/journal.component';
import { CommunityComponent } from './community/community.component';
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
    { path: "", redirectTo: "/(home:home//journal:journal//community:community//menu:menu)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "home" },
    { path: "intro", component: IntroComponent, outlet: "intro" },
    { path: "journal", component: JournalComponent, outlet: "journal" },
    { path: "community", component: CommunityComponent, outlet: "community" },
    { path: "menu", component: MenuComponent, outlet: 'menu'  }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
