import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoServiceProvider } from '../service/todo-service';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private title : string = 'Home Page';
  private allTodo : any;
  constructor( public restServiceProvider: TodoServiceProvider,  public route: ActivatedRoute, public router : Router) { }

  ngOnInit() {
    this.restServiceProvider.getAllTodo().then((result:any)=>{
      this.allTodo = result;
    })
  }

  deleteTask(mytodo){
    this.restServiceProvider.deleteTask(mytodo._id).then((result:any)=>{
      this.allTodo = this.allTodo.filter(todo => todo !== mytodo );
    })
  }




}

