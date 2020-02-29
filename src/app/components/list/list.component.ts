import { Component, OnInit } from "@angular/core";
import { Todo } from "../../interfaces/todo";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;
  loaded: boolean = false;
  allComplete: boolean;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.loaded = true;
    });
    this.allComplete = this.todos.every(todo => {
      return todo.completed;
    });
  }

  onDelete(todo: Todo) {
    if (confirm("are you sure?")) {
      this.listService.deleteTodo(todo);
    }
  }

  editTodo(todo: Todo) {
    todo.editing = true;
  }

  doneEditing(todo: Todo) {
    todo.editing = false;
    this.listService.updateTodo(todo);
  }

  onStatusChange(todo: Todo) {
    // TOGGLING COMPLETE STATUS
    todo.completed = !todo.completed;

    // UPDATE ARRAY AND LOCALSTORAGE
    this.listService.updateTodo(todo);
    // CHECK IF ALL OF TODOS ARE DONE
    this.allComplete = this.todos.every(todo => {
      return todo.completed;
    });
  }

  remainingTasks(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  allCompleted(todos: Todo[]) {
    todos.forEach((current, index) => {
      current.completed = true;
      this.listService.updateTodo(current);
    });
    this.allComplete = true;
  }

  clearCompleted(todos: Todo[]) {
    todos.map(todo => {
      todo.completed = false;
      this.listService.updateTodo(todo);
    });
    this.allComplete = false;
  }

  atLeastOneCompleted() {
    return this.todos.filter(todo => todo.completed).length > 0;
  }
}
