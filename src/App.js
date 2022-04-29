import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import DescriptionPage from './pages/description';
import EquipmentPage from './pages/equipment';
import AwardsPage from './pages/awards';
import RolesPage from './pages/roles';
import TestimonialsPage from './pages/testimonials';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/description" element={<DescriptionPage/>} exact />
        <Route path="/equipment" element={<EquipmentPage/>} exact />
        <Route path="/awards" element={<AwardsPage/>} exact />
        <Route path="/roles" element={<RolesPage/>} exact />
        <Route path="/testimonials" element={<TestimonialsPage/>} exact />
      </Routes>
    </Router>
  );
};

export default App;
