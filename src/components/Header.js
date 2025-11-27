import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Header.css';

const Header = ({ userName }) => {
    const { t } = useLanguage();

    return (
        <header>
            <div className="header-bees">
                <img src={beeImage} alt="Abeja" className="bee-image header-bee-left" />
                <div className="header-content">
                    <h1>🧪 {t('header.title')}</h1>
                    <h2>{t('header.subtitle')}</h2>
                    <p className="subtitle">{t('header.process')}</p>
                    {userName && (
                        <p className="welcome-message">
                            {t('header.welcome', { name: userName })}
                        </p>
                    )}
                    <div className="authors-section">
                        <p className="authors-label">Realizado por:</p>
                        <div className="authors-list">
                            <p>Brenda Marin</p>
                            <p>Natalia Lizarazo</p>
                            <p>Angela Riaño</p>
                            <p>Laura Fernandez</p>
                        </div>
                    </div>
                </div>
                <img src={beeImage} alt="Abeja" className="bee-image header-bee-right" />
            </div>
        </header>
    );
};

export default Header;

