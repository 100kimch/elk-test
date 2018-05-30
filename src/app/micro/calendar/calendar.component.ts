import { Component, OnInit, ViewChild } from '@angular/core';
import { PostingService } from '../../services/posting.service';
import { MyPostDirective } from '../../directives/my-post.directive';
import { PostItem } from '../../models/postItem';
import { WeekComponent } from '../week/week.component';
import { DayComponent } from '../day/day.component';
import { MonthComponent } from '../month/month.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [PostingService]
})
export class CalendarComponent implements OnInit {
  @ViewChild(MyPostDirective)
  private myPostDirective: MyPostDirective;

  records = [];

  constructor(
    private postingService: PostingService,
  ) { }

  ngOnInit() {
    const today = new Date();
    // console.log(today.getDay(), today.getDate());
    const future = new Date();

    // for blanking past day of this week
    for (let i = 0; i < today.getDay(); ++i) {
      const record = {
        dateStr: undefined,
        value: undefined
      };
      this.records.push(record);
    }

    // adding dates
    for (let i = 0; i < 63; i++) {
      const value = 70000 + parseInt(Math.random() * 50000 + '', 10);
      const record = {
        dateStr: future.toDateString(),
        value: value.toLocaleString(),
        value2: (value + 1250).toLocaleString(),
        value3: (value + 700).toLocaleString()
      };
      this.records.push(record);
      future.setDate(future.getDate() + 1);
    }

    // for blanking future day of this week
    for (let i = 0; i < 7 - (today.getDay()); ++i) {
      const record = {
        dateStr: undefined,
        value: undefined
      };
      this.records.push(record);
    }

    this.addRecord(this.records);
  }

  addRecord(records) {
    let count = 6, week;
    // tslint:disable-next-line:forin
    for (const record in records) {
      // console.log('record: ', records[record]);
      if (++count === 7) {
        count = 0;

        const date = new Date(records[record].dateStr);
        if (date.getDate() >= 1 && date.getDate() < 8) {
          this.postingService.loadComponent(this.myPostDirective.viewContainerRef,
            new PostItem(MonthComponent, date.getMonth()));
        }
        week = this.postingService.loadComponent(this.myPostDirective.viewContainerRef,
          new PostItem(WeekComponent, null));
      }

      this.postingService.loadComponent(week.myPost2Directive.viewContainerRef,
        new PostItem(DayComponent, records[record]));
    }
  }
}
