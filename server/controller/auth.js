const jwt = require('jsonwebtoken');
const User = require('../model/user');


const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '3h' }
  );
};

const registerUser = async (req,res)=>{
    try {
       const {name, email, password } = req.body;
       
       if(!(name && email && password)){
        res.json({message: "All the fields are required!"})
       }
       else{
            const existsUser =  await  User.findOne({email:email});

            if(existsUser){
                if(existsUser.email === email){
                    res.json({message: "Kindly LogIn to continue!"})
                }
            }

           
            else{
                const data = await  User.create({name:name, email:email , password:password});
               
              
                    if(data){
                    
                        const token = generateToken(data);
                        res.json({message: "Registered Successfully!", token: token, user:{id: data._id ,name: data.name, email: data.email}})
                    }
                    else{
                        res.json({message: "Something went wrong!",})
                    }

               

            }
       }
        
    } catch (error) {
        res.json({message:"error"})
    }
}



const loginUser = async (req,res)=>{
    try {
       const {email, password } = req.body;
       
       if(!(email && password)){
        res.json({message: "All the fields are required!"})
       }
       else{
            const data =  await  User.findOne({email:email});

            if(data){
                if(data.password === password){
                    const token = generateToken(data);
                    res.json({message: "Logged In Successfully!", token: token, user:{id: data._id ,name: data.name, email: data.email}})
                    
                }
                else{
                    res.json({message: "Incorrect Password!",})
                }
            }

           
            else{

                res.json({message: "Something went wrong!",})
               
            }
       }
        
    } catch (error) {
        res.json({message:"error"})
    }
}

module.exports = {registerUser, loginUser};