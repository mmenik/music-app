import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Release } from './release.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ReleaseService {
    private releases: Release[] = [];

    constructor(private http: Http) { }

    addRelease(release: Release) {
        this.releases.push(release);
        const body = JSON.stringify(release);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/release', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getReleases() {
        return this.releases;
    }

    deleteRelease(release: Release) {
        this.releases.splice(this.releases.indexOf(release), 1);
    }

}