```javascript
/* =========================================================
   PROGRAMMING SOCIETY — CYBER CELL
   app.js

   Handles:
   - Tool cards
   - Search
   - Category filter
   - Tool details modal
   - English / Bangla / Urdu
   - YouTube tutorial button
   - Navigation
   - Mobile menu
   - Opening animation

   Data source:
   tools.js
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage = localStorage.getItem("cyberCellLanguage") || "en";
let currentCategory = "all";
let searchQuery = "";

let selectedTool = null;


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeApplication();

});


/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

function initializeApplication() {

    setupOpeningAnimation();

    setupNavigation();

    setupSearch();

    setupCategoryFilter();

    setupLanguageSwitcher();

    setupModal();

    setupMobileMenu();

    renderCategoryFilter();

    renderTools();

    updateLanguageButtons();

}


/* =========================================================
   OPENING ANIMATION
========================================================= */

function setupOpeningAnimation() {

    const loader = document.getElementById("openingLoader");

    if (!loader) {
        return;
    }

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.remove();
        }, 700);

    }, 1300);

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const navLinks = document.querySelectorAll("[data-page]");

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const page = link.getAttribute("data-page");

            if (!page) {
                return;
            }

            if (page === "home") {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });

    });

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const searchInput = document.getElementById("toolSearch");

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener("input", event => {

        searchQuery = event.target.value
            .trim()
            .toLowerCase();

        renderTools();

    });

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function setupCategoryFilter() {

    const categoryContainer =
        document.getElementById("categoryFilters");

    if (!categoryContainer) {
        return;
    }

    categoryContainer.addEventListener("click", event => {

        const button =
            event.target.closest("[data-category]");

        if (!button) {
            return;
        }

        currentCategory =
            button.getAttribute("data-category");

        updateCategoryButtons();

        renderTools();

    });

}


/* =========================================================
   RENDER CATEGORY FILTER
========================================================= */

function renderCategoryFilter() {

    const container =
        document.getElementById("categoryFilters");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    /* All button */

    const allButton = document.createElement("button");

    allButton.className =
        "category-btn active";

    allButton.setAttribute(
        "data-category",
        "all"
    );

    allButton.innerHTML = `
        <span class="category-icon">🛡️</span>
        <span data-i18n="allTools">
            All Tools
        </span>
    `;

    container.appendChild(allButton);


    /* Category buttons */

    Object.entries(securityCategories).forEach(
        ([category, data]) => {

            const button =
                document.createElement("button");

            button.className =
                "category-btn";

            button.setAttribute(
                "data-category",
                category
            );

            button.innerHTML = `
                <span class="category-icon">
                    ${data.icon}
                </span>

                <span>
                    ${getCategoryName(category)}
                </span>
            `;

            container.appendChild(button);

        }
    );

}


/* =========================================================
   CATEGORY NAME
========================================================= */

function getCategoryName(category) {

    const categoryData =
        securityCategories[category];

    if (!categoryData) {
        return category;
    }

    if (
        categoryData.name &&
        categoryData.name[currentLanguage]
    ) {

        return categoryData.name[currentLanguage];

    }

    return category;

}


/* =========================================================
   UPDATE CATEGORY BUTTONS
========================================================= */

function updateCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            "#categoryFilters [data-category]"
        );

    buttons.forEach(button => {

        const category =
            button.getAttribute("data-category");

        button.classList.toggle(
            "active",
            category === currentCategory
        );

    });

}


/* =========================================================
   RENDER TOOLS
========================================================= */

function renderTools() {

    const container =
        document.getElementById("toolsGrid");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    /* Filter tools */

    const filteredTools =
        securityTools.filter(tool => {

            const matchesCategory =
                currentCategory === "all" ||
                tool.category === currentCategory;


            const searchableText = [

                tool.name,

                tool.category,

                getLocalizedText(tool.description),

                getLocalizedText(tool.overview)

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !searchQuery ||
                searchableText.includes(searchQuery);


            return (
                matchesCategory &&
                matchesSearch
            );

        });


    /* No results */

    if (filteredTools.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <div class="no-results-icon">
                    🔍
                </div>

                <h3>
                    ${getInterfaceText(
                        "noResults",
                        "No tools found"
                    )}
                </h3>

                <p>
                    ${getInterfaceText(
                        "tryAnotherSearch",
                        "Try another search or category."
                    )}
                </p>

            </div>

        `;

        updateToolCount(0);

        return;
    }


    /* Create cards */

    filteredTools.forEach(tool => {

        const card =
            createToolCard(tool);

        container.appendChild(card);

    });


    updateToolCount(filteredTools.length);

}


