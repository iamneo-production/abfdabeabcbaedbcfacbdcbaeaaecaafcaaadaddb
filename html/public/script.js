// // Get the necessary elements
// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// // Add event listener to the add button
// addButton.addEventListener('click', addTask);

// // Function to add a new task
// function addTask() {
//     const taskDescription = taskInput.value;

//     if (taskDescription.trim() !== '') {
//         const li = document.createElement('li');
//         const checkbox = document.createElement('input');
//         const label = document.createElement('label');
//         const removeButton = document.createElement('button');

//         checkbox.type = 'checkbox';
//         label.textContent = taskDescription;
//         removeButton.textContent = 'Remove';
//         removeButton.classList.add('remove-button');

//         li.appendChild(checkbox);
//         li.appendChild(label);
//         li.appendChild(removeButton);

//         taskList.appendChild(li);

//         // Clear the input field
//         taskInput.value = '';

//         // Add event listener to the remove button
//         removeButton.addEventListener('click', removeTask);

//         // Add event listener to the checkbox
//         checkbox.addEventListener('change', completeTask);
//     }
// }

// // Function to remove a task
// function removeTask(event) {
//     const li = event.target.parentElement;
//     taskList.removeChild(li);
// }

// // Function to mark a task as completed
// function completeTask(event) {
//     const checkbox = event.target;
//     const li = checkbox.parentElement;

//     if (checkbox.checked) {
//         li.classList.add('completed');
//     } else {
//         li.classList.remove('completed');
//     }
// }

// Function to add a new task
// function addTask() {
//     var input = document.getElementById("taskInput");
//     var task = input.value.trim();
  
//     if (task !== "") {
//       var taskList = document.getElementById("taskList");
//       var newItem = document.createElement("li");
//       newItem.innerText = task;
//       taskList.appendChild(newItem);
//       input.value = "";
//     }
//   }
  
//   // Function to remove a task
//   function removeTask() {
//     var taskList = document.getElementById("taskList");
//     var selectedItems = document.querySelectorAll("li.checked");
  
//     selectedItems.forEach(function (item) {
//       taskList.removeChild(item);
//     });
//   }
  
//   // Event listener for adding a task
//   document.getElementById("addButton").addEventListener("click", addTask);
  
//   // Event listener for removing a task
//   document.getElementById("removeButton").addEventListener("click", removeTask);
  
// Function to add a new task
// function addTask() {
//     var input = document.getElementById("taskInput");
//     var task = input.value.trim();
  
//     if (task !== "") {
//       var taskList = document.getElementById("taskList");
//       var newItem = document.createElement("li");
//       newItem.innerText = task;
//       newItem.addEventListener("click", removeTask); // Add click event listener to remove the task
//       taskList.appendChild(newItem);
//       input.value = "";
//     }
//   }
  
//   // Function to remove a task
//   function removeTask() {
//     this.parentNode.removeChild(this);
//   }
  
//   // Event listener for adding a task
//   document.getElementById("addButton").addEventListener("click", addTask);
  
// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
  
    if (task !== "") {
      var taskList = document.getElementById("taskList");
      var newItem = document.createElement("li");
  
      // Create the task text
      var taskText = document.createElement("span");
      taskText.innerText = task;
      newItem.appendChild(taskText);
  
      // Create the remove button
      var removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.addEventListener("click", removeTask);
      newItem.appendChild(removeButton);
  
      taskList.appendChild(newItem);
      input.value = "";
    }
  }
  
  // Function to remove a task
  function removeTask() {
    var taskItem = this.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
  
  // Event listener for adding a task
  document.getElementById("addButton").addEventListener("click", addTask);
  