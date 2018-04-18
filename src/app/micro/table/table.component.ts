import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('type') type;
  lists = {
    'platformList': [
      {
        'platform': 'Hotels.com',
        'room': 'BBA',
        'price': '22,000',
        'isEnd': false
      },
      {
        'platform': 'Hotels.com',
        'room': 'BBC',
        'price': '11,700',
        'isEnd': false
      },
      {
        'platform': 'Hotels.com',
        'room': 'BCA',
        'price': '11,200',
        'isEnd': false
      },
      {
        'platform': 'Hotels Combine',
        'room': 'ABC',
        'price': '22,500',
        'isEnd': false
      },
      {
        'platform': 'Hotels Combine',
        'room': 'ABB',
        'price': '22,000',
        'isEnd': false
      },
      {
        'platform': 'Hotels Combine',
        'room': 'VAC',
        'price': '63,000',
        'isEnd': false
      },
      {
        'platform': 'Hotels Combine',
        'room': 'VAA',
        'price': '28,500',
        'isEnd': false
      },
      {
        'platform': 'AirBnB',
        'room': 'VAB',
        'price': '82,500',
        'isEnd': false
      },
      {
        'platform': 'AirBnB',
        'room': 'BAB',
        'price': '16,000',
        'isEnd': false
      },
      {
        'platform': 'AirBnB',
        'room': 'BBA',
        'price': '14,000',
        'isEnd': false
      },
      {
        'platform': 'AirBnB',
        'room': 'VBA',
        'price': '87,000',
        'isEnd': false
      },
      {
        'platform': 'AirBnB',
        'room': 'VVV',
        'price': '98,000',
        'isEnd': false
      },
    ],
    'priceList': [
      {
        'location': 'location A',
        'room': 'BBA',
        'price': '22,000',
        'isEnd': false
      },
      {
        'location': 'location A',
        'room': 'BBC',
        'price': '11,700',
        'isEnd': false
      },
      {
        'location': 'location A',
        'room': 'BCA',
        'price': '11,200',
        'isEnd': false
      },
      {
        'location': 'location A',
        'room': 'ABC',
        'price': '22,500',
        'isEnd': false
      },
      {
        'location': 'location A',
        'room': 'ABB',
        'price': '22,000',
        'isEnd': false
      },
      {
        'location': 'location B',
        'room': 'VAC',
        'price': '63,000',
        'isEnd': false
      },
      {
        'location': 'location B',
        'room': 'VAA',
        'price': '28,500',
        'isEnd': false
      },
      {
        'location': 'location B',
        'room': 'VAB',
        'price': '82,500',
        'isEnd': false
      },
      {
        'location': 'location B',
        'room': 'BAB',
        'price': '16,000',
        'isEnd': false
      },
      {
        'location': 'location C',
        'room': 'BBA',
        'price': '14,000',
        'isEnd': false
      },
      {
        'location': 'location C',
        'room': 'VBA',
        'price': '87,000',
        'isEnd': false
      },
      {
        'location': 'location C',
        'room': 'VVV',
        'price': '98,000',
        'isEnd': false
      },
    ]
  };
  selected;

  constructor() {
  }

  ngOnInit() {
    this.editDataPrice(this.lists['priceList']);
    this.editDataPlatform(this.lists['platformList']);
    this.selected = this.lists[this.type];
  }

  editDataPrice(array) {
    let _object = { 'location': '', 'isEnd': false };
    let index = '';
    // tslint:disable-next-line:forin
    for (const object in array) {
      if (array[object]['location'] !== index) {
        index = array[object]['location'];
        _object['isEnd'] = true;
      } else {
        array[object]['location'] = '';
      }
      _object = array[object];
    }
  }
  editDataPlatform(array) {
    let _object = { 'platform': '', 'isEnd': false };
    let index = '';
    // tslint:disable-next-line:forin
    for (const object in array) {
      if (array[object]['platform'] !== index) {
        index = array[object]['platform'];
        _object['isEnd'] = true;
      } else {
        array[object]['platform'] = '';
      }
      _object = array[object];
    }
  }

}
