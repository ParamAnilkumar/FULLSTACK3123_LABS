/*function welcome(){
    console.log('Welcome to the class');
}*/
function greet(name){
    console.log('Hello, ${name}');
}

/*greet("Param");
console.log(typeof greet);*/

var welcome = function(){
    console.log('Welcome to the class');
}

welcome();
console.log(typeof welcome)

//Arrow function
var greet = (name) =>{
    console.log("Welcome ${name}");
}
console.log(typeof greet)


function print(){
    console.log(arguments);
}

console.log(1,2,3,4)



function print(a,b, ...c){
    console.log(arguments);
    console.log(a)
    console.log(b)
    console.log(c)
}
print(1,2,3,4,5);
