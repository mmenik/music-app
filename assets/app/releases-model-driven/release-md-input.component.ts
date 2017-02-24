import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Release } from '../releases/release.model';
import { ReleaseService } from '../releases/release.service';

import { Label } from '../labels/label.model';
import { LabelService } from '../labels/label.service';

@Component({
    selector: 'app-release-md-input',
    templateUrl: './release-md-input.component.html'
})
export class ReleaseMDInputComponent implements OnInit {
    public form: FormGroup;
    public selectedRelease: Release;
    public selectedLabel: Label;
    public labels: Label[];

    constructor(private releaseService: ReleaseService, private labelService: LabelService, private fb: FormBuilder) { }

    onSubmit() {
        if (this.selectedRelease) {
            this.selectedRelease.title = this.form.value.title;
            this.selectedRelease.catalog = this.form.value.catalog;
            this.selectedRelease.label = this.form.value.label;            
            this.releaseService.updateRelease(this.selectedRelease)
                .subscribe(result => console.log(result));
            this.selectedRelease = null;
        } else {
            const release = new Release(this.form.value.title, this.form.value.catalog, this.form.value.label);
            this.releaseService.addRelease(release).subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        }
        this.form.reset();
    }

    onClear() {
        this.selectedRelease = null;
        this.form.reset();
    }

    ngOnInit() {
        this.form = this.fb.group({
            title: ['', <any>Validators.required],
            label: ['', <any>Validators.required],
            catalog: ['', <any>Validators.required]
        });

        this.labelService.getLabels()
            .subscribe(
            (labels: Label[]) => {
                this.labels = labels;
            });

        this.releaseService.releaseIsEdit.subscribe(
            (release: Release) => {
                this.selectedRelease = release;
                this.form.patchValue({
                    title: this.selectedRelease.title,
                    label: this.selectedRelease.label,
                    catalog: this.selectedRelease.catalog
                });
                this.selectedLabel = this.labels.find(label => label.labelId === this.selectedRelease.label.labelId);
            });
    }
}