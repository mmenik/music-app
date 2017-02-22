import { Component, OnInit } from '@angular/core';

import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'app-label-list',
    templateUrl: './label-list.component.html'
})
export class LabelListComponent implements OnInit {

    constructor(private labelService: LabelService) { }

    labels: Label[];

    ngOnInit() {
        this.labelService.getLabels()
            .subscribe(
            (labels: Label[]) => {
                this.labels = labels;                
            });                        
    }
}