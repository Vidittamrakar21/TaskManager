import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AddTask from './pages/Add-Task'
import EditTask from './pages/Edit-Task'


function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    }, 
    {
      path: '/register',
      element: <Register/>
    }, 
    {
      path: '/dashboard',
      element: <Dashboard/>
    }, 
    {
      path: '/add-task',
      element: <AddTask/>
    }, 
   
    {
      path: '/edit-task',
      element: <EditTask/>
    }, 
   
   
  ])

  return (
  


      <div>
  
      <RouterProvider router={router}/>
     
      </div>
      

    
  )
}

export default App;
