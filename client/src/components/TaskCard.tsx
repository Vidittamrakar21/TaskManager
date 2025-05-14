import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function TaskCard() {

    const navigate = useNavigate();

    function navigateEditTask(){
        navigate('/edit-task')
    }


  return (
     <div className=' select-none w-[450px]  bg-[#232323] min-h-[200px] m-7 flex items-center justify-start flex-col  rounded-t-lg shadow-lg'>
            <div className='w-[448px] h-[60px] bg-[#AD49E7] text-white flex items-center  justify-between rounded-t-lg'>
               <h1 className='text-white text-[19px] font-[600] ml-4'>MY TASK</h1>
               <h2 className='text-white mr-3'>15/05/2025</h2>
            </div>
            <div className='text-gray-50 p-7 bg-[#232323] w-[448px]'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eum vero nisi reprehenderit eos enim doloremque? Beatae odit voluptate dolorum, dolor sunt quod facilis illum numquam esse asperiores ut aliquam similique eum commodi est culpa quidem. Est inventore aliquam sequi.</p>
            </div>


            <div className='w-[448px] h-[40px] flex items-center justify-start'>
                <div onClick={navigateEditTask} className='w-[110px] h-[25px] flex items-center justify-start border border-[#505050] ml-3 rounded-md'>
                    <div className='h-[15px] w-[15px] rounded-[50%] bg-[#39f139] ml-2'></div>
                    <h1 className='text-white ml-3'>Edit</h1>
                </div>

                <div className='w-[110px] h-[25px] flex items-center justify-start border border-[#505050] ml-3 rounded-md'>
                    <div className='h-[15px] w-[15px] rounded-[50%] bg-[#fa3e3e] ml-2'></div>
                    <h1 className='text-white ml-3'>Delete</h1>
                </div>
            </div>
        </div> 
  )
}
