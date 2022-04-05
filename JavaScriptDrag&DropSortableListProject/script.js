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
        <p class="person-name">${person  }</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem);

        draggable_List.appendChild(listItem);
    })
}