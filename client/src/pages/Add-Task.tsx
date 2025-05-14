import React from 'react'
import Sidebar from '../components/Sidebar'

export default function AddTask() {
  return (
    <div className='bg-[#191919] w-[100%] min-h-[100vh] flex items-center justify-center'>
    <Sidebar/>
    <div className='w-[900px] mt-[50px] h-[100vh]  flex items-center justify-start flex-col'>
    <h1 className='text-white text-[23px] font-[600]'>Add a Task</h1>
    <input type="text" placeholder='&nbsp; Add Title' className="h-[40px] w-[800px] sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"/>
    <textarea name="" placeholder='&nbsp;&nbsp;&nbsp;Task' cols={40} rows={40}  className="h-[300px] w-[800px] resize-none sm1:w-[310px] bg-[#494949af] rounded-md text-[white] mt-[40px]"></textarea>
    <button  className="h-[40px] w-[800px] cursor-pointer bg-[#AD49E7] cursor-pointer rounded-md text-[white] sm1:w-[310px] mt-[40px]">ADD</button>

    </div>
    </div>
  )
}
