import  React, { useEffect } from 'react'; 
import useFavicon from '../hooks/useFavicon';
import smart from '../assets/logo-smart-2023.jpg';
import hti from '../assets/hti.jpg'

const Experience: React.FC = () => {
    useFavicon(import.meta.env.BASE_URL + "src/assets/school_24dp.svg");

    useEffect(() => {
        const modals = document.querySelectorAll('.modal');
        M.Modal.init(modals);
    }
    , []);

    const experiences = [
        {
            title: "Smart Fast Soluções",
            description: `
            <h5>Analista de Suporte Técnico</h5>
            <p><b>08/2024 até o momento</b></p>
            <ul class="study-list">
                <li>
                    <p>Atuando como analista de suporte técnico alocado em clientes industriais
                    Atendimento de chamados, manutenção de hardwares, orientação e treinamento de usuários</p>
                </li>
                <li>
                    <p>De <strong>Set 2024 até Fev 2025</strong> atuei como Analista de Suporte na Viapol, com atendimento de chamados e suporte ao usuário e como atividade principal responsável pela troca de equipamentos em duas plantas do cliente.</p>
                </li>
                <li>
                    <p>De Fev 2025 até o momento, estou no suporte técnico na Pilkington, com atendimento voltado ao suporte em hardware e troca de equipamentos para o usuário</p>
                </li>
            </ul>`,
            link: "modal1",
            modalId: "modal1"
        },
        {
            title: "HTI Tecnologia",
            description: `
            <h5>Analista de Suporte (monitoramento)</h5>
            <p><b>01/02/2024 a 31/03/2024</b></p>
            <br>
            <p>Minha primeira oportunidade na área de tecnologia se deu na <strong>HTI Tecnologia,</strong> onde atuei como <strong>analista de suporte,</strong> monitorando bancos de dados de clientes.</p>
            <p>Monitoramento era feito através de uma plataforma própria, o <strong>DBSnoop</strong> e pelo <strong>Zabbix.</strong></p>
            <p>Além disso, atuava com atendimento de chamados e suporte ao usuário.</p>
            <p>Infelizmente por questões de estratégia de negócios, a empresa reduziu seu portfólio de clientes e a minha primeira oportunidade encerrou-se após 60 dias.</p>
            <p>Contudo, foi uma ótima oportunidade de conhecer pessoas novas, fazer network e ter um pequeno vislumbre de como é um ambiente diferente de todos que eu já trabalhei anteriormente.</p>
            `,
            link: "modal2",
            modalId: "modal2"
        }
    ]
    
    return (
        <><div className="container">
            <h1>Experiencias</h1>
            <p>Aqui você vai conhecer um pouco mais sobre minhas experiências profissionais.</p>
            
            <div className="card-container">
                {experiences.map((experience, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{experience.title}</span>
                            <p><a href="#!" className="modal-trigger" data-target={experience.modalId}>Mais</a></p>
                        </div>
                    </div>
                ))}
            </div>
            {experiences.map((experience, index) => (
                <div key={index} id={experience.modalId} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>{experience.title}</h4>
                        <div dangerouslySetInnerHTML={{ __html: experience.description }}></div>
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

export default Experience;