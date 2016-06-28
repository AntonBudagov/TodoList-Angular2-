 export interface ITodo {
  title: string;
  done: boolean;
}


export class Todo implements ITodo {
  title: string;
  done: boolean;
  // constructor(public text: string, public completed: boolean) {}
  constructor(title: string){
    this.title = title,
    this.done = false
  }
}