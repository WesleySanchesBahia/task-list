import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type Task = {
  name:string,
  checked:boolean,
}
@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  @Input() tasks:Array<Task> = [];
  @Output() updateTask: EventEmitter<any> = new EventEmitter<any>();
  constructor(){

  }

  ngOnInit(): void {

  }

  checkTask(task:Task): void{
    if(!task.checked){
      task.checked = true;
    } else {
      task.checked = false;
    }
  }

  deleteTask(index:number):void {
    this.tasks.splice(index, 1);

    this.updateTask.emit(this.tasks);
  }
}
