function add() {
    const ul = document.querySelector("ul");
    const input = document.querySelector("input");
    const tarefa = input.value;
    console.log(tarefa);

    const li = document.createElement("li");
    li.innerText = tarefa;
    ul.appendChild(li);
    input.value = ""
}
