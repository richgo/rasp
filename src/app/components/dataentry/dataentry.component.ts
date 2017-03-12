import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {

  scores = [1,2,3,4,5];
  
  constructor() { }

  ngOnInit() {
  }

}
