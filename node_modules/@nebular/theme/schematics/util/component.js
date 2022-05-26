"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppComponentPath = exports.getComponentTemplateDescriptor = exports.TemplateDescriptor = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const core_1 = require("@angular-devkit/core");
const ts = require("typescript");
const project_1 = require("./project");
class TemplateDescriptor {
    constructor(templateProp, templateUrlProp, componentPath, template) {
        this.templateProp = templateProp;
        this.templateUrlProp = templateUrlProp;
        this.componentPath = componentPath;
        this.template = template;
    }
    isInline() {
        return !!this.templateProp;
    }
}
exports.TemplateDescriptor = TemplateDescriptor;
function getComponentTemplateDescriptor(host, componentPath) {
    const compSource = (0, schematics_1.parseSourceFile)(host, componentPath);
    const compMetadata = (0, schematics_1.getDecoratorMetadata)(compSource, 'Component', '@angular/core')[0];
    const templateProp = getMetadataProperty(compMetadata, 'template');
    const templateUrlProp = getMetadataProperty(compMetadata, 'templateUrl');
    const template = getComponentTemplate(host, componentPath, {
        templateProp,
        templateUrlProp,
    });
    return new TemplateDescriptor(templateProp, templateUrlProp, componentPath, template);
}
exports.getComponentTemplateDescriptor = getComponentTemplateDescriptor;
function getAppComponentPath(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, project_1.getProject)(tree, projectName);
        return (0, core_1.normalize)(`${project.sourceRoot}/app/app.component.ts`);
    });
}
exports.getAppComponentPath = getAppComponentPath;
function getComponentTemplate(host, compPath, tmplInfo) {
    let template = '';
    if (tmplInfo.templateProp) {
        template = tmplInfo.templateProp.initializer.text;
    }
    else if (tmplInfo.templateUrlProp) {
        const templateUrl = tmplInfo.templateUrlProp.initializer.text;
        const dir = (0, core_1.dirname)((0, core_1.normalize)(compPath));
        const templatePath = (0, core_1.join)(dir, templateUrl);
        const buffer = host.read(templatePath);
        if (buffer) {
            template = buffer.toString();
        }
    }
    return template;
}
function getMetadataProperty(metadata, propertyName) {
    const properties = metadata.properties;
    const property = properties
        .filter(prop => prop.kind === ts.SyntaxKind.PropertyAssignment)
        .filter((prop) => {
        const name = prop.name;
        switch (name.kind) {
            case ts.SyntaxKind.Identifier:
                return name.getText() === propertyName;
            case ts.SyntaxKind.StringLiteral:
                return name.text === propertyName;
        }
        return false;
    })[0];
    return property;
}
