import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'app-label-input',
    templateUrl: './label-input.component.html'
})
export class LabelInputComponent implements OnInit {
    label: Label;
    form: FormGroup;

    constructor(private labelService: LabelService, private fb: FormBuilder) { }

    onSubmit() {
        if (this.label) {
            this.label.name =this.form.value.name;            
            this.labelService.updateLabel(this.label)
                .subscribe(result => console.log(result));                
            this.label = null;            
        } else {
            const label = new Label(this.form.value.name);
            this.labelService.addLabel(label)
                .subscribe(
                data => console.log(data),
                error => console.log(error)
                );
        }
        this.form.reset();
    }

    onClear() {
        this.label = null;
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
                this.label = label;    
                this.form.patchValue({ name: this.label.name });                              
            }
        );
    }
}