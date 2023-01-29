import { Component, OnInit } from '@angular/core';
import { myKbn1 } from 'src/app/data/dummy-data';
import { MyKanban } from 'src/app/interfaces/my-kanban';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // get some test data to test UI
    public dataset: MyKanban = myKbn1;
    public board = this.dataset.boards[0];
  
    public dragTicketHandler(event: DragEvent): void {
      console.log('drag');
      (event.target as HTMLElement).style.opacity = "0";
      
    };

    public dragOverColumnHandler(event: DragEvent): void {
      event.preventDefault();
    }

    public dropOnColumnHandler(event: DragEvent): void {
      console.log('Drpped here');
      
    }

}
