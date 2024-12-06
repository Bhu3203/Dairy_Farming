
import './App.css';
import { Alert } from 'react-bootstrap';
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';
import Dashboard from './component/dashboard/Dashboard';
import Invoice from './component/Invoice';
import Payment from './component/Payment';
import ProductForm from './component/ProductForm/ProductForm';
import CommunitySupport from './component/CommunitySupport';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import "./App";


function App() {
  return (
  
    <div className="App">
      
   <BrowserRouter >
   <Routes>
    <Route path='/' element={<Sidebar/>}>
    <Route path='Dashboard' element={<Dashboard/>}/>
    <Route path='Invoice' element={<Invoice/>}/>
    <Route path='Payment' element={<Payment/>}/>
    <Route path='ProductForm' element={<ProductForm/>}/>
    <Route path='CommunitySupport' element={<CommunitySupport/>}/>
    
    </Route>
    
   </Routes>
   </BrowserRouter>
  </div>
  );
}

export default App;
