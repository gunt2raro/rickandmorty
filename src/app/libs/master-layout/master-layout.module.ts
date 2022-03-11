import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SearchModule } from "../search/search.module";
import { LoaderModule } from "../loader/loader.module";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MasterLayoutComponent } from "./master-layout.component";
import { BreadCrumbModule } from "../breadcrumb/breadcrumb.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

const uiComps = [
    MasterLayoutComponent,
]

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        LoaderModule,
        SearchModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        BreadCrumbModule,
        MatToolbarModule,
    ],
    declarations: [
        ...uiComps,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        ...uiComps
    ]
})
export class MasterLayoutModule { }