import {Component, OnInit} from '@angular/core';

import {TodoItem} from '../item-component/item.component';
import {Todo, ITodo} from '../../shared/todo.model';
import {TodoService} from '../../shared/todo.servise';


@Component({
  selector: 'todo-list',
  templateUrl: './app/components/list-component/list.component.html',
  styleUrls: ['./app/components/list-component/list.component.css'],
  directives: [TodoItem]
})

export class TodoListComponent implements OnInit{
 todos: ITodo[];


  constructor(private todoServise: TodoService){
    this.todos = []
    // this.todoServise.order = 1;
    // console.log(this.todoServise);
  }

  ngOnInit(){
     this.todoServise.getTodos().then(todos => this.todos = todos);
  }
  // sort
  get sortedTodos():ITodo[] {
    return this.todos.map((todo: Todo) => todo)
    .sort((a, b) => {
      if(a.title > b.title) return 1;
      else if(a.title < b.title) return -1;
      return 0;
      })
    .sort((a, b) => {
      if(a.done && !b.done) return 1;
      else if (!a.done && b.done) return -1;
      else return 0;
    });
  }

  onTodoDeleted(todo: ITodo): void {
    this.todoServise.deleteTodo(todo);
    // if (todo) {
    //   let index = this.todos.indexOf(todo);
    //   if (index > -1) {
    //     this.todos.splice(index, 1);
    //   }
    //   console.log(todo);
    // }
  }
}