import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Pastes from './components/Pastes'
import Navbar from './components/Navbar'
import Viewpaste from './components/Viewpaste'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/pastes",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    },
    {
      path:"/viewpaste",
      element:
      <div>
        <Navbar/>
        <Viewpaste/>
      </div>
    },
    {
      path:"/viewpaste/:id",
      element:
      <div>
        <Navbar/>
        <Viewpaste/>
      </div>
    }
  ]
)
function App() {
  
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}
export default App