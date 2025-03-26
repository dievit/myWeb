import useFavicon from "../hooks/useFavicon";

const About: React.FC = () => {
    useFavicon(import.meta.env.BASE_URL + "src/assets/school_24dp.svg");

    return (
        <><div className="container">
            <h3><strong>Sobre mim</strong></h3>
            <div>
            <p>Olá, sou <strong>Diego</strong>, tenho 37 anos e estou vivendo uma das fases mais desafiadoras e gratificantes da minha vida: a <strong>transição de carreira para a área de tecnologia.</strong> Sempre fui apaixonado por tecnologia, mas, por diferentes razões, acabei trilhando outros caminhos ao longo dos anos. Trabalhei na indústria, passei pelo comércio e até empreendi, tendo minha própria hamburgueria. No entanto, aquele desejo de trabalhar com tecnologia nunca me abandonou. Então, decidi dar uma nova chance a esse sonho.

                Hoje, estou na minha segunda oportunidade profissional na área, atuando como <strong>Analista de Suporte</strong> em uma empresa que presta serviços para indústrias de médio e grande porte. Essa experiência tem sido valiosa, mas sei que ainda não é o meu destino final. Meu objetivo é me tornar um <strong>desenvolvedor de software,</strong> mergulhando cada vez mais fundo no universo da programação.
            </p>
            </div>
                <h3><strong>Formação e Experiência</strong></h3>
            <div>
                <p>
                Estudei por três semestres completos o curso de <strong>Análise e Desenvolvimento</strong> de Sistemas na <strong><a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank" rel="noopener noreferrer">FATEC São José dos Campos</a></strong>. Atualmente, estou no <strong>segundo semestre do curso de Banco de Dados</strong>, uma mudança necessária devido ao conflito de horários entre os estudos e o trabalho.

                Minha experiência em programação e projetos vem, em grande parte, dos <strong>Projetos Integradores (APIs)</strong> desenvolvidos na própria FATEC. A cada semestre, criamos projetos que envolvem <strong>programação e metodologia ágil Scrum,</strong> proporcionando uma vivência próxima do mercado de trabalho.

                No terceiro semestre de ADS, tive uma experiência enriquecedora ao atuar como Product Owner em um projeto real para a <strong><a href="https://www.pro4tech.com.br/" target="_blank" rel="noopener noreferrer">Pro4Tech.</a></strong> Desenvolvemos um <strong>dashboard para lançamento e controle de comissões,</strong> utilizando <strong>React-TS, Node.js e SQL.</strong> Foi uma oportunidade incrível para aplicar o conhecimento adquirido e entender ainda mais sobre o desenvolvimento de software em um cenário corporativo. 
                No atual semestre de Banco de Dados, estou desenvolvendo um projeto em Java Desktop para gerenciamento de horários de aula da <strong><a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank" rel="noopener noreferrer">FATEC São José dos Campos</a></strong> e neste projeto, estou tendo a oportunidade de atuar como <strong>Scrum Master</strong> da minha equipe.
                </p>
            </div>
                <h3><strong>O Futuro</strong></h3>
            <div>
                <p>
                Conciliar <strong>trabalho, faculdade, estudos extras, família e vida social</strong> não é uma tarefa fácil, mas acredito que todo esforço vale a pena. Sigo aprendendo, enfrentando desafios e crescendo a cada dia.

                Meu grande sonho é construir uma carreira sólida na programação, trazendo <strong>segurança e conforto</strong> para mim e para minha família. Quero me tornar um profissional qualificado, capaz de desenvolver soluções que realmente façam a diferença. Além disso, me interesso por projetos paralelos e inovação – quem sabe, no futuro, unir a programação com novas oportunidades de empreendimento.

                Essa jornada está apenas começando, e estou animado para ver onde ela vai me levar.</p>
            </div>
        </div>
            </>
    );

}

export default About;
