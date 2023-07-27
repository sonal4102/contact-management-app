import React from 'react';

import './App.css';
import { useLocation } from 'react-router';

import Sidebar from './Components/SideBar.jsx';
import AllRoutes from './Pages/AllRoutes';
function App() {
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <div className="App">
      <h1 className='z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-zinc-50 bg-zinc-900 font-bold p-4'>
      {currentRoute === "/" ? 'Contact Management App' :
         currentRoute === "/contact_form" ? "Add Your Contact" :
         currentRoute.includes("/edit") ? "Edit Contact" : "Charts and Maps"}

      </h1>
      <div className='flex w-full '>
      <div className='sticky  top-0 h-screen'>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
        </div>
    </div>
  );
}

export default App;
