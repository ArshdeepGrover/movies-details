import { ReplaySubject, Subject } from 'rxjs';
import { NbWindowState } from './window.options';
/**
 * The `NbWindowRef` helps to manipulate window after it was created.
 * The window can be dismissed by using `close` method of the windowRef.
 * You can access rendered component as `componentRef` property of the windowRef.
 * Property `contentInstance` contains the instance of the component opened in the window.
 */
export class NbWindowRef {
    constructor(config) {
        this.config = config;
        this.stateChange$ = new ReplaySubject(1);
        this._closed = false;
        this.closed$ = new Subject();
        this.state = config.initialState;
    }
    /**
     * Current window state.
     */
    get state() {
        return this.stateValue;
    }
    set state(newState) {
        if (newState && this.stateValue !== newState) {
            this.prevStateValue = this.state;
            this.stateValue = newState;
            this.stateChange$.next({ oldState: this.prevStateValue, newState });
        }
    }
    /**
     * Emits when window state change.
     */
    get stateChange() {
        return this.stateChange$.asObservable();
    }
    /**
     * Emits when window was closed.
     */
    get onClose() {
        return this.closed$.asObservable();
    }
    /**
     * Minimize window.
     */
    minimize() {
        this.state = NbWindowState.MINIMIZED;
    }
    /**
     * Maximize window.
     */
    maximize() {
        this.state = NbWindowState.MAXIMIZED;
    }
    /**
     * Set window on top.
     */
    fullScreen() {
        this.state = NbWindowState.FULL_SCREEN;
    }
    toPreviousState() {
        this.state = this.prevStateValue;
    }
    /**
     * Closes window.
     * */
    close(res) {
        if (this._closed) {
            return;
        }
        this._closed = true;
        this.componentRef.destroy();
        this.componentInstance = null;
        this.stateChange$.complete();
        this.closed$.next(res);
        this.closed$.complete();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvdGhlbWUvY29tcG9uZW50cy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQWtCLGFBQWEsRUFBdUIsTUFBTSxrQkFBa0IsQ0FBQztBQUV0Rjs7Ozs7R0FLRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBcUN0QixZQUFtQixNQUFzQjtRQUF0QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQWpCL0IsaUJBQVksR0FBRyxJQUFJLGFBQWEsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFRekQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUssQ0FBQztRQVNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQWpDRDs7T0FFRztJQUNILElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsUUFBdUI7UUFDL0IsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFHRDs7T0FFRztJQUNILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBSUQ7O09BRUc7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQU1EOztPQUVHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDbkMsQ0FBQztJQUVEOztTQUVLO0lBQ0wsS0FBSyxDQUFDLEdBQU87UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi93aW5kb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE5iV2luZG93Q29uZmlnLCBOYldpbmRvd1N0YXRlLCBOYldpbmRvd1N0YXRlQ2hhbmdlIH0gZnJvbSAnLi93aW5kb3cub3B0aW9ucyc7XG5cbi8qKlxuICogVGhlIGBOYldpbmRvd1JlZmAgaGVscHMgdG8gbWFuaXB1bGF0ZSB3aW5kb3cgYWZ0ZXIgaXQgd2FzIGNyZWF0ZWQuXG4gKiBUaGUgd2luZG93IGNhbiBiZSBkaXNtaXNzZWQgYnkgdXNpbmcgYGNsb3NlYCBtZXRob2Qgb2YgdGhlIHdpbmRvd1JlZi5cbiAqIFlvdSBjYW4gYWNjZXNzIHJlbmRlcmVkIGNvbXBvbmVudCBhcyBgY29tcG9uZW50UmVmYCBwcm9wZXJ0eSBvZiB0aGUgd2luZG93UmVmLlxuICogUHJvcGVydHkgYGNvbnRlbnRJbnN0YW5jZWAgY29udGFpbnMgdGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgb3BlbmVkIGluIHRoZSB3aW5kb3cuXG4gKi9cbmV4cG9ydCBjbGFzcyBOYldpbmRvd1JlZjxUID0gYW55LCBSID0gYW55PiB7XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPE5iV2luZG93Q29tcG9uZW50PjtcbiAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XG5cbiAgcHJvdGVjdGVkIHByZXZTdGF0ZVZhbHVlOiBOYldpbmRvd1N0YXRlO1xuICBwcm90ZWN0ZWQgc3RhdGVWYWx1ZTogTmJXaW5kb3dTdGF0ZTtcbiAgLyoqXG4gICAqIEN1cnJlbnQgd2luZG93IHN0YXRlLlxuICAgKi9cbiAgZ2V0IHN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlVmFsdWU7XG4gIH1cbiAgc2V0IHN0YXRlKG5ld1N0YXRlOiBOYldpbmRvd1N0YXRlKSB7XG4gICAgaWYgKG5ld1N0YXRlICYmIHRoaXMuc3RhdGVWYWx1ZSAhPT0gbmV3U3RhdGUpIHtcbiAgICAgIHRoaXMucHJldlN0YXRlVmFsdWUgPSB0aGlzLnN0YXRlO1xuICAgICAgdGhpcy5zdGF0ZVZhbHVlID0gbmV3U3RhdGU7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlJC5uZXh0KHsgb2xkU3RhdGU6IHRoaXMucHJldlN0YXRlVmFsdWUsIG5ld1N0YXRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0ZUNoYW5nZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxOYldpbmRvd1N0YXRlQ2hhbmdlPigxKTtcbiAgLyoqXG4gICAqIEVtaXRzIHdoZW4gd2luZG93IHN0YXRlIGNoYW5nZS5cbiAgICovXG4gIGdldCBzdGF0ZUNoYW5nZSgpOiBPYnNlcnZhYmxlPE5iV2luZG93U3RhdGVDaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZUNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Nsb3NlZCA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgY2xvc2VkJCA9IG5ldyBTdWJqZWN0PFI+KCk7XG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHdpbmRvdyB3YXMgY2xvc2VkLlxuICAgKi9cbiAgZ2V0IG9uQ2xvc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VkJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IE5iV2luZG93Q29uZmlnKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGNvbmZpZy5pbml0aWFsU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogTWluaW1pemUgd2luZG93LlxuICAgKi9cbiAgbWluaW1pemUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IE5iV2luZG93U3RhdGUuTUlOSU1JWkVEO1xuICB9XG5cbiAgLyoqXG4gICAqIE1heGltaXplIHdpbmRvdy5cbiAgICovXG4gIG1heGltaXplKCkge1xuICAgIHRoaXMuc3RhdGUgPSBOYldpbmRvd1N0YXRlLk1BWElNSVpFRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2luZG93IG9uIHRvcC5cbiAgICovXG4gIGZ1bGxTY3JlZW4oKSB7XG4gICAgdGhpcy5zdGF0ZSA9IE5iV2luZG93U3RhdGUuRlVMTF9TQ1JFRU47XG4gIH1cblxuICB0b1ByZXZpb3VzU3RhdGUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldlN0YXRlVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHdpbmRvdy5cbiAgICogKi9cbiAgY2xvc2UocmVzPzogUikge1xuICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xvc2VkJC5uZXh0KHJlcyk7XG4gICAgdGhpcy5jbG9zZWQkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==