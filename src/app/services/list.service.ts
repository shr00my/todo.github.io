import { Injectable } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";

@Injectable({
  providedIn: "root"
})
export class ListService {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  getTodos(): Observable<Todo[]> {
    if (localStorage.getItem("todos") === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }

    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.unshift(todo);

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  updateTodo(todo: Todo) {
    this.todos.forEach((current, index) => {
      if (todo.id == current.id) {
        this.todos.splice(index, 1);
      }
    });
    this.todos.unshift(todo);

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  deleteTodo(todo: Todo) {
    this.todos.forEach((current, index) => {
      if (todo.id == current.id) {
        this.todos.splice(index, 1);
      }
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
