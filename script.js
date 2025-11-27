// Variable global para almacenar el nombre del usuario
let userName = '';

// Sistema de traducción
const translations = {
    es: {
        // Modal
        'modal.welcome': '¡Bienvenido!',
        'modal.enterName': 'Por favor, ingresa tu nombre para continuar',
        'modal.placeholder': 'Escribe tu nombre aquí...',
        'modal.continue': 'Continuar',
        // Header
        'header.title': 'Procedimiento Químico',
        'header.subtitle': 'Pastillas de Miel con Jengibre',
        'header.process': 'Proceso de extracción y cristalización',
        'header.welcome': '¡Hola, {name}! Bienvenido al procedimiento químico.',
        // Sidebar
        'sidebar.nav': 'Navegación',
        'sidebar.info': '📋 Información General',
        'sidebar.procedure': '⚗️ Procedimiento',
        'sidebar.advantages': '✨ Ventajas',
        'sidebar.disadvantages': '⚠️ Desventajas',
        'sidebar.chemistry': '🔬 Información Química',
        'sidebar.formulas': '📐 Fórmulas',
        'sidebar.footer': 'Pastillas de Miel',
        // Footer
        'footer.text': 'Procedimiento Químico - Pastillas de Miel con Jengibre',
        // Información General
        'info.title': '📋 Información General',
        'info.intro': 'Este procedimiento involucra la extracción de compuestos activos del jengibre y su combinación con miel para crear pastillas mediante procesos de cristalización controlada. El proceso combina principios de química orgánica, extracción de compuestos fenólicos y técnicas de formulación farmacéutica.',
        'info.objective.title': 'Objetivo del Procedimiento',
        'info.objective.text': 'Extraer y concentrar los compuestos bioactivos del jengibre (principalmente gingerol y shogaol) y combinarlos con miel para crear una formulación sólida que preserve las propiedades terapéuticas y permita una dosificación controlada.',
        'info.ingredients.title': 'Ingredientes Principales',
        'info.time.title': 'Tiempo de Preparación',
        'info.conditions.title': 'Condiciones de Trabajo',
        'info.principles.title': 'Principios Químicos Involucrados',
        'info.materials.title': 'Materiales y Equipos Necesarios',
        'info.quality.title': 'Parámetros de Calidad',
        'info.storage.title': 'Conservación y Almacenamiento',
        'info.considerations.title': 'Consideraciones Importantes',
        // Procedimiento
        'procedure.title': 'Procedimiento Paso a Paso',
        // Ventajas
        'advantages.title': '✨ Ventajas de Consumir Pastillas de Miel con Jengibre',
        // Desventajas
        'disadvantages.title': '⚠️ Desventajas y Precauciones',
        // Información Química
        'chemistry.title': '🔬 Información Química Detallada',
        'chemistry.select': 'Selecciona un tema para ver más información química detallada.',
        'chemistry.gingerol': 'Gingerol',
        'chemistry.honey': 'Composición de la Miel',
        'chemistry.crystallization': 'Proceso de Cristalización',
        // Fórmulas
        'formulas.title': '📐 Fórmulas Químicas Relevantes'
    },
    en: {
        // Modal
        'modal.welcome': 'Welcome!',
        'modal.enterName': 'Please enter your name to continue',
        'modal.placeholder': 'Type your name here...',
        'modal.continue': 'Continue',
        // Header
        'header.title': 'Chemical Procedure',
        'header.subtitle': 'Honey and Ginger Pills',
        'header.process': 'Extraction and crystallization process',
        'header.welcome': 'Hello, {name}! Welcome to the chemical procedure.',
        // Sidebar
        'sidebar.nav': 'Navigation',
        'sidebar.info': '📋 General Information',
        'sidebar.procedure': '⚗️ Procedure',
        'sidebar.advantages': '✨ Advantages',
        'sidebar.disadvantages': '⚠️ Disadvantages',
        'sidebar.chemistry': '🔬 Chemical Information',
        'sidebar.formulas': '📐 Formulas',
        'sidebar.footer': 'Honey Pills',
        // Footer
        'footer.text': 'Chemical Procedure - Honey and Ginger Pills',
        // Información General
        'info.title': '📋 General Information',
        'info.intro': 'This procedure involves the extraction of active compounds from ginger and their combination with honey to create pills through controlled crystallization processes. The process combines principles of organic chemistry, phenolic compound extraction, and pharmaceutical formulation techniques.',
        'info.objective.title': 'Procedure Objective',
        'info.objective.text': 'Extract and concentrate the bioactive compounds from ginger (mainly gingerol and shogaol) and combine them with honey to create a solid formulation that preserves therapeutic properties and allows controlled dosing.',
        'info.ingredients.title': 'Main Ingredients',
        'info.time.title': 'Preparation Time',
        'info.conditions.title': 'Working Conditions',
        'info.principles.title': 'Involved Chemical Principles',
        'info.materials.title': 'Required Materials and Equipment',
        'info.quality.title': 'Quality Parameters',
        'info.storage.title': 'Conservation and Storage',
        'info.considerations.title': 'Important Considerations',
        // Procedimiento
        'procedure.title': 'Step-by-Step Procedure',
        // Ventajas
        'advantages.title': '✨ Advantages of Consuming Honey and Ginger Pills',
        // Desventajas
        'disadvantages.title': '⚠️ Disadvantages and Precautions',
        // Información Química
        'chemistry.title': '🔬 Detailed Chemical Information',
        'chemistry.select': 'Select a topic to see more detailed chemical information.',
        'chemistry.gingerol': 'Gingerol',
        'chemistry.honey': 'Honey Composition',
        'chemistry.crystallization': 'Crystallization Process',
        // Fórmulas
        'formulas.title': '📐 Relevant Chemical Formulas'
    },
    de: {
        // Modal
        'modal.welcome': 'Willkommen!',
        'modal.enterName': 'Bitte geben Sie Ihren Namen ein, um fortzufahren',
        'modal.placeholder': 'Geben Sie hier Ihren Namen ein...',
        'modal.continue': 'Weiter',
        // Header
        'header.title': 'Chemisches Verfahren',
        'header.subtitle': 'Honig- und Ingwer-Pillen',
        'header.process': 'Extraktions- und Kristallisationsprozess',
        'header.welcome': 'Hallo, {name}! Willkommen zum chemischen Verfahren.',
        // Sidebar
        'sidebar.nav': 'Navigation',
        'sidebar.info': '📋 Allgemeine Informationen',
        'sidebar.procedure': '⚗️ Verfahren',
        'sidebar.advantages': '✨ Vorteile',
        'sidebar.disadvantages': '⚠️ Nachteile',
        'sidebar.chemistry': '🔬 Chemische Informationen',
        'sidebar.formulas': '📐 Formeln',
        'sidebar.footer': 'Honig-Pillen',
        // Footer
        'footer.text': 'Chemisches Verfahren - Honig- und Ingwer-Pillen',
        // Información General
        'info.title': '📋 Allgemeine Informationen',
        'info.intro': 'Dieses Verfahren umfasst die Extraktion aktiver Verbindungen aus Ingwer und deren Kombination mit Honig zur Herstellung von Pillen durch kontrollierte Kristallisationsprozesse. Der Prozess kombiniert Prinzipien der organischen Chemie, Extraktion von Phenolverbindungen und pharmazeutische Formulierungstechniken.',
        'info.objective.title': 'Verfahrensziel',
        'info.objective.text': 'Die bioaktiven Verbindungen aus Ingwer (hauptsächlich Gingerol und Shogaol) extrahieren und konzentrieren und sie mit Honig kombinieren, um eine feste Formulierung zu erstellen, die therapeutische Eigenschaften erhält und eine kontrollierte Dosierung ermöglicht.',
        'info.ingredients.title': 'Hauptzutaten',
        'info.time.title': 'Zubereitungszeit',
        'info.conditions.title': 'Arbeitsbedingungen',
        'info.principles.title': 'Beteiligte chemische Prinzipien',
        'info.materials.title': 'Erforderliche Materialien und Ausrüstung',
        'info.quality.title': 'Qualitätsparameter',
        'info.storage.title': 'Konservierung und Lagerung',
        'info.considerations.title': 'Wichtige Überlegungen',
        // Procedimiento
        'procedure.title': 'Schritt-für-Schritt-Verfahren',
        // Ventajas
        'advantages.title': '✨ Vorteile des Verzehrs von Honig- und Ingwer-Pillen',
        // Desventajas
        'disadvantages.title': '⚠️ Nachteile und Vorsichtsmaßnahmen',
        // Información Química
        'chemistry.title': '🔬 Detaillierte chemische Informationen',
        'chemistry.select': 'Wählen Sie ein Thema, um detailliertere chemische Informationen zu sehen.',
        'chemistry.gingerol': 'Gingerol',
        'chemistry.honey': 'Honigzusammensetzung',
        'chemistry.crystallization': 'Kristallisationsprozess',
        // Fórmulas
        'formulas.title': '📐 Relevante chemische Formeln'
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    const currentTranslations = translations[lang];
    
    // Traducir elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        let text = currentTranslations[key];
        
        if (text && text.includes('{name}')) {
            text = text.replace('{name}', userName);
        }
        
        if (text) {
            element.textContent = text;
        }
    });
    
    // Actualizar placeholder
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
    
    const userNameInput = document.getElementById('userName');
    if (userNameInput) {
        userNameInput.placeholder = currentTranslations['modal.placeholder'];
    }
    
    // Actualizar código de idioma
    const langCodes = { es: 'ES', en: 'EN', de: 'DE' };
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
        currentLangEl.textContent = langCodes[lang];
    }
    
    // Actualizar mensaje de bienvenida
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage && userName) {
        welcomeMessage.textContent = currentTranslations['header.welcome'].replace('{name}', userName);
    }
    
    // Actualizar enlaces de navegación
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = [
            'sidebar.info',
            'sidebar.procedure',
            'sidebar.advantages',
            'sidebar.disadvantages',
            'sidebar.chemistry',
            'sidebar.formulas'
        ];
        if (keys[index]) {
            link.textContent = currentTranslations[keys[index]];
        }
    });
    
    // Actualizar botones de detalles químicos
    const detailButtons = document.querySelectorAll('.detail-btn');
    if (detailButtons.length >= 3) {
        detailButtons[0].textContent = currentTranslations['chemistry.gingerol'];
        detailButtons[1].textContent = currentTranslations['chemistry.honey'];
        detailButtons[2].textContent = currentTranslations['chemistry.crystallization'];
    }
}

