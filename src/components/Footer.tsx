const Footer: React.FC = () => {
    return(
        <footer className="page-footer indigo lighten-1">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Informações e contatos</h5>
                        <p className="grey-text text-lighten-4">Foi um prazer falar um pouco sobre mim, caso deseje entrar em contato faça por um dos links de contato.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Me encontre</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/diegovitvicki" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.github.com/dievit" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2025 Copyright Text
                </div>
            </div>
        </footer>
    );
}

export default Footer;
