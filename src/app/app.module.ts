import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HomeComponent } from './home/home.component';
import { TodoServiceProvider } from './service/todo-service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'todo/:id', component: UpdateTodoComponent },
  { path: 'todo', component: AddTodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    HomeComponent,
    UpdateTodoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
  ],
  providers: [
    TodoServiceProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}


