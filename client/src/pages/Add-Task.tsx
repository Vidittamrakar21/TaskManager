
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useRef,useState,useEffect } from 'react'
import { PropagateLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';



export default function AddTask() {

  const navigate = useNavigate();
  const titleinp = useRef<HTMLInputElement>(null)
  const taskinp = useRef<HTMLTextAreaElement>(null)
  const [loading , setloading] = useState(false);

  const handleAddTask = async ()=>{

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    setloading(true);

    if(!(titleinp.current?.value && taskinp.current?.value)){
      alert("All the fields are required!")
      setloading(false);
    }
    else{
      const userData = await (await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks`,{uid:email, title:titleinp.current?.value, task:taskinp.current?.value } ,{ headers: {
        Authorization: `Bearer ${token}`,
      },})).data;
      if(userData){
        alert(userData.message);
        setloading(false)
        navigate('/dashboard')
        titleinp.current.value = ""
        taskinp.current.value = ""
      }

    }
  }

  async function verify(){

    const token = localStorage.getItem('token');
    if(token){
      const userData = await (await axios.get(`${import.meta.env.VITE_API_URL}/api/verify/${token}`)).data;
      if(userData.message === 'unauthorized'){
        localStorage.clear();
        navigate('/login');
      }
    }
    else{
      localStorage.clear();
      navigate('/login');
      
    }
  }

  useEffect(()=>{
    verify();
  
  },[])


  return (
    <div className='bg-[#191919] w-[100%] min-h-[100vh] flex items-center justify-center'>
    <Sidebar/>
    <div className='w-[900px] mt-[50px] h-[100vh]  flex items-center justify-start flex-col'>
    <h1 className='text-white text-[23px] font-[600]'>Add a Task</h1>
    <input ref={titleinp} type="text" placeholder='&nbsp; Add Title' className="h-[40px] w-[800px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"/>
    <textarea ref={taskinp} name="" placeholder='&nbsp;&nbsp;&nbsp;Task' cols={40} rows={40}  className="h-[300px] w-[800px] resize-none sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"></textarea>
    <button  onClick={handleAddTask} className="h-[40px] w-[800px] cursor-pointer bg-[#AD49E7]  rounded-md text-[white] sm1:w-[310px] mt-[40px]">ADD</button>
    <PropagateLoader color="#AD49E7" className="mt-3" loading={loading} />
    </div>
    </div>
  )
}
