import { Injectable, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { NbTrigger } from '../overlay-trigger';
import { NbAdjustment, NbPosition, } from '../overlay-position';
import * as i0 from "@angular/core";
import * as i1 from "../overlay-position";
import * as i2 from "../overlay-trigger";
import * as i3 from "./dynamic-overlay";
import * as i4 from "../../../../services/direction.service";
export class NbDynamicOverlayChange extends SimpleChange {
    constructor(previousValue, currentValue, firstChange = false) {
        super(previousValue, currentValue, firstChange);
    }
    isChanged() {
        return this.currentValue !== this.previousValue;
    }
}
export class NbDynamicOverlayHandler {
    constructor(positionBuilder, triggerStrategyBuilder, dynamicOverlayService, directionService) {
        this.positionBuilder = positionBuilder;
        this.triggerStrategyBuilder = triggerStrategyBuilder;
        this.dynamicOverlayService = dynamicOverlayService;
        this.directionService = directionService;
        this._context = {};
        this._trigger = NbTrigger.NOOP;
        this._disabled = false;
        this._position = NbPosition.TOP;
        this._adjustment = NbAdjustment.NOOP;
        this._offset = 15;
        this._overlayConfig = {};
        this.changes = {};
        this.destroy$ = new Subject();
    }
    host(host) {
        this.changes.host = new NbDynamicOverlayChange(this._host, host);
        this._host = host;
        return this;
    }
    trigger(trigger) {
        this.changes.trigger = new NbDynamicOverlayChange(this._trigger, trigger);
        this._trigger = trigger;
        return this;
    }
    disabled(disabled) {
        this.changes.disabled = new NbDynamicOverlayChange(this._disabled, disabled);
        this._disabled = disabled;
        return this;
    }
    position(position) {
        this.changes.position = new NbDynamicOverlayChange(this._position, position);
        this._position = position;
        return this;
    }
    adjustment(adjustment) {
        this.changes.adjustment = new NbDynamicOverlayChange(this._adjustment, adjustment);
        this._adjustment = adjustment;
        return this;
    }
    componentType(componentType) {
        this.changes.componentType = new NbDynamicOverlayChange(this._componentType, componentType);
        this._componentType = componentType;
        return this;
    }
    content(content) {
        this.changes.content = new NbDynamicOverlayChange(this._content, content);
        this._content = content;
        return this;
    }
    context(context) {
        this.changes.context = new NbDynamicOverlayChange(this._context, context);
        this._context = context;
        return this;
    }
    offset(offset) {
        this.changes.offset = new NbDynamicOverlayChange(this._offset, offset);
        this._offset = offset;
        return this;
    }
    overlayConfig(overlayConfig) {
        this.changes.overlayConfig = new NbDynamicOverlayChange(this._overlayConfig, overlayConfig);
        this._overlayConfig = overlayConfig;
        return this;
    }
    build() {
        if (!this._componentType || !this._host) {
            throw Error(`NbDynamicOverlayHandler: at least 'componentType' and 'host' should be
      passed before building a dynamic overlay.`);
        }
        this.dynamicOverlay = this.dynamicOverlayService.create(this._componentType, this._content, this._context, this.createPositionStrategy(), this._overlayConfig, this._disabled);
        this.connect();
        this.clearChanges();
        return this.dynamicOverlay;
    }
    rebuild() {
        /**
         * we should not throw here
         * as we use rebuilt in lifecycle hooks
         * which it could be called before the build
         * so we just ignore this call
         */
        if (!this.dynamicOverlay) {
            return undefined;
        }
        if (this.isPositionStrategyUpdateRequired()) {
            this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy());
        }
        if (this.isTriggerStrategyUpdateRequired()) {
            this.connect();
        }
        if (this.isContainerRerenderRequired()) {
            this.dynamicOverlay.setContentAndContext(this._content, this._context);
        }
        if (this.isComponentTypeUpdateRequired()) {
            this.dynamicOverlay.setComponent(this._componentType);
        }
        if (this.isOverlayConfigUpdateRequired()) {
            this.dynamicOverlay.setOverlayConfig(this._overlayConfig);
        }
        if (this.isDisabledUpdated()) {
            this.dynamicOverlay.setDisabled(this._disabled);
        }
        this.clearChanges();
        return this.dynamicOverlay;
    }
    connect() {
        if (!this.dynamicOverlay) {
            throw new Error(`NbDynamicOverlayHandler: cannot connect to DynamicOverlay
      as it is not created yet. Call build() first`);
        }
        this.disconnect();
        this.subscribeOnTriggers(this.dynamicOverlay);
        this.subscribeOnDirectionChange();
    }
    disconnect() {
        if (this.triggerStrategy) {
            this.triggerStrategy.destroy();
        }
    }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.disconnect();
        this.clearChanges();
        if (this.dynamicOverlay) {
            this.dynamicOverlay.dispose();
        }
    }
    createPositionStrategy() {
        return this.positionBuilder
            .connectedTo(this._host)
            .position(this._position)
            .adjustment(this._adjustment)
            .offset(this._offset)
            .direction(this.directionService.getDirection());
    }
    subscribeOnTriggers(dynamicOverlay) {
        this.triggerStrategy = this.triggerStrategyBuilder
            .trigger(this._trigger)
            .host(this._host.nativeElement)
            .container(() => dynamicOverlay.getContainer())
            .build();
        this.triggerStrategy.show$.subscribe(() => dynamicOverlay.show());
        this.triggerStrategy.hide$.subscribe(() => dynamicOverlay.hide());
    }
    subscribeOnDirectionChange() {
        this.directionService
            .onDirectionChange()
            .pipe(skip(1), takeUntil(this.destroy$))
            .subscribe(() => {
            this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy());
        });
    }
    isContainerRerenderRequired() {
        return this.isContentUpdated() || this.isContextUpdated() || this.isPositionStrategyUpdateRequired();
    }
    isPositionStrategyUpdateRequired() {
        return this.isAdjustmentUpdated() || this.isPositionUpdated() || this.isOffsetUpdated() || this.isHostUpdated();
    }
    isTriggerStrategyUpdateRequired() {
        return this.isTriggerUpdated() || this.isHostUpdated();
    }
    isComponentTypeUpdateRequired() {
        return this.isComponentTypeUpdated();
    }
    isOverlayConfigUpdateRequired() {
        return this.isOverlayConfigUpdated();
    }
    isComponentTypeUpdated() {
        return this.changes.componentType && this.changes.componentType.isChanged();
    }
    isContentUpdated() {
        return this.changes.content && this.changes.content.isChanged();
    }
    isContextUpdated() {
        return this.changes.context && this.changes.context.isChanged();
    }
    isAdjustmentUpdated() {
        return this.changes.adjustment && this.changes.adjustment.isChanged();
    }
    isPositionUpdated() {
        return this.changes.position && this.changes.position.isChanged();
    }
    isHostUpdated() {
        return this.changes.host && this.changes.host.isChanged();
    }
    isTriggerUpdated() {
        return this.changes.trigger && this.changes.trigger.isChanged();
    }
    isOffsetUpdated() {
        return this.changes.offset && this.changes.offset.isChanged();
    }
    isOverlayConfigUpdated() {
        return this.changes.overlayConfig && this.changes.overlayConfig.isChanged();
    }
    isDisabledUpdated() {
        return this.changes.disabled && this.changes.disabled.isChanged();
    }
    clearChanges() {
        this.changes = {};
    }
}
NbDynamicOverlayHandler.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlayHandler, deps: [{ token: i1.NbPositionBuilderService }, { token: i2.NbTriggerStrategyBuilderService }, { token: i3.NbDynamicOverlay }, { token: i4.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Injectable });
NbDynamicOverlayHandler.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlayHandler });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbDynamicOverlayHandler, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbPositionBuilderService }, { type: i2.NbTriggerStrategyBuilderService }, { type: i3.NbDynamicOverlay }, { type: i4.NbLayoutDirectionService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1vdmVybGF5LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL2NvbXBvbmVudHMvY2RrL292ZXJsYXkvZHluYW1pYy9keW5hbWljLW92ZXJsYXktaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFlBQVksRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLFNBQVMsRUFBc0QsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsR0FFWCxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUFPN0IsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFlBQVk7SUFDdEQsWUFBWSxhQUFrQixFQUFFLFlBQWlCLEVBQUUsY0FBdUIsS0FBSztRQUM3RSxLQUFLLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQUdELE1BQU0sT0FBTyx1QkFBdUI7SUFxQmxDLFlBQ1UsZUFBeUMsRUFDekMsc0JBQXVELEVBQ3ZELHFCQUF1QyxFQUN2QyxnQkFBMEM7UUFIMUMsb0JBQWUsR0FBZixlQUFlLENBQTBCO1FBQ3pDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUM7UUFDdkQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFrQjtRQUN2QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTBCO1FBdEIxQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGFB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VSx1QkFBdUI7d0hBQXZCLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQURuQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgU2ltcGxlQ2hhbmdlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBza2lwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE5iVHJpZ2dlciwgTmJUcmlnZ2VyU3RyYXRlZ3ksIE5iVHJpZ2dlclN0cmF0ZWd5QnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9vdmVybGF5LXRyaWdnZXInO1xuaW1wb3J0IHtcbiAgTmJBZGp1c3RhYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgTmJBZGp1c3RtZW50LFxuICBOYlBvc2l0aW9uLFxuICBOYlBvc2l0aW9uQnVpbGRlclNlcnZpY2UsXG59IGZyb20gJy4uL292ZXJsYXktcG9zaXRpb24nO1xuaW1wb3J0IHsgTmJSZW5kZXJhYmxlQ29udGFpbmVyIH0gZnJvbSAnLi4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgTmJPdmVybGF5Q29udGVudCB9IGZyb20gJy4uL292ZXJsYXktc2VydmljZSc7XG5pbXBvcnQgeyBOYkR5bmFtaWNPdmVybGF5IH0gZnJvbSAnLi9keW5hbWljLW92ZXJsYXknO1xuaW1wb3J0IHsgTmJPdmVybGF5Q29uZmlnIH0gZnJvbSAnLi4vbWFwcGluZyc7XG5pbXBvcnQgeyBOYkxheW91dERpcmVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9kaXJlY3Rpb24uc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBOYkR5bmFtaWNPdmVybGF5Q2hhbmdlIGV4dGVuZHMgU2ltcGxlQ2hhbmdlIHtcbiAgY29uc3RydWN0b3IocHJldmlvdXNWYWx1ZTogYW55LCBjdXJyZW50VmFsdWU6IGFueSwgZmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHN1cGVyKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UpO1xuICB9XG5cbiAgaXNDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYkR5bmFtaWNPdmVybGF5SGFuZGxlciB7XG4gIHByb3RlY3RlZCBfY29tcG9uZW50VHlwZTogVHlwZTxOYlJlbmRlcmFibGVDb250YWluZXI+O1xuICBwcm90ZWN0ZWQgX2hvc3Q6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCBfY29udGV4dDogT2JqZWN0ID0ge307XG4gIHByb3RlY3RlZCBfY29udGVudDogTmJPdmVybGF5Q29udGVudDtcbiAgcHJvdGVjdGVkIF90cmlnZ2VyOiBOYlRyaWdnZXIgPSBOYlRyaWdnZXIuTk9PUDtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3Bvc2l0aW9uOiBOYlBvc2l0aW9uID0gTmJQb3NpdGlvbi5UT1A7XG4gIHByb3RlY3RlZCBfYWRqdXN0bWVudDogTmJBZGp1c3RtZW50ID0gTmJBZGp1c3RtZW50Lk5PT1A7XG4gIHByb3RlY3RlZCBfb2Zmc2V0OiBudW1iZXIgPSAxNTtcbiAgcHJvdGVjdGVkIF9vdmVybGF5Q29uZmlnOiBOYk92ZXJsYXlDb25maWcgPSB7fTtcblxuICBwcm90ZWN0ZWQgZHluYW1pY092ZXJsYXk6IE5iRHluYW1pY092ZXJsYXk7XG4gIHByb3RlY3RlZCB0cmlnZ2VyU3RyYXRlZ3k6IE5iVHJpZ2dlclN0cmF0ZWd5O1xuXG4gIHByb3RlY3RlZCBwb3NpdGlvblN0cmF0ZWd5OiBOYkFkanVzdGFibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuXG4gIHByb3RlY3RlZCBjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IE5iRHluYW1pY092ZXJsYXlDaGFuZ2UgfSA9IHt9O1xuXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkJ1aWxkZXI6IE5iUG9zaXRpb25CdWlsZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHRyaWdnZXJTdHJhdGVneUJ1aWxkZXI6IE5iVHJpZ2dlclN0cmF0ZWd5QnVpbGRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkeW5hbWljT3ZlcmxheVNlcnZpY2U6IE5iRHluYW1pY092ZXJsYXksXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb25TZXJ2aWNlOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UsXG4gICkge31cblxuICBob3N0KGhvc3Q6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNoYW5nZXMuaG9zdCA9IG5ldyBOYkR5bmFtaWNPdmVybGF5Q2hhbmdlKHRoaXMuX2hvc3QsIGhvc3QpO1xuICAgIHRoaXMuX2hvc3QgPSBob3N0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdHJpZ2dlcih0cmlnZ2VyOiBOYlRyaWdnZXIpIHtcbiAgICB0aGlzLmNoYW5nZXMudHJpZ2dlciA9IG5ldyBOYkR5bmFtaWNPdmVybGF5Q2hhbmdlKHRoaXMuX3RyaWdnZXIsIHRyaWdnZXIpO1xuICAgIHRoaXMuX3RyaWdnZXIgPSB0cmlnZ2VyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZXMuZGlzYWJsZWQgPSBuZXcgTmJEeW5hbWljT3ZlcmxheUNoYW5nZSh0aGlzLl9kaXNhYmxlZCwgZGlzYWJsZWQpO1xuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwb3NpdGlvbihwb3NpdGlvbjogTmJQb3NpdGlvbikge1xuICAgIHRoaXMuY2hhbmdlcy5wb3NpdGlvbiA9IG5ldyBOYkR5bmFtaWNPdmVybGF5Q2hhbmdlKHRoaXMuX3Bvc2l0aW9uLCBwb3NpdGlvbik7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkanVzdG1lbnQoYWRqdXN0bWVudDogTmJBZGp1c3RtZW50KSB7XG4gICAgdGhpcy5jaGFuZ2VzLmFkanVzdG1lbnQgPSBuZXcgTmJEeW5hbWljT3ZlcmxheUNoYW5nZSh0aGlzLl9hZGp1c3RtZW50LCBhZGp1c3RtZW50KTtcbiAgICB0aGlzLl9hZGp1c3RtZW50ID0gYWRqdXN0bWVudDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBvbmVudFR5cGUoY29tcG9uZW50VHlwZTogVHlwZTxOYlJlbmRlcmFibGVDb250YWluZXI+KSB7XG4gICAgdGhpcy5jaGFuZ2VzLmNvbXBvbmVudFR5cGUgPSBuZXcgTmJEeW5hbWljT3ZlcmxheUNoYW5nZSh0aGlzLl9jb21wb25lbnRUeXBlLCBjb21wb25lbnRUeXBlKTtcbiAgICB0aGlzLl9jb21wb25lbnRUeXBlID0gY29tcG9uZW50VHlwZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnRlbnQoY29udGVudDogTmJPdmVybGF5Q29udGVudCkge1xuICAgIHRoaXMuY2hhbmdlcy5jb250ZW50ID0gbmV3IE5iRHluYW1pY092ZXJsYXlDaGFuZ2UodGhpcy5fY29udGVudCwgY29udGVudCk7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb250ZXh0KGNvbnRleHQ6IHt9KSB7XG4gICAgdGhpcy5jaGFuZ2VzLmNvbnRleHQgPSBuZXcgTmJEeW5hbWljT3ZlcmxheUNoYW5nZSh0aGlzLl9jb250ZXh0LCBjb250ZXh0KTtcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZnNldChvZmZzZXQ6IG51bWJlcikge1xuICAgIHRoaXMuY2hhbmdlcy5vZmZzZXQgPSBuZXcgTmJEeW5hbWljT3ZlcmxheUNoYW5nZSh0aGlzLl9vZmZzZXQsIG9mZnNldCk7XG4gICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb3ZlcmxheUNvbmZpZyhvdmVybGF5Q29uZmlnOiBOYk92ZXJsYXlDb25maWcpIHtcbiAgICB0aGlzLmNoYW5nZXMub3ZlcmxheUNvbmZpZyA9IG5ldyBOYkR5bmFtaWNPdmVybGF5Q2hhbmdlKHRoaXMuX292ZXJsYXlDb25maWcsIG92ZXJsYXlDb25maWcpO1xuICAgIHRoaXMuX292ZXJsYXlDb25maWcgPSBvdmVybGF5Q29uZmlnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgaWYgKCF0aGlzLl9jb21wb25lbnRUeXBlIHx8ICF0aGlzLl9ob3N0KSB7XG4gICAgICB0aHJvdyBFcnJvcihgTmJEeW5hbWljT3ZlcmxheUhhbmRsZXI6IGF0IGxlYXN0ICdjb21wb25lbnRUeXBlJyBhbmQgJ2hvc3QnIHNob3VsZCBiZVxuICAgICAgcGFzc2VkIGJlZm9yZSBidWlsZGluZyBhIGR5bmFtaWMgb3ZlcmxheS5gKTtcbiAgICB9XG4gICAgdGhpcy5keW5hbWljT3ZlcmxheSA9IHRoaXMuZHluYW1pY092ZXJsYXlTZXJ2aWNlLmNyZWF0ZShcbiAgICAgIHRoaXMuX2NvbXBvbmVudFR5cGUsXG4gICAgICB0aGlzLl9jb250ZW50LFxuICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgIHRoaXMuY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgdGhpcy5fb3ZlcmxheUNvbmZpZyxcbiAgICAgIHRoaXMuX2Rpc2FibGVkLFxuICAgICk7XG5cbiAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB0aGlzLmNsZWFyQ2hhbmdlcygpO1xuXG4gICAgcmV0dXJuIHRoaXMuZHluYW1pY092ZXJsYXk7XG4gIH1cblxuICByZWJ1aWxkKCkge1xuICAgIC8qKlxuICAgICAqIHdlIHNob3VsZCBub3QgdGhyb3cgaGVyZVxuICAgICAqIGFzIHdlIHVzZSByZWJ1aWx0IGluIGxpZmVjeWNsZSBob29rc1xuICAgICAqIHdoaWNoIGl0IGNvdWxkIGJlIGNhbGxlZCBiZWZvcmUgdGhlIGJ1aWxkXG4gICAgICogc28gd2UganVzdCBpZ25vcmUgdGhpcyBjYWxsXG4gICAgICovXG4gICAgaWYgKCF0aGlzLmR5bmFtaWNPdmVybGF5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUG9zaXRpb25TdHJhdGVneVVwZGF0ZVJlcXVpcmVkKCkpIHtcbiAgICAgIHRoaXMuZHluYW1pY092ZXJsYXkuc2V0UG9zaXRpb25TdHJhdGVneSh0aGlzLmNyZWF0ZVBvc2l0aW9uU3RyYXRlZ3koKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNUcmlnZ2VyU3RyYXRlZ3lVcGRhdGVSZXF1aXJlZCgpKSB7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbnRhaW5lclJlcmVuZGVyUmVxdWlyZWQoKSkge1xuICAgICAgdGhpcy5keW5hbWljT3ZlcmxheS5zZXRDb250ZW50QW5kQ29udGV4dCh0aGlzLl9jb250ZW50LCB0aGlzLl9jb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudFR5cGVVcGRhdGVSZXF1aXJlZCgpKSB7XG4gICAgICB0aGlzLmR5bmFtaWNPdmVybGF5LnNldENvbXBvbmVudCh0aGlzLl9jb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc092ZXJsYXlDb25maWdVcGRhdGVSZXF1aXJlZCgpKSB7XG4gICAgICB0aGlzLmR5bmFtaWNPdmVybGF5LnNldE92ZXJsYXlDb25maWcodGhpcy5fb3ZlcmxheUNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZFVwZGF0ZWQoKSkge1xuICAgICAgdGhpcy5keW5hbWljT3ZlcmxheS5zZXREaXNhYmxlZCh0aGlzLl9kaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhckNoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcy5keW5hbWljT3ZlcmxheTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgaWYgKCF0aGlzLmR5bmFtaWNPdmVybGF5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5iRHluYW1pY092ZXJsYXlIYW5kbGVyOiBjYW5ub3QgY29ubmVjdCB0byBEeW5hbWljT3ZlcmxheVxuICAgICAgYXMgaXQgaXMgbm90IGNyZWF0ZWQgeWV0LiBDYWxsIGJ1aWxkKCkgZmlyc3RgKTtcbiAgICB9XG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPblRyaWdnZXJzKHRoaXMuZHluYW1pY092ZXJsYXkpO1xuICAgIHRoaXMuc3Vic2NyaWJlT25EaXJlY3Rpb25DaGFuZ2UoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlclN0cmF0ZWd5KSB7XG4gICAgICB0aGlzLnRyaWdnZXJTdHJhdGVneS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG5cbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmNsZWFyQ2hhbmdlcygpO1xuICAgIGlmICh0aGlzLmR5bmFtaWNPdmVybGF5KSB7XG4gICAgICB0aGlzLmR5bmFtaWNPdmVybGF5LmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlUG9zaXRpb25TdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbkJ1aWxkZXJcbiAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9ob3N0KVxuICAgICAgLnBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uKVxuICAgICAgLmFkanVzdG1lbnQodGhpcy5fYWRqdXN0bWVudClcbiAgICAgIC5vZmZzZXQodGhpcy5fb2Zmc2V0KVxuICAgICAgLmRpcmVjdGlvbih0aGlzLmRpcmVjdGlvblNlcnZpY2UuZ2V0RGlyZWN0aW9uKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZU9uVHJpZ2dlcnMoZHluYW1pY092ZXJsYXk6IE5iRHluYW1pY092ZXJsYXkpIHtcbiAgICB0aGlzLnRyaWdnZXJTdHJhdGVneSA9IHRoaXMudHJpZ2dlclN0cmF0ZWd5QnVpbGRlclxuICAgICAgLnRyaWdnZXIodGhpcy5fdHJpZ2dlcilcbiAgICAgIC5ob3N0KHRoaXMuX2hvc3QubmF0aXZlRWxlbWVudClcbiAgICAgIC5jb250YWluZXIoKCkgPT4gZHluYW1pY092ZXJsYXkuZ2V0Q29udGFpbmVyKCkpXG4gICAgICAuYnVpbGQoKTtcblxuICAgIHRoaXMudHJpZ2dlclN0cmF0ZWd5LnNob3ckLnN1YnNjcmliZSgoKSA9PiBkeW5hbWljT3ZlcmxheS5zaG93KCkpO1xuICAgIHRoaXMudHJpZ2dlclN0cmF0ZWd5LmhpZGUkLnN1YnNjcmliZSgoKSA9PiBkeW5hbWljT3ZlcmxheS5oaWRlKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmliZU9uRGlyZWN0aW9uQ2hhbmdlKCkge1xuICAgIHRoaXMuZGlyZWN0aW9uU2VydmljZVxuICAgICAgLm9uRGlyZWN0aW9uQ2hhbmdlKClcbiAgICAgIC5waXBlKHNraXAoMSksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmR5bmFtaWNPdmVybGF5LnNldFBvc2l0aW9uU3RyYXRlZ3kodGhpcy5jcmVhdGVQb3NpdGlvblN0cmF0ZWd5KCkpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDb250YWluZXJSZXJlbmRlclJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29udGVudFVwZGF0ZWQoKSB8fCB0aGlzLmlzQ29udGV4dFVwZGF0ZWQoKSB8fCB0aGlzLmlzUG9zaXRpb25TdHJhdGVneVVwZGF0ZVJlcXVpcmVkKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNQb3NpdGlvblN0cmF0ZWd5VXBkYXRlUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGp1c3RtZW50VXBkYXRlZCgpIHx8IHRoaXMuaXNQb3NpdGlvblVwZGF0ZWQoKSB8fCB0aGlzLmlzT2Zmc2V0VXBkYXRlZCgpIHx8IHRoaXMuaXNIb3N0VXBkYXRlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzVHJpZ2dlclN0cmF0ZWd5VXBkYXRlUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNUcmlnZ2VyVXBkYXRlZCgpIHx8IHRoaXMuaXNIb3N0VXBkYXRlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ29tcG9uZW50VHlwZVVwZGF0ZVJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcG9uZW50VHlwZVVwZGF0ZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPdmVybGF5Q29uZmlnVXBkYXRlUmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPdmVybGF5Q29uZmlnVXBkYXRlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ29tcG9uZW50VHlwZVVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5jb21wb25lbnRUeXBlICYmIHRoaXMuY2hhbmdlcy5jb21wb25lbnRUeXBlLmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ29udGVudFVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5jb250ZW50ICYmIHRoaXMuY2hhbmdlcy5jb250ZW50LmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ29udGV4dFVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5jb250ZXh0ICYmIHRoaXMuY2hhbmdlcy5jb250ZXh0LmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQWRqdXN0bWVudFVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5hZGp1c3RtZW50ICYmIHRoaXMuY2hhbmdlcy5hZGp1c3RtZW50LmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzUG9zaXRpb25VcGRhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZXMucG9zaXRpb24gJiYgdGhpcy5jaGFuZ2VzLnBvc2l0aW9uLmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzSG9zdFVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5ob3N0ICYmIHRoaXMuY2hhbmdlcy5ob3N0LmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzVHJpZ2dlclVwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy50cmlnZ2VyICYmIHRoaXMuY2hhbmdlcy50cmlnZ2VyLmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzT2Zmc2V0VXBkYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VzLm9mZnNldCAmJiB0aGlzLmNoYW5nZXMub2Zmc2V0LmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzT3ZlcmxheUNvbmZpZ1VwZGF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlcy5vdmVybGF5Q29uZmlnICYmIHRoaXMuY2hhbmdlcy5vdmVybGF5Q29uZmlnLmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWRVcGRhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZXMuZGlzYWJsZWQgJiYgdGhpcy5jaGFuZ2VzLmRpc2FibGVkLmlzQ2hhbmdlZCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFyQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNoYW5nZXMgPSB7fTtcbiAgfVxufVxuIl19