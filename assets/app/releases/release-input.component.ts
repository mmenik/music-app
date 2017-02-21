import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Release } from './release.model';
import { ReleaseService } from './release.service';

@Component({
    selector: 'app-release-input',
    templateUrl: './release-input.component.html'
})
export class ReleaseInputComponent {

    constructor(private releaseService: ReleaseService) { }

    onSubmit(form: NgForm) {        
        const release = new Release(form.value.title, 'CAT', 'LAB');
        this.releaseService.addRelease(release);
        form.resetForm();
    }
}