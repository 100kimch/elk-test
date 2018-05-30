import { Component, OnInit } from '@angular/core';
import { DatePickerService } from '../../micro/date-picker.service';

@Component({
  selector: 'app-micro-sites',
  templateUrl: './micro-sites.component.html',
  styleUrls: ['./micro-sites.component.css'],
  providers: [DatePickerService]
})
export class MicroSitesComponent implements OnInit {
  current = {
    'value': '',
    'value2': 0,
    'value3': 0,
    'type': '',
    'dateStr': ''
  };

  constructor(
    private datePickerService: DatePickerService
  ) {
    this.datePickerService.clicked.subscribe(
      record => {
        console.log(record);

        // tslint:disable-next-line:forin
        for (const i in record) {
          this.current[i] = record[i];
        }
        if (this.current['dateStr']) {
          this.current['dateStr'] = this.current['date'].toISOString().slice(0, 10);
        }
        this.current['valueInt'] = parseInt(this.current['value']);
      }
    );
  }

  ngOnInit() {
  }

  setType(type) {
    this.current.type = type;
    this.datePickerService.emitType(type);
  }

  setHotel(type) {
  }

}
