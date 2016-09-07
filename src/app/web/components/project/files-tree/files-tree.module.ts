import { NgModule } from '@angular/core';
import { FilesTreeComponent } from './files-tree.component';

import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		FilesTreeComponent
	],
	exports: [
		FilesTreeComponent
	]
})

export class FilesTreeModule { }
