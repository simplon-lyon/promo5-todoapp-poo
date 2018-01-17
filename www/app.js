"use strict";

let todoList = new TodoListModel;

todoList.add(new TodoModel("title", "description"));
todoList.add(new TodoModel("title1", "description1"));
todoList.add(new TodoModel("title2", "description2"));

console.log(JSON.stringify(todoList));

todoList.all[0].toggle();

console.log(JSON.stringify(todoList));

todoList.delete();

console.log(JSON.stringify(todoList));
