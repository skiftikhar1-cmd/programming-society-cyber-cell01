```javascript
/* =========================================================
   PROGRAMMING SOCIETY — CYBER CELL
   config.js

   Supabase configuration

   IMPORTANT:
   - Replace SUPABASE_URL with your Supabase Project URL
   - Replace SUPABASE_ANON_KEY with your Supabase Publishable/
     Anon key.
   - NEVER put your Supabase service_role/secret key here.
========================================================= */


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_CONFIG = {

    url:
        "YOUR_SUPABASE_PROJECT_URL",

    anonKey:
        "YOUR_SUPABASE_ANON_KEY"

};


/* =========================================================
   WEBSITE CONFIGURATION
========================================================= */

const CYBER_CELL_CONFIG = {

    siteName:
        "Programming Society — Cyber Cell",

    version:
        "1.0.0",

    defaultLanguage:
        "en",

    supportedLanguages: [
        "en",
        "bn",
        "ur"
    ],

    toolsPerPage:
        24,

    enableSupabase:
        true

};


/* =========================================================
   EXPORT
========================================================= */

window.SUPABASE_CONFIG =
    SUPABASE_CONFIG;

window.CYBER_CELL_CONFIG =
    CYBER_CELL_CONFIG;
```
