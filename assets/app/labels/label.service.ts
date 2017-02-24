import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { Label } from './label.model';

@Injectable()
export class LabelService {
    private labels: Label[] = [];
    labelIsEdit = new EventEmitter<Label>();

    constructor(private http: Http) { }

    addLabel(label: Label) {
        const body = JSON.stringify(label);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/label', body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const label = new Label(result.obj.name, result.obj._id);
                this.labels.push(label);
                return label;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getLabels() {
        return this.http.get('http://localhost:3000/label')
            .map((response: Response) => {
                const labels = response.json().obj;
                let transformedLabels: Label[] = [];
                for (let label of labels) {
                    transformedLabels.push(new Label(label.name, label._id, label.releases));
                }
                this.labels = transformedLabels;
                console.log(transformedLabels);
                return transformedLabels;
            })
            .catch((error: Response) => Observable.throw(error.json()));;
    }

    editLabel(label: Label) {
        this.labelIsEdit.emit(label);
    }

    updateLabel(label: Label) {
        const body = JSON.stringify(label);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/label/' + label.labelId, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteLabel(label: Label) {
        this.labels.splice(this.labels.indexOf(label), 1);
        return this.http.delete('http://localhost:3000/label/' + label.labelId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}