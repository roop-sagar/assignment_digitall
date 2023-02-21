const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employees = require('./model');

const app = express();
app.use(express.json());

app.use(cors({origin:'*'}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://test:vVF984FEptMip2gW@cluster0.utg4xdp.mongodb.net/employees?retryWrites=true&w=majority').then(() => {
    console.log('db connection successful');
})

app.get('/getEmployees',async (req,res)=>{
    try {
        let employees = await Employees.find();
        return res.json({employees: employees});
    } catch (error) {
        console.log(error);
    }
});

app.post('/createEmployee', async (req, res) =>{
    try {
        const {first_name,last_name,email,mobile,gender} = req.body;
        let employee = new Employees({
            first_name: first_name,
            last_name: last_name,
            email: email,
            mobile: mobile,
            gender: gender
        });
        await employee.save();
        return res.json({status: 'success', message:"Registered successfully"});

    } catch (error) {
        console.log(error);
    }
})

app.listen(5000,()=>{
    console.log('server listening on 5000');
})