import { NbChatCustomMessageDirective } from './chat-custom-message.directive';
import * as i0 from "@angular/core";
/**
 * `NbCustomMessageService` is used to store instances of `NbChatCustomMessageDirective`s which
 * were provided in the chat component.
 */
export declare class NbChatCustomMessageService {
    protected readonly customMessages: Map<string, NbChatCustomMessageDirective>;
    register(type: string, instance: NbChatCustomMessageDirective): void;
    unregister(type: string): boolean;
    getInstance(type: string): NbChatCustomMessageDirective | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatCustomMessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbChatCustomMessageService>;
}
