
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


interface propstype  {
    title:string,
    task: string, 
    id:string, 
    callfunc: ()=>void, 
    date: string
}

export default function TaskCard({title, task, id, callfunc , date}:propstype) {

    const navigate = useNavigate();

    function navigateEditTask(){
        navigate(`/edit-task?taskId=${id}`)
    }

    function extractDateOnly(isoString:string) {
        const date = new Date(isoString);
        const dte = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
      
        return `${dte}/${month+1}/${year}`;
      }


    const deleteTask = async () =>{
        const token = localStorage.getItem('token');
        const taskData = await (await axios.delete(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`,{ headers: {
            Authorization: `Bearer ${token}`,
          },})).data;
        if(taskData){
            callfunc();
            alert(taskData.message);
        }
    }


  return (
     <div className=' select-none w-[450px]  bg-[#232323] min-h-[200px] m-7 flex items-center justify-start flex-col  rounded-t-lg shadow-lg'>
            <div className='w-[448px] h-[60px] bg-[#AD49E7] text-white flex items-center  justify-between rounded-t-lg'>
               <h1 className='text-white text-[19px] font-[600] ml-4'>{title}</h1>
               <h2 className='text-white mr-3'>{extractDateOnly(date)}</h2>
            </div>
            <div className='text-gray-50 p-7 bg-[#232323] w-[448px]'>
                <p>{task}</p>
            </div>


            <div className='w-[448px] h-[40px] flex items-center justify-start'>
                <div onClick={navigateEditTask} className='w-[110px] h-[25px] flex items-center justify-start border border-[#505050] ml-3 rounded-md'>
                    <div className='h-[15px] w-[15px] rounded-[50%] bg-[#39f139] ml-2'></div>
                    <h1 className='text-white ml-3'>Edit</h1>
                </div>

                <div onClick={deleteTask} className='w-[110px] h-[25px] flex items-center justify-start border border-[#505050] ml-3 rounded-md'>
                    <div className='h-[15px] w-[15px] rounded-[50%] bg-[#fa3e3e] ml-2'></div>
                    <h1 className='text-white ml-3'>Delete</h1>
                </div>
            </div>
        </div> 
  )
}
