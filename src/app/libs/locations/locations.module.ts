import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LocationsRoutes } from "./locations.routes";
import { LocationsService } from "./locations.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LocationsContainer } from "./locations.container";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LocationComponent } from "./components/location/location.component";

const uiComps = [
    LocationComponent,
    LocationsContainer,
]

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        RouterModule.forChild(LocationsRoutes)
    ],
    providers: [LocationsService],
    declarations: [...uiComps],
    exports: [...uiComps]
})
export class LocationsModule { }