import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import NameModal from './components/NameModal';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import InfoGeneral from './components/InfoGeneral';
import Procedure from './components/Procedure';
import Advantages from './components/Advantages';
import Disadvantages from './components/Disadvantages';
import ChemistryInfo from './components/ChemistryInfo';
import Formulas from './components/Formulas';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import './App.css';
import './styles/main.css';

function App() {
    const [userName, setUserName] = useState('');
    const [showModal, setShowModal] = useState(true);
    const [activeSection, setActiveSection] = useState('informacion-general');

    useEffect(() => {
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            setUserName(savedName);
            setShowModal(false);
        }
    }, []);

    const handleNameSubmit = (name) => {
        setUserName(name);
        localStorage.setItem('userName', name);
        setShowModal(false);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        // Scroll al inicio del contenedor cuando cambia la sección
        setTimeout(() => {
            const container = document.querySelector('.container');
            if (container) {
                container.scrollTo({ top: 0, behavior: 'smooth' });
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <LanguageProvider>
            <div className="App">
                <NameModal 
                    show={showModal} 
                    onSubmit={handleNameSubmit}
                />
                
                {!showModal && (
                    <div className="main-wrapper">
                        <Sidebar 
                            activeSection={activeSection}
                            onSectionChange={handleSectionChange}
                        />
                        
                        <div className="container">
                            <Header userName={userName} />
                            
                            <div className="content-wrapper">
                                {activeSection === 'informacion-general' && (
                                    <InfoGeneral key="info-general" />
                                )}
                                {activeSection === 'procedimiento' && (
                                    <Procedure key="procedure" />
                                )}
                                {activeSection === 'ventajas' && (
                                    <Advantages key="advantages" />
                                )}
                                {activeSection === 'desventajas' && (
                                    <Disadvantages key="disadvantages" />
                                )}
                                {activeSection === 'informacion-quimica' && (
                                    <ChemistryInfo key="chemistry" />
                                )}
                                {activeSection === 'formulas' && (
                                    <Formulas key="formulas" />
                                )}
                            </div>
                            
                            <Footer />
                        </div>
                        
                        <LanguageSelector />
                    </div>
                )}
            </div>
        </LanguageProvider>
    );
}

export default App;

