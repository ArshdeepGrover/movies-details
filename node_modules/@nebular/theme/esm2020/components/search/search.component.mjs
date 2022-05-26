/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { of as observableOf, Subject } from 'rxjs';
import { filter, delay, takeUntil } from 'rxjs/operators';
import { NbPortalDirective } from '../cdk/overlay/mapping';
import * as i0 from "@angular/core";
import * as i1 from "../button/button.component";
import * as i2 from "../icon/icon.component";
import * as i3 from "@angular/forms";
import * as i4 from "./search.service";
import * as i5 from "../../services/theme.service";
import * as i6 from "@angular/router";
import * as i7 from "../cdk/overlay/overlay-service";
import * as i8 from "../cdk/overlay/mapping";
/**
 * search-field-component is used under the hood by nb-search component
 * can't be used itself
 */
export class NbSearchFieldComponent {
    constructor() {
        this.show = false;
        this.close = new EventEmitter();
        this.search = new EventEmitter();
        this.searchInput = new EventEmitter();
    }
    get showClass() {
        return this.show;
    }
    get modalZoomin() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_ZOOMIN;
    }
    get rotateLayout() {
        return this.type === NbSearchFieldComponent.TYPE_ROTATE_LAYOUT;
    }
    get modalMove() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_MOVE;
    }
    get curtain() {
        return this.type === NbSearchFieldComponent.TYPE_CURTAIN;
    }
    get columnCurtain() {
        return this.type === NbSearchFieldComponent.TYPE_COLUMN_CURTAIN;
    }
    get modalDrop() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_DROP;
    }
    get modalHalf() {
        return this.type === NbSearchFieldComponent.TYPE_MODAL_HALF;
    }
    ngOnChanges({ show }) {
        const becameHidden = !show.isFirstChange() && show.currentValue === false;
        if (becameHidden && this.inputElement) {
            this.inputElement.nativeElement.value = '';
        }
        this.focusInput();
    }
    ngAfterViewInit() {
        this.focusInput();
    }
    emitClose() {
        this.close.emit();
    }
    submitSearch(term) {
        if (term) {
            this.search.emit(term);
        }
    }
    emitSearchInput(term) {
        this.searchInput.emit(term);
    }
    focusInput() {
        if (this.show && this.inputElement) {
            this.inputElement.nativeElement.focus();
        }
    }
}
NbSearchFieldComponent.TYPE_MODAL_ZOOMIN = 'modal-zoomin';
NbSearchFieldComponent.TYPE_ROTATE_LAYOUT = 'rotate-layout';
NbSearchFieldComponent.TYPE_MODAL_MOVE = 'modal-move';
NbSearchFieldComponent.TYPE_CURTAIN = 'curtain';
NbSearchFieldComponent.TYPE_COLUMN_CURTAIN = 'column-curtain';
NbSearchFieldComponent.TYPE_MODAL_DROP = 'modal-drop';
NbSearchFieldComponent.TYPE_MODAL_HALF = 'modal-half';
NbSearchFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NbSearchFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSearchFieldComponent, selector: "nb-search-field", inputs: { type: "type", placeholder: "placeholder", hint: "hint", show: "show" }, outputs: { close: "close", search: "search", searchInput: "searchInput" }, host: { properties: { "class.show": "this.showClass", "class.modal-zoomin": "this.modalZoomin", "class.rotate-layout": "this.rotateLayout", "class.modal-move": "this.modalMove", "class.curtain": "this.curtain", "class.column-curtain": "this.columnCurtain", "class.modal-drop": "this.modalDrop", "class.modal-half": "this.modalHalf" } }, viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["searchInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div class="search" (keyup.esc)="emitClose()">
      <button (click)="emitClose()" nbButton ghost class="close-button">
        <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
      </button>
      <div class="form-wrapper">
        <form class="form" (keyup.enter)="submitSearch(searchInput.value)">
          <div class="form-content">
            <input class="search-input"
                   #searchInput
                   (input)="emitSearchInput(searchInput.value)"
                   autocomplete="off"
                   [attr.placeholder]="placeholder"
                   tabindex="-1"
                   (blur)="focusInput()"/>
          </div>
          <span class="info">{{ hint }}</span>
        </form>
      </div>
    </div>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input:-ms-input-placeholder,:host input::placeholder{opacity:.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity .5s}:host.modal-zoomin .search:before,:host.modal-zoomin .search:after{content:\"\";position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search:before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate(-15px,-15px)}:host.modal-zoomin .search:after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate(15px,15px)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button,:host.modal-zoomin .search form{opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search:before,:host.modal-zoomin.show .search:after{transform:translate(0);transition:transform .5s}:host.modal-zoomin.show .search button,:host.modal-zoomin.show .search form{opacity:1;transform:scale(1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}::ng-deep nb-layout.rotate-layout .scrollable-container{position:relative;z-index:10001;transition:transform .5s cubic-bezier(.2,1,.3,1)}::ng-deep nb-layout.rotate-layout.with-search .scrollable-container{transition:transform .5s cubic-bezier(.2,1,.3,1);transform-origin:50vw 50vh;transform:perspective(1000px) translateY(50vh) rotateX(30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100vw;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale(.7);transition:opacity .5s,transform .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button,:host.rotate-layout.show .search form{opacity:1;transform:scale(1)}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-move .layout{transition:transform .5s}::ng-deep nb-layout.modal-move.with-search .layout{transform:scale(.8);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity .5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity .5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scaleX(0);transform-origin:0 50%;transition:transform .3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale(1)}:host.modal-move.show .search input{transform:scale(1);transition-duration:.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform .3s;transition-delay:.4s;transition-timing-function:ease-out}:host.curtain .search:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:transform .3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity .1s;transition-delay:.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate(-100%);transition-delay:0s}:host.curtain.show .search:after{transform:translate(100%);transition-delay:.4s}:host.curtain.show .search button,:host.curtain.show .search form{opacity:1;transform:scale(1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}}::ng-deep nb-layout.curtain .scrollable-container{position:relative;z-index:0}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/::ng-deep nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transform:scaleX(0);transform-origin:0 50%;transition:transform .3s;transition-timing-function:cubic-bezier(.86,0,.07,1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity .5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate(-150%);transition:transform .3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show:before{transform:scale(1)}:host.column-curtain.show .search form{transform:translate(0);transition-delay:.15s;transition-timing-function:cubic-bezier(.86,0,.07,1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-drop .layout{position:relative;transition:transform .4s,opacity .4s;transition-timing-function:cubic-bezier(.4,0,.2,1)}::ng-deep nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale(.9);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search:before{content:\"\";position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity .4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity .4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:.25rem;text-align:center;opacity:0;transition:opacity .4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:.85rem 0;opacity:0;transform:translateY(-50px);transition:opacity .4s,transform .4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translateY(-50px);transition:transform .4s}:host.modal-drop .search .form-content:after{content:\"\";position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search:before,:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate(0);transition:none}:host.modal-drop.show .search .form-content:after{animation:scaleUpDown .8s cubic-bezier(.4,0,.2,1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s .4s}:host.modal-drop.show .search span{opacity:1;transform:translate(0);transition-delay:.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scaleY(0)}50%{transform:scale(1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}to{opacity:1;transform:scaleY(0);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-half .layout{transition:transform .6s,opacity .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}::ng-deep nb-layout.modal-half.with-search .layout{transform:scale(.8);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale(.8);transition:opacity .6s,transform .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform .6s;transition-timing-function:cubic-bezier(.2,1,.3,1);transform:translateY(-100%)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search:before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale(1)}:host.modal-half.show .search .form-wrapper{transform:translate(0)}\n"], components: [{ type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-search-field', changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="search" (keyup.esc)="emitClose()">
      <button (click)="emitClose()" nbButton ghost class="close-button">
        <nb-icon icon="close-outline" pack="nebular-essentials"></nb-icon>
      </button>
      <div class="form-wrapper">
        <form class="form" (keyup.enter)="submitSearch(searchInput.value)">
          <div class="form-content">
            <input class="search-input"
                   #searchInput
                   (input)="emitSearchInput(searchInput.value)"
                   autocomplete="off"
                   [attr.placeholder]="placeholder"
                   tabindex="-1"
                   (blur)="focusInput()"/>
          </div>
          <span class="info">{{ hint }}</span>
        </form>
      </div>
    </div>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host button{margin:0;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}:host input{border-top:0;border-right:0;border-left:0;background:transparent;border-radius:0;line-height:1;display:inline-block;box-sizing:border-box;padding:.05rem 0;-webkit-appearance:none}:host input:focus{outline:none}:host input:-ms-input-placeholder,:host input::placeholder{opacity:.3}:host span{font-size:90%;font-weight:bold;display:block;width:75%;margin:0 auto;padding:.85rem 0;text-align:right}:host.modal-zoomin{display:block}:host.modal-zoomin .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity .5s}:host.modal-zoomin .search:before,:host.modal-zoomin .search:after{content:\"\";position:absolute;width:calc(100% + 15px);height:calc(100% + 15px);pointer-events:none}:host.modal-zoomin .search:before{top:0;left:0;border-right-width:0;border-bottom-width:0;transform:translate(-15px,-15px)}:host.modal-zoomin .search:after{right:0;bottom:0;border-top-width:0;border-left-width:0;transform:translate(15px,15px)}:host.modal-zoomin .search button{position:absolute;top:3rem;font-size:2.5rem}[dir=ltr] :host.modal-zoomin .search button{right:3rem}[dir=rtl] :host.modal-zoomin .search button{left:3rem}:host.modal-zoomin .search input{font-size:10vw;width:75%}:host.modal-zoomin .search button,:host.modal-zoomin .search form{opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.modal-zoomin.show .search{pointer-events:auto;opacity:1}:host.modal-zoomin.show .search:before,:host.modal-zoomin.show .search:after{transform:translate(0);transition:transform .5s}:host.modal-zoomin.show .search button,:host.modal-zoomin.show .search form{opacity:1;transform:scale(1)}@media screen and (max-width: 40rem){:host.modal-zoomin form{margin:5rem 0 1rem}:host.modal-zoomin span{text-align:left}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.rotate-layout{position:fixed;overflow:hidden;width:100%}::ng-deep nb-layout.rotate-layout .scrollable-container{position:relative;z-index:10001;transition:transform .5s cubic-bezier(.2,1,.3,1)}::ng-deep nb-layout.rotate-layout.with-search .scrollable-container{transition:transform .5s cubic-bezier(.2,1,.3,1);transform-origin:50vw 50vh;transform:perspective(1000px) translateY(50vh) rotateX(30deg);pointer-events:none}:host.rotate-layout{position:absolute;display:block;width:100vw;height:100vh;pointer-events:none;opacity:0;transition-property:opacity;transition-delay:.4s}:host.rotate-layout .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:50vh;pointer-events:none;opacity:0;transition:opacity .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.rotate-layout .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}[dir=ltr] :host.rotate-layout .search button{right:3rem}[dir=rtl] :host.rotate-layout .search button{left:3rem}:host.rotate-layout .search form{margin:5rem 0;opacity:0;transform:scale(.7);transition:opacity .5s,transform .5s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.rotate-layout .search input{font-size:7vw;width:75%}:host.rotate-layout.show{opacity:1;transition-delay:0s}:host.rotate-layout.show .search{pointer-events:auto;opacity:1}:host.rotate-layout.show .search button,:host.rotate-layout.show .search form{opacity:1;transform:scale(1)}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-move .layout{transition:transform .5s}::ng-deep nb-layout.modal-move.with-search .layout{transform:scale(.8);pointer-events:none}:host.modal-move .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:fixed;z-index:1050;top:0;left:0;width:100%;height:100vh;pointer-events:none;opacity:0;transition:opacity .5s}:host.modal-move .search button{position:absolute;top:3rem;font-size:2.5rem;opacity:0;transition:opacity .5s}[dir=ltr] :host.modal-move .search button{right:3rem}[dir=rtl] :host.modal-move .search button{left:3rem}:host.modal-move .search form{margin:5rem 0;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.modal-move .search input{font-size:10vw;width:75%;transform:scaleX(0);transform-origin:0 50%;transition:transform .3s}:host.modal-move.show .search{pointer-events:auto;opacity:1}:host.modal-move.show .search button{opacity:1}:host.modal-move.show .search form{opacity:1;transform:scale(1)}:host.modal-move.show .search input{transform:scale(1);transition-duration:.5s}@media screen and (max-width: 40rem){:host.modal-move span{text-align:left}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/:host.curtain .search{position:fixed;z-index:1050;top:0;left:100%;overflow:hidden;height:100vh;width:100%;padding:3rem;pointer-events:none;transition:transform .3s;transition-delay:.4s;transition-timing-function:ease-out}:host.curtain .search:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transition:transform .3s;transition-timing-function:ease-out}:host.curtain .search button{font-size:2.5rem;position:absolute;top:3rem;transition:opacity .1s;transition-delay:.3s}[dir=ltr] :host.curtain .search button{right:3rem}[dir=rtl] :host.curtain .search button{left:3rem}:host.curtain .search form{width:50%;opacity:0;transform:scale(.8);transition:opacity .5s,transform .5s}:host.curtain .search input{width:100%;font-size:6vw}:host.curtain.show .search{width:100%;pointer-events:auto;transform:translate(-100%);transition-delay:0s}:host.curtain.show .search:after{transform:translate(100%);transition-delay:.4s}:host.curtain.show .search button,:host.curtain.show .search form{opacity:1;transform:scale(1)}@media screen and (max-width: 40em){:host.curtain span{width:90%}:host.curtain input{font-size:2em;width:90%}}::ng-deep nb-layout.curtain .scrollable-container{position:relative;z-index:0}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//**\n* @license\n* Copyright Akveo. All Rights Reserved.\n* Licensed under the MIT License. See License.txt in the project root for license information.\n*/::ng-deep nb-layout.column-curtain.with-search .layout{pointer-events:none}:host.column-curtain{display:block;position:fixed;z-index:1050;top:0;left:50%;overflow:hidden;width:50%;height:100vh;pointer-events:none}:host.column-curtain:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;transform:scaleX(0);transform-origin:0 50%;transition:transform .3s;transition-timing-function:cubic-bezier(.86,0,.07,1)}:host.column-curtain .search{position:relative;padding:2.5rem 1.5rem 0;background:transparent}:host.column-curtain .search button{position:absolute;top:2rem;font-size:2.5rem;opacity:0;transition:opacity .5s}[dir=ltr] :host.column-curtain .search button{right:2rem}[dir=rtl] :host.column-curtain .search button{left:2rem}:host.column-curtain .search form{width:85%;transform:translate(-150%);transition:transform .3s}:host.column-curtain .search input{font-size:2.5rem;width:100%}:host.column-curtain .search span{font-size:85%}:host.column-curtain.show{pointer-events:auto}:host.column-curtain.show:before{transform:scale(1)}:host.column-curtain.show .search form{transform:translate(0);transition-delay:.15s;transition-timing-function:cubic-bezier(.86,0,.07,1)}:host.column-curtain.show .search button{opacity:1;z-index:100}@media screen and (max-width: 40rem){:host.column-curtain span{width:90%}:host.column-curtain input{font-size:2rem;width:90%}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-drop .layout{position:relative;transition:transform .4s,opacity .4s;transition-timing-function:cubic-bezier(.4,0,.2,1)}::ng-deep nb-layout.modal-drop.with-search .layout{opacity:0;transform:scale(.9);pointer-events:none}:host.modal-drop .search{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;z-index:1050;position:fixed;top:0;left:0;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-drop .search:before{content:\"\";position:absolute;top:0;right:0;width:100%;height:100%;opacity:0;transition:opacity .4s}:host.modal-drop .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;opacity:0;transition:opacity .4s}[dir=ltr] :host.modal-drop .search button{right:3rem}[dir=rtl] :host.modal-drop .search button{left:3rem}:host.modal-drop .search form{position:relative;margin:5rem 0 2rem}:host.modal-drop .search input{font-size:6vw;width:60%;padding:.25rem;text-align:center;opacity:0;transition:opacity .4s}:host.modal-drop .search span{position:relative;z-index:9;display:block;width:60%;padding:.85rem 0;opacity:0;transform:translateY(-50px);transition:opacity .4s,transform .4s}:host.modal-drop .search .form-content{position:relative;z-index:10;overflow:hidden;transform:translateY(-50px);transition:transform .4s}:host.modal-drop .search .form-content:after{content:\"\";position:absolute;top:0;left:20%;width:60%;height:105%;opacity:0;transform-origin:50% 0}:host.modal-drop.show .search{pointer-events:auto}:host.modal-drop.show .search:before,:host.modal-drop.show .search button{opacity:1}:host.modal-drop.show .search .form-content{transform:translate(0);transition:none}:host.modal-drop.show .search .form-content:after{animation:scaleUpDown .8s cubic-bezier(.4,0,.2,1) forwards}:host.modal-drop.show .search input{opacity:1;transition:opacity 0s .4s}:host.modal-drop.show .search span{opacity:1;transform:translate(0);transition-delay:.4s;transition-timing-function:ease-out}@keyframes scaleUpDown{0%{opacity:1;transform:scaleY(0)}50%{transform:scale(1);transform-origin:50% 0;transition-timing-function:ease-out}50.1%{transform-origin:50% 100%;transition-timing-function:ease-out}to{opacity:1;transform:scaleY(0);transform-origin:50% 100%;transition-timing-function:ease-out}}@media screen and (max-width: 40rem){:host.modal-drop form{margin:2rem 0}:host.modal-drop input{width:100%;left:0}}\n", "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */::ng-deep nb-layout.modal-half .layout{transition:transform .6s,opacity .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}::ng-deep nb-layout.modal-half.with-search .layout{transform:scale(.8);pointer-events:none}:host.modal-half .search{text-align:center;position:fixed;z-index:1050;top:0;left:0;overflow:hidden;width:100%;height:100vh;background:none;pointer-events:none}:host.modal-half .search:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;opacity:0;transition:opacity .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}:host.modal-half .search button{font-size:2.5rem;position:absolute;top:3rem;display:block;z-index:100;opacity:0;transform:scale(.8);transition:opacity .6s,transform .6s;transition-timing-function:cubic-bezier(.2,1,.3,1)}[dir=ltr] :host.modal-half .search button{right:3rem}[dir=rtl] :host.modal-half .search button{left:3rem}:host.modal-half .search .form-wrapper{position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:50%;transition:transform .6s;transition-timing-function:cubic-bezier(.2,1,.3,1);transform:translateY(-100%)}:host.modal-half .search form{width:75%;margin:0 auto}:host.modal-half .search input{font-size:7vw;width:100%}:host.modal-half.show .search{pointer-events:auto}:host.modal-half.show .search:before{opacity:1}:host.modal-half.show .search button{opacity:1;transform:scale(1)}:host.modal-half.show .search .form-wrapper{transform:translate(0)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }], show: [{
                type: Input
            }], close: [{
                type: Output
            }], search: [{
                type: Output
            }], searchInput: [{
                type: Output
            }], inputElement: [{
                type: ViewChild,
                args: ['searchInput']
            }], showClass: [{
                type: HostBinding,
                args: ['class.show']
            }], modalZoomin: [{
                type: HostBinding,
                args: ['class.modal-zoomin']
            }], rotateLayout: [{
                type: HostBinding,
                args: ['class.rotate-layout']
            }], modalMove: [{
                type: HostBinding,
                args: ['class.modal-move']
            }], curtain: [{
                type: HostBinding,
                args: ['class.curtain']
            }], columnCurtain: [{
                type: HostBinding,
                args: ['class.column-curtain']
            }], modalDrop: [{
                type: HostBinding,
                args: ['class.modal-drop']
            }], modalHalf: [{
                type: HostBinding,
                args: ['class.modal-half']
            }] } });
