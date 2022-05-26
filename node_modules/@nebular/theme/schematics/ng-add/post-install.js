"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
/**
 * This utils has to imported directly from the `/util/package`, not from the `/util/`.
 * Other utilities use `@angular/sdk/schematics` and `@schematics/angular` packages.
 * But these packages are not installed in this step.
 * */
const package_1 = require("../util/package");
/**
 * post-install schematics, install dependant packages
 * */
function default_1() {
    return runPostInstallSchematics();
}
exports.default = default_1;
/**
 * Add icons peer dependencies in package.json
 * */
function installDependantPeerDependencies(tree) {
    const evaIconsVersion = (0, package_1.getEvaIconsVersion)();
    (0, package_1.addDependencyToPackageJson)(tree, 'eva-icons', evaIconsVersion);
}
/**
 * Runs `npm install`
 * */
function runPostInstallSchematics() {
    return (tree, context) => {
        installDependantPeerDependencies(tree);
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
