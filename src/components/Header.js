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
                </div>
                <img src={beeImage} alt="Abeja" className="bee-image header-bee-right" />
            </div>
        </header>
    );
};

export default Header;

