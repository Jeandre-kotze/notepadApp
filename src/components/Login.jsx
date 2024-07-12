import {Link} from "react-router-dom"
import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {

    e.preventDefault();
    axios.post("http://localhost:3000/login", {email, password}).then(
      result => {
        if(result.data.loggedin === true){
          navigate('/notepad');
        }      }
    ).catch(
      err => console.log(err)
    )
  }

  return (
      <div className="contains">
      <form className="container-form" onSubmit={handleSubmit}>
        <h1 className="f-title">Login</h1>
        <input className="f-btn" name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input className="f-btn" name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button className="f-btn submitLogin" type="submit">Login</button>
        <footer>Don't have an account? <Link className="f-link" to="/register">Register</Link></footer>
      </form>
    </div>
  );
}
