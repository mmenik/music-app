import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'app-label-input',
    templateUrl: './label-input.component.html'
})
export class LabelInputComponent implements OnInit {
    form: FormGroup;

    constructor(private labelService: LabelService, private fb: FormBuilder) { }

    onSubmit() {
        console.log(this.form);
        const label = new Label(this.form.value.name);
        this.labelService.addLabel(label)
            .subscribe(
            data => console.log(data),
            error => console.log(error)
            );
        this.form.reset();
    }

    onClear() {
        this.form.reset();
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: ['', <any>Validators.required]
        });
        // this.form = new FormGroup({
        //     name: new FormControl(null, Validators.required)
        // });

        this.labelService.labelIsEdit.subscribe(
            (label: Label) => {
                this.form.patchValue({ name: label.name, id:label.labelId });
                console.log(this.form);
                console.log("OnInit")
                console.log(label);
            }
        );
    }
}