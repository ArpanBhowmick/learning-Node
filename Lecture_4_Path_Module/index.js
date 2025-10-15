// console.log("path module")

import path from "path";


//  join two or more files
// only joins path not code

const fullPath = path.join("/path", "index.py", "file.java")
// console.log("files join = ", fullPath);



// absolute path 

const absolutePath = path.resolve();
// console.log(absolutePath)


// extention name 

const extname = path.extname("resume.pdf")
console.log("extention name =", extname)

if(extname === ".pdf") {
    console.log("ok")
}else {
    console.log("not supported")
}