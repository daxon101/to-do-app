// First let's work on adding a task
let tasks = []

const taskContainer = document.querySelector('.task-container')
const inputField = document.querySelector('.to-do-input')

// handleAddTask deals with grabbing the form value and rendering it to the display
const handleAddTask = (e) => {
    
    // Prevent page refresh
    e.preventDefault()
    
    // grab the value in the input box
    const newTask = e.target.taskName.value

    if (newTask == "") return
    
    // add the value to the task list - this will become an addition to local storage eventually
    tasks.push(newTask)
    
    // render the tasks to the display
    renderTasks(tasks)
    
    // Clear the input field
    inputField.value = ""

}

// This function renders the tasks to the display
const renderTasks = (tasks) => {

// generate html string for each task
const taskHTML = tasks.map((task, index) => {
    return (`
    <div class="task">
    <div class="task-title">${task}</div>
    <button type="button" class="delete" id="${index}"><i id="${index}" class="fa-solid fa-trash btn delete-button"></i></button>
    </div>
    `)
})

// add the html to the task container
taskContainer.innerHTML = taskHTML.join('')

}

// This function removes the task from the list
const handleDeleteTask = (e) => {
    if(e.target.classList.contains('delete-button') || e.target.classList.contains('delete')) {
        let filteredTasks = tasks.filter((task, index) => index !== parseInt(e.target.id))
        tasks = [...filteredTasks]
        renderTasks(tasks)
    }
}

// grab the dom elements required - the input field and the submit button
const form = document.querySelector('#new-task-form')
form.addEventListener('submit', (e) => handleAddTask(e))

// Add an event listener to whole container and use delegation to capture the correct element
taskContainer.addEventListener("click", handleDeleteTask)

