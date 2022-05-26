export interface Schema {
    project: string;
    theme: 'default' | 'dark' | 'cosmic' | 'corporate';
    customization: boolean;
    layout: boolean;
    animations: boolean;
}
