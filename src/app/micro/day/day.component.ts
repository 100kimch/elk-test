import { Component, OnInit, EventEmitter } from '@angular/core';
import { DatePickerService } from '../date-picker.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  record = {
    dateStr: ' ',
    value: ' '
  };

  constructor(
    private datePickerService: DatePickerService
  ) {
  }

  ngOnInit() {
    this.record['date'] = new Date(this.record.dateStr);
    if (this.record['dateStr']) {
      this.record['dateStr'] = this.record['date'].getDate();
    } else {
      this.record['dateStr'] = '';
    }
  }

  emitDate() {
    this.datePickerService.emitDate(this.record);
  }

}
