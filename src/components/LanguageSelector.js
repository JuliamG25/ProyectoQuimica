import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ];

    const langCodes = { es: 'ES', en: 'EN', de: 'DE' };
    const currentLang = languages.find(lang => lang.code === language);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="language-selector" ref={menuRef}>
            <button 
                className="language-btn" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Cambiar idioma"
            >
                <span className="language-icon">🌐</span>
                <span className="language-code">{langCodes[language]}</span>
            </button>
            <div className={`language-menu ${isOpen ? 'active' : ''}`}>
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        className="language-option"
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        <span className="flag">{lang.flag}</span>
                        <span>{lang.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;

