import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Release } from './release.model';
import { ReleaseService } from './release.service';

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

constructor(private releaseService:ReleaseService){}

    onEdit() {
        this.editClicked.emit('New title');
    }

    onDelete(){
this.releaseService.deleteRelease(this.release);
    }
}