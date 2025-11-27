import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './InfoGeneral.css';
import '../styles/main.css';

const InfoGeneral = () => {
    const { t } = useLanguage();

    return (
        <div className="intro-section content-section active" id="informacion-general">
            <div className="info-card">
                <div className="info-card-header">
                    <img src={beeImage} alt="Abeja" className="bee-image info-bee" />
                    <h3>{t('info.title')}</h3>
                    <img src={beeImage} alt="Abeja" className="bee-image info-bee" />
                </div>
                <p className="intro-text">{t('info.intro')}</p>
            </div>

            <div className="info-grid">
                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">🧪</div>
                    <h4>{t('info.objective.title')}</h4>
                    <p>{t('info.objective.text')}</p>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">📦</div>
                    <h4>{t('info.ingredients.title')}</h4>
                    <ul>
                        <li><strong>{t('info.ingredients.ginger')}</strong> 50g (Zingiber officinale)</li>
                        <li><strong>{t('info.ingredients.honey')}</strong> 150g (Apis mellifera)</li>
                        <li><strong>{t('info.ingredients.water')}</strong> 200ml (H₂O)</li>
                    </ul>
                    <p><strong>{t('info.ingredients.yield')}</strong> {t('info.ingredients.yieldValue')}</p>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">⏱️</div>
                    <h4>{t('info.time.title')}</h4>
                    <ul>
                        <li><strong>{t('info.time.initial')}</strong> 15-20 {t('common.minutes')}</li>
                        <li><strong>{t('info.time.extraction')}</strong> 30 {t('common.minutes')}</li>
                        <li><strong>{t('info.time.concentration')}</strong> 20-30 {t('common.minutes')}</li>
                        <li><strong>{t('info.time.mixing')}</strong> 15 {t('common.minutes')}</li>
                        <li><strong>{t('info.time.drying')}</strong> 24-48 {t('common.hours')}</li>
                    </ul>
                    <p><strong>{t('info.time.total')}</strong> {t('info.time.totalValue')}</p>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">🌡️</div>
                    <h4>{t('info.conditions.title')}</h4>
                    <ul>
                        <li><strong>{t('info.conditions.temp')}</strong> {t('info.conditions.tempValue')}</li>
                        <li><strong>{t('info.conditions.extractionTemp')}</strong> {t('info.conditions.extractionTempValue')}</li>
                        <li><strong>{t('info.conditions.concentrationTemp')}</strong> {t('info.conditions.concentrationTempValue')}</li>
                        <li><strong>{t('info.conditions.humidity')}</strong> {t('info.conditions.humidityValue')}</li>
                        <li><strong>{t('info.conditions.ph')}</strong> {t('info.conditions.phValue')}</li>
                    </ul>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">🔬</div>
                    <h4>{t('info.principles.title')}</h4>
                    <ul>
                        <li><strong>{t('info.principles.solubility')}</strong> {t('info.principles.solubilityDesc')}</li>
                        <li><strong>{t('info.principles.evaporation')}</strong> {t('info.principles.evaporationDesc')}</li>
                        <li><strong>{t('info.principles.crystallization')}</strong> {t('info.principles.crystallizationDesc')}</li>
                        <li><strong>{t('info.principles.conservation')}</strong> {t('info.principles.conservationDesc')}</li>
                        <li><strong>{t('info.principles.stability')}</strong> {t('info.principles.stabilityDesc')}</li>
                    </ul>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">⚗️</div>
                    <h4>{t('info.materials.title')}</h4>
                    <ul>
                        <li>{t('info.materials.item1')}</li>
                        <li>{t('info.materials.item2')}</li>
                        <li>{t('info.materials.item3')}</li>
                        <li>{t('info.materials.item4')}</li>
                        <li>{t('info.materials.item5')}</li>
                        <li>{t('info.materials.item6')}</li>
                        <li>{t('info.materials.item7')}</li>
                        <li>{t('info.materials.item8')}</li>
                    </ul>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">📊</div>
                    <h4>{t('info.quality.title')}</h4>
                    <ul>
                        <li><strong>{t('info.quality.moisture')}</strong> {t('info.quality.moistureValue')}</li>
                        <li><strong>{t('info.quality.gingerol')}</strong> {t('info.quality.gingerolValue')}</li>
                        <li><strong>{t('info.quality.ph')}</strong> {t('info.quality.phValue')}</li>
                        <li><strong>{t('info.quality.waterActivity')}</strong> {t('info.quality.waterActivityValue')}</li>
                        <li><strong>{t('info.quality.texture')}</strong> {t('info.quality.textureValue')}</li>
                        <li><strong>{t('info.quality.color')}</strong> {t('info.quality.colorValue')}</li>
                    </ul>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">💾</div>
                    <h4>{t('info.storage.title')}</h4>
                    <ul>
                        <li><strong>{t('info.storage.temp')}</strong> {t('info.storage.tempValue')}</li>
                        <li><strong>{t('info.storage.humidity')}</strong> {t('info.storage.humidityValue')}</li>
                        <li><strong>{t('info.storage.container')}</strong> {t('info.storage.containerValue')}</li>
                        <li><strong>{t('info.storage.shelfLife')}</strong> {t('info.storage.shelfLifeValue')}</li>
                        <li><strong>{t('info.storage.indicators')}</strong> {t('info.storage.indicatorsValue')}</li>
                    </ul>
                </div>

                <div className="info-box">
                    <img src={beeImage} alt="Abeja" className="bee-image info-box-bee" />
                    <div className="info-box-icon">⚠️</div>
                    <h4>{t('info.considerations.title')}</h4>
                    <ul>
                        <li>{t('info.considerations.item1')}</li>
                        <li>{t('info.considerations.item2')}</li>
                        <li>{t('info.considerations.item3')}</li>
                        <li>{t('info.considerations.item4')}</li>
                        <li>{t('info.considerations.item5')}</li>
                        <li>{t('info.considerations.item6')}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InfoGeneral;
