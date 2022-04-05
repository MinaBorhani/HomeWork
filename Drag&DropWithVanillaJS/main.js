const fill = document.querySelector('.fill');
const empties =document.querySelectorAll('.empty');

//Fill Listerners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


// Loop through empties and call drag events
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// Drag function
function dragStart() {
    // console.log('star');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0 ); 

}

function dragEnd() {
    // console.log('end');
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    // console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    // console.log('enter');
}

function dragLeave() {
    this.className ='empty';
    // console.log('leve');
}

function dragDrop() {
    this.className ='empty';
    // console.log('drop');
    this.append(fill);
}