import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BreadCrumbComponent } from "./breadcrumb.component";

const uiComps = [
    BreadCrumbComponent
]

@NgModule({
    imports: [
        CommonModule, 
        RouterModule, 
        MatButtonModule, 
        MatIconModule,
    ],
    providers: [],
    declarations: [...uiComps],
    exports: [...uiComps],
})
export class BreadCrumbModule { }