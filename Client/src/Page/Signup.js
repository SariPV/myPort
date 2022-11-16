import React, { useState } from 'react'
import axios from "axios";



import "./Styles.css"

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/signup', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            alert('successfully create account please login')
            setName('')
            setEmail('')
            setPassword('')
            setConfPassword('')
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
                
            }
        }
    }
 


    return (
        <div className='web-name'> MyPortfolio
            <div className='form-container'>
                <h2>Create Account</h2>
                <form onSubmit={Register} className="box">
                    <p className="has-text-centered">{msg}</p>
                    <div className="field mt-5">
                        <label className="label">Name</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Email</label>
                        <div className="controls">
                            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                        <label className="label">Confirm Password</label>
                        <div className="controls">
                            <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="field mt-5">
                    <button className="Loginbutton">Register</button>
                    </div>
                </form>
              
            </div></div>
    )
}
export default Signup;