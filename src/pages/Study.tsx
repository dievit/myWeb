import React, { useEffect } from 'react';
import M from 'materialize-css';
import fatecImg from '../assets/fatec.jpeg';
import etecImg from '../assets/etec-cacapava.jpg';
import selfStudyImg from '../assets/images.jpeg';
import useFavicon from '../hooks/useFavicon';
import ciberCisco from '../assets/I2CS__1_.png';
import netWorkCisco from '../assets/image.png';
import funBradesco from '../assets/bradesco2.jpg';
import google from '../assets/google.jpeg';
import cps from '../assets/inova.png';

const Study: React.FC = () => {
    useFavicon(import.meta.env.BASE_URL + "src/assets/school_24dp.svg");

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }, []);    


    const studies = [
        {
            title: "FATEC - São José dos Campos",
            img: fatecImg,
            link: "#modal1",
            description: `
            <p><strong>Análise e Desenvolvimento de Sistemas - Fev 2023 a Julho 2024</strong></p>
            <p><strong>Banco de Dados - Ago 2024 até o momento</strong></p>
            <p>Meus estudos na <strong>FATEC São José dos Campos</strong> tiveram início em <strong>fevereiro de 2023</strong>, 
            quando ingressei no curso de <strong><em>Análise e Desenvolvimento de Sistemas</em></strong>, no período matutino.</p>
            <p>Cursei três semestres completos até <strong>julho de 2024</strong>. Devido a uma oportunidade de emprego na
                área de <strong>infraestrutura e suporte</strong>, precisei mudar para o período noturno.</p><p>Na FATEC, temos um projeto semestral chamado <strong>API (Aprendizagem por Projetos Integrados)</strong>,
                    onde aplicamos nosso conhecimento técnico e metodologia ágil <strong>Scrum</strong>.</p>`,
            modalId: "modal1"
        },


        {
            title: "ETEC - Caçapava",
            img: etecImg,
            link: "#modal2",
            description:`
                <p><strong>Ensino Médio Regular Jan 2003 a Dez 2005.</strong></p>
                <p>Em 2002, prestei o Vestibulinho – como é chamado o vestibular para ingresso nas ETECs – e, com uma boa colocação, fui aprovado.</p>
                <p>Tive o privilégio de estudar em uma das escolas mais tradicionais de <strong>Caçapava,</strong> pertencente ao <strong>Centro Paula Souza,</strong> um lugar onde vivi bons momentos, fiz grandes amigos e tive acesso a um ensino de qualidade.</p>
            `,
            modalId: "modal2"
        },

        {
            title: "Estudo complementares",
            img: selfStudyImg,
            link: "#modal3",
            description: `
            <p>Além dos estudos formais, busco sempre me manter atualizado e aprimorar minhas habilidades através de cursos online, prática de programação e outras áreas.</p>
            <ul className="study-list">
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${ciberCisco}" alt="Cibersegurança - CISCO" />
                    <p style="margin-left: 10px;"><strong>Introduction to Cybersecurity - CISCO</strong></p>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${netWorkCisco}" alt="Networking Basics - CISCO" />
                    <p style="margin-left: 10px;"><strong>Networking Basics - CISCO</strong></p>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${google}" alt="Data Analysis - Google" />
                    <p style="margin-left: 10px;"><strong>Certificado Profissional de Análise de Dados - Google</strong></p>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${funBradesco}" alt="LGPD - Fundação Bradesco" />
                    <p style="margin-left: 10px;"><strong>Lei Geral de Proteção de Dados (LGPD) - Fundação Bradesco</strong></p>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${funBradesco}" alt="Data Analysis - Google" />
                    <p style="margin-left: 10px;"><strong>Segurança em Tecnologia da Informação - Fundação Bradesco</strong></p>
                </li>
                <li style="display: flex; align-items: center; margin-bottom: 10px;">
                    <img className="badges-img" src="${cps}" alt="Escola de Inovadores - Centro Paula Souza" />
                    <p style="margin-left: 10px;"><strong>18° Escola de Inovadores - Centro Paula Souza</strong></p>
                </li>
            </ul>
            `,
            modalId: "modal3"
        }
    ]
    return (
        <><div className="container">
            <h1>Estudos</h1>
            <p>Nesta página você pode conhecer um pouco sobre minha trajetória acadêmica</p>

            <div className="card-container">
                {studies.map((study, index) => (
                    <div key={index} className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={study.img} alt={study.title} />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{study.title}</span>
                            <p><a href="#!" className="modal-trigger" data-target={study.modalId}>Mais</a></p>
                        </div>
                    </div>
                ))}
            </div>
            {studies.map((study, index) => (
                <div key={index} id={study.modalId} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>{study.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: study.description }}></div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-gray btn-flat">Fechar</a>
                    </div>
                </div>    
            ))} 
            </div>
        </>
    );
}

export default Study;