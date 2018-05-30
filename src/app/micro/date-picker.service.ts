import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DatePickerService {
  clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  emitDate(value) {
    this.clicked.emit(value);
  }
}
