import { NgModule } from '@angular/core';
import { InspectorComponent } from './inspector.component';

import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		InspectorComponent
	],
	exports: [
		InspectorComponent
	]
})

export class InspectorModule { }
