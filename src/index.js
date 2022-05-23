import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Component/Home';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MYHOME from './Component/Myhome';
import STUDENTS from './Component/Students';
import CONTACTUS from './Component/Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  


 <BrowserRouter>
 <Home/>
 <Routes>
 <Route path="/myhome" element={<MYHOME/>}/>
 <Route path="/students"  element={ <STUDENTS/>} />
 <Route path="/contactus"  element={ <CONTACTUS/>} /> 

 </Routes>
 </BrowserRouter>
  


  
);


