import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('type') type;
  @Input('priceList') priceList;
  @Output() chartDataType = new EventEmitter();

  selected;
  records = [];


  constructor() {
  }

  ngOnInit() {
    if (this.type === 'priceList') {
      this.records.push(this.editDataPrice(this.priceList));
    }
    if (this.type === 'platformList') {
      this.records.push(this.editDataPlatform(this.priceList));
      // this.selected = this.priceList[this.type];
    }
    if (this.type === 'predictionList') {
      this.records.push(this.editDataPrediction(this.priceList));
    }

    console.log('records:', this.records);
  }

  editDataPrice(priceList) {
    const dataList = [];
    let index = '';

    // tslint:disable-next-line:forin
    for (const category in priceList) {
      // tslint:disable-next-line:forin
      for (const record in priceList[category]) {
        const selected = priceList[category][record];
        const _object = {
          'name': '',
          'roomname': '',
          'value': '',
          'isEnd': false
        };

        if (selected['name'] !== index) {
          index = selected['name'];
          _object['name'] = selected['name'];
          _object['isEnd'] = true;
        } else {
          selected['name'] = '';
        }
        _object['roomname'] = selected['roomname'];
        _object['value'] = selected['data'][6];
        _object['roomtype'] = category;
        dataList.push(_object);
      }
    }

    return dataList;
  }
  editDataPlatform(priceList) {
    const dataList = [];
    let index = '';

    console.log('platformList: ', priceList);
    // tslint:disable-next-line:forin
    for (const category in priceList) {
      // tslint:disable-next-line:forin
      for (const record in priceList[category]) {
        const selected = priceList[category][record];
        const _object = {
          'platform': '',
          'roomname': '',
          'value': '',
          'isEnd': false
        };

        if (selected['platform'] !== index) {
          index = selected['platform'];
          _object['platform'] = selected['platform'];
          _object['isEnd'] = true;
        } else {
          selected['platform'] = '';
        }
        _object['roomname'] = selected['roomname'];
        _object['value'] = selected['value'];
        _object['roomtype'] = category;
        dataList.push(_object);
      }
    }

    return dataList;
  }
  editDataPrediction(priceList) {
    const dataList = [];

    // tslint:disable-next-line:forin
    for (const category in priceList) {
      console.log(priceList, priceList[category]);
      // tslint:disable-next-line:forin
      for (const num in priceList[category][0]['date']) {
        const selected = priceList[category][0];
        const _object = {
          'date': undefined,
          'roomname': '',
          'value': '',
          'isEnd': false
        };

        _object['date'] = new Date(selected['date'][num]).toLocaleDateString();
        _object['roomname'] = priceList[category][0]['roomname'];
        _object['value'] = selected['data'][num];
        // _object['roomtype'] = category;
        dataList.push(_object);
      }
    }

    return dataList;
  }

  onClick(event) {
    this.chartDataType.emit(event.path[1].id);
  }

  toCurrencyFormat(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

}
