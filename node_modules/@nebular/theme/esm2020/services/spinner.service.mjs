/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable, Inject } from '@angular/core';
import { NB_DOCUMENT } from '../theme.options';
import * as i0 from "@angular/core";
/**
 * Service to control the global page spinner.
 */
export class NbSpinnerService {
    constructor(document) {
        this.document = document;
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    registerLoader(method) {
        this.loaders.push(method);
    }
    /**
     * Clears the list of loader
     */
    clear() {
        this.loaders = [];
    }
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    load() {
        this.showSpinner();
        this.executeAll();
    }
    executeAll(done = (values) => { }) {
        Promise.all(this.loaders).then((values) => {
            this.hideSpinner();
            done.call(null, values);
        })
            .catch((error) => {
            // TODO: Promise.reject
            console.error(error);
        });
    }
    // TODO is there any better way of doing this?
    showSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    }
    hideSpinner() {
        const el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    }
    getSpinnerElement() {
        return this.document.getElementById(this.selector);
    }
}
NbSpinnerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerService, deps: [{ token: NB_DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NbSpinnerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbSpinnerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9zZXJ2aWNlcy9zcGlubmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFL0M7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQXlDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBSHpDLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBVyxtQkFBbUIsQ0FBQztJQUVLLENBQUM7SUFFckQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxNQUFvQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2YsdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOENBQThDO0lBQ3RDLFdBQVc7UUFDakIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDcEMsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3BDLElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OzZHQTNEVSxnQkFBZ0Isa0JBS1AsV0FBVztpSEFMcEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVU7OzBCQU1JLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkJfRE9DVU1FTlQgfSBmcm9tICcuLi90aGVtZS5vcHRpb25zJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNvbnRyb2wgdGhlIGdsb2JhbCBwYWdlIHNwaW5uZXIuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYlNwaW5uZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGxvYWRlcnM6IFByb21pc2U8YW55PltdID0gW107XG4gIHByaXZhdGUgc2VsZWN0b3I6IHN0cmluZyA9ICduYi1nbG9iYWwtc3Bpbm5lcic7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOQl9ET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCkge31cblxuICAvKipcbiAgICogQXBwZW5kcyBuZXcgbG9hZGVyIHRvIHRoZSBsaXN0IG9mIGxvYWRlciB0byBiZSBjb21wbGV0ZWQgYmVmb3JlXG4gICAqIHNwaW5uZXIgd2lsbCBiZSBoaWRkZW5cbiAgICogQHBhcmFtIG1ldGhvZCBQcm9taXNlPGFueT5cbiAgICovXG4gIHJlZ2lzdGVyTG9hZGVyKG1ldGhvZDogUHJvbWlzZTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZXJzLnB1c2gobWV0aG9kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGxpc3Qgb2YgbG9hZGVyXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRlcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgbG9hZGVyIHByb2Nlc3MsIHNob3cgc3Bpbm5kZXIgYW5kIGV4ZWN1dGUgbG9hZGVyc1xuICAgKi9cbiAgbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dTcGlubmVyKCk7XG4gICAgdGhpcy5leGVjdXRlQWxsKCk7XG4gIH1cblxuICBwcml2YXRlIGV4ZWN1dGVBbGwoZG9uZSA9ICh2YWx1ZXMpID0+IHt9KTogdm9pZCB7XG4gICAgUHJvbWlzZS5hbGwodGhpcy5sb2FkZXJzKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgIHRoaXMuaGlkZVNwaW5uZXIoKTtcbiAgICAgIGRvbmUuY2FsbChudWxsLCB2YWx1ZXMpO1xuICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IFByb21pc2UucmVqZWN0XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBUT0RPIGlzIHRoZXJlIGFueSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXM/XG4gIHByaXZhdGUgc2hvd1NwaW5uZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmdldFNwaW5uZXJFbGVtZW50KCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZVsnZGlzcGxheSddID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZGVTcGlubmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5nZXRTcGlubmVyRWxlbWVudCgpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGVbJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNwaW5uZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2VsZWN0b3IpO1xuICB9XG59XG4iXX0=