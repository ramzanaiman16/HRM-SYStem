import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Login from './components/Login/Login';
import { Routes, Route} from "react-router-dom"
import Protectedroutes from './components/Protectedroutes';

function App() {
  
  
  return (
    <>
      <Header />
      <Routes>
      <Route element={<Protectedroutes/>}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
      </Route>
        <Route path='/registration' element={<RegistrationForm/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;