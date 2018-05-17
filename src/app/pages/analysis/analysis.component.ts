import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  data = [
    {
      'address': 'hello@naver.com',
      'title': 'Problems to book',
      'date': '04/30/2018',
      'no': 0,
      // tslint:disable-next-line:max-line-length
      'contents': 'I am traveling to Gyeongju on 28 Sep and plan to stay for 1 night at Hotel Concorde. I would like to find out the room availability for a Double room, non smoking, for 2 adults. Could you let me know the room rates, and how we can get to the hotel. We plan to arrive in Gyeongju from Seoul on the train.'
    },
    {
      'address': 'waiting212@naver.com',
      'title': 'Problems to book',
      'date': '04/12/2018',
      'no': 1,
      // tslint:disable-next-line:max-line-length
      'contents': 'Hi,I stayed in your great hotel Saturday night for the Triathlon in Gyungju. I seemed to have left my cell phone in room 743. Did you find it?? If so, can it be mailed to me in Daejeon ?'
    },
    {
      'address': 'doiquest1@naver.com',
      'title': 'Problems to book',
      'date': '04/07/2018',
      'no': 2,
      // tslint:disable-next-line:max-line-length
      'contents': 'Dear Sir/Madame,\nI’d like to get some information about rooms and availability at your hotel.\nI have two adults and one teenager traveling to Seoul.They need a room for two nights\non May 26 and May 27.\n1. Do you have rooms available on those nights ?\n2. What are the rates and taxes?\n3. Do you have wheelchair access?\n4. What is the best way to travel to your hotel from the airport?\nMany thanks for your help and information.\nRob'
    },
    {
      'address': 'qwertdk@naver.com',
      'title': 'Problems to book',
      'date': '04/06/2018',
      'no': 3,
      // tslint:disable-next-line:max-line-length
      'contents': 'Dear Sir/Madam,\n\nI would like to book a double room for the month of August 2002.\n\nI need an air - conditioned room with bath and shower which faces the sea.\n\nI should be grateful if you would confirm my booking as soon as possible.\n\nPlease give me an indication of your rates per night including full board.\n\nShould you have no vacancies please could you give me the address of a suitable hotel in your area?\n\nYours faithfully,\n\nJennifer O\'Brian'
    },
    {
      'address': 'dwjdi123@naver.com',
      'title': 'Problems to book',
      'date': '04/05/2018',
      'no': 4,
      // tslint:disable-next-line:max-line-length
      'contents': 'Dear Sir or Madam,\n\nI made a reservation for the Windjammer Las Vegas, NV hotel on October 3-October 17th for the year 2013. The reservation number for this transaction is C39093FG341.I used the online system to make my reservations and the credit card used to book this room was a MasterCard with the last four digits of 7845. I was charged a deposit of $400, to my credit card, upon booking this reservation.\n\nDue to circumstances that are beyond my control, I am unable to fly to Las Vegas for this vacation and need to cancel my reservation.According to your hotel\'s cancellation policy, I am entitled to a 100% refund, as I made my cancellation within 30 days preceding the reservation. I am requesting a cancellation at least nearly 60 days in advance so there should be no problems getting this reservation cancelled and a refund of my initial deposit.\n\nI would like the deposit to be put back on my credit card upon receipt of this letter and to cancel the reservations.If you have any questions, please feel free to contact me at my email address name@gmail.com or on my cell phone at 555-123 - 4569. I look forward to hearing from you soon.\n\nBy Andre Bradley'
    },
    {
      'address': 'hello@naver.com',
      'title': 'Dear Hotel',
      'date': '04/30/2018',
      'no': 5,
      // tslint:disable-next-line:max-line-length
      'contents': 'Dear Larochelle Inn,\nPlease be informed that I will be traveling to Cuba on July 5th, 2009 and I will be requiring a room at your hotel for the duration of 3 days.\nI would like to reserve an ocean view suite that has 2 beds included.I checked on your website, and the price is supposed to be $231 per night.\nPlease call me at 343-543 - 5645 to verify my reservation.\nThank you,\n\nJulie  J.Thayer'
    },
  ];
  selected;

  constructor() { }

  ngOnInit() {
  }

  change(event) {
    this.selected = this.data[event];
  }

}
