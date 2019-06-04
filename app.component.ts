import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Service
import { BrowserService } from './services/browser.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	browserRefresh: boolean = false;

	constructor( private titleService: Title,
	            private router: Router,
	            private activatedRoute: ActivatedRoute,
	            private browserService: BrowserService) {

		this.subscription = router.events.subscribe((event) => {
			if ( event instanceof NavigationStart ) {
				this.browserRefresh = !router.navigated;
				this.browserService.boolBrowser = this.browserRefresh;
			}
		});
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
