"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapHtmlFileTemplateInLayout = exports.wrapInlineTemplateInLayout = void 0;
const layoutStart = `<nb-layout>

  <nb-layout-header fixed>
  <!-- Insert header here -->
  </nb-layout-header>

  <nb-layout-column>`;
const layoutEnd = `  </nb-layout-column>

  <nb-layout-footer fixed>
  <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>`;
function wrapInlineTemplateInLayout(template) {
    return ` \`
${paddNotEmpty(layoutStart, 4)}
${padd(template, 4)}
${paddNotEmpty(layoutEnd, 4)}
  \``;
}
exports.wrapInlineTemplateInLayout = wrapInlineTemplateInLayout;
function wrapHtmlFileTemplateInLayout(template) {
    return `${layoutStart}
${padd(template, 4)}
${layoutEnd}
`;
}
exports.wrapHtmlFileTemplateInLayout = wrapHtmlFileTemplateInLayout;
/**
 * Adds padding to the each line of the multyline string.
 **/
function padd(text, paddLen) {
    return text
        .split('\n')
        .map(line => `${' '.repeat(paddLen)}${line}`)
        .join('\n');
}
/**
 * Same as padd, but doesn't padd empty lines.
 **/
function paddNotEmpty(text, paddLen) {
    return padd(text, paddLen).replace(/^ +$/gm, '');
}
