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
exports.registerModules = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const schematics_2 = require("@angular/cdk/schematics");
const core_1 = require("@angular-devkit/core");
const util_1 = require("../../util");
const app_routing_module_content_1 = require("./app-routing-module-content");
function registerModules(options) {
    if (!options.theme) {
        options.theme = 'default';
    }
    return (0, schematics_1.chain)([
        registerAnimationsModule(options),
        registerNebularModules(options),
        registerRouterIfNeeded(options),
    ]);
}
exports.registerModules = registerModules;
function registerAnimationsModule(options) {
    return (tree, context) => __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, options.project);
        const appModulePath = (0, util_1.getAppModulePath)(tree, (0, schematics_2.getProjectMainFile)(project));
        const browserAnimationsModuleName = 'BrowserAnimationsModule';
        const noopAnimationsModuleName = 'NoopAnimationsModule';
        const animationsPackage = '@angular/platform-browser/animations';
        if (options.animations) {
            // In case the project explicitly uses the NoopAnimationsModule, we should print a warning
            // message that makes the user aware of the fact that we won't automatically set up
            // animations. If we would add the BrowserAnimationsModule while the NoopAnimationsModule
            // is already configured, we would cause unexpected behavior and runtime exceptions.
            if ((0, schematics_2.hasNgModuleImport)(tree, appModulePath, noopAnimationsModuleName)) {
                return context.logger.warn(`\u001b[31mCould not set up "${browserAnimationsModuleName}" ` +
                    `because "${noopAnimationsModuleName}" is already imported. Please manually ` +
                    `set up browser animations.`);
            }
            (0, schematics_2.addModuleImportToRootModule)(tree, browserAnimationsModuleName, animationsPackage, project);
        }
        else if (!(0, schematics_2.hasNgModuleImport)(tree, appModulePath, browserAnimationsModuleName)) {
            // Do not add the NoopAnimationsModule module if the project already explicitly uses
            // the BrowserAnimationsModule.
            (0, schematics_2.addModuleImportToRootModule)(tree, noopAnimationsModuleName, animationsPackage, project);
        }
    });
}
function registerNebularModules(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, options.project);
        const nebularThemeModule = `NbThemeModule.forRoot({ name: '${options.theme}' })`;
        (0, schematics_2.addModuleImportToRootModule)(tree, nebularThemeModule, '@nebular/theme', project);
        (0, schematics_2.addModuleImportToRootModule)(tree, 'NbLayoutModule', '@nebular/theme', project);
        (0, schematics_2.addModuleImportToRootModule)(tree, 'NbEvaIconsModule', '@nebular/eva-icons', project);
    });
}
/**
 * Creates `AppRoutingModule` if no either `RouterModule` or `AppRoutingModule` already imported
 * in the `AppModule`.
 * */
function registerRouterIfNeeded(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, options.project);
        if (shouldRegisterRouter(tree, project)) {
            yield registerRoutingModule(tree, options.project);
        }
    });
}
/**
 * Checks if `RouterModule` or `AppRoutingModule` already imported in the `AppModule`.
 * */
function shouldRegisterRouter(tree, project) {
    const appRoutingModuleAlreadyImported = (0, util_1.isImportedInMainModule)(tree, project, 'AppRoutingModule');
    const appModulePath = (0, util_1.getAppModulePath)(tree, (0, schematics_2.getProjectMainFile)(project));
    const routerModuleAlreadyImported = !!(0, ast_utils_1.getRouterModuleDeclaration)((0, schematics_2.parseSourceFile)(tree, appModulePath));
    return !(appRoutingModuleAlreadyImported || routerModuleAlreadyImported);
}
function registerRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield registerAppRoutingModule(tree, projectName);
        yield createAppRoutingModule(tree, projectName);
    });
}
/**
 * We're just adding app-routing.module without any interpolations
 * and customization. So, I don't think we have to use schematics
 * template files.
 * */
function createAppRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, projectName);
        const appRoutingModulePath = (0, core_1.normalize)(`${project.sourceRoot}/app/app-routing.module.ts`);
        tree.create(appRoutingModulePath, app_routing_module_content_1.appRoutingModuleContent);
    });
}
function registerAppRoutingModule(tree, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, projectName);
        (0, schematics_2.addModuleImportToRootModule)(tree, 'AppRoutingModule', './app-routing.module', project);
    });
}
