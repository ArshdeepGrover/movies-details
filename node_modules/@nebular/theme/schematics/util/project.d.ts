import { Tree } from '@angular-devkit/schematics';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
/**
 * Gets project workspace from the specified tree by given project name
 * */
export declare function getProject(tree: Tree, projectName: string): Promise<ProjectDefinition>;