/* =========================================================
   CREATE TOOL CARD
========================================================= */

function createToolCard(tool) {

    const card =
        document.createElement("article");

    card.className =
        "tool-card";

    card.setAttribute(
        "data-tool-id",
        tool.id
    );


    const description =
        getLocalizedText(tool.description);


    card.innerHTML = `

        <div class="tool-card-top">

            <div class="tool-icon">
                ${tool.icon || "🛡️"}
            </div>

            <span class="tool-category">
                ${escapeHTML(tool.category)}
            </span>

        </div>


        <div class="tool-card-body">

            <h3 class="tool-name">
                ${escapeHTML(tool.name)}
            </h3>

            <p class="tool-description">
                ${escapeHTML(description)}
            </p>

        </div>


        <div class="tool-card-footer">

            <button
                class="learn-btn"
                type="button"
                data-open-tool="${tool.id}"
            >

                <span>
                    ${getInterfaceText(
                        "learnMore",
                        "Learn More"
                    )}
                </span>

                <span class="arrow">
                    →
                </span>

            </button>

        </div>

    `;


    const button =
        card.querySelector(
            "[data-open-tool]"
        );


    button.addEventListener(
        "click",
        () => openToolModal(tool.id)
    );


    return card;

}


/* =========================================================
   TOOL COUNT
========================================================= */

function updateToolCount(count) {

    const countElement =
        document.getElementById("toolCount");

    if (!countElement) {
        return;
    }

    countElement.textContent =
        `${count} ${getInterfaceText(
            "tools",
            "Tools"
        )}`;

}


/* =========================================================
   OPEN TOOL MODAL
========================================================= */

function openToolModal(toolId) {

    const tool =
        securityTools.find(
            item => Number(item.id) === Number(toolId)
        );


    if (!tool) {
        console.error(
            "Tool not found:",
            toolId
        );

        return;
    }


    selectedTool = tool;


    const modal =
        document.getElementById("toolModal");

    const modalContent =
        document.getElementById("modalContent");


    if (!modal || !modalContent) {
        return;
    }


    modalContent.innerHTML =
        createToolModalContent(tool);


    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );


    /* Prevent background scrolling */

    document.body.style.overflow =
        "hidden";


    /* Scroll modal to top */

    const modalBody =
        modal.querySelector(".modal-body");

    if (modalBody) {
        modalBody.scrollTop = 0;
    }

}


/* =========================================================
   CREATE MODAL CONTENT
========================================================= */

