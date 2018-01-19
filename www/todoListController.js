"use strict";
/**
 * Cette classe représente le controleur de notre application.
 */
class TodoListController {
  constructor() {
    // on créé une vue et un modèle.
    this.view = new TodoListView;
    this.model = new TodoListModel;
    // astuce permettant de garder l'accès à this dans le contexte de l'eventListener.
    let _this = this;
    // on récupère le formulaire afin d'accéder aux valeurs des inputs.
    let form = document.querySelector("form");
    // on écoute l'évenement submit du formulaire
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let title = document.querySelector("input[name=title]");
      let description = document.querySelector("input[name=description]");
      // on créer un nouveau todo à partir des valeurs des inputs.
      let newTodo = new TodoModel(title.value, description.value);
      // on ajoute le nouveau todo dans la liste
      _this.model.add(newTodo);
      // on réinitialise le formulaire (comportement normal d'un formulaire)
      form.reset();
      // on met à jour la vue à partir du tableau de todos présent dans notre instance de TodoListModel
      _this.view.update(_this.model.all);
    });

    let deleteBtn = document.querySelector("form input[type=button]");
    deleteBtn.addEventListener('click', function (event) {
      event.preventDefault();
      _this.model.delete();
      _this.view.update(_this.model.all);
    });

  }




}