import "../css/home.css"
import { Link } from "react-router-dom"
import {paperClip, mail} from "./icons"

export default function HomePage(){
    return (
    <div className="contains">
        <div className="home-container">
        <div className="introduction">
            <h1 className="heading">{mail}Notepad{paperClip}</h1>
            <p className="comment">Your personal, secured notepad</p>
        </div>
       <div>
        <Link to="/notepad" className="">
            <button className="home-button">Register</button>
        </Link>
       </div>
       <footer className="footer">
        Made by JEANDRE
       </footer>
       <footer className="copyright">©Copyright Reserved</footer>
    </div>
    </div>
    )
}

