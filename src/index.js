import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const div2 = document.createElement("div");
    div2.className = "list-row";
    const li2 = document.createElement("li");
    li2.innerText = text;
    const reversebutton = document.createElement("button");
    reversebutton.innerText = "戻す";
    reversebutton.addEventListener("click", () => {
      const deleteTarget = reversebutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = reversebutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    div2.appendChild(li2);
    div2.appendChild(reversebutton);
    document.getElementById("complete-list").appendChild(div2);
    //ここからタスクを削除する処理
    delteFromIncompleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    delteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

const delteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
