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

// function pow(x,n){
//   let result = x;
//   for (let i = 1; i < n; i++){
//     result *=x
//   }
//   return result;
// }
//    let x = prompt ('x?','');
//    let n  = prompt('n?','');
//   if ( n < 1) {
//     alert (`Power ${n} is not supported, use a positive integer`)
//   }else{
//     alert(pow(x,n))
//   }
  





// let ask = (question,yes,no)=>{
//   if(confirm(question)) yes()
//   else no()
// }


// ask(
//   'Do you agree?',
//   () => alert('you agreed'),
//   () => alert('you canceled the execution')
// )




// function add7(n){
//   console.log(n+7);
// }




// function multiply (a , b) {
//   return a * b ;
// }


// function capitalize (str){
//   return str[0].toUpperCase() + str.slice(1)
// }



// function lastLetter(str){
//   return str.slice(-1);
// }




//countdown project

// let output = document.querySelector('.output')



// for(let i = 10; i >= 0; i--){
//   let para = document.createElement('p');
//   output.appendChild(para);
//   if (i === 10){
//    para.textContent = `Countdown ${i} `;
//    } else if (i === 0 ){
//     para.textContent = 'Blast off';
//   }else{
//     para.textContent= i
//   }
  

// }





//A GUEST LIST


// const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];



// const admitted = document.querySelector('.admitted');
// const refused = document.querySelector('.refused')
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: ';


// for (const person of people ){
//   if(person ==='Phil' || person === 'Lola'){
//     refused.textContent+= `${person}, `
//   }else{
//     admitted.textContent+= `${person}, `
//   }
// }

// admitted.textContent= admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';




// const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];

// let list = document.createElement('ul')




// for(const item of myArray){
//  list.innerHTML +=`<li>${item}</li>`

// }
// const section = document.querySelector('section')
// section.appendChild(list);

// console.log(section)







