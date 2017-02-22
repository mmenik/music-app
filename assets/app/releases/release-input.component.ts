import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Label } from '../labels/label.model';
import { Release } from './release.model';
import { ReleaseService } from './release.service';
import { LabelService } from '../labels/label.service';

@Component({
    selector: 'app-release-input',
    templateUrl: './release-input.component.html'
})
export class ReleaseInputComponent implements OnInit {
    release: Release;
    labels: Label[];

    constructor(private releaseService: ReleaseService, private labelService: LabelService) { }

    onSubmit(form: NgForm) {
        if (this.release) {
            this.release.title = form.value.title;
            this.release.catalog = form.value.catalog;
            this.release.labelId=form.value.label;
            this.releaseService.updateRelease(this.release)
                .subscribe(result => console.log(result));
            this.release = null;
        } else {            
            const release = new Release(form.value.title, form.value.catalog,form.value.label.name, form.value.label);
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
        this.labelService.getLabels()
            .subscribe(
            (labels: Label[]) => {
                this.labels = labels;
            });

        this.releaseService.releaseIsEdit.subscribe(
            (release: Release) => {
                this.release = release;
                console.log("EDIT");
                console.log(release);
            }
        );
    }
}