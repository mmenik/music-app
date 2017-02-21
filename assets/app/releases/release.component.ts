import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Release } from './release.model';

@Component({
    selector: 'app-release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
    @Input()
    release: Release;

    @Output()
    editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit('New title');
    }
}