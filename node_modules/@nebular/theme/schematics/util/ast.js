"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppModulePath = exports.isImportedInMainModule = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular/cdk/schematics");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
function isImportedInMainModule(tree, project, moduleName) {
    const appModulePath = getAppModulePath(tree, (0, schematics_1.getProjectMainFile)(project));
    return (0, schematics_1.hasNgModuleImport)(tree, appModulePath, moduleName);
}
exports.isImportedInMainModule = isImportedInMainModule;
function getAppModulePath(host, mainPath) {
    const moduleRelativePath = (0, ng_ast_utils_1.findBootstrapModulePath)(host, mainPath);
    const mainDir = (0, core_1.dirname)(mainPath);
    return (0, core_1.normalize)(`/${mainDir}/${moduleRelativePath}.ts`);
}
exports.getAppModulePath = getAppModulePath;
