const  express =  require('express');
const cors =  require('cors');
const morgan =  require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const authRoute = require('./routes/auth.js')

const apiRoute =  require('./routes/app.js')



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

    


app.get('/', (req,res)=>{
    try {
        
        res.json({message: "Welcome To TaskManager , Server is running !"})
    } catch (error) {
        res.json(error)
    }
})


app.use('/api/auth', authRoute);
app.use('/api', apiRoute);


app.listen(5000, ()=>{

    console.log("server started")
})
}

init();