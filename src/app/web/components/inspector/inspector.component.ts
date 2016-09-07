import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChange } from '@angular/core';

import { Manifest } from './../../../node/manifest/manifest.service.ts';

require('./inspector.scss');

@Component({
	selector: 'inspector',
	templateUrl: './inspector.html'
})

export class InspectorComponent implements OnInit, OnDestroy {
    @Input() file: any;
    manifest: any = {};

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        this.manifest = Manifest.get(this.file.path);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
