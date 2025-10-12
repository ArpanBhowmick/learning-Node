

import { readFile, writeFile, appendFile , mkdir} from "fs/promises";

//  read File Content

const read_file = async (filename) => {
const data = await readFile(filename, "utf-8");
console.log(data);
}
read_file("sample.txt")

// Create file

const create_file = async (filename, content) => {
await writeFile(filename, content)
console.log("file created successfully")
}

// create_file("ai.py", "this is a testing file")
// create_file("app.jsx", "this is a React file")




// add content to file 

const append__file = async (filename, content) => {
await appendFile(filename, content)
console.log("extra content added successfully...")
}

// append__file("app.jsx", " this is my extra content")


//  create folder / directory

const create_dir = async (dir) => {
await mkdir(dir, {recursive:true })
}
// create_dir("Public")
create_dir("src/py")


// src/components/jsva

