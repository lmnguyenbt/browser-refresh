import { Injectable } from '@angular/core';

@Injectable()
export class BrowserService {
    public browserRefresh: boolean = false;

    constructor() {}

    get boolBrowser() {
        return this.browserRefresh;
    }

    set boolBrowser(newValue: boolean) {
        this.browserRefresh = newValue;
    }
}
