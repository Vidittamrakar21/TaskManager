import { useRef , useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { PropagateLoader } from "react-spinners";
export default function Register (){

  const nameinp = useRef<HTMLInputElement>(null)
  const emailinp = useRef<HTMLInputElement>(null)
  const confirmpassinp = useRef<HTMLInputElement>(null)
  const passinp = useRef<HTMLInputElement>(null)

  const navigate = useNavigate();

  const [loading , setloading] = useState(false);

  const navigate_home = () =>{
    navigate('/dashboard')
  }
  
  const navigate_login = () =>{
    navigate('/login')
  }


  function isValidEmail(email:string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  

  const handleRegister = async ()=>{
    setloading(true)
    if(!(emailinp.current?.value && nameinp.current?.value && passinp.current?.value && confirmpassinp.current?.value )){

      alert("All the fields are required!")
      setloading(false)
    }
    else if(isValidEmail(emailinp.current?.value)===true){
     if(passinp.current?.value === confirmpassinp.current?.value){

      //@ts-ignore
      const userData = await (await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`,{name:nameinp.current?.value ,email:emailinp.current?.value , password:passinp.current?.value })).data;
      if(userData.token){
        localStorage.setItem('token', userData.token)
        localStorage.setItem('email', userData.user.email)
        localStorage.setItem('name', userData.user.name)
        alert(userData.message);
        navigate_home();
        setloading(false)
      }
      else{
        setloading(false)
        alert(userData.message);
      }
    }

    else{

      alert("Password doesn't match with the confirm password !");
      setloading(false)
    }
   }
    else{
      alert("Invalid Email !");
      setloading(false)
    }
  }

  

   
   

  return(
    <div className="bg-[#191919] min-h-[930px] w-[100%] absolute top-0 select-none ">
     <section className="h-[930px] w-[100%] bg-[#191919] shadow-lg flex items-center justify-center flex-col">
      <nav className="flex items-center justify-start h-[50px] w-[100%] fixed top-0 z-30 backdrop-blur-2xl">
    
      <h1  className="text-[#7ee03c] font-[600] text-[2rem] ml-5 mt-[30px]">TaskManager</h1> 
      
      </nav>

    
        <div className="h-[550px] w-[480px] sm1:w-[340px] backdrop-blur-sm fixed  flex items-center justify-start flex-col bg-[#2e2e2e7a] shadow-lg">
            <h1 className="text-[white] font-[500] text-[18px] mt-[20px]">Create Account For Managing Tasks</h1>
            <input ref={nameinp} type="text" placeholder="&nbsp; *Name" className="h-[40px] w-[400px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]" />
            <input ref={emailinp} type="text" placeholder="&nbsp; *Email" className="h-[40px] w-[400px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]" />
            <input ref={confirmpassinp} type="password" placeholder="&nbsp; *Password" className="h-[40px] w-[400px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]" />
            <input ref={passinp} type="password" placeholder="&nbsp; *Confirm Password" className="h-[40px] w-[400px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]" />
            <button onClick={handleRegister} className="h-[40px] w-[400px] bg-[#AD49E7] cursor-pointer rounded-md text-[white] sm1:w-[310px] mt-[40px]">Register</button>
          
            <PropagateLoader color="#AD49E7" className="mt-3" loading={loading} />
           

            <h3 className="text-[gray] cursor-pointer mt-[50px]">Already have an account ? <span onClick={navigate_login} className="text-[white]">LogIn</span></h3>
          
        </div>      

     </section>

   
    </div>
  )
   
}