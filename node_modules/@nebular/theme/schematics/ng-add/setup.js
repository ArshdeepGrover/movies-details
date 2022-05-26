"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const register_modules_1 = require("./register-modules");
const register_theme_1 = require("./register-theme");
const wrap_in_layout_1 = require("./wrap-in-layout");
/**
 * Setting up Nebular for the specified project by registering required modules,
 * adding Nebular themes and wrapping root component in the Nebular Layout.
 * */
function default_1(options) {
    return (0, schematics_1.chain)([
        (0, register_modules_1.registerModules)(options),
        options.customization ? (0, register_theme_1.registerCustomizableTheme)(options) : (0, register_theme_1.registerPrebuiltTheme)(options),
        options.layout ? (0, wrap_in_layout_1.wrapRootComponentInLayout)(options) : (0, schematics_1.noop)(),
    ]);
}
exports.default = default_1;
