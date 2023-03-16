import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider}from 'react-router-dom'
import Layout from './components/Layout'
import Index from './page/Index'
import NewClient from './page/NewClient'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element:<Index/>
      },
      {
      path:'/formulario',
      element: <NewClient/>
    }]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}/>
  
  </React.StrictMode>,
)
