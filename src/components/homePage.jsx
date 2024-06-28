import "../css/home.css"
import { Link } from "react-router-dom"

const paperClip = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
<path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
</svg>

const mail = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
<path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>

export default function HomePage(){
    return (
    <div className="container">
        <div className="home-container">
        <div className="introduction">
            <h1 className="heading">{mail}Notepad{paperClip}</h1>
            <p className="comment">Your personal, secured notepad</p>
        </div>
       <div>
        <Link to="register" className="">
            <button className="home-button" type="submit">Register</button>
           </Link>
           <Link to="login" className="">
            <button className="home-button" type="submit">Login</button>
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

