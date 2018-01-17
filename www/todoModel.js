"use strict";

class TodoModel {
  constructor(title, description, isDone = false) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }

  toggle() {
    this.isDone = !this.isDone;
    return this.isDone;
  }
}