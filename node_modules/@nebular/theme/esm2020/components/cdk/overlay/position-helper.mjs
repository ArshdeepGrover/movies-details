import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/direction.service";
export var NbGlobalLogicalPosition;
(function (NbGlobalLogicalPosition) {
    NbGlobalLogicalPosition["TOP_START"] = "top-start";
    NbGlobalLogicalPosition["TOP_END"] = "top-end";
    NbGlobalLogicalPosition["BOTTOM_START"] = "bottom-start";
    NbGlobalLogicalPosition["BOTTOM_END"] = "bottom-end";
})(NbGlobalLogicalPosition || (NbGlobalLogicalPosition = {}));
export var NbGlobalPhysicalPosition;
(function (NbGlobalPhysicalPosition) {
    NbGlobalPhysicalPosition["TOP_RIGHT"] = "top-right";
    NbGlobalPhysicalPosition["TOP_LEFT"] = "top-left";
    NbGlobalPhysicalPosition["BOTTOM_RIGHT"] = "bottom-right";
    NbGlobalPhysicalPosition["BOTTOM_LEFT"] = "bottom-left";
})(NbGlobalPhysicalPosition || (NbGlobalPhysicalPosition = {}));
export class NbPositionHelper {
    constructor(layoutDirection) {
        this.layoutDirection = layoutDirection;
    }
    toLogicalPosition(position) {
        if (Object.values(NbGlobalLogicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toLogicalPositionWhenLtr(position);
        }
        else {
            return this.toLogicalPositionWhenRtl(position);
        }
    }
    toPhysicalPosition(position) {
        if (Object.values(NbGlobalPhysicalPosition).includes(position)) {
            return position;
        }
        if (this.layoutDirection.isLtr()) {
            return this.toPhysicalPositionWhenLtr(position);
        }
        else {
            return this.toPhysicalPositionWhenRtl(position);
        }
    }
    isTopPosition(position) {
        const logicalPosition = this.toLogicalPosition(position);
        return logicalPosition === NbGlobalLogicalPosition.TOP_END || logicalPosition === NbGlobalLogicalPosition.TOP_START;
    }
    isRightPosition(position) {
        const physicalPosition = this.toPhysicalPosition(position);
        return (physicalPosition === NbGlobalPhysicalPosition.TOP_RIGHT ||
            physicalPosition === NbGlobalPhysicalPosition.BOTTOM_RIGHT);
    }
    toLogicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_END;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_START;
        }
    }
    toLogicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalPhysicalPosition.TOP_RIGHT:
                return NbGlobalLogicalPosition.TOP_START;
            case NbGlobalPhysicalPosition.TOP_LEFT:
                return NbGlobalLogicalPosition.TOP_END;
            case NbGlobalPhysicalPosition.BOTTOM_RIGHT:
                return NbGlobalLogicalPosition.BOTTOM_START;
            case NbGlobalPhysicalPosition.BOTTOM_LEFT:
                return NbGlobalLogicalPosition.BOTTOM_END;
        }
    }
    toPhysicalPositionWhenLtr(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
        }
    }
    toPhysicalPositionWhenRtl(position) {
        switch (position) {
            case NbGlobalLogicalPosition.TOP_START:
                return NbGlobalPhysicalPosition.TOP_RIGHT;
            case NbGlobalLogicalPosition.TOP_END:
                return NbGlobalPhysicalPosition.TOP_LEFT;
            case NbGlobalLogicalPosition.BOTTOM_START:
                return NbGlobalPhysicalPosition.BOTTOM_RIGHT;
            case NbGlobalLogicalPosition.BOTTOM_END:
                return NbGlobalPhysicalPosition.BOTTOM_LEFT;
        }
    }
}
NbPositionHelper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPositionHelper, deps: [{ token: i1.NbLayoutDirectionService }], target: i0.ɵɵFactoryTarget.Injectable });
NbPositionHelper.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPositionHelper });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbPositionHelper, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbLayoutDirectionService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24taGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9jb21wb25lbnRzL2Nkay9vdmVybGF5L3Bvc2l0aW9uLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJM0MsTUFBTSxDQUFOLElBQVksdUJBS1g7QUFMRCxXQUFZLHVCQUF1QjtJQUNqQyxrREFBdUIsQ0FBQTtJQUN2Qiw4Q0FBbUIsQ0FBQTtJQUNuQix3REFBNkIsQ0FBQTtJQUM3QixvREFBeUIsQ0FBQTtBQUMzQixDQUFDLEVBTFcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQUtsQztBQUVELE1BQU0sQ0FBTixJQUFZLHdCQUtYO0FBTEQsV0FBWSx3QkFBd0I7SUFDbEMsbURBQXVCLENBQUE7SUFDdkIsaURBQXFCLENBQUE7SUFDckIseURBQTZCLENBQUE7SUFDN0IsdURBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQUxXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFLbkM7QUFLRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQXNCLGVBQXlDO1FBQXpDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQjtJQUFHLENBQUM7SUFFbkUsaUJBQWlCLENBQUMsUUFBMEI7UUFDMUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLFFBQW1DLENBQUMsRUFBRTtZQUN4RixPQUFPLFFBQW1DLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBb0MsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFvQyxDQUFDLENBQUM7U0FDNUU7SUFDSCxD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QUMvQyxLQUFLLHVCQUF1QixDQUFDLFVBQVU7Z0JBQ3JDLE9BQU8sd0JBQXdCLENBQUMsV0FBVyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7NkdBNUZVLGdCQUFnQjtpSEFBaEIsZ0JBQWdCOzJGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iTGF5b3V0RGlyZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2RpcmVjdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGVudW0gTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24ge1xuICBUT1BfU1RBUlQgPSAndG9wLXN0YXJ0JyxcbiAgVE9QX0VORCA9ICd0b3AtZW5kJyxcbiAgQk9UVE9NX1NUQVJUID0gJ2JvdHRvbS1zdGFydCcsXG4gIEJPVFRPTV9FTkQgPSAnYm90dG9tLWVuZCcsXG59XG5cbmV4cG9ydCBlbnVtIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbiB7XG4gIFRPUF9SSUdIVCA9ICd0b3AtcmlnaHQnLFxuICBUT1BfTEVGVCA9ICd0b3AtbGVmdCcsXG4gIEJPVFRPTV9SSUdIVCA9ICdib3R0b20tcmlnaHQnLFxuICBCT1RUT01fTEVGVCA9ICdib3R0b20tbGVmdCcsXG59XG5cbmV4cG9ydCB0eXBlIE5iR2xvYmFsUG9zaXRpb24gPSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24gfCBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5iUG9zaXRpb25IZWxwZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGF5b3V0RGlyZWN0aW9uOiBOYkxheW91dERpcmVjdGlvblNlcnZpY2UpIHt9XG5cbiAgdG9Mb2dpY2FsUG9zaXRpb24ocG9zaXRpb246IE5iR2xvYmFsUG9zaXRpb24pOiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbiB7XG4gICAgaWYgKE9iamVjdC52YWx1ZXMoTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pLmluY2x1ZGVzKHBvc2l0aW9uIGFzIE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uKSkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uIGFzIE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxheW91dERpcmVjdGlvbi5pc0x0cigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50b0xvZ2ljYWxQb3NpdGlvbldoZW5MdHIocG9zaXRpb24gYXMgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudG9Mb2dpY2FsUG9zaXRpb25XaGVuUnRsKHBvc2l0aW9uIGFzIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgdG9QaHlzaWNhbFBvc2l0aW9uKHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uKTogTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uIHtcbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24pLmluY2x1ZGVzKHBvc2l0aW9uIGFzIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbikpIHtcbiAgICAgIHJldHVybiBwb3NpdGlvbiBhcyBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGF5b3V0RGlyZWN0aW9uLmlzTHRyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvUGh5c2ljYWxQb3NpdGlvbldoZW5MdHIocG9zaXRpb24gYXMgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50b1BoeXNpY2FsUG9zaXRpb25XaGVuUnRsKHBvc2l0aW9uIGFzIE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpc1RvcFBvc2l0aW9uKHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbG9naWNhbFBvc2l0aW9uID0gdGhpcy50b0xvZ2ljYWxQb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gbG9naWNhbFBvc2l0aW9uID09PSBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5UT1BfRU5EIHx8IGxvZ2ljYWxQb3NpdGlvbiA9PT0gTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX1NUQVJUO1xuICB9XG5cbiAgaXNSaWdodFBvc2l0aW9uKHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcGh5c2ljYWxQb3NpdGlvbiA9IHRoaXMudG9QaHlzaWNhbFBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIHJldHVybiAoXG4gICAgICBwaHlzaWNhbFBvc2l0aW9uID09PSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24uVE9QX1JJR0hUIHx8XG4gICAgICBwaHlzaWNhbFBvc2l0aW9uID09PSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24uQk9UVE9NX1JJR0hUXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB0b0xvZ2ljYWxQb3NpdGlvbldoZW5MdHIocG9zaXRpb246IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbik6IE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5UT1BfUklHSFQ6XG4gICAgICAgIHJldHVybiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5UT1BfRU5EO1xuICAgICAgY2FzZSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24uVE9QX0xFRlQ6XG4gICAgICAgIHJldHVybiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5UT1BfU1RBUlQ7XG4gICAgICBjYXNlIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5CT1RUT01fUklHSFQ6XG4gICAgICAgIHJldHVybiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5CT1RUT01fRU5EO1xuICAgICAgY2FzZSBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG4gICAgICAgIHJldHVybiBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5CT1RUT01fU1RBUlQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRvTG9naWNhbFBvc2l0aW9uV2hlblJ0bChwb3NpdGlvbjogTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uKTogTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24ge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9SSUdIVDpcbiAgICAgICAgcmV0dXJuIE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uLlRPUF9TVEFSVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9MRUZUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX0VORDtcbiAgICAgIGNhc2UgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcbiAgICAgICAgcmV0dXJuIE5iR2xvYmFsTG9naWNhbFBvc2l0aW9uLkJPVFRPTV9TVEFSVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLkJPVFRPTV9MRUZUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uQk9UVE9NX0VORDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9QaHlzaWNhbFBvc2l0aW9uV2hlbkx0cihwb3NpdGlvbjogTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pOiBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24ge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX1NUQVJUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9MRUZUO1xuICAgICAgY2FzZSBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5UT1BfRU5EOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9SSUdIVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uQk9UVE9NX1NUQVJUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLkJPVFRPTV9MRUZUO1xuICAgICAgY2FzZSBOYkdsb2JhbExvZ2ljYWxQb3NpdGlvbi5CT1RUT01fRU5EOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdG9QaHlzaWNhbFBvc2l0aW9uV2hlblJ0bChwb3NpdGlvbjogTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24pOiBOYkdsb2JhbFBoeXNpY2FsUG9zaXRpb24ge1xuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX1NUQVJUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLlRPUF9SSUdIVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uVE9QX0VORDpcbiAgICAgICAgcmV0dXJuIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5UT1BfTEVGVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uQk9UVE9NX1NUQVJUOlxuICAgICAgICByZXR1cm4gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLkJPVFRPTV9SSUdIVDtcbiAgICAgIGNhc2UgTmJHbG9iYWxMb2dpY2FsUG9zaXRpb24uQk9UVE9NX0VORDpcbiAgICAgICAgcmV0dXJuIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5CT1RUT01fTEVGVDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==