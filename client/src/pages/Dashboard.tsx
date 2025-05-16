
import Sidebar from '../components/Sidebar'
import TaskCard from '../components/TaskCard'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface itemtype  {

  title:string,
  task: string, 
  _id:string,  
  date: string
}

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);
    const navigate =useNavigate();

    const fetchTasks = async ()=>{

      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const taskData = await (await axios.get(`${import.meta.env.VITE_API_URL}/api/usertasks/${email}`,{ headers: {
        Authorization: `Bearer ${token}`,
      },})).data;
      if(taskData.data){
        setTasks(taskData.data)
        console.log(taskData.data)
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
      fetchTasks();
    },[])


  return (
    <div className='bg-[#191919] w-[100%] min-h-[100vh] flex items-center justify-center'>
    <Sidebar/>
    <div className=' mt-[60px]  w-[60%] min-h-[100vh] flex items-start justify-start flex-wrap'>

        
        {tasks.length>0?tasks.map((item:itemtype,index:number)=>(
          <TaskCard key={index} title={item.title} task={item.task} id={item._id} callfunc={fetchTasks} date={item.date}/>
        )): <h1 className='text-white text-[24px] font-[500] text-center'>No tasks to display!</h1>}

    </div>
    </div>
  )
}
