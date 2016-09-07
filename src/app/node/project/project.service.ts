import { EventEmitter } from '@angular/core';

var dirTree = require('directory-tree');

class ProjectService {
    change: EventEmitter<any> = new EventEmitter();

    setByPath(path: string) {
        var tree = dirTree(path);
        this.change.emit(tree);
    }

    getFileManufest() {
        
    }
}

let Project = new ProjectService();
export { Project };