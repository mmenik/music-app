import { Component, Input } from '@angular/core';
import { Label } from './label.model';
import { LabelService } from './label.service';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.css']
})
export class LabelComponent {
    @Input() label: Label;

    constructor(private labelService:LabelService){}

    onEdit(){
        this.labelService.editLabel(this.label);        
    }

    onDelete(){
        this.labelService.deleteLabel(this.label)
        .subscribe(result=>console.log(result));
    }
}