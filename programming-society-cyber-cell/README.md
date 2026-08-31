````markdown
# 🛡️ Programming Society — Cyber Cell

A beginner-friendly cybersecurity learning platform containing
security tools, explanations, safe practice guidance, categories,
search, multilingual support, and cybersecurity resources.

---

## 🌐 About the Project

**Programming Society — Cyber Cell** is an educational
cybersecurity platform designed to make security concepts easier
to understand.

The platform is intended for:

- Cybersecurity beginners
- Students
- Programming learners
- CTF learners
- Security enthusiasts
- Developers interested in application security

The main goal is to explain cybersecurity tools in a simple,
structured, and responsible way.

---

# ✨ Main Features

## 🔐 100+ Cybersecurity Tools

The platform is designed to contain more than 100 security tools.

Each tool can include:

- Tool name
- Tool icon
- Category
- Short description
- Detailed explanation
- How it works
- Common use cases
- Beginner workflow
- Practice guidance
- Learning resources
- YouTube tutorial button

---

## 📚 Beginner-Friendly Explanations

Every tool should explain the basic concept before showing
technical information.

A typical tool explanation contains:

### What is it?

A simple explanation of what the tool is.

### How does it work?

A beginner-friendly explanation of the main concept behind the
tool.

### Where is it used?

Examples of legitimate cybersecurity tasks where the tool can
be useful.

### How to learn it?

Recommended learning path and safe practice environment.

### Practice

Practice should be performed only in authorized environments.

Examples:

- CTF platforms
- Cybersecurity labs
- Local virtual machines
- Intentionally vulnerable applications
- Systems owned by the learner
- Systems where explicit permission has been provided

---

# 🌍 Multilingual Support

The platform is designed to support:

- 🇬🇧 English
- 🇧🇩 বাংলা
- 🇵🇰 اردو

The language system should translate not only the navigation
menu but also the tool information.

This includes:

- Tool names
- Tool descriptions
- Tool explanations
- How it works
- Where it is used
- Practice section
- Buttons
- Interface text

The selected language can be remembered using browser
`localStorage`.

---

# 🔎 Search

Users can search for security tools using the search box.

Search can match information such as:

- Tool name
- Description
- Category
- Keywords

Example:

```text
nmap
````

or:

```text
network scanner
```

---

# 🗂️ Categories

Security tools can be organized into categories such as:

* Information Gathering
* Network Security
* Web Security
* Vulnerability Analysis
* Password Security
* Digital Forensics
* Reverse Engineering
* Malware Analysis
* OSINT
* Wireless Security
* Cryptography
* Defensive Security
* Monitoring
* Programming
* Privacy
* CTF

---

# 📩 Contact System

The website contains a:

> Send Message to Us

form.

Users can submit:

* Name
* Email
* Subject
* Message

The planned database architecture uses Supabase.

Example database table:

```text
contact_messages
```

Possible columns:

```text
id
name
email
subject
message
created_at
```

Do not submit:

* Passwords
* API keys
* Private keys
* Authentication codes
* Access tokens
* Financial credentials
* Other confidential information

---

# 🗄️ Supabase

Supabase can be used for storing contact messages and other
future backend data.

The frontend should use the Supabase public/anonymous key
through the appropriate client-side configuration.

Never expose:

```text
service_role key
```

inside frontend JavaScript.

Never upload private server credentials to GitHub.

---

# 🚀 Deployment

The project can be deployed using:

* GitHub
* Vercel
* Supabase

Recommended structure:

```text
GitHub
   │
   ├── Website source code
   │
   └── Version control
          │
          ▼
       Vercel
          │
          ▼
     Live Website
          │
          ▼
      Supabase
       Database
