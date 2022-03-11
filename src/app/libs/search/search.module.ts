import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchContainer } from "./search.container";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const uiComps = [
    SearchContainer
]

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
    declarations: [...uiComps],
    exports: [...uiComps]
})
export class SearchModule { }