import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
            <section className="welcome-section">
                <h2>Bienvenido</h2>
                <p>
                    Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
                </p>
            </section>
            <section className="topics-covered">
                <h3>Temas Cubiertos</h3>
                <ul>
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de React hoos como useState y useEffect</li>
                    <li>Creacion de custom hooks como useForm</li>
                    <li>Gestion de estado global con Redux</li>
                    <li>Integración cde Redux con React</li>
                    <li>Manejo de formularios con react</li>
                    <li>publicando nuestra Pagina con Github Pages</li>
                
                </ul>
            </section>
            <section className="additional-resources">
                <h3>Recursos Adicionales</h3>
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