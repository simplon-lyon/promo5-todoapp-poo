"use strict";

class TodoListModel {
  constructor() {
    this.all = [];
  }
  add(todo) {
    this.all.push(todo);
  }
  delete() {
    for (let i = 0; i < this.all.length; i++) {
      if (this.all[i].isDone) {
        this.all.splice(i, 1);
        i--;
      }
    }
  }
}
