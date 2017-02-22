import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Release } from './release.model';
import { ReleaseService } from './release.service';

@Component({
    selector: 'app-release-input',
    templateUrl: './release-input.component.html'
})
export class ReleaseInputComponent implements OnInit {
    release: Release;

    constructor(private releaseService: ReleaseService) { }

    onSubmit(form: NgForm) {
        if (this.release) {
            this.release.title = form.value.title;
            this.release.catalog = form.value.catalog;
            this.releaseService.updateRelease(this.release)
                .subscribe(result => console.log(result));
            this.release = null;
        } else {
            const release = new Release(form.value.title, form.value.catalog, 'LAB');
            this.releaseService.addRelease(release)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.release = null;
        form.resetForm();
    }

    ngOnInit() {
        this.releaseService.releaseIsEdit.subscribe(
            (release: Release) => {
                this.release = release;
                console.log(release);
            }
        );
    }
}