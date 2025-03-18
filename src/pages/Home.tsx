import React from 'react';
import minhaImagem from '../assets/eu.jpg';
import useFavicon from '../hooks/useFavicon';

const Home: React.FC = () => {
    useFavicon(import.meta.env.BASE_URL + "src/assets/school_24dp.svg");
    
    return (
        <div className="container">
            <div className="profile">
                <img className="profile-img" src={minhaImagem} alt="Foto de perfil" />

            </div>
            <h1 className="home-title">Olá, sou o Diego</h1>
            <p className="home-text">Trabalho como <strong>Analista de Suporte Técnico</strong>, mas estou em <strong>transição para a área de desenvolvimento de 
                software.</strong> Busco oportunidades como <strong>desenvolvedor frontend, backend ou fullstack,</strong> onde eu possa aplicar e expandir meus conhecimentos. 
                Sou estudante de <strong>Banco de Dados</strong> na <strong><a href="https://fatecsjc-prd.azurewebsites.net/">FATEC-Prof Jessen Vidal</a></strong> e estou sempre aprimorando minhas habilidades em programação e desenvolvimento de sistemas. 
                Meu objetivo é criar soluções eficientes e impactantes através da tecnologia.</p>
        </div>
    );
}

export default Home;