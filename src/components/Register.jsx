import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import {useState} from "react";

export default function Register() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  function handleSubmit(e) {

    e.preventDefault();
    axios.post("http://localhost:3000/register", {
      email: email, 
      password: password,
      confirm_password: confirm}).then(
      result => console.log(result)
    ).then(
      result => {
        if(result.loggedin){
        useNavigate('/nodepad');
      }}
    ).catch(
      err => console.log(err)
    )
  }

    return (
      <div className="contains">
        <form className="container-form" onSubmit={handleSubmit}>
          <h1 className="f-title">Register</h1>
          <input className="f-btn" name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input className="f-btn" name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <input className="f-btn" name="confirm_password" type="password" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} required />
          <button className="f-btn" type="submit">Register</button>
          <footer>Already have an account? <Link className="f-link" to="/login">Login</Link></footer>
        </form>
      </div>
    );
  }
  
