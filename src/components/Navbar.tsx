import React from "react";
import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



const Navbar: React.FC = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper indigo lighten-1">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <Link to="/About">Quem sou</Link>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <Link to="/Study">Estudos</Link>
                        </li>
                    </ul>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <Link to="/Experience">Experiência</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            
    );
}

export default Navbar;