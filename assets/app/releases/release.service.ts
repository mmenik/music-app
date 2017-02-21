import { Release } from './release.model';

export class ReleaseService {
    private releases: Release[] = [];

    addRelease(release: Release) {
        this.releases.push(release);
        console.log(release);
        console.log(this.releases);
    }

    getReleases() {
        return this.releases;
    }

    deleteRelease(release: Release) {
        this.releases.splice(this.releases.indexOf(release), 1);
    }

}