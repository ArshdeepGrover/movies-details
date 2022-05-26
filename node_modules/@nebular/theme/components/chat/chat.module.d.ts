/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbChatOptions } from './chat.options';
import * as i0 from "@angular/core";
import * as i1 from "./chat.component";
import * as i2 from "./chat-message.component";
import * as i3 from "./chat-form.component";
import * as i4 from "./chat-message-text.component";
import * as i5 from "./chat-message-file.component";
import * as i6 from "./chat-message-quote.component";
import * as i7 from "./chat-message-map.component";
import * as i8 from "./chat-avatar.component";
import * as i9 from "./chat-custom-message.directive";
import * as i10 from "./chat-title.directive";
import * as i11 from "../shared/shared.module";
import * as i12 from "../icon/icon.module";
import * as i13 from "../input/input.module";
import * as i14 from "../button/button.module";
export declare class NbChatModule {
    static forRoot(options?: NbChatOptions): ModuleWithProviders<NbChatModule>;
    static forChild(options?: NbChatOptions): ModuleWithProviders<NbChatModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbChatModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NbChatModule, [typeof i1.NbChatComponent, typeof i2.NbChatMessageComponent, typeof i3.NbChatFormComponent, typeof i4.NbChatMessageTextComponent, typeof i5.NbChatMessageFileComponent, typeof i6.NbChatMessageQuoteComponent, typeof i7.NbChatMessageMapComponent, typeof i8.NbChatAvatarComponent, typeof i9.NbChatCustomMessageDirective, typeof i10.NbChatTitleDirective], [typeof i11.NbSharedModule, typeof i12.NbIconModule, typeof i13.NbInputModule, typeof i14.NbButtonModule], [typeof i1.NbChatComponent, typeof i2.NbChatMessageComponent, typeof i3.NbChatFormComponent, typeof i4.NbChatMessageTextComponent, typeof i5.NbChatMessageFileComponent, typeof i6.NbChatMessageQuoteComponent, typeof i7.NbChatMessageMapComponent, typeof i8.NbChatAvatarComponent, typeof i9.NbChatCustomMessageDirective, typeof i10.NbChatTitleDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NbChatModule>;
}
