const {square,division,add,sub} =require('./math.js'); 
const input=process.argv.slice(2);
const opration=input[0];
const numbers=input.slice(1);
console.log(input);
console.log(opration);
console.log(numbers);

switch(opration){
case 'add':
    console.log(add(parseInt(numbers[0]),parseInt(numbers[1])));
    break;
    case 'sub':
        console.log(sub(parseInt(numbers[0]),parseInt(numbers[1])));
        break;
        case 'square':
    console.log(square(parseInt(numbers[0])));
    break;
    case 'division':
    console.log(division(parseInt(numbers[0]),parseInt(numbers[1])));
    break;

}
