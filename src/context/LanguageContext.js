import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('preferredLanguage') || 'es';
    });

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    const t = (key, params = {}) => {
        let text = translations[language][key] || key;
        
        // Reemplazar parámetros
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        
        return text;
    };

    useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

