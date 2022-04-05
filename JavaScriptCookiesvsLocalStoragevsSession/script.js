// Local Stronge 

localStorage.setItem('name' , 'mina');
// console.log(localStorage.getItem('name'));
localStorage.removeItem('name');


//* **************************** */
// session Storage
sessionStorage.setItem('name' , 'mino');
// console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');



// *********************************** */
// cookie
document.cookie = 'name = Mina; expires=' + new Date(2023, 0, 1).toUTCString()

document.cookie = 'lastName = Borhani; expires=' + new Date(9999, 0, 1).toUTCString()

console.log(document.cookie);