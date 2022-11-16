import  React,{useState} from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
 


import "./Styles.css"

function Login({setToken}) {
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    // const history = useHistory();
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            const token = await axios.post('http://localhost:3001/auth', {
                email: email,
                password: password
            });
            setToken(token);
            // history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    
    return (
        <div className='web-name'> MyPortfolio
            <div className='form-container'>
                <h2>Login</h2>
                <form onSubmit={Auth} className="box" encType="multipart/form">
                    <p className="has-text-centered">{msg}</p>
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <button className="Loginbutton">Login</button>
                    </div>
                </form>
       
            </div></div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };
export default Login;