'use strict';

const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const showModalWindow = document.querySelectorAll('.show-modal-window');

const addHiddenClass = function () {
    modalWindow.classList.add('hidden')
    modalOverlay.classList.add('hidden')
    document.body.classList.remove('fixedPos')
}

const removeHiddenClass = function () {
    modalWindow.classList.remove('hidden')
    modalOverlay.classList.remove('hidden')
    document.body.classList.add('fixedPos')
}

for (let i = 0; i < showModalWindow.length; i++) {
    showModalWindow[i].addEventListener('click', removeHiddenClass)
}

btnCloseModalWindow.addEventListener('click', addHiddenClass)
modalOverlay.addEventListener('click', addHiddenClass)

document.addEventListener('keydown', function (event){
    if(event.key === 'Escape') {
        if(!modalWindow.classList.contains('hidden')) {
            addHiddenClass()
        }
    }
})