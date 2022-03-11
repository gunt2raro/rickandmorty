import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader.component";

const uiComps = [
    LoaderComponent
]

@NgModule({
    imports: [CommonModule],
    declarations: [...uiComps],
    exports: [...uiComps]
})
export class LoaderModule {}