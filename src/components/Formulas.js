import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Formulas.css';

const Formulas = () => {
    const { t } = useLanguage();

    const formulas = [
        {
            nameKey: 'formulas.gingerol.name',
            formula: 'C₁₇H₂₄O₃',
            descriptionKey: 'formulas.gingerol.description'
        },
        {
            nameKey: 'formulas.fructose.name',
            formula: 'C₆H₁₂O₆',
            descriptionKey: 'formulas.fructose.description'
        },
        {
            nameKey: 'formulas.glucose.name',
            formula: 'C₆H₁₂O₆',
            descriptionKey: 'formulas.glucose.description'
        }
    ];

    return (
        <div className="formula-section content-section" id="formulas">
            <div className="section-title-with-bee">
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
                <h3>{t('formulas.title')}</h3>
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
            </div>
            <div className="formulas">
                {formulas.map((formula, index) => (
                    <div key={index} className="formula-card">
                        <img src={beeImage} alt="Abeja" className="bee-image formula-bee" />
                        <h4>{t(formula.nameKey)}</h4>
                        <div className="formula">{formula.formula}</div>
                        <p>{t(formula.descriptionKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Formulas;
