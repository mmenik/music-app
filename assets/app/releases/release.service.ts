import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx'

import { Release } from './release.model';

@Injectable()
export class ReleaseService {
    private releases: Release[] = [];
    releaseIsEdit = new EventEmitter<Release>();

    constructor(private http: Http) { }

    addRelease(release: Release) {
        const body = JSON.stringify(release);

        console.log("BODY");
        console.log(body);

        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post('http://localhost:3000/release', body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const release = new Release(result.obj.title, result.obj.catalog, result.obj.label, result.obj._id);
                this.releases.push(release);
                return release;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getReleases() {
        return this.http.get('http://localhost:3000/release')
            .map((response: Response) => {
                const releases = response.json().obj;
                let transformedReleases: Release[] = [];
                for (let release of releases) {
                    transformedReleases.push(new Release(release.title, release.catalog, release.label, release._id));
                }
                this.releases = transformedReleases;
                return transformedReleases;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editRelease(release: Release) {
        this.releaseIsEdit.emit(release);
    }

    updateRelease(release: Release) {
        const body = JSON.stringify(release);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/release/' + release.releaseId, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteRelease(release: Release) {
        this.releases.splice(this.releases.indexOf(release), 1);
        return this.http.delete('http://localhost:3000/release/' + release.releaseId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}