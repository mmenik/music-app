import { Component } from '@angular/core';
import { ReleaseService } from './releases/release.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ReleaseService]
})
export class AppComponent {

}