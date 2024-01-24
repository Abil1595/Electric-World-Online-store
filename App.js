
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import X1 from './Project/Layout';
import Y1 from './Project/About us';
import Z1 from './Project/Home';
import Z2 from './Project/Contact';
import Z3 from './Project/Services';
import Z4 from './Project/Login';
import Z5 from './Project/Products';
export default function App() 
{
  return (
    <BrowserRouter>
    <Routes>     
    <Route path='/' element={<X1/>}>
    <Route path='about' element={<Y1/>}/>              
    <Route path='contact' element={<Z2/>}/>    
    <Route path='services' element={<Z3/>}/>  
    <Route path='login' element={<Z4/>}/>             
    <Route path='products' element={<Z5/>}/>   
    <Route index element={<Z1/>}/>
    </Route>
    </Routes>
    </BrowserRouter>                           
  );
}

 
