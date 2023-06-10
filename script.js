// storing the required elements in the variables below
let items = document.querySelectorAll('.items');
let boxes = document.querySelectorAll('.box');
let successMsg = document.getElementById('msg');
let resetBtn = document.getElementById('btn');

// Event Listeners

// Adding the dragstart event listener to all the item stored in the items variable
items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

// adding dragenter, dragover, dragleave and drop event listeners to each box
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', drop);
});

// added click event listener to the reset button
resetBtn.addEventListener('click', reset);


// Functions called be the Event listeners above

// function to handle the dragstart event
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}


// function to handle the dragenter event
function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains('box')) {
        event.target.classList.add('on-dragging');
    }

}

// function to handle the dragover event
function dragOver(event) {
    event.preventDefault();
    if (event.target.classList.contains('box')) {
        event.target.classList.add('on-dragging');
    }
}

// function to handle the dragleave event
function dragLeave(event) {
    if (event.target.classList.contains('box')) {
        event.target.classList.remove('on-dragging');
    }

}

// function to handle the drop event
function drop(event) {
    if (event.target.classList.contains('box')) {
        event.target.classList.remove('on-dragging');
    }
    let id = event.dataTransfer.getData('text/plain');
    let item = document.getElementById(id);
    event.target.appendChild(item);
    successMessage(item);
}


// function to display the success message
function successMessage(item) {
    // the below line uses the Template literals to display dynamic content
    successMsg.textContent = `The ${item.textContent} is successfully dropped!`;
}

// function to reset the containers to their previous state
function reset() {
    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    box2.innerHTML = '';
    successMsg.textContent = '';
    items.forEach(item => {
        box1.append(item);
    });
}