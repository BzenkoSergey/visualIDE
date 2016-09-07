var TsTypeInfo = require('./../libs-wrap/ts-type-info.js');
var fs = nw['require']('fs');

class ManifestClass {
    get(filePath: string) {
        let manifest: any = {};

        var content = fs.readFileSync(filePath, "utf8");
        var file = TsTypeInfo.getInfoFromString(content);

        let classInfo = file.classes[0];

        manifest.name = classInfo.name;
        manifest.constructorDef = this.getConstructorDef(classInfo);
        manifest.properties = this.getProperties(classInfo);
        manifest.methods = this.getMethods(classInfo);

        return manifest;
    }

    private getConstructorDef(classInfo: any) {
        let constructorDef: any = {};
        constructorDef.parameters = [];

        classInfo.constructorDef.parameters.forEach((param: any) => {
            constructorDef.parameters.push({
                name: param.name,
                type: param.type.text,
                optional: param.isOptional,
                defaultValue: (param.defaultExpression || {}).text
            });
        });
        return constructorDef;   
    }

    private getProperties(classInfo: any) {
        let properties: any[] = [];
        classInfo.properties.forEach((prop: any) => {
            properties.push({
                name: prop.name,
                type: prop.type.text,
                scope: prop.scope,
                defaultValue: (prop.defaultExpression || {}).text
            });
        });
        return properties;
    }

    private getMethods(classInfo: any) {
        let methods: any[] = [];
        classInfo.methods.forEach((method: any) => {
            let parameters: any[] = [];
            let info = {
                name: method.name,
                return: method.returnType.text,
                scope: method.scope,
                parameters: parameters
            };

            method.parameters.forEach((param: any) => {
                parameters.push({
                    name: param.name,
                    type: param.type.text,
                    optional: param.isOptional,
                    defaultValue: (param.defaultExpression || {}).text
                });
            });

            methods.push(info);
        });
        return methods;
    }
}

let Manifest = new ManifestClass();
export { Manifest };