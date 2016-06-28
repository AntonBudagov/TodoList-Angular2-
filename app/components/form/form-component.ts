import {Component, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';
import {TodoService} from '../../shared/todo.servise';


@Component({
  selector: 'todo-form',
  templateUrl: './app/components//form/form.component.html',
  styleUrls: ['./app/components/form/form.component.css']
})

export class TodoFormComponent{

  @Output() added = new EventEmitter();

  constructor(private todoServise: TodoService){
     // this.todoServise.order = 2;
     // console.log(this.todoServise);
  }

  add(title: string){
    if(title){
      let todo = new Todo(title);
      this.todoServise.addTodo(todo);
      // this.added.emit(new Todo(title));
    }
  }
}

