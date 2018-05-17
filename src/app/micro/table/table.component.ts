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
    switch (this.type) {
      case 'priceList':
        this.records.push(this.editDataPrice(this.priceList));
        break;
      case 'platformList':
        this.records.push(this.editDataPlatform(this.priceList));
        break;
      case 'predictionList':
        this.records.push(this.editDataPrediction(this.priceList));
        break;
    }

    console.log('records:', this.records);
  }

  compareByName(a, b) {
    const sortingArr = ['VAA', 'AAB', 'BAA'];
    if (a.name < b.name || sortingArr.indexOf(a.roomname) < sortingArr.indexOf(b.roomname)) { return -1; }
    if (a.name > b.name || sortingArr.indexOf(a.roomname) > sortingArr.indexOf(b.roomname)) { return 1; }
    return 0;
  }
  compareByDate(a, b) {
    const sortingArr = ['VAA', 'AAB', 'BAA'];
    if (a.date < b.date || sortingArr.indexOf(a.roomname) < sortingArr.indexOf(b.roomname)) { return -1; }
    if (a.date > b.date || sortingArr.indexOf(a.roomname) > sortingArr.indexOf(b.roomname)) { return 1; }
    return 0;
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

    return dataList.sort(this.compareByName);
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

    return dataList.sort(this.compareByDate);
  }

  onClick(event) {
    this.chartDataType.emit(event.path[1].id);
  }

  toCurrencyFormat(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

}
