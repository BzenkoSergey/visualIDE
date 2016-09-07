import { Project } from './../project/project.service.ts';

class MenubarClass {
    private fileElement: HTMLInputElement;

    init() {
        this.initFileEl();
        this.createMenu();
    }

    private createMenu() {
        let menu: nw.Menu = new nw.Menu({
            type: 'menubar'
        });

        var submenu: nw.Menu = new nw.Menu();
        submenu.append(this.createProjectItem());

        menu.append(new nw.MenuItem({
            label: 'File',
            submenu: submenu
        }));
        
        nw.Window.get().menu = menu;
    }

    private createProjectItem(): nw.MenuItem {
        return new nw.MenuItem({
            label: 'Project',
            click: () => {
                this.fileElement.click();
            }
        });
    }

    private initFileEl() {
        var input: HTMLInputElement = document.createElement("input");
        input.type = "file";
        input.setAttribute('nwdirectory', '');
        input.addEventListener("change", function(evt) {
            Project.setByPath(this.value);
        }, false);
        this.fileElement = input;
    }
}

let Menubar = new MenubarClass();
export { Menubar };