function createToolModalContent(tool) {

    const description =
        getLocalizedText(tool.description);

    const overview =
        getLocalizedSection(
            tool,
            "overview"
        );

    const howItWorks =
        getLocalizedSection(
            tool,
            "howItWorks"
        );

    const usage =
        getLocalizedSection(
            tool,
            "usage"
        );

    const usefulFor =
        getLocalizedSection(
            tool,
            "usefulFor"
        );

    const practice =
        getLocalizedSection(
            tool,
            "practice"
        );


    return `

        <div class="modal-header-content">

            <div class="modal-tool-icon">
                ${tool.icon || "🛡️"}
            </div>

            <div>

                <span class="modal-category">
                    ${escapeHTML(tool.category)}
                </span>

                <h2 class="modal-title">
                    ${escapeHTML(tool.name)}
                </h2>

                <p class="modal-short-description">
                    ${escapeHTML(description)}
                </p>

            </div>

        </div>


        <div class="lesson-content">


            <!-- OVERVIEW -->

            <section class="lesson-section">

                <div class="section-title">

                    <span class="section-number">
                        01
                    </span>

                    <h3>
                        ${getInterfaceText(
                            "whatIsIt",
                            "What is it?"
                        )}
                    </h3>

                </div>

                <div class="section-text">
                    ${formatText(overview)}
                </div>

            </section>


            <!-- HOW IT WORKS -->

            <section class="lesson-section">

                <div class="section-title">

                    <span class="section-number">
                        02
                    </span>

                    <h3>
                        ${getInterfaceText(
                            "howItWorks",
                            "How it works"
                        )}
                    </h3>

                </div>

                <div class="section-text">
                    ${formatText(howItWorks)}
                </div>

            </section>


            <!-- HOW TO USE -->

            <section class="lesson-section">

                <div class="section-title">

                    <span class="section-number">
                        03
                    </span>

                    <h3>
                        ${getInterfaceText(
                            "howToUse",
                            "How to use"
                        )}
                    </h3>

                </div>

                <div class="section-text">
                    ${formatText(usage)}
                </div>

            </section>


            <!-- WHERE USEFUL -->

            <section class="lesson-section">

                <div class="section-title">

                    <span class="section-number">
                        04
                    </span>

                    <h3>
                        ${getInterfaceText(
                            "whereUseful",
                            "Where it is useful"
                        )}
                    </h3>

                </div>

                <div class="section-text">

                    ${formatBulletText(
                        usefulFor
                    )}

                </div>

            </section>


            <!-- SAFE PRACTICE -->

            <section class="lesson-section practice-section">

                <div class="section-title">

                    <span class="section-number">
                        05
                    </span>

                    <h3>
                        🧪
                        ${getInterfaceText(
                            "safePractice",
                            "Safe Practice"
                        )}
                    </h3>

                </div>

                <div class="practice-box">

                    ${formatText(practice)}

                </div>

            </section>


            <!-- VIDEO -->

            <section class="video-section">

                <div class="video-content">

                    <div class="video-icon">
                        ▶
                    </div>

                    <div>

                        <h3>
                            ${getInterfaceText(
                                "learnVideo",
                                "Learn more from this video"
                            )}
                        </h3>

                        <p>
                            ${getInterfaceText(
                                "videoDescription",
                                "Watch a beginner-friendly tutorial."
                            )}
                        </p>

                    </div>

                </div>


                ${
                    tool.video
                    ?
                    `
                    <a
                        href="${escapeAttribute(tool.video)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="youtube-btn"
                    >

                        <span>
                            ▶
                        </span>

                        <span>
                            YouTube
                        </span>

                    </a>
                    `
                    :
                    ""
                }

            </section>


        </div>

    `;

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeToolModal() {

    const modal =
        document.getElementById("toolModal");

    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

    document.body.style.overflow = "";


    selectedTool = null;

}


/* =========================================================
   MODAL SETUP
========================================================= */

function setupModal() {

    const modal =
        document.getElementById("toolModal");


    if (!modal) {
        return;
    }


    /* Close button */

    const closeButton =
        modal.querySelector(
            "[data-close-modal]"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeToolModal
        );

    }


    /* Click outside */

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeToolModal();

            }

        }
    );


    /* ESC */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeToolModal();

            }

        }
    );

}


/* =========================================================
   LANGUAGE SWITCHER
========================================================= */

function setupLanguageSwitcher() {

    const buttons =
        document.querySelectorAll(
            "[data-language]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.getAttribute(
                        "data-language"
                    );


                if (
                    !["en", "bn", "ur"]
                        .includes(language)
                ) {

                    return;

                }


                changeLanguage(language);

            }
        );

    });

}


/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeLanguage(language) {

    currentLanguage =
        language;


    localStorage.setItem(
        "cyberCellLanguage",
        language
    );


    document.documentElement
        .setAttribute(
            "lang",
            language
        );


    /*
       Important:
       The selected tool modal is rebuilt here.

       Therefore the LARGE explanation inside
       the modal also changes language.
    */

    if (selectedTool) {

        const modalContent =
            document.getElementById(
                "modalContent"
            );

        if (modalContent) {

            modalContent.innerHTML =
                createToolModalContent(
                    selectedTool
                );

        }

    }


    updateLanguageButtons();

    renderCategoryFilter();

    updateCategoryButtons();

    renderTools();

    translateStaticInterface();

}


/* =========================================================
   UPDATE LANGUAGE BUTTONS
========================================================= */

function updateLanguageButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-language]"
        );


    buttons.forEach(button => {

        const language =
            button.getAttribute(
                "data-language"
            );


        button.classList.toggle(
            "active",
            language === currentLanguage
        );

    });

}


/* =========================================================
   TRANSLATE STATIC INTERFACE
========================================================= */

function translateStaticInterface() {

    /*
       translations.js can define:

       const interfaceTranslations = {
           en: {...},
           bn: {...},
           ur: {...}
       };

       This function automatically applies
       translations to elements with data-i18n.
    */


    if (
        typeof interfaceTranslations ===
        "undefined"
    ) {

        return;

    }


    const translations =
        interfaceTranslations[
            currentLanguage
        ];


    if (!translations) {
        return;
    }


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                translations[key]
            ) {

                element.textContent =
                    translations[key];

            }

        });


    /*
       Placeholder translations
    */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );


            if (
                translations[key]
            ) {

                element.placeholder =
                    translations[key];

            }

        });

}