// Función para inicializar el selector de idioma
function setupLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Cargar idioma guardado o usar español por defecto
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
    
    // Toggle del menú
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageMenu.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            languageMenu.classList.remove('active');
        }
    });
    
    // Cambiar idioma al seleccionar opción
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            languageMenu.classList.remove('active');
        });
    });
}

// Función para manejar el modal de nombre
function setupNameModal() {
    const nameModal = document.getElementById('nameModal');
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const mainContent = document.getElementById('mainContent');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    // Verificar si ya hay un nombre guardado en localStorage
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        userName = savedName;
        nameModal.classList.add('hidden');
        mainContent.style.display = 'block';
        welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido al procedimiento químico.`;
        return;
    }
    
    // Manejar el envío del formulario
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputName = userNameInput.value.trim();
        
        if (inputName && inputName.length > 0) {
            userName = inputName;
            
            // Guardar el nombre en localStorage
            localStorage.setItem('userName', userName);
            
            // Ocultar el modal con animación
            nameModal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                nameModal.classList.add('hidden');
                mainContent.style.display = 'block';
                welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido al procedimiento químico.`;
                
                // Animar la aparición del contenido
                mainContent.style.animation = 'fadeIn 0.5s ease';
            }, 300);
        }
    });
    
    // Permitir enviar con Enter
    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            nameForm.dispatchEvent(new Event('submit'));
        }
    });
}

