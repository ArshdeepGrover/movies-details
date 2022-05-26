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
exports.registerPrebuiltTheme = exports.registerCustomizableTheme = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const schematics_2 = require("@angular-devkit/schematics");
const workspace_1 = require("@schematics/angular/utility/workspace");
const core_1 = require("@angular-devkit/core");
const theme_content_1 = require("./theme-content");
const util_1 = require("../../util");
/**
 * Registers customizable scss theme in the specified project.
 * It creates `theme.scss` file which manages theme content and it's customization.
 * Also as importing `theme.scss` in the styles.scss file and installing the theme globally.
 * If the project uses *.css files it'll throw the error. Because we can't use scss themes
 * in the css Angular project.
 * */
function registerCustomizableTheme(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const project = yield (0, util_1.getProject)(tree, options.project);
        const stylesPath = (0, schematics_1.getProjectStyleFile)(project, 'scss');
        if (!tree.exists(stylesPath)) {
            throwSCSSRequiredForCustomizableThemes();
        }
        createThemeSCSS(tree, options.theme, project.sourceRoot);
        insertThemeImportInStyles(tree, stylesPath);
    });
}
exports.registerCustomizableTheme = registerCustomizableTheme;
/**
 * Registers prebuilt css themes by inserting them in the angular.json styles.
 * */
function registerPrebuiltTheme(options) {
    return (0, workspace_1.updateWorkspace)((workspace) => __awaiter(this, void 0, void 0, function* () {
        const project = (0, schematics_1.getProjectFromWorkspace)(workspace, options.project);
        const themePath = `./node_modules/@nebular/theme/styles/prebuilt/${options.theme}.css`;
        addStyleToTarget(project, 'build', themePath);
    }));
}
exports.registerPrebuiltTheme = registerPrebuiltTheme;
/**
 * Creates theme.scss with Nebular theme setup.
 * */
function createThemeSCSS(tree, theme, sourceRoot) {
    const themeContent = (0, theme_content_1.createThemeContent)(theme);
    const customThemePath = (0, core_1.normalize)((0, core_1.join)(sourceRoot, 'themes.scss'));
    tree.create(customThemePath, themeContent);
}
/**
 * Updates styles.scss and insert theme.scss import.
 * */
function insertThemeImportInStyles(tree, stylesPath) {
    const recorder = tree.beginUpdate(stylesPath)
        .insertLeft(0, theme_content_1.stylesContent);
    tree.commitUpdate(recorder);
}
/**
 * Adds a style entry to the given project target.
 * */
function addStyleToTarget(project, targetName, stylesPath) {
    const targetOptions = (0, schematics_1.getProjectTargetOptions)(project, targetName);
    if (!targetOptions.styles) {
        targetOptions.styles = [stylesPath];
    }
    else if (noNebularThemeIncluded(targetOptions, stylesPath)) {
        targetOptions.styles.unshift(stylesPath);
    }
}
/**
 * Validates no Nebular styles already included into the specified project.
 * */
function noNebularThemeIncluded(targetOptions, stylesPath) {
    const existingStyles = targetOptions.styles.map((s) => typeof s === 'string' ? s : s.input);
    const hasGivenTheme = existingStyles.find((s) => s.includes(stylesPath));
    const hasOtherTheme = existingStyles.find((s) => s.includes('@nebular/theme/styles/prebuilt'));
    return !hasGivenTheme && !hasOtherTheme;
}
function throwSCSSRequiredForCustomizableThemes() {
    throw new schematics_2.SchematicsException('No scss root found. Customizable theme requires scss to be enabled in the project.');
}
