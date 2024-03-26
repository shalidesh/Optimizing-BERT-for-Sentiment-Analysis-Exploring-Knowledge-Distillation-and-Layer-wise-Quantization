
import { useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Submit from './pages/Submit';
import AllFeedback from './pages/AllFeedback'
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Context } from './context/Context';

function App() {

  const { user } = useContext(Context);

  console.log(user);

  return (

    <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/aboutus" element={ <AboutUs/> } />
        <Route path="/feedback" element={ <Submit/> } />
        <Route path="/allfeedback" element={ <AllFeedback/> } />

        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        
    </Routes>
  );
 }

export default App;
