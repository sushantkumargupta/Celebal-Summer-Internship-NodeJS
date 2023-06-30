//spread - unpack elements of [] , {}
//rest - pack element

//clone/copy
const no = [1,2,3];
const newNo = [...no];
console.log(newNo);

//merge
const oldNo=[4,5,6];
console.log([...newNo, ...oldNo]);

console.log(100,200,...newNo,5000);

//string
const company='celebal_technologies';
console.log([...company]);

//objects
const order={
  id: 1,
  date: '27/06/2022',
  customerName :'Rakesh' 
}

const newOrder={
  ...order,
  orderCost : 1000
}

newOrder.date='27/06/2023';

console.log(newOrder);

//CRUD operations
//Create, Read, Update, Delete

const fs=require('fs');//if we need to use a file system then we need to require it

// fs.mkdirSync("celebal");

// fs.writeFileSync('celebal/intern.txt', "backend intern");

// fs.appendFileSync("celebal/intern.txt", "-the process is under learning phase");

// const data = fs.readFileSync("celebal/intern.txt");
// console.log(data) //buffer print

// const data = fs.readFileSync("celebal/intern.txt",'utf8');
// console.log(data);

// fs.renameSync('celebal/intern.txt', 'celebal/internProgram.txt');

// fs.unlinkSync("celebal/internProgram.txt");

// fs.rmdirSync('celebal');

// fs.rmdirSync('celebal');
fs.unlinkSync("celebal/intern.txt");