```

---

# 📁 Project Structure

```text
programming-society-cyber-cell/
│
├── index.html
│
├── style.css
│
├── app.js
│
├── tools.js
│
├── translations.js
│
├── config.js
│
├── supabase.js
│
├── assets/
│   │
│   ├── logo.svg
│   │
│   └── icons/
│
├── pages/
│   │
│   ├── about.html
│   │
│   ├── contact.html
│   │
│   └── privacy.html
│
└── README.md
```

---

# 🧩 File Responsibilities

## `index.html`

Main website page.

Contains:

* Header
* Hero section
* Search
* Category filters
* Tool cards
* Tool detail modal
* Footer

---

## `style.css`

Contains the main visual design.

Responsible for:

* Dark cyber theme
* Responsive layout
* Cards
* Buttons
* Modal
* Animations
* Navigation
* Mobile design
* Typography

---

## `app.js`

Main application logic.

Responsible for:

* Rendering tools
* Search
* Filtering
* Opening tool details
* Closing tool details
* Language switching
* UI interactions
* Contact functionality integration

---

## `tools.js`

Contains the cybersecurity tool database.

Example structure:

```javascript
const tools = [

    {
        id: "nmap",

        name: "Nmap",

        category: "Network Security",

        icon: "assets/icons/nmap.svg",

        shortDescription:
            "A network discovery and security auditing tool.",

        description: {
            en: "...",
            bn: "...",
            ur: "..."
        },

        howItWorks: {
            en: "...",
            bn: "...",
            ur: "..."
        },

        whereUsed: {
            en: "...",
            bn: "...",
            ur: "..."
        },

        practice: {
            en: "...",
            bn: "...",
            ur: "..."
        },

        youtube:
            "https://www.youtube.com/results?search_query=Nmap+tutorial"

    }

];
```

---

# 🌐 `translations.js`

Contains interface translations.

Example:

```javascript
const translations = {

    en: {

        home: "Home",

        tools: "Tools",

        about: "About",

        contact: "Contact",

        search:
            "Search cybersecurity tools..."

    },


    bn: {

        home: "হোম",

        tools: "টুলস",

        about: "আমাদের সম্পর্কে",

        contact: "যোগাযোগ",

        search:
            "সাইবার সিকিউরিটি টুল খুঁজুন..."

    },


    ur: {

        home: "ہوم",

        tools: "ٹولز",

        about: "ہمارے بارے میں",

        contact: "رابطہ",

        search:
            "سائبر سیکیورٹی ٹول تلاش کریں..."

    }

};
```

---

# ⚙️ `config.js`

Contains public frontend configuration.

Example:

```javascript
const CONFIG = {

    SUPABASE_URL:
        "YOUR_SUPABASE_URL",

    SUPABASE_ANON_KEY:
        "YOUR_SUPABASE_ANON_KEY"

};
```

Only use the public anonymous key here.

Never put a Supabase service-role key in this file.

---

# 🗄️ `supabase.js`

Responsible for communicating with Supabase.

Possible responsibilities:

* Supabase initialization
* Contact message submission
* Database operations
* Future backend features

---

# 🛡️ Responsible Use

This project is educational.

Cybersecurity tools can be powerful and should be used
responsibly.

Only test:

* Your own devices
* Your own applications
* Your own networks
* Authorized labs
* CTF environments
* Systems where you have explicit permission

Do not use the platform to gain unauthorized access to systems,
accounts, networks, or data.

---

# 🧪 Recommended Practice Environments

For cybersecurity learning, use controlled environments such as:

* Local virtual machines
* Intentionally vulnerable applications
* CTF challenges
* Training labs
* Sandbox environments

A safe lab lets you learn security concepts without affecting
real users or systems.

---

# 📺 Learning Resources

Tool pages may contain a:

> Learn more from this video

button.

The button can point to a relevant YouTube tutorial or search
result.

Before adding a tutorial, make sure it is relevant to the tool
being explained.

---

# 📱 Responsive Design

The website is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

The layout should automatically adapt to different screen sizes.

---

# ⚡ Performance Goals

The project aims to remain lightweight.

Recommended practices:

* Avoid unnecessary libraries
* Optimize SVG icons
* Minimize large images
* Use efficient JavaScript
* Keep tool data structured
* Load only required resources

---

# 🔒 Security Notes

Never commit secrets to GitHub.

Do not upload:

```text
.env
private API keys
service-role keys
database passwords
private tokens
```

For Vercel environment variables, use the Vercel project
environment configuration instead of hard-coding private secrets.

---

# 🚀 Local Development

You can run the project locally using a simple development
server.

For example, with Python:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Do not open the HTML file directly using:

```text
file://
```

if the project requires JavaScript modules or backend requests.

---

# ☁️ Vercel Deployment

Basic deployment process:

```text
1. Create GitHub repository

2. Upload project files

3. Open Vercel

4. Import GitHub repository

5. Deploy project

6. Configure environment variables if required

7. Redeploy
```

---

# 🗄️ Supabase Setup

Create a Supabase project.

Then create the required database table.

Example:

```sql
create table contact_messages (

    id bigint generated by default as identity primary key,

    name text not null,

    email text not null,

    subject text not null,

    message text not null,

    created_at timestamptz
        default now()

);
```

For production deployment, configure appropriate Row Level
Security policies instead of leaving the database unnecessarily
open.

---

# 🧑‍💻 Development

The project is designed to be data-driven.

Instead of creating 100+ HTML cards manually, the tools can be
stored in `tools.js`.

JavaScript can then automatically create:

```text
Tool Card
    ↓
Tool Details
    ↓
Detailed Explanation
    ↓
How It Works
    ↓
Where It Is Used
    ↓
Practice
    ↓
YouTube Learning Button
```

This makes adding new tools much easier.

---

# 🔄 Adding a New Tool

Add another object inside `tools.js`.

Example:

```javascript
{
    id: "example-tool",

    name: "Example Tool",

    category: "Network Security",

    icon: "assets/icons/example.svg",

    shortDescription:
        "Example security tool.",

    description: {
        en: "English explanation.",
        bn: "বাংলা ব্যাখ্যা।",
        ur: "اردو وضاحت۔"
    },

    howItWorks: {
        en: "How the tool works.",
        bn: "টুলটি কীভাবে কাজ করে।",
        ur: "یہ ٹول کیسے کام کرتا ہے۔"
    },

    whereUsed: {
        en: "Where it is used.",
        bn: "কোথায় ব্যবহার করা হয়।",
        ur: "یہ کہاں استعمال ہوتا ہے۔"
    },

    practice: {
        en: "Practice in an authorized lab.",
        bn: "অনুমোদিত ল্যাবে অনুশীলন করুন।",
        ur: "مجاز لیب میں مشق کریں۔"
    },

    youtube:
        "https://www.youtube.com/results?search_query=security+tool+tutorial"
}
```

---

# 📌 Current Project Status

```text
UI                         ████████████████████
Tool database              ████████████████████
Search                     ████████████████████
Category filter            ████████████████████
Multilingual system        ████████████████████
Contact UI                 ████████████████████
Supabase backend           ░░░░░░░░░░░░░░░░░░░░
Production security        ░░░░░░░░░░░░░░░░░░░░
Deployment                 ░░░░░░░░░░░░░░░░░░░░
```

The backend and deployment configuration can be completed
after the frontend files are ready.

---

# 📄 License

This project is intended for educational purposes.

Add an appropriate open-source license before publicly
redistributing the project if required.

---

# 🛡️ Programming Society — Cyber Cell

**Learn • Practice • Defend • Build**

Cybersecurity education should always be combined with
responsibility.

```
```
