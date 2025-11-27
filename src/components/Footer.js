import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import beeImage from '../assets/image.png';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <div className="footer-content">
                <img src={beeImage} alt="Abeja" className="bee-image footer-bee" />
                <p>{t('footer.text')}</p>
                <img src={beeImage} alt="Abeja" className="bee-image footer-bee" />
            </div>
        </footer>
    );
};

export default Footer;

