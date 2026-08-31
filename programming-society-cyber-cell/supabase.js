```javascript
/* =========================================================
   PROGRAMMING SOCIETY — CYBER CELL
   supabase.js

   Handles:
   - Supabase connection
   - Contact form
   - Sending messages to Supabase
   - Basic validation
   - Success / error handling

   Required:
   - config.js must load before this file
========================================================= */


/* =========================================================
   SUPABASE CLIENT
========================================================= */

let supabaseClient = null;


/* =========================================================
   INITIALIZE SUPABASE
========================================================= */

function initializeSupabase() {

    if (
        typeof SUPABASE_CONFIG === "undefined"
    ) {

        console.error(
            "SUPABASE_CONFIG is not available. Make sure config.js is loaded first."
        );

        return false;

    }


    if (
        !SUPABASE_CONFIG.url ||
        !SUPABASE_CONFIG.anonKey ||
        SUPABASE_CONFIG.url ===
            "YOUR_SUPABASE_PROJECT_URL" ||
        SUPABASE_CONFIG.anonKey ===
            "YOUR_SUPABASE_ANON_KEY"
    ) {

        console.warn(
            "Supabase is not configured yet."
        );

        return false;

    }


    /*
       Supabase CDN থেকে createClient()
       index.html-এ load করতে হবে।
    */

    if (
        typeof supabase === "undefined"
    ) {

        console.error(
            "Supabase JavaScript library was not loaded."
        );

        return false;

    }


    try {

        supabaseClient =
            supabase.createClient(
                SUPABASE_CONFIG.url,
                SUPABASE_CONFIG.anonKey
            );


        console.log(
            "Supabase initialized successfully."
        );


        return true;

    } catch (error) {

        console.error(
            "Supabase initialization failed:",
            error
        );

        return false;

    }

}


/* =========================================================
   CONTACT MESSAGE VALIDATION
========================================================= */

function validateContactMessage(
    name,
    email,
    message
) {

    const cleanName =
        String(name || "").trim();

    const cleanEmail =
        String(email || "").trim();

    const cleanMessage =
        String(message || "").trim();


    /* Name */

    if (cleanName.length < 2) {

        return {
            valid: false,
            error: "Please enter a valid name."
        };

    }


    if (cleanName.length > 100) {

        return {
            valid: false,
            error: "Name is too long."
        };

    }


    /* Email */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailPattern.test(
            cleanEmail
        )
    ) {

        return {
            valid: false,
            error: "Please enter a valid email address."
        };

    }


    /* Message */

    if (cleanMessage.length < 5) {

        return {
            valid: false,
            error: "Please enter a message."
        };

    }


    if (cleanMessage.length > 5000) {

        return {
            valid: false,
            error: "Message is too long."
        };

    }


    return {
        valid: true
    };

}


/* =========================================================
   SEND CONTACT MESSAGE
========================================================= */

async function sendContactMessage(
    name,
    email,
    message
) {

    const validation =
        validateContactMessage(
            name,
            email,
            message
        );


    if (!validation.valid) {

        return {
            success: false,
            error: validation.error
        };

    }


    /* Initialize if necessary */

    if (!supabaseClient) {

        const initialized =
            initializeSupabase();


        if (!initialized) {

            return {
                success: false,
                error:
                    "Supabase is not configured yet."
            };

        }

    }


    try {

        const cleanName =
            String(name).trim();

        const cleanEmail =
            String(email).trim();

        const cleanMessage =
            String(message).trim();


        /*
           Insert message into:

           contact_messages

           Table structure:

           id
           name
           email
           message
           created_at
        */

        const { data, error } =
            await supabaseClient
                .from(
                    "contact_messages"
                )
                .insert([
                    {
                        name: cleanName,
                        email: cleanEmail,
                        message: cleanMessage
                    }
                ])
                .select();


        if (error) {

            console.error(
                "Supabase insert error:",
                error
            );


            return {
                success: false,
                error:
                    "Unable to send your message right now."
            };

        }


        return {
            success: true,
            data: data
        };


    } catch (error) {

        console.error(
            "Contact message error:",
            error
        );


        return {
            success: false,
            error:
                "Something went wrong. Please try again."
        };

    }

}


/* =========================================================
   CONTACT FORM SETUP
========================================================= */

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) {
        return;
    }


    const nameInput =
        document.getElementById(
            "contactName"
        );


    const emailInput =
        document.getElementById(
            "contactEmail"
        );


    const messageInput =
        document.getElementById(
            "contactMessage"
        );


    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );


    const statusElement =
        document.getElementById(
            "contactStatus"
        );


    form.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const name =
                nameInput
                    ? nameInput.value
                    : "";


            const email =
                emailInput
                    ? emailInput.value
                    : "";


            const message =
                messageInput
                    ? messageInput.value
                    : "";


            /* Button loading */

            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.dataset
                    .originalText =
                    submitButton.textContent;

                submitButton.textContent =
                    getContactText(
                        "sending",
                        "Sending..."
                    );

            }


            /* Clear previous status */

            if (statusElement) {

                statusElement.textContent =
                    "";

                statusElement.className =
                    "contact-status";

            }


            const result =
                await sendContactMessage(
                    name,
                    email,
                    message
                );


            /* Success */

            if (result.success) {

                if (statusElement) {

                    statusElement.textContent =
                        getContactText(
                            "messageSent",
                            "Your message has been sent successfully."
                        );

                    statusElement.classList.add(
                        "success"
                    );

                }


                form.reset();


            }

            /* Error */

            else {

                if (statusElement) {

                    statusElement.textContent =
                        result.error ||
                        getContactText(
                            "messageError",
                            "Something went wrong. Please try again."
                        );

                    statusElement.classList.add(
                        "error"
                    );

                }

            }


            /* Restore button */

            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.textContent =
                    submitButton.dataset
                        .originalText ||
                    getContactText(
                        "sendMessage",
                        "Send Message"
                    );

            }

        }
    );

}


/* =========================================================
   CONTACT TRANSLATION HELPER
========================================================= */

function getContactText(
    key,
    fallback
) {

    if (
        typeof interfaceTranslations !==
        "undefined"
    ) {

        const languageData =
            interfaceTranslations[
                window.CyberCell
                    ? window.CyberCell.getLanguage()
                    : "en"
            ];


        if (
            languageData &&
            languageData[key]
        ) {

            return languageData[key];

        }

    }


    return fallback;

}


/* =========================================================
   AUTO INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeSupabase();

        setupContactForm();

    }
);


/* =========================================================
   PUBLIC API
========================================================= */

window.CyberCellSupabase = {

    initialize:
        initializeSupabase,

    sendMessage:
        sendContactMessage,

    validate:
        validateContactMessage

};
```
