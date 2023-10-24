var elem = document.createElement('p');
elem.innerHTML = 'Hello World for DOM!';
var divElement = document.getElementById('generator');
divElement.appendChild(elem);
var linkElement = document.createElement('a');
elem.href='http://facebook.com';
elem.innerHTML='This is a link to facebook';
divElement.appendChild(linkElement);

/***** animation and intervals *****/

var animationElement = document.getElementById('myAnimation');
var containerElement = document.getElementById('myContainer');
var pos = 0;
var id = setInterval(frame, 10);
animationElement.style.background = 'gray';
containerElement.style.backgroundColor = 'black';

function frame() {
    if (pos > 350) {
    animationElement.style.backgroundColor = 'yellow';
    containerElement.style.backgroundColor = 'green';
    clearInterval(id);
    } else {
        animationElement.style.top = pos + 'px';
        animationElement.style.left = pos + 'px';
    }
pos++;
}

document.getElementById('printing').innerHTML = 'Printing';
setTimeout(doone, 3000);

function doone() {
    document.getElementById('printing').innerHTML = 'DONE!';
}

var eventsElement = document.getElementById('events');

function hover() { 
    eventsElement.style.color = 'red';
    eventsElement.style.backgroundColor = 'blue';
    eventsElement.style.fontSize = '20x';
};

function out() {
    eventsElement.style.color = 'blue';
    eventsElement.style.backgroundColor = 'red';
    eventsElement.style.fontSize = '20px';
}


var click1=0;
function colStyle() {
    var myCollection = document.getElementsByClassName('collection');
    if (click1%2 == 0) {
        for (i = 0; i < myCollection.length; i++) {
            myCollection[i].style.color = 'gold';
        }
    } else {
        for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = 'purple';    
        }
    }
    click1++;
};



var todoInput = document.getElementById('todoTextInput');
var rodoUL = document.getElementById('todoUL');

function submitTodo() {
    // get the todoInput value and check if it's empty or not. 
    if(todoInput.value == '') {
        alert('cannot add empty todo text');
    } else {
        addTodo(todoInput.value);
        todoInput.value= '';
        todoInput.focus();
    }
}

function addTodo(todoText) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.classList.add(
        'h-4', 
        'w-4', 
        'rounded', 
        'border-gray-300',
        'text-indigo-300',
        'focus:ring-indigo-600'
         );
    console.log('checkbox');
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteTodo);
    deleteButton.classList.add('justify-self-end');
    deleteButton.addEventListener('click', deleteTodo);

    listItem.appendChild(checkbox)
    listItem.appendChild(todoTextContainer)
    listItem.appendChild(deleteButton);
    listItem.classList.add('flex');
    todoUL.appendChild(listItem);
    };

function deleteTodo(event) {
    var parentNode = event.target.parentNode;
    parentNode.remove();

}