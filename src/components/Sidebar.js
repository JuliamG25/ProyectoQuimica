import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Sidebar.css';

const Sidebar = ({ activeSection, onSectionChange }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(true); // Siempre abierta en desktop
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sections = [
        { id: 'informacion-general', key: 'sidebar.info' },
        { id: 'historia', key: 'sidebar.history' },
        { id: 'procedimiento', key: 'sidebar.procedure' },
        { id: 'ventajas', key: 'sidebar.advantages' },
        { id: 'desventajas', key: 'sidebar.disadvantages' },
        { id: 'informacion-quimica', key: 'sidebar.chemistry' },
        { id: 'formulas', key: 'sidebar.formulas' }
    ];

    const handleSectionClick = (sectionId, e) => {
        e.preventDefault();
        console.log('Cambiando a sección:', sectionId); // Debug
        onSectionChange(sectionId);
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {isMobile && (
                <button 
                    className="sidebar-open-btn" 
                    onClick={() => setIsOpen(true)}
                    aria-label="Abrir menú"
                >
                    <img src={beeImage} alt="Abeja" className="bee-image menu-bee" />
                    ☰
                </button>
            )}

            <aside className={`sidebar ${isOpen || !isMobile ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <img src={beeImage} alt="Abeja" className="bee-image sidebar-bee" />
                    <h3>{t('sidebar.nav')}</h3>
                    <button 
                        className="sidebar-toggle" 
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        ✕
                    </button>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        {sections.map(section => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={(e) => handleSectionClick(section.id, e)}
                                >
                                    {t(section.key)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="sidebar-footer">
                    <img src={beeImage} alt="Abeja" className="bee-image sidebar-bee-small" />
                    <p>{t('sidebar.footer')}</p>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;

