import { Tree } from '@angular-devkit/schematics';
import { Schema } from '../schema';
/**
 * Registers customizable scss theme in the specified project.
 * It creates `theme.scss` file which manages theme content and it's customization.
 * Also as importing `theme.scss` in the styles.scss file and installing the theme globally.
 * If the project uses *.css files it'll throw the error. Because we can't use scss themes
 * in the css Angular project.
 * */
export declare function registerCustomizableTheme(options: Schema): (tree: Tree) => Promise<void>;
/**
 * Registers prebuilt css themes by inserting them in the angular.json styles.
 * */
export declare function registerPrebuiltTheme(options: Schema): import("@angular-devkit/schematics").Rule;
