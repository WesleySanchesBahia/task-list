import { Component, ElementRef,  OnInit, Renderer2, ViewChild } from '@angular/core';
import { ButtonItemComponent } from './components/button-item/button-item.component';
import { InputItemComponent } from './components/input-item/input-item.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task, TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [
    ButtonItemComponent,
    InputItemComponent,
    ReactiveFormsModule,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild("input", { static: true }) input!: InputItemComponent;


  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    let tasks = localStorage.getItem("tasks");
    if(tasks?.length){
      this.tasks = JSON.parse(tasks);
    }

  }

  public form = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public tasks:Array<Task> =[];

  addTask():void {

    let newTask = {
      name: this.form.value.task || "",
      checked:false
    }
    if(this.tasks.length){
      let exist = this.tasks.find(task => newTask.name === task.name);
      if(exist){
        this.openSnackBar();
         return;
      }
    }

    this.tasks.push(newTask);
    this.form.reset();
    localStorage.setItem("tasks",JSON.stringify(this.tasks));
    this.focusInput();
  }

  focusInput(){
    if(this.input){
       this.input.focus();
    }
  }


  openSnackBar(): void{
    this.snackBar.open(`Já existe um task com o mesmo nome`, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


  updateTaskSessionStorage(tasks:Array<Task>): void{
   localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}
