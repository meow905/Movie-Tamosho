import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import NotFoundTicket from './components/NotFoundTicket.jsx';
import MoviesPage from './components/MoviesPage.jsx';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NotFoundTicket",
    element : <NotFoundTicket/>
  },
]);

createRoot(document.getElementById('root')).render(
  
  <div className="bg-bgImage bg-top bg-no-repeat bg-fixed min-h-[100vh] overflow-clip">
    <RouterProvider router={router}/>
  </div>

)
