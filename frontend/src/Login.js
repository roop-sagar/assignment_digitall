import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    let navigate = useNavigate();
    const [userData, setUserData] = useState({
        username:'',
        password:''
      });
      const changeHandler = (e) => {
        setUserData({...userData,[e.target.name]: e.target.value});
      };
      const submitHandler = (e) => {
        e.preventDefault();
        if(userData.username === 'admin' && userData.password ==='admin'){
            navigate('/employees');
        } else {
          alert('Wrong credentials');
          setUserData({
            username:'',
            password:''
          })
        }
      };
      return (
        <>
          <div id="main">
            <div id="head">
              <h2>Login with your username</h2>
            </div>
            <div>
              <form onSubmit={submitHandler}>
                <input type="text" name='username' onChange={changeHandler} value={userData.username} placeholder="Username" required />
                <br />
                <input type="password" name='password' onChange={changeHandler} value={userData.password} placeholder="Password" required />
                <button className='loginbtn' type="submit">Login</button>
              </form>
            </div>
          </div>
        </>
      )
}

export default Login;