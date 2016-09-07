import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { IndexComponent } from './index.component';

import { FilesTreeModule } from './../../components/project/files-tree/files-tree.module';
import { InspectorModule } from './../../components/inspector/inspector.module';

@NgModule({
	imports: [
		BrowserModule,
		FilesTreeModule,
		InspectorModule
	],
	declarations: [
		IndexComponent
	],
	bootstrap: [ IndexComponent ]
})
export class IndexModule { }
