
//function logName

function logName(name) {
  console.log(`Hello, ${name} !`)
};
const name1 = "Ridho"
const name2 = "Geo"

logName(name1);
logName(name2);

//---------------------------//

// function check usia

const checkAge = function(age) {
  if(age >= 25) {
    console.log(`Hello man, you are ${age} years old !`)
  } else if(age < 25 && age >= 0) {
    console.log(`you are ${age} years old, dont stop learning`)
  } else if(age < 8 && age >= 0) {
    console.log(`hello kid, comeback later`)
  } else {
    console.log(`Wrong input !`)
  }
}
checkAge(30);
//------------------------------------------//

// 12730

//-----------------------------------//
// function add marks ? !  

const addMarks = (text, mark, times) => {
 let newText = text
 
 for(let i = 0; i <= times; i++) {
   newText += mark
 }
 console.log(newText);
}
addMarks("Hello", "!", "5");
addMarks("this is 100", "!", "100");

//--------------------------//
// function show name, age, phone number

const showNameWithAge = (name = 'Unknown', age=0, phone=0) => {
  const nameWithAge = `${name} is ${age} years old, phone number : ${phone}`

  return nameWithAge;
}
const ridho = showNameWithAge('Ridho', 25, 087882252815)
const arsya = showNameWithAge('Arsya', 30, 0987276221)
const ian = showNameWithAge('Ian', 28,  0989087212);

console.log(ridho);
console.log(arsya);
console.log(ian);


//-----------------------------//
//isEven

function isEven(num){
	//return true if even
	if(num % 2 === 0) {
		return true;
	} 
	//return false otherwise
	else {
		return false
	}
}

function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1


function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;

}


