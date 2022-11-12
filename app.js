function ageCalculate(name,year,month){
    let date=new Date();
    let currentYear=date.getFullYear();
    let currentMonth=date.getMonth();
    return `my name is ${name} & my age is ${currentYear-year} years ${currentMonth-month} months`;
}
let name=prompt("Enter your name");
let age=parseInt(prompt("Enter your birth year"));
let month=prompt("Enter your birth month");
console.log(ageCalculate(name,age,month));



function areaCal(length){
    return `The area of square is ${length*length}`
}
let arm=parseInt(prompt("Enter the value of arm"));
console.log(areaCal(arm));



function ractAngle(length,width){
    return `the area of ractangle is ${length*width}`
}
let length=parseInt(prompt("Enter the value of length"));
let width=parseInt(prompt("Enter the value of width"));

console.log(ractAngle(length,width));


function triangleArea(value1,value2){
    return `the area of triangle is ${(1/2)*value1*value2}`
}
let tlength=parseInt(prompt("Enter the value of length"));
let height=parseInt(prompt("Enter the value of height"));
console.log(triangleArea(tlength,height));


function area(type,length,width,height){
    if(type=="s"){
        return length*length;
    }else if(type=="r"){
        return length*width;
    }else if(type=="t") {
        return (0.5*length*height);
    }
}
console.log(area("t",8,10,12));