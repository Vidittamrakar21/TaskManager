import React from 'react'
import Sidebar from '../components/Sidebar'
import TaskCard from '../components/TaskCard'

export default function Dashboard() {

    

  return (
    <div className='bg-[#191919] w-[100%] min-h-[100vh] flex items-center justify-center'>
    <Sidebar/>
    <div className=' mt-[60px]  w-[60%] min-h-[100vh] flex items-start justify-start flex-wrap'>


        {/* //////// */}

        {/* <h1 className='text-white text-[24px] font-[500] text-center'>No tasks to display!</h1> */}
        
        
        <TaskCard/>
        

        





    </div>
    </div>
  )
}
