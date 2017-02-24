import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import { ReleaseComponent } from './releases/release.component';
import { ReleaseListComponent } from './releases/release-list.component';
import { ReleaseInputComponent } from './releases/release-input.component';
import { ReleasesComponent } from './releases/releases.component';

import { ReleaseMDInputComponent } from './releases-model-driven/release-md-input.component';
import { ReleasesMDComponent } from './releases-model-driven/releases-md.component';

import { LabelComponent } from './labels/label.component';
import { LabelListComponent } from './labels/label-list.component';
import { LabelInputComponent } from './labels/label-input.component';
import { LabelsComponent } from './labels/labels.component';

import { HeaderComponent } from './header.component';

import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        ReleaseComponent,
        ReleaseListComponent,
        ReleaseInputComponent,
        ReleasesComponent,
        LabelComponent,
        LabelListComponent,
        LabelInputComponent,
        LabelsComponent,
        ReleasesMDComponent,
        ReleaseMDInputComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}