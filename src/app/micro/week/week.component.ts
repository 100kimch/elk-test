import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { MyPost2Directive } from '../../directives/my-post2.directive';
import { PostingService } from '../../services/posting.service';
import { PostItem } from '../../models/postItem';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css'],
  providers: [PostingService]

})
export class WeekComponent implements OnInit {
  @ViewChild(MyPost2Directive)
  private myPost2Directive: MyPost2Directive;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private postingService: PostingService,
  ) { }

  ngOnInit() {
  }

}
