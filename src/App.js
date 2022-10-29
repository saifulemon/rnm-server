import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Header';
import UpdateUser from './components/UpdateUser/UpdateUser';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/home" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
