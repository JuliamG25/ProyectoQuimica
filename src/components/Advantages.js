import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Advantages.css';

const Advantages = () => {
    const { t } = useLanguage();

    const advantages = [
        {
            icon: '🌿',
            titleKey: 'advantages.antiinflammatory.title',
            textKey: 'advantages.antiinflammatory.text'
        },
        {
            icon: '🛡️',
            titleKey: 'advantages.immune.title',
            textKey: 'advantages.immune.text'
        },
        {
            icon: '💪',
            titleKey: 'advantages.digestion.title',
            textKey: 'advantages.digestion.text'
        },
        {
            icon: '🌡️',
            titleKey: 'advantages.nausea.title',
            textKey: 'advantages.nausea.text'
        },
        {
            icon: '🍯',
            titleKey: 'advantages.energy.title',
            textKey: 'advantages.energy.text'
        },
        {
            icon: '🫁',
            titleKey: 'advantages.respiratory.title',
            textKey: 'advantages.respiratory.text'
        },
        {
            icon: '🧠',
            titleKey: 'advantages.cognitive.title',
            textKey: 'advantages.cognitive.text'
        },
        {
            icon: '❤️',
            titleKey: 'advantages.cardiovascular.title',
            textKey: 'advantages.cardiovascular.text'
        }
    ];

    return (
        <div className="advantages-section content-section" id="ventajas">
            <div className="section-title-with-bee">
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
                <h3>{t('advantages.title')}</h3>
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
            </div>
            <div className="advantages-grid">
                {advantages.map((advantage, index) => (
                    <div key={index} className="advantage-card">
                        <img src={beeImage} alt="Abeja" className="bee-image advantage-bee" />
                        <div className="advantage-icon">{advantage.icon}</div>
                        <h4>{t(advantage.titleKey)}</h4>
                        <p>{t(advantage.textKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;
