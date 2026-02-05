let num:number=10
num=20

let str="sudhir"
// str=10

// any
let x;
x="sudhir"
x=10

// unknown
let y:unknown;
y=10;
y="sk"
if(typeof y==="string"){
    console.log(y.toLocaleUpperCase())
}
if(typeof y==="number"){
    console.log(y*10)
}