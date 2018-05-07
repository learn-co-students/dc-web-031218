// get that form data
// submit that form data with fetch

(function() {
  function findForm() {
    return document.querySelector("#new-task-form");
  }

  function findPriorityBox() {
    return document.querySelector("#priority-box");
  }

  function findDescriptionBox() {
    return document.querySelector("#description-box");
  }

  function getFormData() {
    return {
      description: findDescriptionBox().value,
      priority: findPriorityBox().value
    };
  }

  const URL_PREFIX = "http://localhost:3000";

  function createNewTask(data) {
    let url = URL_PREFIX + "/tasks";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(res => res.json())
      .then(responseJson => console.log(responseJson));
  }

  function attachEventListener() {
    findForm().addEventListener("submit", e => {
      e.preventDefault();
      let data = getFormData();
      createNewTask(data);
    });
  }

  /*
List all tasks
*/

  function getTaskList() {
    return document.querySelector("#task-list");
  }

  // STEPS:
  // get tasks
  // for each task
  // add the task to the dom

  function renderTask(task) {
    return `Description: ${task.description}, Priority: ${task.priority} ${
      task.id
    }`;
  }

  function addTaskToDOM(task) {
    // add task to the DOM
    let item = document.createElement("li");
    item.innerHTML = renderTask(task);
    getTaskList().appendChild(item);
  }

  // returns a promise
  function getTasks() {
    return fetch(`${URL_PREFIX}/tasks`).then(res => res.json());
  }

  function getTasksAndAddToDom() {
    getTasks().then(tasks => tasks.forEach(task => addTaskToDOM(task)));
  }

  function init() {
    getTasksAndAddToDom();
    attachEventListener();
  }

  init();
})();