/**
 * Beautiful full-page search control.
 *
 * @stacked-example(Showcase, search/search-showcase.component)
 *
 * Basic setup:
 *
 * ```ts
 *  <nb-search type="rotate-layout"></nb-search>
 * ```
 * ### Installation
 *
 * Import `NbSearchModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbSearchModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Several animation types are available:
 * modal-zoomin, rotate-layout, modal-move, curtain, column-curtain, modal-drop, modal-half
 *
 * It is also possible to handle search event using `NbSearchService`:
 *
 * @stacked-example(Search Event, search/search-event.component)
 *
 * @styles
 *
 * search-background-color:
 * search-divider-color:
 * search-divider-style:
 * search-divider-width:
 * search-extra-background-color:
 * search-text-color:
 * search-text-font-family:
 * search-text-font-size:
 * search-text-font-weight:
 * search-text-line-height:
 * search-placeholder-text-color:
 * search-info-text-color:
 * search-info-text-font-family:
 * search-info-text-font-size:
 * search-info-text-font-weight:
 * search-info-text-line-height:
 */
export class NbSearchComponent {
    constructor(searchService, themeService, router, overlayService, changeDetector) {
        this.searchService = searchService;
        this.themeService = themeService;
        this.router = router;
        this.overlayService = overlayService;
        this.changeDetector = changeDetector;
        this.destroy$ = new Subject();
        this.showSearchField = false;
        /**
         * Search input placeholder
         * @type {string}
         */
        this.placeholder = 'Search...';
        /**
         * Hint showing under the input field to improve user experience
         *
         * @type {string}
         */
        this.hint = 'Hit enter to search';
    }
    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => this.hideSearch());
        this.searchService.onSearchActivate()
            .pipe(filter(data => !this.tag || data.tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.openSearch());
        this.searchService.onSearchDeactivate()
            .pipe(filter(data => !this.tag || data.tag === this.tag), takeUntil(this.destroy$))
            .subscribe(() => this.hideSearch());
    }
    ngOnDestroy() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.removeLayoutClasses();
            this.overlayRef.detach();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    openSearch() {
        if (!this.overlayRef) {
            this.overlayRef = this.overlayService.create();
            this.overlayRef.attach(this.searchFieldPortal);
        }
        this.themeService.appendLayoutClass(this.type);
        observableOf(null).pipe(delay(0)).subscribe(() => {
            this.themeService.appendLayoutClass('with-search');
            this.showSearchField = true;
            this.changeDetector.detectChanges();
        });
    }
    hideSearch() {
        this.removeLayoutClasses();
        this.showSearchField = false;
        this.changeDetector.detectChanges();
        this.searchButton.nativeElement.focus();
    }
    search(term) {
        this.searchService.submitSearch(term, this.tag);
        this.hideSearch();
    }
    emitInput(term) {
        this.searchService.searchInput(term, this.tag);
    }
    emitActivate() {
        this.searchService.activateSearch(this.type, this.tag);
    }
    emitDeactivate() {
        this.searchService.deactivateSearch(this.type, this.tag);
    }
    removeLayoutClasses() {
        this.themeService.removeLayoutClass('with-search');
        observableOf(null).pipe(delay(500)).subscribe(() => {
            this.themeService.removeLayoutClass(this.type);
        });
    }
}
NbSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchComponent, deps: [{ token: i4.NbSearchService }, { token: i5.NbThemeService }, { token: i6.Router }, { token: i7.NbOverlayService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
NbSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbSearchComponent, selector: "nb-search", inputs: { tag: "tag", placeholder: "placeholder", hint: "hint", type: "type" }, viewQueries: [{ propertyName: "searchFieldPortal", first: true, predicate: NbPortalDirective, descendants: true }, { propertyName: "searchButton", first: true, predicate: ["searchButton"], descendants: true, read: ElementRef }], ngImport: i0, template: `
    <button #searchButton class="start-search" (click)="emitActivate()" nbButton ghost>
      <nb-icon icon="search-outline" pack="nebular-essentials"></nb-icon>
    </button>
    <nb-search-field
      *nbPortal
      [show]="showSearchField"
      [type]="type"
      [placeholder]="placeholder"
      [hint]="hint"
      (search)="search($event)"
      (searchInput)="emitInput($event)"
      (close)="emitDeactivate()">
    </nb-search-field>
  `, isInline: true, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}::ng-deep nb-layout.with-search .scrollable-container{position:relative;z-index:0}\n"], components: [{ type: i1.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: NbSearchFieldComponent, selector: "nb-search-field", inputs: ["type", "placeholder", "hint", "show"], outputs: ["close", "search", "searchInput"] }], directives: [{ type: i8.NbPortalDirective, selector: "[nbPortal]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-search', changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <button #searchButton class="start-search" (click)="emitActivate()" nbButton ghost>
      <nb-icon icon="search-outline" pack="nebular-essentials"></nb-icon>
    </button>
    <nb-search-field
      *nbPortal
      [show]="showSearchField"
      [type]="type"
      [placeholder]="placeholder"
      [hint]="hint"
      (search)="search($event)"
      (searchInput)="emitInput($event)"
      (close)="emitDeactivate()">
    </nb-search-field>
  `, styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host button{font-size:2rem;margin:0 auto;padding:0;cursor:pointer;border:none;background:none}:host button:focus{box-shadow:none;outline:none}::ng-deep nb-layout.with-search .scrollable-container{position:relative;z-index:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i4.NbSearchService }, { type: i5.NbThemeService }, { type: i6.Router }, { type: i7.NbOverlayService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { tag: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }], type: [{
                type: Input
            }], searchFieldPortal: [{
                type: ViewChild,
                args: [NbPortalDirective]
            }], searchButton: [{
                type: ViewChild,
                args: ['searchButton', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUsxRCxPQUFPLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7QUFFekU7OztHQUdHO0FBbUNILE1BQU0sT0FBTyxzQkFBc0I7SUFsQ25DO1FBK0NXLFNBQUksR0FBRyxLQUFLLENBQUM7UUFFWixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7S0E0RTVDO0lBeEVDLElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hFLENBQUM7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssc0JBQXNCLENBQUMsa0JBQWtC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O1FBQ25ELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhHQXpIVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixvTEFrQ2pCLGlCQUFpQiwwSEFDTyxVQUFVLDZCQW5EbkM7Ozs7Ozs7Ozs7Ozs7O0dBY1Qsa3NCQXRLVSxzQkFBc0I7MkZBd0t0QixpQkFBaUI7a0JBcEI3QixTQUFTOytCQUNFLFdBQVcsbUJBQ0osdUJBQXVCLENBQUMsTUFBTSxZQUVyQzs7Ozs7Ozs7Ozs7Ozs7R0FjVDt1TkFjUSxHQUFHO3NCQUFYLEtBQUs7Z0JBTUcsV0FBVztzQkFBbkIsS0FBSztnQkFPRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csSUFBSTtzQkFBWixLQUFLO2dCQUV3QixpQkFBaUI7c0JBQTlDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUNxQixZQUFZO3NCQUE1RCxTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGRlbGF5LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iU2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJUaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iT3ZlcmxheVNlcnZpY2UgfSBmcm9tICcuLi9jZGsvb3ZlcmxheS9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJPdmVybGF5UmVmLCBOYlBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJy4uL2Nkay9vdmVybGF5L21hcHBpbmcnO1xuXG4vKipcbiAqIHNlYXJjaC1maWVsZC1jb21wb25lbnQgaXMgdXNlZCB1bmRlciB0aGUgaG9vZCBieSBuYi1zZWFyY2ggY29tcG9uZW50XG4gKiBjYW4ndCBiZSB1c2VkIGl0c2VsZlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1zZWFyY2gtZmllbGQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJ3N0eWxlcy9zZWFyY2guY29tcG9uZW50Lm1vZGFsLXpvb21pbi5zY3NzJyxcbiAgICAnc3R5bGVzL3NlYXJjaC5jb21wb25lbnQubGF5b3V0LXJvdGF0ZS5zY3NzJyxcbiAgICAnc3R5bGVzL3NlYXJjaC5jb21wb25lbnQubW9kYWwtbW92ZS5zY3NzJyxcbiAgICAnc3R5bGVzL3NlYXJjaC5jb21wb25lbnQuY3VydGFpbi5zY3NzJyxcbiAgICAnc3R5bGVzL3NlYXJjaC5jb21wb25lbnQuY29sdW1uLWN1cnRhaW4uc2NzcycsXG4gICAgJ3N0eWxlcy9zZWFyY2guY29tcG9uZW50Lm1vZGFsLWRyb3Auc2NzcycsXG4gICAgJ3N0eWxlcy9zZWFyY2guY29tcG9uZW50Lm1vZGFsLWhhbGYuc2NzcycsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiIChrZXl1cC5lc2MpPVwiZW1pdENsb3NlKClcIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImVtaXRDbG9zZSgpXCIgbmJCdXR0b24gZ2hvc3QgY2xhc3M9XCJjbG9zZS1idXR0b25cIj5cbiAgICAgICAgPG5iLWljb24gaWNvbj1cImNsb3NlLW91dGxpbmVcIiBwYWNrPVwibmVidWxhci1lc3NlbnRpYWxzXCI+PC9uYi1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIChrZXl1cC5lbnRlcik9XCJzdWJtaXRTZWFyY2goc2VhcmNoSW5wdXQudmFsdWUpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGVudFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAjc2VhcmNoSW5wdXRcbiAgICAgICAgICAgICAgICAgICAoaW5wdXQpPVwiZW1pdFNlYXJjaElucHV0KHNlYXJjaElucHV0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgICAgKGJsdXIpPVwiZm9jdXNJbnB1dCgpXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb1wiPnt7IGhpbnQgfX08L3NwYW4+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYlNlYXJjaEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9NT0RBTF9aT09NSU4gPSAnbW9kYWwtem9vbWluJztcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEVfUk9UQVRFX0xBWU9VVCA9ICdyb3RhdGUtbGF5b3V0JztcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEVfTU9EQUxfTU9WRSA9ICdtb2RhbC1tb3ZlJztcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQ1VSVEFJTiA9ICdjdXJ0YWluJztcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEVfQ09MVU1OX0NVUlRBSU4gPSAnY29sdW1uLWN1cnRhaW4nO1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9NT0RBTF9EUk9QID0gJ21vZGFsLWRyb3AnO1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRV9NT0RBTF9IQUxGID0gJ21vZGFsLWhhbGYnO1xuXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VhcmNoSW5wdXQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JylcbiAgZ2V0IHNob3dDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaG93O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2RhbC16b29taW4nKVxuICBnZXQgbW9kYWxab29taW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTmJTZWFyY2hGaWVsZENvbXBvbmVudC5UWVBFX01PREFMX1pPT01JTjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mucm90YXRlLWxheW91dCcpXG4gIGdldCByb3RhdGVMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTmJTZWFyY2hGaWVsZENvbXBvbmVudC5UWVBFX1JPVEFURV9MQVlPVVQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vZGFsLW1vdmUnKVxuICBnZXQgbW9kYWxNb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IE5iU2VhcmNoRmllbGRDb21wb25lbnQuVFlQRV9NT0RBTF9NT1ZFO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jdXJ0YWluJylcbiAgZ2V0IGN1cnRhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTmJTZWFyY2hGaWVsZENvbXBvbmVudC5UWVBFX0NVUlRBSU47XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbHVtbi1jdXJ0YWluJylcbiAgZ2V0IGNvbHVtbkN1cnRhaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTmJTZWFyY2hGaWVsZENvbXBvbmVudC5UWVBFX0NPTFVNTl9DVVJUQUlOO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2RhbC1kcm9wJylcbiAgZ2V0IG1vZGFsRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSBOYlNlYXJjaEZpZWxkQ29tcG9uZW50LlRZUEVfTU9EQUxfRFJPUDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9kYWwtaGFsZicpXG4gIGdldCBtb2RhbEhhbGYoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gTmJTZWFyY2hGaWVsZENvbXBvbmVudC5UWVBFX01PREFMX0hBTEY7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyh7IHNob3cgfTogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGJlY2FtZUhpZGRlbiA9ICFzaG93LmlzRmlyc3RDaGFuZ2UoKSAmJiBzaG93LmN1cnJlbnRWYWx1ZSA9PT0gZmFsc2U7XG4gICAgaWYgKGJlY2FtZUhpZGRlbiAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICB9XG5cbiAgZW1pdENsb3NlKCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgc3VibWl0U2VhcmNoKHRlcm0pIHtcbiAgICBpZiAodGVybSkge1xuICAgICAgdGhpcy5zZWFyY2guZW1pdCh0ZXJtKTtcbiAgICB9XG4gIH1cblxuICBlbWl0U2VhcmNoSW5wdXQodGVybTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hJbnB1dC5lbWl0KHRlcm0pO1xuICB9XG5cbiAgZm9jdXNJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5zaG93ICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIE5iU2VhcmNoVHlwZSA9ICdtb2RhbC16b29taW4nIHwgJ3JvdGF0ZS1sYXlvdXQnIHwgJ21vZGFsLW1vdmUnIHxcbiAgJ2N1cnRhaW4nIHwgJ2NvbHVtbi1jdXJ0YWluJyB8ICdtb2RhbC1kcm9wJyB8ICdtb2RhbC1oYWxmJztcblxuLyoqXG4gKiBCZWF1dGlmdWwgZnVsbC1wYWdlIHNlYXJjaCBjb250cm9sLlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2hvd2Nhc2UsIHNlYXJjaC9zZWFyY2gtc2hvd2Nhc2UuY29tcG9uZW50KVxuICpcbiAqIEJhc2ljIHNldHVwOlxuICpcbiAqIGBgYHRzXG4gKiAgPG5iLXNlYXJjaCB0eXBlPVwicm90YXRlLWxheW91dFwiPjwvbmItc2VhcmNoPlxuICogYGBgXG4gKiAjIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogSW1wb3J0IGBOYlNlYXJjaE1vZHVsZWAgdG8geW91ciBmZWF0dXJlIG1vZHVsZS5cbiAqIGBgYHRzXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgLy8gLi4uXG4gKiAgICAgTmJTZWFyY2hNb2R1bGUsXG4gKiAgIF0sXG4gKiB9KVxuICogZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4gKiBgYGBcbiAqICMjIyBVc2FnZVxuICpcbiAqIFNldmVyYWwgYW5pbWF0aW9uIHR5cGVzIGFyZSBhdmFpbGFibGU6XG4gKiBtb2RhbC16b29taW4sIHJvdGF0ZS1sYXlvdXQsIG1vZGFsLW1vdmUsIGN1cnRhaW4sIGNvbHVtbi1jdXJ0YWluLCBtb2RhbC1kcm9wLCBtb2RhbC1oYWxmXG4gKlxuICogSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBoYW5kbGUgc2VhcmNoIGV2ZW50IHVzaW5nIGBOYlNlYXJjaFNlcnZpY2VgOlxuICpcbiAqIEBzdGFja2VkLWV4YW1wbGUoU2VhcmNoIEV2ZW50LCBzZWFyY2gvc2VhcmNoLWV2ZW50LmNvbXBvbmVudClcbiAqXG4gKiBAc3R5bGVzXG4gKlxuICogc2VhcmNoLWJhY2tncm91bmQtY29sb3I6XG4gKiBzZWFyY2gtZGl2aWRlci1jb2xvcjpcbiAqIHNlYXJjaC1kaXZpZGVyLXN0eWxlOlxuICogc2VhcmNoLWRpdmlkZXItd2lkdGg6XG4gKiBzZWFyY2gtZXh0cmEtYmFja2dyb3VuZC1jb2xvcjpcbiAqIHNlYXJjaC10ZXh0LWNvbG9yOlxuICogc2VhcmNoLXRleHQtZm9udC1mYW1pbHk6XG4gKiBzZWFyY2gtdGV4dC1mb250LXNpemU6XG4gKiBzZWFyY2gtdGV4dC1mb250LXdlaWdodDpcbiAqIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OlxuICogc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6XG4gKiBzZWFyY2gtaW5mby10ZXh0LWNvbG9yOlxuICogc2VhcmNoLWluZm8tdGV4dC1mb250LWZhbWlseTpcbiAqIHNlYXJjaC1pbmZvLXRleHQtZm9udC1zaXplOlxuICogc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodDpcbiAqIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLXNlYXJjaCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZVVybHM6IFsnc3R5bGVzL3NlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gI3NlYXJjaEJ1dHRvbiBjbGFzcz1cInN0YXJ0LXNlYXJjaFwiIChjbGljayk9XCJlbWl0QWN0aXZhdGUoKVwiIG5iQnV0dG9uIGdob3N0PlxuICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCIgcGFjaz1cIm5lYnVsYXItZXNzZW50aWFsc1wiPjwvbmItaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bmItc2VhcmNoLWZpZWxkXG4gICAgICAqbmJQb3J0YWxcbiAgICAgIFtzaG93XT1cInNob3dTZWFyY2hGaWVsZFwiXG4gICAgICBbdHlwZV09XCJ0eXBlXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbaGludF09XCJoaW50XCJcbiAgICAgIChzZWFyY2gpPVwic2VhcmNoKCRldmVudClcIlxuICAgICAgKHNlYXJjaElucHV0KT1cImVtaXRJbnB1dCgkZXZlbnQpXCJcbiAgICAgIChjbG9zZSk9XCJlbWl0RGVhY3RpdmF0ZSgpXCI+XG4gICAgPC9uYi1zZWFyY2gtZmllbGQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5iU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE5iT3ZlcmxheVJlZjtcbiAgc2hvd1NlYXJjaEZpZWxkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRhZ3MgYSBzZWFyY2ggd2l0aCBzb21lIElELCBjYW4gYmUgbGF0ZXIgdXNlZCBpbiB0aGUgc2VhcmNoIHNlcnZpY2VcbiAgICogdG8gZGV0ZXJtaW5lIHdoaWNoIHNlYXJjaCBjb21wb25lbnQgdHJpZ2dlcmVkIHRoZSBhY3Rpb24sIGlmIG11bHRpcGxlIHNlYXJjaGVzIGV4aXN0IG9uIHRoZSBwYWdlLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgdGFnOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbnB1dCBwbGFjZWhvbGRlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWFyY2guLi4nO1xuXG4gIC8qKlxuICAgKiBIaW50IHNob3dpbmcgdW5kZXIgdGhlIGlucHV0IGZpZWxkIHRvIGltcHJvdmUgdXNlciBleHBlcmllbmNlXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmcgPSAnSGl0IGVudGVyIHRvIHNlYXJjaCc7XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBkZXNpZ24gdHlwZSwgYXZhaWxhYmxlIHR5cGVzIGFyZVxuICAgKiBtb2RhbC16b29taW4sIHJvdGF0ZS1sYXlvdXQsIG1vZGFsLW1vdmUsIGN1cnRhaW4sIGNvbHVtbi1jdXJ0YWluLCBtb2RhbC1kcm9wLCBtb2RhbC1oYWxmXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBOYlNlYXJjaFR5cGU7XG5cbiAgQFZpZXdDaGlsZChOYlBvcnRhbERpcmVjdGl2ZSkgc2VhcmNoRmllbGRQb3J0YWw6IE5iUG9ydGFsRGlyZWN0aXZlO1xuICBAVmlld0NoaWxkKCdzZWFyY2hCdXR0b24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2VhcmNoQnV0dG9uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlYXJjaFNlcnZpY2U6IE5iU2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogTmJUaGVtZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG92ZXJsYXlTZXJ2aWNlOiBOYk92ZXJsYXlTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oaWRlU2VhcmNoKCkpO1xuXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9uU2VhcmNoQWN0aXZhdGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihkYXRhID0+ICF0aGlzLnRhZyB8fCBkYXRhLnRhZyA9PT0gdGhpcy50YWcpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMub3BlblNlYXJjaCgpKTtcblxuICAgIHRoaXMuc2VhcmNoU2VydmljZS5vblNlYXJjaERlYWN0aXZhdGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihkYXRhID0+ICF0aGlzLnRhZyB8fCBkYXRhLnRhZyA9PT0gdGhpcy50YWcpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGlkZVNlYXJjaCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGF5b3V0Q2xhc3NlcygpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9wZW5TZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheVNlcnZpY2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuc2VhcmNoRmllbGRQb3J0YWwpO1xuICAgIH1cblxuICAgIHRoaXMudGhlbWVTZXJ2aWNlLmFwcGVuZExheW91dENsYXNzKHRoaXMudHlwZSk7XG4gICAgb2JzZXJ2YWJsZU9mKG51bGwpLnBpcGUoZGVsYXkoMCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnRoZW1lU2VydmljZS5hcHBlbmRMYXlvdXRDbGFzcygnd2l0aC1zZWFyY2gnKTtcbiAgICAgIHRoaXMuc2hvd1NlYXJjaEZpZWxkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZVNlYXJjaCgpIHtcbiAgICB0aGlzLnJlbW92ZUxheW91dENsYXNzZXMoKTtcbiAgICB0aGlzLnNob3dTZWFyY2hGaWVsZCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuc2VhcmNoQnV0dG9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHNlYXJjaCh0ZXJtKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnN1Ym1pdFNlYXJjaCh0ZXJtLCB0aGlzLnRhZyk7XG4gICAgdGhpcy5oaWRlU2VhcmNoKCk7XG4gIH1cblxuICBlbWl0SW5wdXQodGVybTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaElucHV0KHRlcm0sIHRoaXMudGFnKTtcbiAgfVxuXG4gIGVtaXRBY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuYWN0aXZhdGVTZWFyY2godGhpcy50eXBlLCB0aGlzLnRhZyk7XG4gIH1cblxuICBlbWl0RGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnNlYXJjaFNlcnZpY2UuZGVhY3RpdmF0ZVNlYXJjaCh0aGlzLnR5cGUsIHRoaXMudGFnKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGF5b3V0Q2xhc3NlcygpIHtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5yZW1vdmVMYXlvdXRDbGFzcygnd2l0aC1zZWFyY2gnKTtcbiAgICBvYnNlcnZhYmxlT2YobnVsbCkucGlwZShkZWxheSg1MDApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy50aGVtZVNlcnZpY2UucmVtb3ZlTGF5b3V0Q2xhc3ModGhpcy50eXBlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19