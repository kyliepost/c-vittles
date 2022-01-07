import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"


export const NavBar = (props) => {
return (
    <>
        
        <ul className="navbar">
        <li className="navbar__item">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("v_token")
                    }
                }>
                    Logout
                </Link>
            </li>
            
        </ul>
    </>

)
}