import { Tree } from '@angular-devkit/schematics';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
export declare function isImportedInMainModule(tree: Tree, project: ProjectDefinition, moduleName: string): boolean;
export declare function getAppModulePath(host: Tree, mainPath: string): string;
