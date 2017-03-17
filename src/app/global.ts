import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
	public something: BehaviorSubject<any> = new BehaviorSubject<any>([]);

	setSomethingValue (another) {
		this.something.next(another);
	}

}