// const  officialName = prompt('what is the official name of javascript', '');


// if ( officialName === 'ECMAscript'){
//   alert('right')
// }else{
//   alert('you dont know ECMAscript!')
// }





// const whatNumber = prompt('what is the number', '');

// if ( whatNumber > 0 ){
//   alert (1)
// }else if ( whatNumber < 0 ) {
//   alert(-1)
// }else{
//   alert(0)
// }





// let result = (a + b < 4) ? 'Below' : 'over';




// let message = (login === 'Employee') ? 'hello' : 
//               (login === 'Director') ? 'Greetings':
//               (login === '') ? 'No login' :
//               ''




// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// const para = document.createElement('p');
// const sectoin = document.querySelector('#section')

// function chooseName(){
 
//     const randomName = names[Math.floor(Math.random() * names.length)]
//     para.textContent = randomName;
// }

// section.innerHTML = ' ';

// section.appendChild(para);
// chooseName()






// function square(num){
//     return num * num;

// }


// function cubed(num){
//     return num * num * num;
// }




// function checkAge(age) {
//   return age > 18 ? true : 'did parents allow you?';
// }


// function getMin(a,b){
//   return Math.min(a,b);
// }

function pow(x,n){
  let result = x;
  for (let i = 1; i < n; i++){
    result *=x
  }
  return result;
}
   let x = prompt ('x?','');
   let n  = prompt('n?','');
  if ( n < 1) {
    alert (`Power ${n} is not supported, use a positive integer`)
  }else{
    alert(pow(x,n))
  }
  

