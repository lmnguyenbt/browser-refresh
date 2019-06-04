import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';

// Service
import { BrowserService } from './services/browser.service';

@NgModule( {
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent
	],
	entryComponents: [],
	providers: [
		BrowserService,
	],
	bootstrap: [ AppComponent ]
} )
export class AppModule {
}
