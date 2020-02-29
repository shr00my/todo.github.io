import { Component, OnInit } from "@angular/core";
import { ListService } from "../../services/list.service";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  completed: boolean;
  id: string;
  editing: boolean;
  content: string;
  isNew: boolean = true;

  constructor(private listService: ListService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.isNew) {
      const newTodo = {
        id: this.generateId(),
        completed: false,
        editing: false,
        content: this.content
      };
      this.listService.addTodo(newTodo);
    } else {
      const updateTodo = {
        id: this.id,
        completed: this.completed,
        editing: this.editing,
        content: this.content
      };
      this.listService.updateTodo(updateTodo);
    }

    this.content = "";
  }

  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
