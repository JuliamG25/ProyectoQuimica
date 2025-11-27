import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Procedure.css';
import '../styles/main.css';

const Procedure = () => {
    const { t } = useLanguage();

    const steps = [
        {
            number: 1,
            titleKey: 'procedure.step1.title',
            processKey: 'procedure.step1.process',
            items: [
                'procedure.step1.item1',
                'procedure.step1.item2',
                'procedure.step1.item3'
            ],
            chemicalKey: 'procedure.step1.chemical'
        },
        {
            number: 2,
            titleKey: 'procedure.step2.title',
            processKey: 'procedure.step2.process',
            items: [
                'procedure.step2.item1',
                'procedure.step2.item2',
                'procedure.step2.item3'
            ],
            chemicalKey: 'procedure.step2.chemical'
        },
        {
            number: 3,
            titleKey: 'procedure.step3.title',
            processKey: 'procedure.step3.process',
            items: [
                'procedure.step3.item1',
                'procedure.step3.item2',
                'procedure.step3.item3'
            ],
            chemicalKey: 'procedure.step3.chemical'
        },
        {
            number: 4,
            titleKey: 'procedure.step4.title',
            processKey: 'procedure.step4.process',
            items: [
                'procedure.step4.item1',
                'procedure.step4.item2',
                'procedure.step4.item3'
            ],
            chemicalKey: 'procedure.step4.chemical'
        },
        {
            number: 5,
            titleKey: 'procedure.step5.title',
            processKey: 'procedure.step5.process',
            items: [
                'procedure.step5.item1',
                'procedure.step5.item2',
                'procedure.step5.item3'
            ],
            chemicalKey: 'procedure.step5.chemical'
        },
        {
            number: 6,
            titleKey: 'procedure.step6.title',
            processKey: 'procedure.step6.process',
            items: [
                'procedure.step6.item1',
                'procedure.step6.item2',
                'procedure.step6.item3'
            ],
            chemicalKey: 'procedure.step6.chemical'
        },
        {
            number: 7,
            titleKey: 'procedure.step7.title',
            processKey: 'procedure.step7.process',
            items: [
                'procedure.step7.item1',
                'procedure.step7.item2',
                'procedure.step7.item3'
            ],
            chemicalKey: 'procedure.step7.chemical'
        }
    ];

    return (
        <div className="procedure-section content-section" id="procedimiento">
            <h3>{t('procedure.title')}</h3>
            
            <div className="steps-container">
                {steps.map(step => (
                    <div key={step.number} className="step-card">
                        <div className="step-header">
                            <span className="step-number">{step.number}</span>
                            <h4>{t(step.titleKey)}</h4>
                        </div>
                        <div className="step-content">
                            <p><strong>{t('procedure.processLabel')}</strong> {t(step.processKey)}</p>
                            <ul>
                                {step.items.map((itemKey, index) => (
                                    <li key={index}>{t(itemKey)}</li>
                                ))}
                            </ul>
                            <div className="chemical-info">
                                <strong>{t(step.chemicalKey)}</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Procedure;
