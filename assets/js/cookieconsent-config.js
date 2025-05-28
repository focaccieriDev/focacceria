import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar wide",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "Ciao Focaccero, it's Focaccietta time! 🍪",
                    description: "We use cookies (the digital kind, not the oven-baked ones) to enhance your experience. You can accept them all, stick to the essentials, or customize your digital focaccietta to your taste.",
                    acceptAllBtn: "Accept all focacciettas",
                    acceptNecessaryBtn: "Only essentials",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/privacy-policy\" class=\"cc__link\">Privacy Policy</a> <a href=\"/terms\" class=\"cc__link\">Terms & Conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Why do we use cookies?",
                            description: "At La Focacceria, cookies help us give you the same great feeling you get from a freshly baked focaccia: smooth, satisfying, and free of unnecessary surprises. Some are essential, others help us improve, and a few only run with your blessing."
                        },
                        {
                            title: "Strictly necessary cookies <span class=\"pm__badge\">Always active</span>",
                            description: "These cookies are the backbone of our site — without them, nothing works (not even your order!). They're always on because they make the website usable.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics cookies",
                            description: "These cookies tell us what parts of the site are delicious and what could use a pinch more salt. They help us improve the experience without tracking you across the internet.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "If you’ve got questions about our cookies (or our focaccia), feel free to <a class=\"cc__link\" href=\"mailto:info@focacceria.es\">contact us</a> anytime."
                        }
                    ]
                }
            },
            es: {
                consentModal: {
                    title: "Hola Focaccero, ¡es la hora de las Focaccietas! 🍪",
                    description: "Usamos cookies (de las digitales, no de las horneadas) para mejorar tu experiencia. Puedes aceptarlas todas, solo las esenciales, o gestionarlas a tu gusto.",
                    acceptAllBtn: "Aceptar todas las focaccietas",
                    acceptNecessaryBtn: "Solo las esenciales",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"/politica-de-cookies\" class=\"cc__link\">Política de cookies</a> <a href=\"/aviso-legal\" class=\"cc__link\">Aviso legal</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "¿Por qué usamos cookies?",
                            description: "En La Focacceria, usamos cookies para que tu experiencia sea tan buena como nuestra focaccia: sabrosa, fluida y sin sorpresas desagradables. Algunas cookies son necesarias, otras nos ayudan a mejorar y otras solo se usan si tú nos das permiso."
                        },
                        {
                            title: "Cookies estrictamente necesarias <span class=\"pm__badge\">Siempre activas</span>",
                            description: "Estas cookies son esenciales para que la web funcione correctamente. No se pueden desactivar desde nuestro sistema porque, sin ellas, no podrías pedir focaccia (ni navegar tranquilamente).",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies analíticas",
                            description: "Nos ayudan a entender cómo los Focacceros usan nuestra web. No te rastreamos con harina, solo medimos qué secciones gustan más para mejorar la receta digital.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Más información",
                            description: "¿Tienes dudas sobre nuestras cookies (o nuestras focaccias)? Puedes <a class=\"cc__link\" href=\"mailto:info@focacceria.es\">escribirnos aquí</a>."
                        }
                    ]
                }
            }

        }
    },
    onConsent: ({ acceptedCategories }) => {
        console.log(acceptedCategories)
        console.log(2)
        // if (acceptedCategories.includes('analytics')) {
        //     // Cargar Google Analytics solo si se aceptaron las cookies analíticas
        //     var gaScript = document.createElement('script');
        //     gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-WK26E41579";
        //     gaScript.onload = function () {
        //         window.dataLayer = window.dataLayer || [];
        //         function gtag() { dataLayer.push(arguments); }
        //         gtag('js', new Date());
        //         gtag('config', 'G-WK26E41579');
        //         console.log("✅ Google Analytics cargado");
        //     };
        //     document.head.appendChild(gaScript);
        // }
    }

});