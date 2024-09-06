console.log('Hello, World!');

var student = {
    100:"soo",
    studentId:1,
    studentName:"Param",
    studentAge:20,
    city:"New York"
}
console.log(student)
console.log(student.city)
console.log(typeof student)
console.log(typeof student.studentName)
for(let key in student){
    console.log(key);
    console.log(student[key]);
}
student[100] = "eksoo"
console.log(student[100]);
//console.log("\n"+student["studentName"]);

var emp = {
    empId:1,
    empName:"John",
    empAge:20,
}

var {empId,empName,empAge} = emp;
var result = "Pass"
console.log(empId)

var newEmp = {
    eid:empId,
    empName,
    empAge,
    result
}
var emp1 = {
    ...emp,
    result
}

console.log(newEmp);
console.log(emp1);
