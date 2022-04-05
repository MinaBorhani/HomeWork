const draggable_List = document.getElementById('draggable-List');
const check =document.getElementById('check');

const rechestPeople=[
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

//store listitems
const listItems=[];

let dragStartIndex;

createList();

//Insert List items into DOM
function createList(){
    [...rechestPeople]
    .map(a =>({value: a, sort: Math.random() }))
    .sort((a,b)=> a.sort-b.sort)
    .map(a=> a.value)
    .forEach((person , index) =>{
        // console.log(person);


        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML=`
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_List.appendChild(listItem);
    });

    addEventListeners();
}



function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex);
}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
}

function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
}

function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
}


function dragDrop() {
    // console.log('Event: ', 'drop');
    const dradEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex , dradEndIndex)

    this.classList.remove('over');
}

// swap list items that are drag and drop
function swapItems(fromIndex , toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

}

//check the order of list items
function checkOrder() {
    listItems.forEach((listItem, index)=>{
        const personName =listItem.querySelector('.draggable').innerText.trim();

        if(personName !== rechestPeople[index]){
            listItem.classList.add('wrong');
        }else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    });
}

function addEventListeners() {
   const draggables =document.querySelectorAll('.draggable');
   const dragListItems = document.querySelectorAll('.draggable-List li') 

   draggables.forEach(draggable => {
       draggable.addEventListener('dragstart', dragStart);
   })

   dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
});
}

check.addEventListener('click', checkOrder);