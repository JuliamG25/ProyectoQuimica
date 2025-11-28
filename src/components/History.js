import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './History.css';

const History = () => {
    const { t } = useLanguage();

    const historyItems = [
        {
            icon: '📜',
            titleKey: 'history.ancient.title',
            textKey: 'history.ancient.text'
        },
        {
            icon: '🌏',
            titleKey: 'history.cultures.title',
            textKey: 'history.cultures.text'
        },
        {
            icon: '⚗️',
            titleKey: 'history.traditional.title',
            textKey: 'history.traditional.text'
        },
        {
            icon: '🔬',
            titleKey: 'history.modern.title',
            textKey: 'history.modern.text'
        }
    ];

    return (
        <div className="history-section content-section" id="historia">
            <div className="section-title-with-bee">
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
                <h3>{t('history.title')}</h3>
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
            </div>
            <div className="history-intro">
                <p>{t('history.intro')}</p>
            </div>
            <div className="history-grid">
                {historyItems.map((item, index) => (
                    <div key={index} className="history-card">
                        <img src={beeImage} alt="Abeja" className="bee-image history-bee" />
                        <div className="history-icon">{item.icon}</div>
                        <h4>{t(item.titleKey)}</h4>
                        <p>{t(item.textKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;

