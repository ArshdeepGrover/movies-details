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
exports.wrapRootComponentInLayout = void 0;
const core_1 = require("@angular-devkit/core");
const util_1 = require("../../util");
const layout_content_1 = require("./layout-content");
/**
 * Wraps `AppComponent` in `NbLayoutComponent`. It's required for correct
 * work of Nebular components.
 * */
function wrapRootComponentInLayout(options) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const componentPath = yield (0, util_1.getAppComponentPath)(tree, options.project);
        const templateDescriptor = (0, util_1.getComponentTemplateDescriptor)(tree, componentPath);
        if (templateDescriptor.isInline()) {
            wrapInlineTemplate(tree, templateDescriptor);
        }
        else {
            wrapHtmlFileTemplate(tree, templateDescriptor);
        }
    });
}
exports.wrapRootComponentInLayout = wrapRootComponentInLayout;
function wrapInlineTemplate(tree, templateDescriptor) {
    const { templateProp, componentPath, template } = templateDescriptor;
    const wrappedTemplate = (0, layout_content_1.wrapInlineTemplateInLayout)(template);
    const recorder = tree.beginUpdate(componentPath)
        .remove(templateProp.initializer.pos, templateProp.initializer.getFullText().length)
        .insertLeft(templateProp.initializer.pos, wrappedTemplate);
    tree.commitUpdate(recorder);
}
function wrapHtmlFileTemplate(tree, templateDescriptor) {
    const { templateUrlProp, componentPath, template } = templateDescriptor;
    const templateUrl = templateUrlProp.initializer.text;
    const dir = (0, core_1.dirname)((0, core_1.normalize)(componentPath));
    const templatePath = (0, core_1.join)(dir, templateUrl);
    (0, util_1.writeText)(tree, templatePath, (0, layout_content_1.wrapHtmlFileTemplateInLayout)(template));
}
