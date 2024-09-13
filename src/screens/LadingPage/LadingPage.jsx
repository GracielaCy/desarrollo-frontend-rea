import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>MODULO 7: DESARROLLO FRONTEND CON REACTJS</h1>
            <section className="welcome-section">
                <h2>Bienvenido</h2>
                <hr class="green-line"/>
                <p>
                    Este módulo se centra en el uso de <strong>React</strong> , incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
                </p>
            </section>
            <section className="topics-covered">
                <h3>Temas Cubiertos</h3>
                <hr class="green-line"/>
                <ul>
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de <b>React hooks</b> como useState y useEffect</li>
                    <li>Creacion de <b>custom hooks</b> como useForm</li>
                    <li>Gestion de variables de estado con <b>useStates</b></li>
                    <li>Gestion de estado global con <b>Redux</b></li>
                    <li>Integración de <b> Redux con React</b></li>
                    <li>Manejo de <b>formularios</b> con <b>react</b></li>
                    <li>publicando nuestra <b>Pagina</b> con <b>Github Pages</b></li>
                
                </ul>
            </section>
            <section className="additional-resources">
                <h3>Recursos Adicionales</h3>
                <hr class="green-line"/>
                <p>
                    Para profundizaren los temas cubiertos, consulta los siuientes recursos:
                </p>
            </section>
            <footer className="landing-footer">
                <p>© 2024 Modulo 7. USIP.</p>
            </footer>
        </div>
    );
};

export default LandingPage;