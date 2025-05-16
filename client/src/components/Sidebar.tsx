
import { useState ,useEffect} from 'react'
import { useNavigate, useLocation} from 'react-router-dom'


export default function Sidebar() {
    const [active,setActive] = useState('/dashboard')
    const navigate = useNavigate();
    const userName = localStorage.getItem('name')
    function navigateDashboard(){
        setActive('/dashboard')
        navigate('/dashboard')
    }
    
    function navigateCreateTask(){
        setActive('/add-task')
        navigate('/add-task')
    }

    function logout(){
      localStorage.clear();
      navigate('/login')
      
    }

    const location = useLocation();
    function useCurrentPath() {
      if(location.pathname === '/dashboard'){
        setActive('/dashboard')
      }
      else if(location.pathname === '/add-task'){
        setActive('/add-task')
      }
      else if(location.pathname === '/edit-task'){
        setActive('')
      }
    
    }
    
    useEffect(()=>{
    useCurrentPath();
    },[location.pathname])

  return (
    <div className='select-none h-[100vh] w-[300px] bg-[#232323] border-r border-r-[#414040] fixed left-0 top-0 flex items-center justify-start flex-col'>
        <h1  className="text-[#7ee03c] font-[600] text-[2rem]  mt-[20px]">TaskManager</h1>

        <div className='flex items-center justify-start w-[250px] h-[35px] mt-5 rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#AD49E7" className='ml-3' viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        <h1 className='text-white text-[18px] ml-3'>{userName}</h1>
        </div>


        <div onClick={navigateDashboard} className={`flex items-center justify-start w-[250px] h-[35px] mt-5 ${active==='/dashboard'?'bg-[#86868659]':''} rounded-md hover:bg-[#80808034]`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="ml-3" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
         <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
         <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
        </svg>
        <h1 className='text-white text-[18px] ml-3'>My Tasks</h1>
        </div>

        <div  onClick={navigateCreateTask} className={`flex items-center justify-start w-[250px] h-[35px] mt-5 ${active==='/add-task'?'bg-[#86868659]':''} rounded-md hover:bg-[#80808034]`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="ml-3" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        <h1 className='text-white text-[18px] ml-3'>Add a new task</h1>
        </div>


        <div onClick={logout} className='flex items-center justify-start w-[250px] h-[35px] mt-5  rounded-md hover:bg-[#80808034]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="ml-3" viewBox="0 0 16 16">
        <path d="M7.5 1v7h1V1z"/>
        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
        </svg>
        <h1 className='text-white text-[18px] ml-3'>Log Out</h1>
        </div>

    </div>
  )
}
