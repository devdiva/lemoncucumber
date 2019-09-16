import { Component } from "@angular/core";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    
    onSelectedIndexChanged(args: SelectedIndexChangedEventData): void {
        console.log(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`);
    }
}