// Agregar animación fadeOut
function addFadeOutAnimation() {
    const style = document.createElement('style');
    style.textContent += `
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Información química detallada
const chemicalDetails = {
    gingerol: {
        title: "Gingerol (C₁₇H₂₄O₃)",
        content: `
            <h4>Gingerol (C₁₇H₂₄O₃)</h4>
            <p><strong>Estructura química:</strong> Compuesto fenólico con cadena alquílica de 6 carbonos.</p>
            <ul>
                <li><strong>Peso molecular:</strong> 294.38 g/mol</li>
                <li><strong>Solubilidad:</strong> Soluble en agua caliente, etanol y aceites</li>
                <li><strong>Propiedades:</strong> Antiinflamatorio, antioxidante, analgésico</li>
                <li><strong>Punto de fusión:</strong> 30-32°C (forma líquida a temperatura ambiente)</li>
                <li><strong>Extracción:</strong> Se extrae mejor con agua caliente (60-70°C) debido a su naturaleza polar</li>
            </ul>
            <p><strong>Mecanismo de acción:</strong> El gingerol inhibe la ciclooxigenasa (COX), reduciendo la síntesis de prostaglandinas inflamatorias.</p>
        `
    },
    miel: {
        title: "Composición Química de la Miel",
        content: `
            <h4>Composición Química de la Miel</h4>
            <p><strong>Componentes principales:</strong></p>
            <ul>
                <li><strong>Fructosa (C₆H₁₂O₆):</strong> 38-40% - Azúcar principal, responsable de la dulzura</li>
                <li><strong>Glucosa (C₆H₁₂O₆):</strong> 30-32% - Contribuye a la cristalización</li>
                <li><strong>Agua (H₂O):</strong> 17-20% - Contenido de humedad</li>
                <li><strong>Sacarosa (C₁₂H₂₂O₁₁):</strong> 1-2% - Disacárido formado por glucosa + fructosa</li>
                <li><strong>Minerales:</strong> Potasio, calcio, magnesio, fósforo</li>
                <li><strong>Enzimas:</strong> Diastasa, invertasa, catalasa</li>
                <li><strong>Ácidos orgánicos:</strong> Ácido glucónico, ácido cítrico</li>
            </ul>
            <p><strong>Propiedades físico-químicas:</strong></p>
            <ul>
                <li><strong>pH:</strong> 3.4 - 6.1 (ácido, inhibe crecimiento bacteriano)</li>
                <li><strong>Densidad:</strong> ~1.4 g/cm³</li>
                <li><strong>Actividad de agua (aw):</strong> 0.5-0.6 (baja, conserva alimentos)</li>
            </ul>
        `
    },
    cristalizacion: {
        title: "Proceso de Cristalización",
        content: `
            <h4>Proceso de Cristalización en las Pastillas</h4>
            <p><strong>Mecanismo de cristalización:</strong></p>
            <ul>
                <li><strong>Nucleación:</strong> Formación de núcleos cristalinos cuando la solución se sobresatura</li>
                <li><strong>Crecimiento:</strong> Los cristales crecen a medida que las moléculas de azúcar se depositan</li>
                <li><strong>Factores que afectan:</strong>
                    <ul>
                        <li>Temperatura: Cristalización más rápida a 10-15°C</li>
                        <li>Concentración: Mayor concentración = mayor velocidad</li>
                        <li>Agitación: Puede acelerar el proceso</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Ecuación química:</strong></p>
            <p style="text-align: center; font-size: 1.2rem; margin: 15px 0;">
                C₁₂H₂₂O₁₁ (solución) → C₁₂H₂₂O₁₁ (cristal) + calor
            </p>
            <p><strong>Estructura resultante:</strong> La cristalización parcial crea una matriz sólida que encapsula los compuestos activos del jengibre, permitiendo su liberación controlada.</p>
        `
    }
};

// Función para mostrar detalles químicos
function showChemicalDetail(detailKey) {
    const contentDiv = document.getElementById('detailContent');
    const detail = chemicalDetails[detailKey];
    
    if (detail) {
        contentDiv.innerHTML = detail.content;
        contentDiv.style.animation = 'fadeIn 0.5s ease';
    }
}

// Función para manejar la interacción de los botones
function setupDetailButtons() {
    const buttons = document.querySelectorAll('.detail-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const detailKey = button.getAttribute('data-detail');
            showChemicalDetail(detailKey);
        });
    });
}

// Función para animar los pasos al hacer scroll
function setupStepAnimation() {
    const stepCards = document.querySelectorAll('.step-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    stepCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Función para agregar interactividad a las tarjetas de pasos
function setupStepCards() {
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remover clase active de todas las tarjetas
            stepCards.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active a la tarjeta clickeada
            card.classList.add('active');
            
            // Scroll suave a la tarjeta
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
}

// Función para agregar animación de fadeIn
function addFadeInAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Función para inicializar todo cuando el DOM esté listo
function init() {
    addFadeInAnimation();
    addFadeOutAnimation();
    setupNameModal();
    setupLanguageSelector();
    setupDetailButtons();
    setupStepAnimation();
    setupStepCards();
    
    // Mostrar el primer detalle por defecto (solo si el contenido principal está visible)
    setTimeout(() => {
        const firstButton = document.querySelector('.detail-btn');
        if (firstButton && document.getElementById('mainContent').style.display !== 'none') {
            firstButton.click();
        }
    }, 500);
}

// Función para mostrar solo una sección
function showSection(sectionId) {
    // Ocultar todas las secciones
    const allSections = document.querySelectorAll('.content-section');
    allSections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Mostrar solo la sección seleccionada
    const targetSection = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Funcionalidad de la sidebar
function setupSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!sidebar || navLinks.length === 0) {
        return;
    }
    
    // Toggle sidebar en móvil
    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    }
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
    
    // Manejar clics en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Cerrar sidebar en móvil
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
            }
            
            // Obtener el ID de la sección desde el href
            const href = link.getAttribute('href');
            const sectionId = href.replace('#', '');
            
            // Mostrar solo esa sección
            showSection(sectionId);
            
            // Actualizar clase active en los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Mostrar la primera sección por defecto
    const firstLink = navLinks[0];
    if (firstLink) {
        const firstHref = firstLink.getAttribute('href');
        const firstSectionId = firstHref.replace('#', '');
        showSection(firstSectionId);
        firstLink.classList.add('active');
    }
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Inicializar sidebar cuando el contenido principal esté visible
function initSidebar() {
    const mainContent = document.getElementById('mainContent');
    
    function initialize() {
        // Esperar un momento para asegurar que el DOM esté listo
        setTimeout(() => {
            setupSidebar();
        }, 300);
    }
    
    if (mainContent) {
        if (mainContent.style.display !== 'none') {
            initialize();
        } else {
            // Esperar a que se muestre el contenido
            const checkInterval = setInterval(() => {
                if (mainContent.style.display !== 'none') {
                    initialize();
                    clearInterval(checkInterval);
                }
            }, 100);
            
            // También usar observer como respaldo
            const observer = new MutationObserver(() => {
                if (mainContent.style.display !== 'none') {
                    initialize();
                    observer.disconnect();
                    clearInterval(checkInterval);
                }
            });
            observer.observe(mainContent, { attributes: true, attributeFilter: ['style'] });
        }
    } else {
        // Si no existe mainContent, intentar inicializar de todas formas
        initialize();
    }
}

// Esperar a que todo esté cargado
function waitForContent() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }
}

waitForContent();

// Inicializar selector de idioma cuando el contenido esté visible
function initLanguage() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent && mainContent.style.display !== 'none') {
        setupLanguageSelector();
    } else {
        const observer = new MutationObserver(() => {
            if (mainContent.style.display !== 'none') {
                setupLanguageSelector();
                observer.disconnect();
            }
        });
        observer.observe(mainContent, { attributes: true, attributeFilter: ['style'] });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

