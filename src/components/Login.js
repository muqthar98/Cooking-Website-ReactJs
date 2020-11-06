import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Button, FormGroup,Input, Label } from "reactstrap";
import {auth} from './firebase'

function Login() {     

    const history = useHistory();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    const login = event => {
      event.preventDefault();

      auth
       .signInWithEmailAndPassword(email,password)
       .then(auth => {
          history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = event => {
    event.preventDefault();

    auth
     .createUserWithEmailAndPassword(email,password)
     .then(auth => {
        history.push("/");
    })
    .catch((e) => alert(e.message));

   
  };

  return ( 
    <div className="login">
    <Link className="link" to="/">
      <h1>
        <span className="font-weight-bold title">React</span>.com
      </h1>
      </Link>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label >Email</Label>
        <Input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Email" />
        <Label>Password</Label>
        <Input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
        <Button onClick={login} className="btn-lg btn-dark btn-block loginbutton">
          Login
        </Button>
        <Button onClick={register} className="btn-lg btn-dark btn-block signupbutton">SignUp</Button>
      </FormGroup>
    </div>
  );
}

export default Login;
