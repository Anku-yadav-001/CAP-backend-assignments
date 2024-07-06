const crypto= require("crypto")
let result
let arguments= process.argv//used to access the arguments of command line
let operation=arguments[2] //extract the operation at index 2
let a=+arguments[3] //first operand at index 3
let b=+arguments[4]  //second operand at index 4
if(arguments.length<4){ //if the lenght is less than 4 eg `node index add` so it will not accepted for add,sub,mult,and divide
     console.log("provide correct arguments");
}

//perform different operation using switch statement
switch (operation) {
     case 'add':
           result=a+b
           console.log(result);
          break;
     case 'sub':
          result=a-b
          console.log(result);
          break;
     case 'mult':
          result=a*b
          console.log(result);
          break;
     case 'divide':
          if(b==0){
               console.log("can not divide by 0");
          }
          result=a/b
          console.log(result);
          break;
     case 'sin':
          result=Math.sin(a)
          console.log(result);
          break;
     case 'cos':
          result=Math.cos(a)
          console.log(result);
          break;
     case 'tan':
          result=Math.tan(a)
          console.log(result);
          break;
     case 'random':
          result=crypto.randomBytes(a).toString('hex')//genetate random number using crypto.randomeBytes inbuild module
          console.log(result);
          break;
     default:
          console.log("Invalid operation");
}