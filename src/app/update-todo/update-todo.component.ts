import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoServiceProvider } from '../service/todo-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  private title : string = 'Modifier une tache';
  private nbrPriorite : any = [1,2,3];
  private newTodo :any = {"id":"","tache":"","priorite":"", "datelimite":""};
  todoForm : FormGroup;
  constructor(public formBuilder: FormBuilder, public restServiceProvider: TodoServiceProvider, public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => this.newTodo.id=res.id);
    
    this.todoForm = this.formBuilder.group({
      id: ['',Validators.required],
      tache: ['',Validators.required],
      priorite: ['',Validators.required],
      datelimite:['',Validators.required],
    });

    //-------------- recupere l'objet promis
    this.restServiceProvider.findTask(this.newTodo.id).then((result:any) => {
      this.newTodo = result;
    })
  }

  updateTodo(){
    let data = 'id='+this.newTodo.id+'&tache='+this.newTodo.tache+'&priorite='+this.newTodo.priorite+'&datelimite='+this.newTodo.datelimite;
    this.restServiceProvider.addTask(data).then((result:any) => {
      this.router.navigate(['']);
    })
  }


}
