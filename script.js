// Variable global para almacenar el nombre del usuario
let userName = '';

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

