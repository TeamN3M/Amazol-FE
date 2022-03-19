import React,{useState} from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import logo from './logo.png';
//import registerimage from './registerimage.png';

function Register() {
    
const[email,setemail]=useState('');
const[firstname,setfirstname]=useState('');
const[lastname,setlastname]=useState('');
const[password,setpassword]=useState('');
const[password2,setpassword2]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
     <div className='main-register'>
        <div className="left-side">
            <div className="header">
                <img src={logo} id='logo-img' alt="" />
            </div>
            <div className="body">
                <img src={logo} id='registerimage-img' alt="" />
            </div>
            <p>Join the site now and you will enjoy shopping that we, Samis selected team, have developed for you!</p>
        </div>
        <div className="right-side">
            <div className="top-right">
           <p>Already have an Account ? 
            <Link id="links-signin" to="/Login">Sign In</Link>
            </p>
            </div>
            <div className="body-right">
                <div className="container">
                    <h1>Create Account!</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <h5>First Name</h5>
                        <input type="text" name="Fname" value={firstname}
                        onChange={(e)=>{setfirstname(e.target.value)}} id="fname" />
                    </div>
                    <div className="input-group">
                        <h5>Last Name</h5>
                        <input type="text" name="lname" value={lastname} 
                        onChange={(e)=>{setlastname(e.target.value)}} id="lname" />
                    </div>
                    <div className="input-group">
                        <h5>Email</h5>
                        <input type="Email" name="email" value={email}
                         onChange={(e)=>{setemail(e.target.value)}} id="email1" />
                    </div>
                    <div className="input-group">
                        <h5>Password</h5>
                        <input type="password" name="pwd" value={password} 
                        onChange={(e)=>{setpassword(e.target.value)}} id="pwd1" />
                    </div>
                    <div className="input-group">
                        <h5>Confirm Password</h5>
                        <input type="password" name="pwd" value={password2}
                         onChange={(e)=>{setpassword2(e.target.value)}} id="pwd2" />
                    </div>
                      <input type="submit" id="submitBtn" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
     </div>
    
    </>

  )
}

export default Register;