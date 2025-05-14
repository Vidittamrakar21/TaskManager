const  express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//import all the routes  declared in the routes directory.

const healthroute = require('./routes/test.js')

const apiroute =  require('./routes/app.js')



async function init (){

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(morgan('tiny'));

    main().catch(err => console.log(err));

    async function main() {
    await mongoose.connect(`mongodb+srv://221b440:${process.env.dbpass}@cluster0.xgv0ddw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
    console.log("Database Connected");
    }

    
//entry point

app.get('/', (req,res)=>{
    try {
        
        res.json({message: "Welcome To ServoBase , Server is running !"})
    } catch (error) {
        res.json(error)
    }
})


//use the routes that are imported above

app.use('/test', healthroute);
app.use('/api', apiroute);



app.listen(5000, ()=>{

    //app will start running on port 8080, you can change the port according to your need .

    console.log("server started")
})
}

init();