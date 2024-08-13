import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DeliveryPartner from './screens/DeliveryPartner';
import User from './screens/User';
import Home from './screens/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/delivery-partner" element={<DeliveryPartner />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;