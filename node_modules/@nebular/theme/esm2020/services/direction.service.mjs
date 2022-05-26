import { InjectionToken, Optional, Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Layout direction.
 * */
export var NbLayoutDirection;
(function (NbLayoutDirection) {
    NbLayoutDirection["LTR"] = "ltr";
    NbLayoutDirection["RTL"] = "rtl";
})(NbLayoutDirection || (NbLayoutDirection = {}));
/**
 * Layout direction setting injection token.
 * */
export const NB_LAYOUT_DIRECTION = new InjectionToken('Layout direction');
/**
 * Layout Direction Service.
 * Allows to set or get layout direction and listen to its changes
 */
export class NbLayoutDirectionService {
    constructor(direction = NbLayoutDirection.LTR) {
        this.direction = direction;
        this.$directionChange = new ReplaySubject(1);
        this.setDirection(direction);
    }
    /**
     * Returns true if layout direction set to left to right.
     * @returns boolean.
     * */
    isLtr() {
        return this.direction === NbLayoutDirection.LTR;
    }
    /**
     * Returns true if layout direction set to right to left.
     * @returns boolean.
     * */
    isRtl() {
        return this.direction === NbLayoutDirection.RTL;
    }
    /**
     * Returns current layout direction.
     * @returns NbLayoutDirection.
     * */
    getDirection() {
        return this.direction;
    }
    /**
     * Sets layout direction
     * @param {NbLayoutDirection} direction
     */
    setDirection(direction) {
        this.direction = direction;
        this.$directionChange.next(direction);
    }
    /**
     * Triggered when direction was changed.
     * @returns Observable<NbLayoutDirection>.
     */
    onDirectionChange() {
        return this.$directionChange.pipe(share());
    }
}
NbLayoutDirectionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutDirectionService, deps: [{ token: NB_LAYOUT_DIRECTION, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
NbLayoutDirectionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutDirectionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbLayoutDirectionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NB_LAYOUT_DIRECTION]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL3RoZW1lL3NlcnZpY2VzL2RpcmVjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXZDOztLQUVLO0FBQ0wsTUFBTSxDQUFOLElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQixnQ0FBVyxDQUFBO0lBQ1gsZ0NBQVcsQ0FBQTtBQUNiLENBQUMsRUFIVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBRzVCO0FBRUQ7O0tBRUs7QUFDTCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBb0Isa0JBQWtCLENBQUMsQ0FBQztBQUU3Rjs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sd0JBQXdCO0lBR25DLFlBQ21ELFlBQVksaUJBQWlCLENBQUMsR0FBRztRQUFqQyxjQUFTLEdBQVQsU0FBUyxDQUF3QjtRQUg1RSxxQkFBZ0IsR0FBRyxJQUFJLGFBQWEsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFLakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztTQUdLO0lBQ0UsS0FBSztRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7U0FHSztJQUNFLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssaUJBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O1NBR0s7SUFDTCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsU0FBNEI7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBcUIsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7O3FIQWhEVSx3QkFBd0Isa0JBSWIsbUJBQW1CO3lIQUo5Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEcEMsVUFBVTs7MEJBS04sUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogTGF5b3V0IGRpcmVjdGlvbi5cbiAqICovXG5leHBvcnQgZW51bSBOYkxheW91dERpcmVjdGlvbiB7XG4gIExUUiA9ICdsdHInLFxuICBSVEwgPSAncnRsJyxcbn1cblxuLyoqXG4gKiBMYXlvdXQgZGlyZWN0aW9uIHNldHRpbmcgaW5qZWN0aW9uIHRva2VuLlxuICogKi9cbmV4cG9ydCBjb25zdCBOQl9MQVlPVVRfRElSRUNUSU9OID0gbmV3IEluamVjdGlvblRva2VuPE5iTGF5b3V0RGlyZWN0aW9uPignTGF5b3V0IGRpcmVjdGlvbicpO1xuXG4vKipcbiAqIExheW91dCBEaXJlY3Rpb24gU2VydmljZS5cbiAqIEFsbG93cyB0byBzZXQgb3IgZ2V0IGxheW91dCBkaXJlY3Rpb24gYW5kIGxpc3RlbiB0byBpdHMgY2hhbmdlc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSAkZGlyZWN0aW9uQ2hhbmdlID0gbmV3IFJlcGxheVN1YmplY3Q8TmJMYXlvdXREaXJlY3Rpb24+KDEpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTkJfTEFZT1VUX0RJUkVDVElPTikgcHJpdmF0ZSBkaXJlY3Rpb24gPSBOYkxheW91dERpcmVjdGlvbi5MVFIsXG4gICkge1xuICAgIHRoaXMuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGxheW91dCBkaXJlY3Rpb24gc2V0IHRvIGxlZnQgdG8gcmlnaHQuXG4gICAqIEByZXR1cm5zIGJvb2xlYW4uXG4gICAqICovXG4gIHB1YmxpYyBpc0x0cigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IE5iTGF5b3V0RGlyZWN0aW9uLkxUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbGF5b3V0IGRpcmVjdGlvbiBzZXQgdG8gcmlnaHQgdG8gbGVmdC5cbiAgICogQHJldHVybnMgYm9vbGVhbi5cbiAgICogKi9cbiAgcHVibGljIGlzUnRsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gTmJMYXlvdXREaXJlY3Rpb24uUlRMO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCBsYXlvdXQgZGlyZWN0aW9uLlxuICAgKiBAcmV0dXJucyBOYkxheW91dERpcmVjdGlvbi5cbiAgICogKi9cbiAgZ2V0RGlyZWN0aW9uKCk6IE5iTGF5b3V0RGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBsYXlvdXQgZGlyZWN0aW9uXG4gICAqIEBwYXJhbSB7TmJMYXlvdXREaXJlY3Rpb259IGRpcmVjdGlvblxuICAgKi9cbiAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbjogTmJMYXlvdXREaXJlY3Rpb24pIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLiRkaXJlY3Rpb25DaGFuZ2UubmV4dChkaXJlY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIGRpcmVjdGlvbiB3YXMgY2hhbmdlZC5cbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxOYkxheW91dERpcmVjdGlvbj4uXG4gICAqL1xuICBvbkRpcmVjdGlvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPE5iTGF5b3V0RGlyZWN0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuJGRpcmVjdGlvbkNoYW5nZS5waXBlKHNoYXJlPE5iTGF5b3V0RGlyZWN0aW9uPigpKTtcbiAgfVxufVxuIl19