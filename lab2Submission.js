//exe 1

let gretter = (myArray,counter) =>{
    var greetText = 'Hello';
    for (let x of myArray){
        console.log(greetText + x);
    }
}

gretter(["Param","Ankitha","Jeel"],3)

//exe 2
var makeCapital = (str) =>{
    const [first, ...rest] = [...str]; 
    return [first.toUpperCase(), ...rest].join('');
}

console.log(makeCapital("hello")); 
console.log(makeCapital('paramAnilkumar'))
//exe 3
const colors=['red','green','blue','yellow'];
makeCapital = colors.map(color => makeCapital(color));
console.log(makeCapital);

//exe 4
function filterLessThan20(arr) {
    return arr.filter(value => value >= 20);
}
var values = [1,60,21,19,5]
console.log(filterLessThan20(values))


//exe 5
const array = [1, 2, 3, 4];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum)

const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("Product:", product);

//exe 6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
    details(){
        return "Model : " + this.model + " Engine " + this.year
    }
  }


  class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance;
    }
    info(){
        return "Model : " + this.model + " has a balance of "+ this.balance
    }
  }

  const car2 = new Car('Pontiac Firebird',1976);
  console.log(car2.details());

  const sedan = new Sedan('Volvo SD',2018,30000);
  console.log(sedan.info());
