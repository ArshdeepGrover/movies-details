import { Injectable } from '@angular/core';
import { filter, takeUntil, distinctUntilChanged, take } from 'rxjs/operators';
import { Subject, BehaviorSubject, merge } from 'rxjs';
import { createContainer, patch } from '../overlay-service';
import * as i0 from "@angular/core";
import * as i1 from "../overlay-service";
import * as i2 from "../mapping";
export class NbDynamicOverlay {
    constructor(overlay, componentFactoryResolver, zone, overlayContainer) {
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.zone = zone;
        this.overlayContainer = overlayContainer;
        this.context = {};
        this.overlayConfig = {};
        this.disabled = false;
        this.positionStrategyChange$ = new Subject();
        this.isShown$ = new BehaviorSubject(false);
        this.destroy$ = new Subject();
        this.overlayDestroy$ = new Subject();
    }
    get isAttached() {
        return this.ref && this.ref.hasAttached();
    }
    get isShown() {
        return this.isShown$.pipe(distinctUntilChanged());
    }
    create(componentType, content, context, positionStrategy, overlayConfig = {}, disabled = false) {
        this.setContentAndContext(content, context);
        this.setComponent(componentType);
        this.setPositionStrategy(positionStrategy);
        this.setOverlayConfig(overlayConfig);
        this.setDisabled(disabled);
        return this;
    }
    setContent(content) {
        this.content = content;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContext(context) {
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setContentAndContext(content, context) {
        this.content = content;
        this.context = context;
        if (this.container) {
            this.updateContext();
        }
        this.updatePosition();
    }
    setComponent(componentType) {
        this.componentType = componentType;
        // in case the component is shown we recreate it and show it back
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    setPositionStrategy(positionStrategy) {
        this.positionStrategyChange$.next();
        this.positionStrategy = positionStrategy;
        this.positionStrategy.positionChange
            .pipe(filter(() => !!this.container), takeUntil(merge(this.positionStrategyChange$, this.destroy$)))
            .subscribe((position) => {
            this.lastAppliedPosition = position;
            patch(this.container, { position });
        });
        if (this.ref) {
            this.ref.updatePositionStrategy(this.positionStrategy);
        }
    }
    setOverlayConfig(overlayConfig) {
        this.overlayConfig = overlayConfig;
        const wasAttached = this.isAttached;
        this.disposeOverlayRef();
        if (wasAttached) {
            this.show();
        }
    }
    setDisabled(disabled) {
        if (disabled && this.isShown$.value) {
            this.hide();
        }
        this.disabled = disabled;
    }
    show() {
        if (this.disabled) {
            return;
        }
        if (!this.ref) {
            this.createOverlay();
        }
        this.renderContainer();
        if (!this.hasOverlayInContainer()) {
            // Dispose overlay ref as it refers to the old overlay container and create new by calling `show`
            this.disposeOverlayRef();
            return this.show();
        }
        this.isShown$.next(true);
    }
    hide() {
        if (!this.ref) {
            return;
        }
        this.ref.detach();
        this.container = null;
        this.isShown$.next(false);
    }
    toggle() {
        if (this.isAttached) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    dispose() {
        this.destroy$.next();
        this.destroy$.complete();
        this.hide();
        this.disposeOverlayRef();
        this.isShown$.complete();
        this.positionStrategyChange$.complete();
        this.overlayDestroy$.complete();
    }
    getContainer() {
        return this.container;
    }
    createOverlay() {
        this.ref = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            ...this.overlayConfig,
        });
        this.updatePositionWhenStable(this.ref);
    }
    renderContainer() {
        const containerContext = this.createContainerContext();
        if (!this.container) {
            this.container = createContainer(this.ref, this.componentType, containerContext, this.componentFactoryResolver);
        }
        this.container.instance.renderContent();
    }
    updateContext() {
        const containerContext = this.createContainerContext();
        Object.assign(this.container.instance, containerContext);
        this.container.instance.renderContent();
        this.container.changeDetectorRef.detectChanges();
    }
    createContainerContext() {
        return {
            content: this.content,
            context: this.context,
            cfr: this.componentFactoryResolver,
            position: this.lastAppliedPosition,
        };
    }
    /**
     * Dimensions of the container may change after content update. So we listen to zone.stable event to
     * reposition the container.
     */
    updatePositionWhenStable(overlay) {
        const overlayDestroy$ = this.overlayDestroy$.pipe(filter((destroyedOverlay) => destroyedOverlay === overlay));
        this.zone.onStable.pipe(take(1), takeUntil(merge(this.destroy$, overlayDestroy$))).subscribe(() => this.updatePosition());
    }
    updatePosition() {
        if (this.ref) {
            this.ref.updatePosition();
        }
    }
    hasOverlayInContainer() {
        return this.overlayContainer.getContainerElement().contains(this.ref.hostElement);
    }
    disposeOverlayRef() {
        if (this.ref) {
            this.ref.dispose();
            this.overlayDestroy$.next(this.ref);
            this.ref = null;
            this.container = null;
        }
    }
}
NbDynamicOverlay.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlay, deps: [{ token: i1.NbOverlayService }, { token: i0.ComponentFactoryResolver }, { token: i0.NgZone }, { token: i2.NbOverlayContainer }], target: i0.ɵɵFactoryTarget.Injectable });
NbDynamicOverlay.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlay });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlay, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbOverlayService }, { type: i0.ComponentFactoryResolver }, { type: i0.NgZone }, { type: i2.NbOverlayContainer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1vdmVybGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay9vdmVybGF5L2R5bmFtaWMvZHluYW1pYy1vdmVybGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMEMsVUFBVSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBYyxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLbkUsT0FBTyxFQUFFLGVBQWUsRUFBc0MsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFXaEcsTUFBTSxPQUFPLGdCQUFnQjtJQXdCM0IsWUFDWSxPQUF5QixFQUN6Qix3QkFBa0QsRUFDbEQsSUFBWSxFQUNaLGdCQUFvQztRQUhwQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBeEJ0QyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLGtCQUFhLEdBQW9CLEVBQUUsQ0FBQztRQUVwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLDRCQUF1QixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQy9DLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQWdCLENBQUM7SUFlckQsQ0FBQztJQWJKLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBU0QsTUFBTSxDQUNKLGFBQTBDLEVBQzFDLE9BQXlCLEVBQ3pCLE9BQWUsRUFDZixnQkFBdUQsRUFDdkQsZ0JBQWlDLEVBQUUsRUFDbkMsUUFBUSxHQUFHLEtBQUs7UUFFaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF5QjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxPQUF5QixFQUFFLE9BQWU7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWSxDQUFDLGFBQTBDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRW5DLGlFQUFpRTtRQUNqRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsZ0JBQXVEO1FBQ3pFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWM7YUFDakMsSUFBSSxDQUNILE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUM5QixTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDOUQ7YUFDQSxTQUFTLENBQUMsQ0FBQyxRQUFvQixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQztZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLGFBQThCO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBRW5DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsUUFBaUI7UUFDM0IsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDakMsaUdBQWlHO1lBQ2pHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRVMsYUFBYTtRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzdCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFO1lBQzFELEdBQUcsSUFBSSxDQUFDLGFBQWE7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVMsZUFBZTtRQUN2QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUNqSDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFUyxhQUFhO1FBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVTLHNCQUFzQjtRQUM5QixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLHdCQUF3QixDQUFDLE9BQXFCO1FBQ3RELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsQ0FBQyxnQkFBOEIsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLEtBQUssT0FBTyxDQUFDLENBQ3pFLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzVILENBQUM7SUFFUyxjQUFjO1FBQ3RCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVTLGlCQUFpQjtRQUN6QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtJQUNILENBQUM7OzZHQTlPVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIE5nWm9uZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOYkFkanVzdGFibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LCBOYlBvc2l0aW9uIH0gZnJvbSAnLi4vb3ZlcmxheS1wb3NpdGlvbic7XG5cbmltcG9ydCB7IE5iUmVuZGVyYWJsZUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lciwgTmJPdmVybGF5Q29udGVudCwgTmJPdmVybGF5U2VydmljZSwgcGF0Y2ggfSBmcm9tICcuLi9vdmVybGF5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTmJPdmVybGF5UmVmLCBOYk92ZXJsYXlDb250YWluZXIsIE5iT3ZlcmxheUNvbmZpZyB9IGZyb20gJy4uL21hcHBpbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5iRHluYW1pY092ZXJsYXlDb250cm9sbGVyIHtcbiAgc2hvdygpO1xuICBoaWRlKCk7XG4gIHRvZ2dsZSgpO1xuICByZWJ1aWxkKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkR5bmFtaWNPdmVybGF5IHtcbiAgcHJvdGVjdGVkIHJlZjogTmJPdmVybGF5UmVmO1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBDb21wb25lbnRSZWY8TmJSZW5kZXJhYmxlQ29udGFpbmVyPjtcbiAgcHJvdGVjdGVkIGNvbXBvbmVudFR5cGU6IFR5cGU8TmJSZW5kZXJhYmxlQ29udGFpbmVyPjtcbiAgcHJvdGVjdGVkIGNvbnRleHQ6IE9iamVjdCA9IHt9O1xuICBwcm90ZWN0ZWQgY29udGVudDogTmJPdmVybGF5Q29udGVudDtcbiAgcHJvdGVjdGVkIHBvc2l0aW9uU3RyYXRlZ3k6IE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByb3RlY3RlZCBvdmVybGF5Q29uZmlnOiBOYk92ZXJsYXlDb25maWcgPSB7fTtcbiAgcHJvdGVjdGVkIGxhc3RBcHBsaWVkUG9zaXRpb246IE5iUG9zaXRpb247XG4gIHByb3RlY3RlZCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBwb3NpdGlvblN0cmF0ZWd5Q2hhbmdlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBpc1Nob3duJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgb3ZlcmxheURlc3Ryb3kkID0gbmV3IFN1YmplY3Q8TmJPdmVybGF5UmVmPigpO1xuXG4gIGdldCBpc0F0dGFjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlZiAmJiB0aGlzLnJlZi5oYXNBdHRhY2hlZCgpO1xuICB9XG5cbiAgZ2V0IGlzU2hvd24oKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaXNTaG93biQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvdmVybGF5OiBOYk92ZXJsYXlTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBvdmVybGF5Q29udGFpbmVyOiBOYk92ZXJsYXlDb250YWluZXIsXG4gICkge31cblxuICBjcmVhdGUoXG4gICAgY29tcG9uZW50VHlwZTogVHlwZTxOYlJlbmRlcmFibGVDb250YWluZXI+LFxuICAgIGNvbnRlbnQ6IE5iT3ZlcmxheUNvbnRlbnQsXG4gICAgY29udGV4dDogT2JqZWN0LFxuICAgIHBvc2l0aW9uU3RyYXRlZ3k6IE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgb3ZlcmxheUNvbmZpZzogTmJPdmVybGF5Q29uZmlnID0ge30sXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgKSB7XG4gICAgdGhpcy5zZXRDb250ZW50QW5kQ29udGV4dChjb250ZW50LCBjb250ZXh0KTtcbiAgICB0aGlzLnNldENvbXBvbmVudChjb21wb25lbnRUeXBlKTtcbiAgICB0aGlzLnNldFBvc2l0aW9uU3RyYXRlZ3kocG9zaXRpb25TdHJhdGVneSk7XG4gICAgdGhpcy5zZXRPdmVybGF5Q29uZmlnKG92ZXJsYXlDb25maWcpO1xuICAgIHRoaXMuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQ6IE5iT3ZlcmxheUNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRleHQoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0OiBPYmplY3QpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRleHQoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgc2V0Q29udGVudEFuZENvbnRleHQoY29udGVudDogTmJPdmVybGF5Q29udGVudCwgY29udGV4dDogT2JqZWN0KSB7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy51cGRhdGVDb250ZXh0KCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIHNldENvbXBvbmVudChjb21wb25lbnRUeXBlOiBUeXBlPE5iUmVuZGVyYWJsZUNvbnRhaW5lcj4pIHtcbiAgICB0aGlzLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlO1xuXG4gICAgLy8gaW4gY2FzZSB0aGUgY29tcG9uZW50IGlzIHNob3duIHdlIHJlY3JlYXRlIGl0IGFuZCBzaG93IGl0IGJhY2tcbiAgICBjb25zdCB3YXNBdHRhY2hlZCA9IHRoaXMuaXNBdHRhY2hlZDtcbiAgICB0aGlzLmRpc3Bvc2VPdmVybGF5UmVmKCk7XG4gICAgaWYgKHdhc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBzZXRQb3NpdGlvblN0cmF0ZWd5KHBvc2l0aW9uU3RyYXRlZ3k6IE5iQWRqdXN0YWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpIHtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3lDaGFuZ2UkLm5leHQoKTtcblxuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHBvc2l0aW9uU3RyYXRlZ3k7XG5cbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmNvbnRhaW5lciksXG4gICAgICAgIHRha2VVbnRpbChtZXJnZSh0aGlzLnBvc2l0aW9uU3RyYXRlZ3lDaGFuZ2UkLCB0aGlzLmRlc3Ryb3kkKSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChwb3NpdGlvbjogTmJQb3NpdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmxhc3RBcHBsaWVkUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgcGF0Y2godGhpcy5jb250YWluZXIsIHsgcG9zaXRpb24gfSk7XG4gICAgICB9KTtcblxuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYudXBkYXRlUG9zaXRpb25TdHJhdGVneSh0aGlzLnBvc2l0aW9uU3RyYXRlZ3kpO1xuICAgIH1cbiAgfVxuXG4gIHNldE92ZXJsYXlDb25maWcob3ZlcmxheUNvbmZpZzogTmJPdmVybGF5Q29uZmlnKSB7XG4gICAgdGhpcy5vdmVybGF5Q29uZmlnID0gb3ZlcmxheUNvbmZpZztcblxuICAgIGNvbnN0IHdhc0F0dGFjaGVkID0gdGhpcy5pc0F0dGFjaGVkO1xuICAgIHRoaXMuZGlzcG9zZU92ZXJsYXlSZWYoKTtcbiAgICBpZiAod2FzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGRpc2FibGVkICYmIHRoaXMuaXNTaG93biQudmFsdWUpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5KCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJDb250YWluZXIoKTtcblxuICAgIGlmICghdGhpcy5oYXNPdmVybGF5SW5Db250YWluZXIoKSkge1xuICAgICAgLy8gRGlzcG9zZSBvdmVybGF5IHJlZiBhcyBpdCByZWZlcnMgdG8gdGhlIG9sZCBvdmVybGF5IGNvbnRhaW5lciBhbmQgY3JlYXRlIG5ldyBieSBjYWxsaW5nIGBzaG93YFxuICAgICAgdGhpcy5kaXNwb3NlT3ZlcmxheVJlZigpO1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuaXNTaG93biQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcblxuICAgIHRoaXMuaXNTaG93biQubmV4dChmYWxzZSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHRoaXMuZGlzcG9zZU92ZXJsYXlSZWYoKTtcbiAgICB0aGlzLmlzU2hvd24kLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5Q2hhbmdlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub3ZlcmxheURlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnZXRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXG4gICAgICAuLi50aGlzLm92ZXJsYXlDb25maWcsXG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbldoZW5TdGFibGUodGhpcy5yZWYpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXJDb250ZXh0ID0gdGhpcy5jcmVhdGVDb250YWluZXJDb250ZXh0KCk7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjcmVhdGVDb250YWluZXIodGhpcy5yZWYsIHRoaXMuY29tcG9uZW50VHlwZSwgY29udGFpbmVyQ29udGV4dCwgdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRhaW5lci5pbnN0YW5jZS5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250YWluZXJDb250ZXh0ID0gdGhpcy5jcmVhdGVDb250YWluZXJDb250ZXh0KCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRhaW5lci5pbnN0YW5jZSwgY29udGFpbmVyQ29udGV4dCk7XG4gICAgdGhpcy5jb250YWluZXIuaW5zdGFuY2UucmVuZGVyQ29udGVudCgpO1xuICAgIHRoaXMuY29udGFpbmVyLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDb250YWluZXJDb250ZXh0KCk6IE9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgIGNmcjogdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwb3NpdGlvbjogdGhpcy5sYXN0QXBwbGllZFBvc2l0aW9uLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGltZW5zaW9ucyBvZiB0aGUgY29udGFpbmVyIG1heSBjaGFuZ2UgYWZ0ZXIgY29udGVudCB1cGRhdGUuIFNvIHdlIGxpc3RlbiB0byB6b25lLnN0YWJsZSBldmVudCB0b1xuICAgKiByZXBvc2l0aW9uIHRoZSBjb250YWluZXIuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlUG9zaXRpb25XaGVuU3RhYmxlKG92ZXJsYXk6IE5iT3ZlcmxheVJlZikge1xuICAgIGNvbnN0IG92ZXJsYXlEZXN0cm95JCA9IHRoaXMub3ZlcmxheURlc3Ryb3kkLnBpcGUoXG4gICAgICBmaWx0ZXIoKGRlc3Ryb3llZE92ZXJsYXk6IE5iT3ZlcmxheVJlZikgPT4gZGVzdHJveWVkT3ZlcmxheSA9PT0gb3ZlcmxheSksXG4gICAgKTtcblxuICAgIHRoaXMuem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSksIHRha2VVbnRpbChtZXJnZSh0aGlzLmRlc3Ryb3kkLCBvdmVybGF5RGVzdHJveSQpKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUG9zaXRpb24oKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMucmVmKSB7XG4gICAgICB0aGlzLnJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNPdmVybGF5SW5Db250YWluZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuY29udGFpbnModGhpcy5yZWYuaG9zdEVsZW1lbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3Bvc2VPdmVybGF5UmVmKCkge1xuICAgIGlmICh0aGlzLnJlZikge1xuICAgICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5vdmVybGF5RGVzdHJveSQubmV4dCh0aGlzLnJlZik7XG4gICAgICB0aGlzLnJlZiA9IG51bGw7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=