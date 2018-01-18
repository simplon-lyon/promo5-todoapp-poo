/**
 * Cette classe représente la vue de notre TODO list
 */
class TodoListView {
  constructor() {}
  /**
   * Met à jour la vue.
   * @param {Array} todoArray un tableau contenant des todos
   */
  update(todoArray) {
    let ul = document.querySelector("ul");
    // on supprime tout les éléments de la liste.
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    // on itère sur le tableau pour afficher chaque todo de la liste
    for (let todo of todoArray) {
      // on créé tout les éléments HTML qui constituent un todo dans le DOM
      let li = document.createElement("li");
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      // on place le texte d'un todo dans leurs éléments HTML respectif
      p.textContent = todo.description;
      h1.textContent = todo.title;
      // ajoute les éléments dans le DOM
      ul.appendChild(li);
      div.appendChild(h1);
      div.appendChild(p);
      li.appendChild(div);
      li.appendChild(checkbox);
    }
  }
}