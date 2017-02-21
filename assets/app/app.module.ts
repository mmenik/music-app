import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { ReleaseComponent } from './releases/release.component';
import { ReleaseListComponent } from './releases/release-list.component';
import { ReleaseInputComponent } from './releases/release-input.component';

@NgModule({
    declarations: [
        AppComponent,
        ReleaseComponent,
        ReleaseListComponent,
        ReleaseInputComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}