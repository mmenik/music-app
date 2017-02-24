import { Release } from '../releases/release.model';

export class Label {
    constructor(public name: string, public labelId?: string, public releases?: Release) { }
}