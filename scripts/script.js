const input = document.getElementById('input-list');
const buttonAdd = document.getElementById('button');
const list = document.getElementById('list');
const form = document.getElementById('form');
const placeholder = document.getElementById('message');
const section = document.getElementById('father');

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value == '' || input.value == ' '){
        const warning = document.createElement('p');
        warning.textContent = 'Fill in this field ⬆';
        warning.classList.add('warning');
        form.insertBefore(warning, form.children[2]);
        setTimeout(() => {
            form.removeChild(warning);
        }, 2000);
    } else{
        const listContainer = document.createElement('div');
        list.appendChild(listContainer);
        listContainer.classList.add('div-class');
        const paragraph = document.createElement('p');
        listContainer.appendChild(paragraph);
        paragraph.textContent = input.value;
        const buttonDelete = document.createElement('button');
        listContainer.appendChild(buttonDelete);
        buttonDelete.innerHTML = '<ion-icon name="close-sharp">';
        paragraph.classList.add('paragraph');
        buttonDelete.classList.add('button-delete');
        form.reset();

        paragraph.addEventListener('click', () => {
        paragraph.classList.toggle('paragraph-line');
        })

        buttonDelete.addEventListener('click', () => {
        list.removeChild(listContainer);
        })
    }

})