/* =========================================================
   GET INTERFACE TEXT
========================================================= */

function getInterfaceText(
    key,
    fallback = ""
) {

    if (
        typeof interfaceTranslations ===
        "undefined"
    ) {

        return fallback;

    }


    const languageData =
        interfaceTranslations[
            currentLanguage
        ];


    if (!languageData) {
        return fallback;
    }


    return languageData[key] || fallback;

}


/* =========================================================
   GET LOCALIZED TEXT
========================================================= */

function getLocalizedText(data) {

    if (!data) {
        return "";
    }


    /*
       If the data is already a string
    */

    if (typeof data === "string") {
        return data;
    }


    /*
       Preferred language
    */

    if (data[currentLanguage]) {
        return data[currentLanguage];
    }


    /*
       English fallback
    */

    if (data.en) {
        return data.en;
    }


    /*
       First available language
    */

    const firstLanguage =
        Object.keys(data)[0];


    return data[firstLanguage] || "";

}


/* =========================================================
   GET LOCALIZED SECTION
========================================================= */

function getLocalizedSection(
    tool,
    sectionName
) {

    if (
        !tool ||
        !tool[sectionName]
    ) {

        return "";

    }


    return getLocalizedText(
        tool[sectionName]
    );

}


/* =========================================================
   FORMAT NORMAL TEXT
========================================================= */

function formatText(text) {

    if (!text) {
        return "";
    }


    /*
       Convert line breaks into paragraphs.
    */

    const paragraphs =
        text
            .trim()
            .split(/\n\s*\n/);


    return paragraphs
        .map(paragraph => {

            const clean =
                paragraph.trim();


            if (!clean) {
                return "";
            }


            return `
                <p>
                    ${escapeHTML(clean)
                        .replace(/\n/g, "<br>")}
                </p>
            `;

        })
        .join("");

}


/* =========================================================
   FORMAT BULLET TEXT
========================================================= */

function formatBulletText(text) {

    if (!text) {
        return "";
    }


    const lines =
        text
            .split("\n")
            .map(line => line.trim())
            .filter(Boolean);


    let html = "";

    let currentParagraph = [];


    lines.forEach(line => {

        const isBullet =
            line.startsWith("•") ||
            line.startsWith("-") ||
            /^\d+\./.test(line);


        if (isBullet) {

            if (currentParagraph.length) {

                html += `
                    <p>
                        ${escapeHTML(
                            currentParagraph.join(" ")
                        )}
                    </p>
                `;

                currentParagraph = [];

            }


            const cleanBullet =
                line
                    .replace(/^•\s*/, "")
                    .replace(/^-\s*/, "")
                    .replace(/^\d+\.\s*/, "");


            html += `
                <div class="info-bullet">
                    <span>✓</span>
                    <span>
                        ${escapeHTML(
                            cleanBullet
                        )}
                    </span>
                </div>
            `;

        } else {

            currentParagraph.push(line);

        }

    });


    if (currentParagraph.length) {

        html += `
            <p>
                ${escapeHTML(
                    currentParagraph.join(" ")
                )}
            </p>
        `;

    }


    return html;

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   ESCAPE ATTRIBUTE
========================================================= */

function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.getElementById(
            "mobileMenuButton"
        );

    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    if (
        !menuButton ||
        !mobileMenu
    ) {

        return;

    }


    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
   GLOBAL TOOL SEARCH API

   Useful if another script wants to search tools.
========================================================= */

function searchTools(query) {

    if (!query) {
        return securityTools;
    }


    const normalized =
        query
            .toLowerCase()
            .trim();


    return securityTools.filter(tool => {

        const text = [

            tool.name,

            tool.category,

            getLocalizedText(
                tool.description
            ),

            getLocalizedText(
                tool.overview
            )

        ]
            .join(" ")
            .toLowerCase();


        return text.includes(
            normalized
        );

    });

}


/* =========================================================
   PUBLIC API
========================================================= */

window.CyberCell = {

    tools: securityTools,

    getLanguage: () =>
        currentLanguage,

    changeLanguage,

    searchTools,

    openToolModal,

    closeToolModal,

    renderTools

};


/* =========================================================
   INITIAL STATIC TRANSLATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(() => {

            translateStaticInterface();

        }, 50);

    }
);
```
