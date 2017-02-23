import { Label } from '../labels/label.model';

export class Release {
    constructor(public title: string, public catalog: string, public label: Label, public releaseId?: string) { }
}