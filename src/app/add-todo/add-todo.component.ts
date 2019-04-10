import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoServiceProvider } from '../service/todo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  private title : string = 'Ajouter une tache';
  private nbrPriorite : any = [1,2,3];
  private newTodo :any = {"tache":"","priorite":"", "datelimite":""};
  todoForm : FormGroup;
  constructor(public formBuilder: FormBuilder, public restServiceProvider: TodoServiceProvider, public router: Router) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      tache: ['',Validators.required],
      priorite: ['',Validators.required],
      datelimite:['',Validators.required],
    });
  }

  addTodo(){
    let data = 'tache='+this.newTodo.tache+'&priorite='+this.newTodo.priorite+'&datelimite='+this.newTodo.datelimite;
    this.restServiceProvider.addTask(data).then((result:any) => {
      this.router.navigate(['']);
    })
  }

}
