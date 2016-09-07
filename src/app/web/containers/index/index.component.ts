import { Component } from '@angular/core';

import { Menubar } from './../../../node/menubar/menubar.service.ts';

@Component({
	selector: 'index',
	templateUrl: './index.html'
})

export class IndexComponent {
	inspectedFile: any;

	constructor() {
		Menubar.init();
	}

	setInspectedFile(file: any) {
		this.inspectedFile = file;
	}
}
