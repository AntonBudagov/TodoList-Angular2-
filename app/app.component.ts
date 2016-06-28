import {Component} from '@angular/core';
import {TodoListComponent} from './components/list-component/list.component';
import {Todo} from './shared/todo.model';
import {TodoFormComponent} from './components/form/form-component';
import {todos} from './shared/todo.data'
import {TodoService} from './shared/todo.servise';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent, TodoFormComponent],
    providers: [TodoService]
})

export class AppComponent {
  title: string;


  constructor(){
    this.title = 'Angular 2Do';
    // this.todos = [ new Todo('task')]
  }
}
