import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../shared/todo.model';


// import {TodoItem} from '../models';
@Component({
  selector: 'todo-item',
  templateUrl: './app/components/item-component/item.component.html',
  styleUrls: ['./app/components/item-component/item.component.css']

  // inputs: ['todos']
})

export class TodoItem{
  @Input() todo: Todo;
  @Output() deleted = new EventEmitter();

  toggleDone(){
    this.todo.done = !this.todo.done;
  }

  delete() {
    console.log("DELET ", this.todo);
    // if (title) {
    //   this.toddel.splice(this.toddel.indexOf(title), 1)
    // }
    this.deleted.emit(this.todo);
    // this.toddel.splice(this.toddel.indexOf(title), 1)
  }
}
