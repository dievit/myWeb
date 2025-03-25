import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';



const Navbar: React.FC = () => {
    useEffect(() => {
        const sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, []);
    return (
        <header>
            <nav className=" indigo lighten-1">
                
                <div className="nav-wrapper container">
                    {/* Ícone do menu hambúrguer */}
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger left">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">Quem sou</Link></li>
                        <li><Link to="/Study">Estudos</Link></li>
                        <li><Link to="/Experience">Experiência</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">Quem sou</Link></li>
                <li><Link to="/Study">Estudos</Link></li>
                <li><Link to="/Experience">Experiência</Link></li>
            </ul>
        </header>
    );
}

export default Navbar;