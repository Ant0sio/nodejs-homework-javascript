import express,{Request,Response} from 'express';
import {read, write} from "./fs.service";

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users',async (req:Request,res:Response)=>{
    try {
      const usersParse=await read()
        res.status(200).send(usersParse);
    }catch (error) {
        res.status(500).send(error);
    }
});


app.get('/users/:userId',async (req:Request,res:Response)=>{
    try{
        const userId=Number(req.params.userId);
        if (typeof userId==='number'){

            const usersParse=await read();
            const user=usersParse.find(user=>user.id===userId);
            if (!user){
                res.status(404).send('User not found')
            }
            res.status(200).send(user);}else {
            'User id not correct'
        }
    }catch (error) {
        res.status(500).send(error.message);
    }
});


app.post('/users',async (req:Request,res:Response)=>{
    try{  const{name,age,status}=req.body;
        if (name.length>3&&age>0&&typeof status==="boolean") {

            const usersParse = await read();
            const id = usersParse[usersParse.length - 1].id + 1;
            const newUser = {id, name, age, status}
            usersParse.push(newUser);
            await write(usersParse)
            res.status(201).send(newUser);
        }else {
            res.status(400).send('Not valid user');
        }
    }catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/users/:userId',async (req:Request,res:Response)=>{
    try{
        const userId=Number(req.params.userId);
        if (typeof userId==='number'){
            const usersParse=await read()
            const userIndex=usersParse.findIndex(user=>user.id===userId);
            if(!usersParse[userIndex]){
                res.status(404).send('User not found')
            }
            usersParse.splice(userIndex,1);
            await write(usersParse);
            res.status(200).send(usersParse)
          }else {
            res.status(400).send('User id not correct');
        }
    }catch (error){
        res.status(500).send(error.message);
    }
});


app.put('/users/:userId',async (req:Request,res:Response)=>{
    try{
        const {name,age,status}=req.body;
        const userId=Number(req.params.userId);
        if (name.length>3&&age>0&&typeof status==="boolean"&& typeof userId==="number") {

        const usersParse=await read()
        const userIndex=usersParse.findIndex(user=>user.id===userId);
        if(!usersParse[userIndex]){
            res.status(404).send('User not found')
        }
        usersParse[userIndex].name=name;
        usersParse[userIndex].age=age;
        usersParse[userIndex].status=status;
        await write(usersParse);
        res.status(200).send(usersParse[userIndex])}else {
            res.status(400).send('Not valid user');
        };
    }catch (error) {
        res.status(500).send(error.message);
    }
});


app.listen(3000,()=>{
    console.log('App listening http://localhost:3000');
});


//Тут я створюю файл типу як база даних як було сказано в завданні
//
//  let users = [
//      {id:1,name: 'vasya', age: 31, status: false},
//      {id:2,name: 'petya', age: 30, status: true},
//      {id:3,name: 'kolya', age: 29, status: true},
//      {id:4,name: 'olya', age: 28, status: false},
//      {id:5,name: 'max', age: 30, status: true},
//      {id:6,name: 'anya', age: 31, status: false},
//      {id:7,name: 'oleg', age: 28, status: false},
//      {id:8,name: 'andrey', age: 29, status: true},
//      {id:9,name: 'masha', age: 30, status: true},
//      {id:10,name: 'olya', age: 31, status: false},
//      {id:11,name: 'max', age: 31, status: true}]


//  const foo=async ()=>{
//      await fsPromises.writeFile(path.join(__dirname,'usersDb.json'),JSON.stringify(users));
// }
//  foo();


