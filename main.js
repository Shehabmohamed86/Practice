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

// const list = document.createElement('ul')




// for(const item of myArray){
//  list.innerHTML +=`<li>${item}</li>`

// }
// const section = document.querySelector('section')
// section.appendChild(list);









// let band = {
//   name : 'Queen',
//   nationality : 'American',
//   genre: 'Rock',
//   members:'4',
//   formad:'1970',
//   split: false,
//   albums: ['Flash gordon','Highlander'],
//   titel : 'Flash',
//   released : '1980'
// };
// let bandInfo = `our name is ${band.name}, our nationalality is ${band.nationality}`


// const section = document.querySelector('section');
// let para = document.createElement('p');
// para.textContent = bandInfo;
// section.appendChild(para)


// const para = document.createElement('p');

// const phonebook = [
//   { name : 'Chris', number : '1549' },
//   { name : 'Li Kang', number : '9634' },
//   { name : 'Anne', number : '9065' },
//   { name : 'Francesca', number : '3001' },
//   { name : 'Mustafa', number : '6888' },
//   { name : 'Tina', number : '4312' },
//   { name : 'Bert', number : '7780' },
//   { name : 'Jada', number : '2282' },
// ]


// for(const person of phonebook){
//   if(person.name === 'Mustafa'){
//     para.textContent = person.number
//   }
// }

// const section = document.querySelector('section');
// section.appendChild(para);






// let i = 500;
// const para = document.createElement('p');

// function isPrime(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }


// for(let i = 500; i >= 2; i--){
//   if(!isPrime(i)){
//     continue;
//   }
//   if(isPrime(i)){
//   para.textContent += i 
//   }
// }

// const section = document.querySelector('section');
// section.appendChild(para);





// let user = {};

// user.name = 'john';
// user.surname = 'smith';
// user.name = 'pete';
// delete user.name;



// let schedule = {};

// function isEmpty(obj){
//  for(let key in obj){
//   return false;
//  }
//  return true
// }

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));






// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for(let key in salaries){
//   sum +=  salaries[key]
 
// }

// console.log(sum)






let menu = {
  width: 200,
  height: 300,
};



 function multiplayNumeric(obj){
  for (let key in obj) {
    if (typeof obj[key] === 'number'){
    obj[key] *= 2;
  }
  }
 }


