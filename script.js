const addText = document.getElementById('add-txt');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
  newListItem();
  addText.value = '';
});

function newListItem() {
  const li = document.createElement('li');
  const inputValue = addText.value;
  const node = document.createTextNode(inputValue);
  li.appendChild(node);
  if (!addText.value) {
    alert('Write a task!');
  } else {
    taskList.appendChild(li);
  }
  const span = document.createElement('span');
  const txt = document.createTextNode(' x');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    this.parentElement.style.display = 'none';
  }
}