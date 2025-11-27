import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './NameModal.css';

const NameModal = ({ show, onSubmit }) => {
    const { t } = useLanguage();
    const [name, setName] = useState('');

    if (!show) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            onSubmit(name.trim());
        }
    };

    return (
        <div className="name-modal">
            <div className="modal-content">
                <img src={beeImage} alt="Abeja" className="bee-image modal-bee" />
                <h2>👋 {t('modal.welcome')}</h2>
                <p>{t('modal.enterName')}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('modal.placeholder')}
                        required
                        autoFocus
                        maxLength={50}
                    />
                    <button type="submit" className="submit-btn">
                        {t('modal.continue')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NameModal;

