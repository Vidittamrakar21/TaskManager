
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useRef,useState ,useEffect } from 'react'
import { PropagateLoader } from "react-spinners";
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function EditTask() {

  const titleinp = useRef<HTMLInputElement>(null)
  const taskinp = useRef<HTMLTextAreaElement>(null)
  const [loading , setloading] = useState(false);
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get('taskId');
  const navigate = useNavigate();


  const handleEditTask = async () =>{
    const token = localStorage.getItem('token');
    setloading(true)
    if(titleinp.current?.value && taskinp.current?.value){
      const userData = await (await axios.put(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`,{ title:titleinp.current?.value, task:taskinp.current?.value },{ headers: {
        Authorization: `Bearer ${token}`,
      },})).data;
      if(userData){
        alert(userData.message);
        navigate('/dashboard');
        setloading(false);
      }
    }

    else{
      alert("Title and Task are required!")
      setloading(false);
    }

  }

  const findTask = async () =>{

    setloading(true)
    const token = localStorage.getItem('token');
    const taskData = await (await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`,{ headers: {
      Authorization: `Bearer ${token}`,
    },})).data;
    if(taskData.data){
      //@ts-ignore
      titleinp.current.value = taskData.data.title;

      //@ts-ignore
      taskinp.current.value = taskData.data.task;

      setloading(false);
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
    findTask();
  },[])

  return (
    <div className='bg-[#191919] w-[100%] min-h-[100vh] flex items-center justify-center'>
    <Sidebar/>
    <div className='w-[900px] mt-[50px] h-[100vh]  flex items-center justify-start flex-col'>
    <h1 className='text-white text-[23px] font-[600]'>Edit Task</h1>
    <input ref={titleinp} type="text" placeholder='&nbsp; Add Title' className="h-[40px] w-[800px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"/>
    <textarea ref={taskinp} name="" placeholder='&nbsp;&nbsp;&nbsp;Task' cols={40} rows={40}  className="h-[300px] w-[800px] resize-none sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"></textarea>
    <button onClick={handleEditTask}  className="h-[40px] w-[800px] bg-[#AD49E7] cursor-pointer rounded-md text-[white] sm1:w-[310px] mt-[40px]">Save</button>
    <PropagateLoader color="#AD49E7" className="mt-3" loading={loading} />
    </div>
    </div>
  )
}
