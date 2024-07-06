const path = require("path");

//import file system inbuild module
const fs=require('fs')

//access the arguments from command line
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

//perform different operations using switch statement
switch (operation) {
  case 'read':
     console.log(fs.readFileSync(file,'utf-8')); //read the file using `readFileSync`
     break;
  case 'delete':
     fs.unlink(file,(err)=>{ //delete the file using `unlink`
          if(err){
               console.log("can not delete the file");
          }else{
               
               console.log(`File ${file} deleted`);
          }
     })
     break;
  case 'create':
     fs.writeFileSync(file,"hello") //create the file using writeFileSync
     console.log(`File ${file} created`);
     break;
  case 'append':
     fs.appendFile(content,file,(err)=>{  //append the data in a file using `appendFile`
          if(err){
               console.log("error ocure");
          }
          else{
               console.log("Data added");
          }
     })
     break;
  case 'rename':
     fs.rename(file,content,(err)=>{ //rename the file using `rename`
          if(err){
               console.log("failed to rename");
          }
          else{

               console.log(`File ${file} renamed to ${content}`);
          }
     })
     break;
  case 'list':
     let directory=file || "."
     let data=fs.readdirSync() //show all the file inside the current directory
     data.map((ele)=>{
          console.log(ele);
     })
     break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}
