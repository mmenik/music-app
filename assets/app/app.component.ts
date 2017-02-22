import { Component } from '@angular/core';
import { ReleaseService } from './releases/release.service';
import { LabelService } from './labels/label.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ReleaseService, LabelService]
})
export class AppComponent {

}