import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/Home';
import Profile from './Page/Profile';
import Login from './Page/Login';
import Signup from './Page/Signup';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token || token == "") {
    return  <Login setToken={setToken} /> 
  } 

  return (
    <Router>
      <Routes>
      {/* <Route path={"/"}
        element={<Login/>}/> */}
        <Route path={"/Signup"}
        element={<Signup/>}/>
        <Route path={"/"}
        element={<Home/>}/>
        <Route path={"/profile"}
        element={<Profile/>}/>

      </Routes>

    </Router>
    
  );
      
}

export default App;
