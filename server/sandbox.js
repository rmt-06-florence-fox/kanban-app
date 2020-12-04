const {Category, User, Task} = require('./models');


async function findTask(){
    const allCategory = await Category.findAll({include: {model: Task, include: {model: User}}});
    console.log(allCategory);
} 
console.log(findTask());

let str = "Lalala@lalala.com";


console.log(str.split('@')[0]);