import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  
  @Input() title: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }


}
