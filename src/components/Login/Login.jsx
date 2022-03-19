import React,{useState} from 'react'
import './Login.scss';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import welcomeimg from './welcomeback.png';

function Login() {

    const [emailval,setemailVal]=useState("");
    const [passwordval,setpassVal]=useState("");


   const handlesubmit=(event)=>{
        event.preventDefault();
   }

  return (
    <>
    <div className='main-login'>
        <div className='login-contain'>
            <div className="left-side">
                <div className="img-class">
                    <img src={logo} id="img-id" alt="" srcSet=""/>
                </div>

                <form onSubmit={handlesubmit}>
                    <label htmlFor="emil1">Email</label>
                            <input placeholder='Enter your email' type="email" value={emailval}
                            onChange={(e)=>{setemailVal(e.target.value)}} id="emil1"/>
                    <label htmlFor="pwd1">Password</label>    
                        <input placeholder='Enter Password' type="password" value={passwordval} 
                            onChange={(e)=>{setpassVal(e.target.value)}}
                            id="pwd1"/>
                    <button type="submit" id='sub_btn'>Submit</button>
                </form>

                <div className="footer">
                    <h4>Dont have an account ? <Link className='link' to="/Register">Register Now!</Link></h4>
                </div>

            </div>
            <div className="right-side">
                <div className="welcomeNote">
                    <h3>Welcome Back!</h3>
                </div>
                <div className="welcomeImg">
                    <img src={welcomeimg} id="wel-img-id" alt="" srcSet=""/>
                </div>
            </div>
        </div>
   
    </div>
    
    </>

  )
}

export default Login;