import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Project } from './../../../../node/project/project.service.ts';

@Component({
	selector: 'project-files-tree',
	templateUrl: './files-tree.html'
})

export class FilesTreeComponent implements OnInit, OnDestroy {
    @Output() changeFile = new EventEmitter();

    private changeEvent: any;
    tree: any = [];

    ngOnInit() {
        this.changeEvent = Project.change.subscribe((data: any) => {
            this.setTree(data);
        });
    }

    ngOnDestroy() {
        this.changeEvent.unsubscribe();
    }

    selectFile(file: any) {
        this.changeFile.emit(file);
    }

    private setTree(data: any) {
        this.tree = data.children;
        console.log(data.children);
    }
}
