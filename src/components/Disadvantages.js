import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Disadvantages.css';

const Disadvantages = () => {
    const { t } = useLanguage();

    const disadvantages = [
        {
            icon: '🍯',
            titleKey: 'disadvantages.sugar.title',
            textKey: 'disadvantages.sugar.text'
        },
        {
            icon: '🔥',
            titleKey: 'disadvantages.gastro.title',
            textKey: 'disadvantages.gastro.text'
        },
        {
            icon: '💊',
            titleKey: 'disadvantages.medications.title',
            textKey: 'disadvantages.medications.text'
        },
        {
            icon: '🤰',
            titleKey: 'disadvantages.pregnancy.title',
            textKey: 'disadvantages.pregnancy.text'
        },
        {
            icon: '🩸',
            titleKey: 'disadvantages.bloodPressure.title',
            textKey: 'disadvantages.bloodPressure.text'
        },
        {
            icon: '🍯',
            titleKey: 'disadvantages.botulism.title',
            textKey: 'disadvantages.botulism.text'
        },
        {
            icon: '⚖️',
            titleKey: 'disadvantages.dosing.title',
            textKey: 'disadvantages.dosing.text'
        },
        {
            icon: '🌡️',
            titleKey: 'disadvantages.temperature.title',
            textKey: 'disadvantages.temperature.text'
        },
        {
            icon: '🦷',
            titleKey: 'disadvantages.cavities.title',
            textKey: 'disadvantages.cavities.text'
        }
    ];

    return (
        <div className="disadvantages-section content-section" id="desventajas">
            <div className="section-title-with-bee">
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
                <h3>{t('disadvantages.title')}</h3>
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
            </div>
            <div className="disadvantages-grid">
                {disadvantages.map((disadvantage, index) => (
                    <div key={index} className="disadvantage-card">
                        <img src={beeImage} alt="Abeja" className="bee-image disadvantage-bee" />
                        <div className="disadvantage-icon">{disadvantage.icon}</div>
                        <h4>{t(disadvantage.titleKey)}</h4>
                        <p>{t(disadvantage.textKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Disadvantages;
