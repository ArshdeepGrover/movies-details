import { NbFontIconPackParams, NbIconPackParams } from './icon-pack';
export interface NbIconOptions {
    [name: string]: any;
}
export interface NbIcon {
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}
export declare class NbFontIcon implements NbIcon {
    protected name: any;
    protected content: any;
    protected params: NbFontIconPackParams;
    constructor(name: any, content: any, params?: NbFontIconPackParams);
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}
export declare class NbSvgIcon implements NbIcon {
    protected name: any;
    protected content: any;
    protected params: NbIconPackParams;
    constructor(name: any, content: any, params?: NbIconPackParams);
    getClasses(options?: NbIconOptions): string[];
    getContent(options?: NbIconOptions): string;
}
