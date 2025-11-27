import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './ChemistryInfo.css';

const ChemistryInfo = () => {
    const { t } = useLanguage();
    const [activeDetail, setActiveDetail] = useState('gingerol');

    const getDetailContent = (detailType) => {
        if (detailType === 'gingerol') {
            return `
                <h4>${t('chemistry.gingerol.title')}</h4>
                <p><strong>${t('chemistry.gingerol.structure')}</strong> ${t('chemistry.gingerol.structureDesc')}</p>
                <ul>
                    <li><strong>${t('chemistry.gingerol.molecularWeight')}</strong> ${t('chemistry.gingerol.molecularWeightValue')}</li>
                    <li><strong>${t('chemistry.gingerol.solubility')}</strong> ${t('chemistry.gingerol.solubilityValue')}</li>
                    <li><strong>${t('chemistry.gingerol.properties')}</strong> ${t('chemistry.gingerol.propertiesValue')}</li>
                </ul>
            `;
        } else if (detailType === 'miel') {
            return `
                <h4>${t('chemistry.honey.title')}</h4>
                <p><strong>${t('chemistry.honey.mainComponents')}</strong></p>
                <ul>
                    <li><strong>${t('chemistry.honey.fructose')}</strong> ${t('chemistry.honey.fructoseDesc')}</li>
                    <li><strong>${t('chemistry.honey.glucose')}</strong> ${t('chemistry.honey.glucoseDesc')}</li>
                    <li><strong>${t('chemistry.honey.water')}</strong> ${t('chemistry.honey.waterDesc')}</li>
                </ul>
            `;
        } else if (detailType === 'cristalizacion') {
            return `
                <h4>${t('chemistry.crystallization.title')}</h4>
                <p><strong>${t('chemistry.crystallization.mechanism')}</strong></p>
                <ul>
                    <li><strong>${t('chemistry.crystallization.nucleation')}</strong> ${t('chemistry.crystallization.nucleationDesc')}</li>
                    <li><strong>${t('chemistry.crystallization.growth')}</strong> ${t('chemistry.crystallization.growthDesc')}</li>
                </ul>
            `;
        }
        return '';
    };

    return (
        <div className="interactive-section content-section" id="informacion-quimica">
            <div className="section-title-with-bee">
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
                <h3>{t('chemistry.title')}</h3>
                <img src={beeImage} alt="Abeja" className="bee-image section-bee" />
            </div>
            <div className="chemical-details">
                <button 
                    className={`detail-btn ${activeDetail === 'gingerol' ? 'active' : ''}`}
                    onClick={() => setActiveDetail('gingerol')}
                >
                    {t('chemistry.gingerol')}
                </button>
                <button 
                    className={`detail-btn ${activeDetail === 'miel' ? 'active' : ''}`}
                    onClick={() => setActiveDetail('miel')}
                >
                    {t('chemistry.honey')}
                </button>
                <button 
                    className={`detail-btn ${activeDetail === 'cristalizacion' ? 'active' : ''}`}
                    onClick={() => setActiveDetail('cristalizacion')}
                >
                    {t('chemistry.crystallization')}
                </button>
            </div>
            <div 
                className="detail-content" 
                dangerouslySetInnerHTML={{ __html: getDetailContent(activeDetail) }}
            />
        </div>
    );
};

export default ChemistryInfo;
