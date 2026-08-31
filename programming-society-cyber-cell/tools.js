```javascript
/* =========================================================
   PROGRAMMING SOCIETY — CYBER CELL
   SECURITY TOOLS DATABASE

   IMPORTANT:
   All practice instructions are intended for:
   - Your own computer
   - Authorized systems
   - CTF platforms
   - Intentionally vulnerable labs

========================================================= */

const securityTools = [

    /* =====================================================
       01 — NMAP
    ===================================================== */

    {
        id: 1,

        name: "Nmap",

        icon: "🔎",

        category: "Network Security",

        description: {
            en: "A network discovery and security auditing tool.",
            bn: "নেটওয়ার্কের ডিভাইস ও সার্ভিস সম্পর্কে তথ্য খুঁজে বের করার একটি নিরাপত্তা টুল।",
            ur: "نیٹ ورک ڈسکوری اور سیکیورٹی آڈٹنگ کے لیے استعمال ہونے والا ٹول۔"
        },

        overview: {
            en: `
Nmap, short for Network Mapper, is one of the most widely
used tools for network discovery and security auditing.

It can help a security learner understand which systems are
available on a network, which network services may be exposed,
and how a network is organized.

For example, in an authorized lab, Nmap can help you identify
a test machine and determine which TCP or UDP services it is
offering.

Nmap itself does not automatically mean "hacking". It is a
general network analysis tool. Administrators can use it to
inventory their own infrastructure, troubleshoot connectivity,
and verify security configurations.

The important rule is that scanning should only be performed
against systems that you own or have explicit permission to
test.
            `,

            bn: `
Nmap-এর পূর্ণ নাম Network Mapper। এটি cybersecurity এবং
network administration-এর একটি অত্যন্ত জনপ্রিয় network
discovery ও security auditing tool।

সহজভাবে বললে, Nmap ব্যবহার করে কোনো অনুমোদিত network বা lab
environment-এ কোন কোন system বা device আছে, কোন ধরনের network
service exposed আছে এবং network কীভাবে সাজানো—এসব সম্পর্কে
ধারণা পাওয়া যায়।

উদাহরণ হিসেবে, একটি নিজের তৈরি virtual lab-এ Nmap ব্যবহার করে
তুমি দেখতে পারো একটি test machine কোন কোন network service
দিচ্ছে।

Nmap নিজে কোনো "হ্যাকিং টুল" হিসেবে সীমাবদ্ধ নয়। System
administrator-রাও নিজেদের network inventory, troubleshooting
এবং security configuration যাচাই করার কাজে এটি ব্যবহার করেন।

সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো—অনুমতি ছাড়া অন্যের server,
website বা network scan করা উচিত নয়। Practice করার জন্য
নিজের computer, virtual machine, CTF বা অনুমোদিত lab ব্যবহার
করো।
            `,

            ur: `
Nmap جس کا مکمل نام Network Mapper ہے، ایک مشہور network
discovery اور security auditing tool ہے۔

آسان الفاظ میں، Nmap کسی مجاز network یا lab environment میں
یہ سمجھنے میں مدد دیتا ہے کہ کون سے systems موجود ہیں،
کون سی network services دستیاب ہیں اور network کس طرح
organized ہے۔

مثال کے طور پر، اپنی virtual lab میں آپ Nmap کے ذریعے یہ
دیکھ سکتے ہیں کہ ایک test machine کون سی network services
پیش کر رہی ہے۔

Nmap صرف hacking کے لیے نہیں ہے۔ System administrators بھی
اسے network inventory، troubleshooting اور security
configuration check کرنے کے لیے استعمال کرتے ہیں۔

کسی دوسرے شخص کے server یا network کو بغیر اجازت scan نہیں
کرنا چاہیے۔ Practice کے لیے اپنی machine، CTF یا authorized
lab استعمال کریں۔
            `
        },

        howItWorks: {
            en: `
Nmap works by sending specially constructed network packets
to a target and analyzing the responses.

Depending on the type of scan, Nmap can investigate different
characteristics of a network connection.

A basic discovery process can help determine whether a host
appears to be reachable. Service detection can then provide
information about services running on an authorized system.

Nmap can also use its scripting engine to perform additional
security checks in controlled environments.

The important concept for beginners is:

Target → Probe → Response → Analysis → Report

Nmap does not simply "look inside" a computer. It sends
network traffic and interprets what comes back.
            `,

            bn: `
Nmap মূলত target system-এ বিভিন্ন ধরনের network packet পাঠায়
এবং target থেকে পাওয়া response বিশ্লেষণ করে।

Scan-এর ধরন অনুযায়ী Nmap network connection এবং available
services সম্পর্কে বিভিন্ন তথ্য সংগ্রহ করতে পারে।

Beginner হিসেবে সবচেয়ে সহজ ধারণাটি হলো:

Target → Probe → Response → Analysis → Report

অর্থাৎ প্রথমে অনুমোদিত target নির্ধারণ করা হয়, তারপর network
request বা probe পাঠানো হয়, target-এর response পাওয়া যায়,
এবং Nmap সেই response বিশ্লেষণ করে একটি report তৈরি করে।

Nmap-এর scripting engine ব্যবহার করে controlled lab-এ আরও
বিভিন্ন ধরনের security checks করা যায়।
            `,

            ur: `
Nmap target system کو مختلف network packets بھیجتا ہے اور
اس کے responses کو analyze کرتا ہے۔

Scan کی قسم کے مطابق یہ network connection اور available
services کے بارے میں مختلف معلومات فراہم کر سکتا ہے۔

Beginner کے لیے بنیادی concept یہ ہے:

Target → Probe → Response → Analysis → Report

یعنی پہلے authorized target منتخب کیا جاتا ہے، پھر network
probe بھیجا جاتا ہے، response حاصل کیا جاتا ہے اور Nmap
اس response کو analyze کرکے report بناتا ہے۔

Nmap کا scripting engine controlled lab میں اضافی security
checks کے لیے بھی استعمال کیا جا سکتا ہے۔
            `
        },

        usage: {
            en: `
For beginner practice:

1. Create a small virtual lab using machines you control.
2. Make sure the machines can communicate with each other.
3. Identify the IP address of the test machine.
4. Run a basic Nmap discovery scan against that lab machine.
5. Read the output carefully.
6. Learn what an IP address, port and service mean.
7. Compare the result with the services intentionally
   configured on your lab machine.

Do not scan random public IP addresses or networks without
permission.
            `,

            bn: `
Beginner practice-এর জন্য:

১. নিজের computer বা virtual machines দিয়ে একটি ছোট lab তৈরি করো।
২. Test machines যেন একে অপরের সাথে যোগাযোগ করতে পারে তা নিশ্চিত করো।
৩. Lab machine-এর IP address বের করো।
৪. শুধুমাত্র সেই authorized lab machine-এ basic Nmap scan চালাও।
৫. Output ভালোভাবে পড়ো।
৬. IP address, port এবং service-এর অর্থ বোঝার চেষ্টা করো।
৭. Lab machine-এ ইচ্ছাকৃতভাবে চালু করা service-এর সাথে Nmap-এর
   result মিলিয়ে দেখো।

অনুমতি ছাড়া public IP বা অন্যের network scan করবে না।
            `,

            ur: `
Beginner practice کے لیے:

1. اپنی virtual machines سے ایک چھوٹی lab بنائیں۔
2. Test machines کے درمیان communication کو یقینی بنائیں۔
3. Test machine کا IP address معلوم کریں۔
4. صرف اسی authorized lab machine پر basic Nmap scan کریں۔
5. Output کو غور سے پڑھیں۔
6. IP address، port اور service کا مطلب سمجھیں۔
7. Result کو اپنی lab میں موجود services کے ساتھ compare کریں۔

بغیر اجازت public IP یا کسی دوسرے network کو scan نہ کریں۔
            `
        },

        usefulFor: {
            en: `
Nmap is useful for:

• Network inventory
• Learning networking fundamentals
• Security auditing
• Troubleshooting
• Asset discovery
• Authorized penetration-testing labs
• CTF learning environments
            `,

            bn: `
Nmap কাজে লাগে:

• Network inventory তৈরি করতে
• Networking fundamentals শেখার জন্য
• Security auditing করতে
• Network troubleshooting করতে
• Authorized asset discovery করতে
• Penetration-testing lab-এ
• CTF environment-এ শেখার জন্য
            `,

            ur: `
Nmap کے استعمالات:

• Network inventory
• Networking fundamentals سیکھنا
• Security auditing
• Troubleshooting
• Authorized asset discovery
• Penetration-testing labs
• CTF learning environments
            `
        },

        practice: {
            en: `
Safe Practice:

Use Nmap only against your own computer,
your own virtual machines, CTF targets,
or systems where you have explicit permission.

A good beginner lab is a local virtual machine
created specifically for cybersecurity learning.
            `,

            bn: `
Safe Practice:

Nmap শুধুমাত্র নিজের computer, নিজের virtual machine,
CTF target অথবা যেসব system test করার স্পষ্ট অনুমতি আছে
সেগুলোতে ব্যবহার করো।

Cybersecurity শেখার জন্য আলাদা local virtual machine
তৈরি করে practice করা সবচেয়ে ভালো পদ্ধতিগুলোর একটি।
            `,

            ur: `
Safe Practice:

Nmap کو صرف اپنی machine، اپنی virtual machines،
CTF targets یا ایسے systems پر استعمال کریں جہاں
آپ کے پاس واضح اجازت ہو۔

Cybersecurity learning کے لیے ایک الگ local virtual
machine بنانا بہترین طریقوں میں سے ایک ہے۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Nmap+beginner+tutorial"
    },


    /* =====================================================
       02 — WIRESHARK
    ===================================================== */

    {
        id: 2,

        name: "Wireshark",

        icon: "🦈",

        category: "Network Analysis",

        description: {
            en: "A powerful network protocol analyzer.",
            bn: "Network traffic বিশ্লেষণ করার একটি শক্তিশালী protocol analyzer।",
            ur: "نیٹ ورک ٹریفک کا تجزیہ کرنے والا طاقتور protocol analyzer۔"
        },

        overview: {
            en: `
Wireshark is a graphical network protocol analyzer.

It allows learners and administrators to observe network
traffic passing through an interface and examine individual
packets in detail.

A packet can contain information such as protocol metadata,
source and destination addresses, ports and other fields.

Wireshark is extremely useful for learning how protocols such
as TCP, UDP, DNS, HTTP and TLS behave.

For cybersecurity students, it provides a visual way to
connect networking theory with real traffic.

Always capture traffic from your own devices, your own lab,
or a network where you have permission to perform analysis.
            `,

            bn: `
Wireshark একটি graphical network protocol analyzer।

এটি network interface-এর মধ্য দিয়ে চলাচল করা traffic capture
ও বিশ্লেষণ করতে সাহায্য করে। প্রতিটি packet-এর ভিতরে থাকা
protocol information, source/destination address, port এবং
অন্যান্য field দেখা যায়।

TCP, UDP, DNS, HTTP এবং TLS-এর মতো protocol বাস্তবে কীভাবে
কাজ করে তা শেখার জন্য Wireshark অত্যন্ত কার্যকর।

Cybersecurity শিক্ষার্থীদের জন্য এটি networking theory এবং
বাস্তব network traffic-এর মধ্যে সম্পর্ক বোঝার একটি চমৎকার
উপায়।

নিজের device, নিজের lab অথবা অনুমোদিত network-এর traffic
বিশ্লেষণ করো।
            `,

            ur: `
Wireshark ایک graphical network protocol analyzer ہے۔

یہ network interface سے گزرنے والے traffic کو capture اور
analyze کرنے کی اجازت دیتا ہے۔ آپ packets میں protocol
information، source/destination addresses اور ports وغیرہ
دیکھ سکتے ہیں۔

TCP، UDP، DNS، HTTP اور TLS جیسے protocols کو سمجھنے کے لیے
Wireshark بہت مفید ہے۔

Cybersecurity students کے لیے یہ networking theory کو
real network traffic سے جوڑنے میں مدد کرتا ہے۔

صرف اپنی devices، اپنی lab یا authorized network کا traffic
analyze کریں۔
            `
        },

        howItWorks: {
            en: `
Wireshark captures packets from a selected network interface.

The captured data is then decoded according to known network
protocols.

Instead of seeing only raw bytes, the program organizes the
information into protocol layers.

For example, a packet may be interpreted as an Ethernet frame,
followed by an IP packet, followed by TCP or UDP information,
and then an application-layer protocol.

This layered view helps beginners understand how data travels
through a network.
            `,

            bn: `
Wireshark প্রথমে selected network interface থেকে packet capture
করে।

তারপর packet-এর data বিভিন্ন network protocol অনুযায়ী decode
করে এবং readable format-এ দেখায়।

একটি packet-কে বিভিন্ন layer হিসেবে দেখা যায়—যেমন Ethernet,
তারপর IP, তারপর TCP বা UDP এবং এরপর application-layer protocol।

এই layered view ব্যবহার করে data কীভাবে network-এর মাধ্যমে
এক device থেকে অন্য device-এ যায় তা সহজে বোঝা যায়।
            `,

            ur: `
Wireshark پہلے selected network interface سے packets capture
کرتا ہے۔

اس کے بعد packets کو مختلف network protocols کے مطابق decode
کیا جاتا ہے۔

ایک packet کو مختلف layers میں دیکھا جا سکتا ہے، مثلاً
Ethernet، IP، TCP یا UDP اور پھر application-layer protocol۔

یہ layered view beginners کو data کے network میں سفر کو
سمجھنے میں مدد دیتا ہے۔
            `
        },

        usage: {
            en: `
Beginner workflow:

1. Open Wireshark in your own lab.
2. Select the interface used by your test machine.
3. Start a capture.
4. Generate some normal traffic in your lab.
5. Stop the capture.
6. Select a packet and inspect its protocol layers.
7. Try protocol filters to narrow the displayed traffic.

The goal is to understand network behavior, not to inspect
other people's private communications.
            `,

            bn: `
Beginner workflow:

১. নিজের lab-এ Wireshark চালু করো।
২. Test machine যে network interface ব্যবহার করছে সেটি select করো।
৩. Capture শুরু করো।
৪. Lab-এর মধ্যে কিছু normal network traffic তৈরি করো।
৫. Capture বন্ধ করো।
৬. একটি packet select করে তার বিভিন্ন protocol layer দেখো।
৭. Filter ব্যবহার করে নির্দিষ্ট ধরনের traffic আলাদা করে দেখো।

অন্য মানুষের private communication capture বা বিশ্লেষণ করা
উচিত নয়।
            `,

            ur: `
Beginner workflow:

1. اپنی lab میں Wireshark کھولیں۔
2. Test machine کا network interface منتخب کریں۔
3. Capture شروع کریں۔
4. اپنی lab میں normal network traffic پیدا کریں۔
5. Capture روک دیں۔
6. کسی packet کو منتخب کرکے protocol layers دیکھیں۔
7. Filters کے ذریعے مخصوص traffic دیکھنے کی practice کریں۔

دوسرے لوگوں کی private communications کو capture یا analyze
نہیں کرنا چاہیے۔
            `
        },

        usefulFor: {
            en: `
Wireshark is useful for:

• Network troubleshooting
• Protocol learning
• Defensive security
• Incident analysis
• Network monitoring
• Cybersecurity labs
            `,

            bn: `
Wireshark কাজে লাগে:

• Network troubleshooting
• Protocol শেখার জন্য
• Defensive security
• Incident analysis
• Network monitoring
• Cybersecurity lab
            `,

            ur: `
Wireshark کے استعمالات:

• Network troubleshooting
• Protocol learning
• Defensive security
• Incident analysis
• Network monitoring
• Cybersecurity labs
            `
        },

        practice: {
            en: `
Safe Practice:

Capture traffic generated by your own devices
or by a dedicated virtual lab.

A useful learning exercise is to create two
local virtual machines and observe normal
communication between them.
            `,

            bn: `
Safe Practice:

নিজের device অথবা dedicated virtual lab-এর
traffic capture করো।

দুটি local virtual machine তৈরি করে তাদের
মধ্যে normal communication observe করা
beginner-এর জন্য ভালো practice।
            `,

            ur: `
Safe Practice:

اپنی devices یا dedicated virtual lab کا traffic
capture کریں۔

دو local virtual machines بنا کر ان کے درمیان
normal communication observe کرنا beginners کے
لیے اچھی practice ہے۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Wireshark+beginner+tutorial"
    },


    /* =====================================================
       03 — BURP SUITE
    ===================================================== */

    {
        id: 3,

        name: "Burp Suite",

        icon: "🕷️",

        category: "Web Security",

        description: {
            en: "A web application security testing platform.",
            bn: "Web application security testing-এর জন্য জনপ্রিয় platform।",
            ur: "Web application security testing کے لیے معروف platform۔"
        },

        overview: {
            en: `
Burp Suite is a platform used for testing the security of
web applications.

It provides tools for observing and analyzing HTTP and HTTPS
requests and responses in an authorized testing environment.

Security learners can use it to understand how a browser
communicates with a web server.

The platform contains multiple components, including a proxy,
HTTP testing tools and other utilities designed for web
security assessment.

Burp Suite should be used only against applications that you
own or are explicitly authorized to test.
            `,

            bn: `
Burp Suite হলো web application security testing-এর একটি
জনপ্রিয় platform।

এটি browser এবং web server-এর মধ্যে চলাচল করা HTTP/HTTPS
request ও response বুঝতে এবং authorized testing environment-এ
বিশ্লেষণ করতে সাহায্য করে।

একজন beginner Burp Suite ব্যবহার করে browser কীভাবে server-এর
সাথে communicate করে তা বাস্তবে বুঝতে পারে।

এতে proxy এবং বিভিন্ন HTTP testing utility রয়েছে।

শুধুমাত্র নিজের application বা যেটি test করার অনুমতি আছে
সেটিতেই Burp Suite ব্যবহার করা উচিত।
            `,

            ur: `
Burp Suite web application security testing کے لیے ایک
مشہور platform ہے۔

یہ browser اور web server کے درمیان HTTP/HTTPS requests اور
responses کو سمجھنے اور authorized environment میں analyze
کرنے میں مدد دیتا ہے۔

Beginner اس کے ذریعے سمجھ سکتا ہے کہ browser server کے ساتھ
کس طرح communicate کرتا ہے۔

اس میں proxy اور مختلف HTTP testing utilities شامل ہیں۔

Burp Suite صرف اپنی application یا authorized target پر
استعمال کرنا چاہیے۔
            `
        },

        howItWorks: {
            en: `
A common Burp Suite workflow places its proxy between a browser
and a web application in a controlled testing environment.

The browser sends a request through the proxy.

The tester can then observe the request and response and study
their structure.

This makes it easier to understand concepts such as HTTP
methods, headers, cookies, parameters and response codes.

The goal of beginner practice should be understanding web
communication and identifying security weaknesses in a legal
lab.
            `,

            bn: `
Controlled lab environment-এ Burp Suite সাধারণত browser এবং
web application-এর মাঝখানে একটি proxy হিসেবে কাজ করে।

Browser একটি request পাঠালে সেটি Burp Suite-এর proxy-এর
মাধ্যমে যায়।

এর ফলে tester request এবং response-এর structure দেখতে পারে।

এভাবে HTTP method, header, cookie, parameter এবং response
code-এর মতো বিষয়গুলো বাস্তবে শেখা যায়।

Beginner-এর মূল লক্ষ্য হওয়া উচিত web communication বোঝা
এবং legal lab-এ security concept practice করা।
            `,

            ur: `
Controlled lab میں Burp Suite عام طور پر browser اور web
application کے درمیان proxy کے طور پر کام کرتا ہے۔

Browser کی request proxy سے گزرتی ہے، جس سے tester request
اور response کی structure دیکھ سکتا ہے۔

اس طرح HTTP methods، headers، cookies، parameters اور
response codes کو سمجھنا آسان ہوتا ہے۔

Beginner کو legal lab میں web communication اور security
concepts سیکھنے پر توجہ دینی چاہیے۔
            `
        },

        usage: {
            en: `
Beginner workflow:

1. Create or use an intentionally vulnerable web application.
2. Configure your browser to use the local Burp proxy.
3. Open the lab application.
4. Observe the HTTP requests generated by normal actions.
5. Study the request method, URL, headers and parameters.
6. Compare requests with their responses.
7. Document what you learned.

Do not intercept or modify traffic belonging to people
or applications without permission.
            `,

            bn: `
Beginner workflow:

১. একটি intentionally vulnerable web application তৈরি বা ব্যবহার করো।
২. Browser-কে local Burp proxy ব্যবহার করার জন্য configure করো।
৩. Lab application open করো।
৪. Normal action করলে কোন HTTP request তৈরি হচ্ছে তা দেখো।
৫. Request-এর method, URL, header এবং parameter পড়ো।
৬. Request এবং response-এর পার্থক্য বোঝার চেষ্টা করো।
৭. কী শিখলে তা note করো।

অনুমতি ছাড়া অন্যের traffic intercept বা modify করবে না।
            `,

            ur: `
Beginner workflow:

1. ایک intentionally vulnerable web application استعمال کریں۔
2. Browser کو local Burp proxy کے ساتھ configure کریں۔
3. Lab application کھولیں۔
4. Normal actions کے HTTP requests observe کریں۔
5. Method، URL، headers اور parameters کو پڑھیں۔
6. Request اور response کا comparison کریں۔
7. اپنی learning کو document کریں۔

بغیر اجازت کسی دوسرے شخص کی traffic کو intercept یا modify
نہ کریں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Web security learning
• HTTP fundamentals
• Web application assessment
• Secure coding education
• CTF web challenges
• Authorized security testing
            `,

            bn: `
কাজে লাগে:

• Web security শেখার জন্য
• HTTP fundamentals
• Web application assessment
• Secure coding
• CTF web challenges
• Authorized security testing
            `,

            ur: `
استعمال:

• Web security learning
• HTTP fundamentals
• Web application assessment
• Secure coding
• CTF web challenges
• Authorized security testing
            `
        },

        practice: {
            en: `
Safe Practice:

Use intentionally vulnerable applications such as
training labs and CTF environments.

Never test a real website unless you have explicit
authorization.
            `,

            bn: `
Safe Practice:

Training lab এবং CTF-এর intentionally vulnerable
application ব্যবহার করে practice করো।

স্পষ্ট অনুমতি ছাড়া কোনো real website test করবে না।
            `,

            ur: `
Safe Practice:

Training labs اور CTF environments کی intentionally
vulnerable applications استعمال کریں۔

واضح اجازت کے بغیر کسی real website کو test نہ کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Burp+Suite+beginner+tutorial"
    },


    /* =====================================================
       04 — METASPLOIT
    ===================================================== */

    {
        id: 4,

        name: "Metasploit Framework",

        icon: "💣",

        category: "Security Testing",

        description: {
            en: "A framework for authorized security testing and exploit research.",
            bn: "Authorized security testing ও exploit research-এর framework।",
            ur: "Authorized security testing اور exploit research کے لیے framework۔"
        },

        overview: {
            en: `
Metasploit Framework is a security research and penetration
testing framework.

It provides a structured environment for security professionals
and learners to study vulnerabilities and test security
controls in authorized environments.

Metasploit contains modules for different types of security
testing. These modules can help researchers understand how
vulnerabilities behave and how defensive teams can detect
related activity.

Because the framework can interact with vulnerable systems,
it must be used carefully and only inside a legal lab.
            `,

            bn: `
Metasploit Framework হলো security research এবং penetration
testing-এর একটি framework।

এটি authorized environment-এ vulnerability এবং security
control নিয়ে গবেষণা ও practice করতে সাহায্য করে।

Metasploit-এ বিভিন্ন ধরনের security testing-এর জন্য module
থাকে। এগুলোর মাধ্যমে security learner vulnerability কীভাবে
কাজ করে এবং defensive team কীভাবে suspicious activity
detect করতে পারে তা বুঝতে পারে।

কারণ এটি vulnerable system-এর সাথে interaction করতে পারে,
তাই শুধুমাত্র legal lab বা authorized environment-এ ব্যবহার
করতে হবে।
            `,

            ur: `
Metasploit Framework security research اور penetration testing
کے لیے ایک framework ہے۔

یہ authorized environment میں vulnerabilities اور security
controls کو سمجھنے اور test کرنے میں مدد دیتا ہے۔

اس میں مختلف security testing modules موجود ہوتے ہیں جن کے
ذریعے learners vulnerabilities اور defensive detection کو
سمجھ سکتے ہیں۔

اسے صرف legal lab یا authorized environment میں استعمال کرنا
چاہیے۔
            `
        },

        howItWorks: {
            en: `
Metasploit organizes security testing functionality into
modules.

A researcher selects a module appropriate for the authorized
lab scenario, configures the required information and observes
the result.

A simplified learning model is:

Vulnerability → Test Module → Controlled Target → Result → Analysis

The most valuable part for a beginner is understanding why a
vulnerability exists and how defenders can prevent or detect it.
            `,

            bn: `
Metasploit বিভিন্ন security testing functionality-কে module
আকারে organize করে।

Authorized lab-এর scenario অনুযায়ী researcher একটি appropriate
module নির্বাচন করে, প্রয়োজনীয় configuration দেয় এবং result
observe করে।

সহজভাবে:

Vulnerability → Test Module → Controlled Target → Result → Analysis

Beginner-এর জন্য সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো vulnerability
কেন তৈরি হয় এবং defender কীভাবে সেটি prevent বা detect করতে
পারে তা বোঝা।
            `,

            ur: `
Metasploit security testing functionality کو modules کی شکل
میں organize کرتا ہے۔

Authorized lab scenario کے مطابق researcher مناسب module
منتخب کرتا ہے، required configuration دیتا ہے اور result
observe کرتا ہے۔

سادہ model:

Vulnerability → Test Module → Controlled Target → Result → Analysis

Beginner کے لیے اہم بات vulnerability کی وجہ اور اس سے
defense کرنے کے طریقے کو سمجھنا ہے۔
            `
        },

        usage: {
            en: `
Beginner learning workflow:

1. Build an isolated vulnerable virtual machine lab.
2. Identify the vulnerability intentionally included in the lab.
3. Study the vulnerability documentation first.
4. Use the framework only against the lab machine.
5. Observe what happens.
6. Study logs and defensive indicators.
7. Restore the virtual machine and repeat the lesson.

The objective is security education, not unauthorized access.
            `,

            bn: `
Beginner workflow:

১. একটি isolated vulnerable virtual machine lab তৈরি করো।
২. Lab-এ intentionally রাখা vulnerability শনাক্ত করো।
৩. আগে vulnerability-এর documentation পড়ো।
৪. Framework শুধুমাত্র lab machine-এ ব্যবহার করো।
৫. কী ঘটছে তা observe করো।
৬. System log এবং defensive indicator দেখো।
৭. VM restore করে lesson আবার practice করো।

লক্ষ্য হলো security education, unauthorized access নয়।
            `,

            ur: `
Beginner workflow:

1. ایک isolated vulnerable virtual machine lab بنائیں۔
2. Lab میں موجود vulnerability کو identify کریں۔
3. پہلے vulnerability documentation پڑھیں۔
4. Framework صرف lab machine پر استعمال کریں۔
5. Result observe کریں۔
6. Logs اور defensive indicators کا مطالعہ کریں۔
7. VM restore کرکے practice دوبارہ کریں۔

مقصد security education ہے، unauthorized access نہیں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Vulnerability research
• Penetration-testing education
• Security labs
• Defensive detection research
• CTF environments
            `,

            bn: `
কাজে লাগে:

• Vulnerability research
• Penetration-testing education
• Security lab
• Defensive detection research
• CTF environment
            `,

            ur: `
استعمال:

• Vulnerability research
• Penetration-testing education
• Security labs
• Defensive detection research
• CTF environments
            `
        },

        practice: {
            en: `
Safe Practice:

Use an isolated virtual lab with intentionally vulnerable
machines. Keep the lab separated from systems that do not
belong to the exercise.

Never test vulnerabilities against real systems without
explicit authorization.
            `,

            bn: `
Safe Practice:

Intentionally vulnerable virtual machine নিয়ে isolated lab
তৈরি করো। Lab-টিকে অন্য গুরুত্বপূর্ণ system থেকে আলাদা রাখো।

স্পষ্ট অনুমতি ছাড়া কোনো real system-এর vulnerability test
করবে না।
            `,

            ur: `
Safe Practice:

Intentionally vulnerable virtual machines کے ساتھ isolated
lab استعمال کریں اور اسے دوسرے systems سے الگ رکھیں۔

واضح اجازت کے بغیر کسی real system کی vulnerability test
نہ کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Metasploit+Framework+beginner+tutorial"
    },


    /* =====================================================
       05 — JOHN THE RIPPER
    ===================================================== */

    {
        id: 5,

        name: "John the Ripper",

        icon: "🔐",

        category: "Password Security",

        description: {
            en: "A password security auditing and recovery tool.",
            bn: "Password security auditing ও recovery-এর জন্য ব্যবহৃত tool।",
            ur: "Password security auditing اور recovery کے لیے tool۔"
        },

        overview: {
            en: `
John the Ripper is a password security auditing tool.

It is commonly used in controlled environments to evaluate the
strength of password hashes and help security teams identify
weak password choices.

A password is normally not stored directly by a properly
designed application. Instead, a password hash may be stored.

Password auditing tools can test candidate passwords against
those hashes and help demonstrate why strong passwords and
modern password storage practices matter.

Practice should be limited to password hashes from your own
lab or systems you are authorized to audit.
            `,

            bn: `
John the Ripper একটি password security auditing tool।

এটি controlled environment-এ password hash-এর strength
পরীক্ষা করতে এবং weak password শনাক্ত করার কাজে ব্যবহার করা হয়।

সঠিকভাবে তৈরি application সাধারণত password সরাসরি store করে না।
এর পরিবর্তে password-এর hash সংরক্ষণ করা হতে পারে।

Password auditing tool candidate password-এর সাথে hash
মিলিয়ে password কতটা দুর্বল বা শক্তিশালী তা বোঝাতে সাহায্য
করতে পারে।

শুধুমাত্র নিজের lab-এর hash অথবা যেগুলো audit করার অনুমতি
আছে সেগুলোতেই practice করা উচিত।
            `,

            ur: `
John the Ripper ایک password security auditing tool ہے۔

یہ controlled environment میں password hashes کی strength
check کرنے اور weak passwords identify کرنے کے لیے استعمال
ہوتا ہے۔

Properly designed applications عام طور پر password کو directly
store نہیں کرتیں بلکہ password hash محفوظ کیا جاتا ہے۔

Password auditing tools candidate passwords کو hashes کے ساتھ
compare کرکے password security کو سمجھنے میں مدد دیتے ہیں۔

صرف اپنی lab یا authorized password hashes پر practice کریں۔
            `
        },

        howItWorks: {
            en: `
At a high level, the tool generates candidate password values,
processes them using the relevant hashing method and compares
the resulting hash with the authorized test hash.

This demonstrates an important security lesson:

Weak password + weak password policy = greater risk.

Strong passwords and modern password hashing techniques make
unauthorized password recovery much more difficult.
            `,

            bn: `
সহজভাবে বললে, tool বিভিন্ন candidate password তৈরি করে,
সেগুলোকে সংশ্লিষ্ট hashing method-এর মাধ্যমে process করে এবং
authorized test hash-এর সাথে result compare করে।

এখান থেকে একটি গুরুত্বপূর্ণ বিষয় বোঝা যায়:

দুর্বল password + দুর্বল password policy = বেশি ঝুঁকি।

Strong password এবং modern password hashing technique ব্যবহার
করলে unauthorized password recovery অনেক কঠিন হয়ে যায়।
            `,

            ur: `
سادہ الفاظ میں، tool candidate passwords بناتا ہے، انہیں
متعلقہ hashing method سے process کرتا ہے اور authorized test
hash کے ساتھ result compare کرتا ہے۔

اہم security lesson:

Weak password + weak password policy = زیادہ خطرہ۔

Strong passwords اور modern password hashing techniques
security کو بہتر بناتی ہیں۔
            `
        },

        usage: {
            en: `
Beginner practice:

Create a test account inside a local lab application.
Generate a test password hash using the lab's own system.
Then use the password auditing lesson to understand how
different password strengths affect the auditing process.

Focus on learning password security rather than recovering
real people's passwords.
            `,

            bn: `
Beginner practice:

একটি local lab application-এ test account তৈরি করো।
Lab-এর নিজের system দিয়ে একটি test password-এর hash তৈরি করো।
তারপর password strength কীভাবে auditing process-কে প্রভাবিত
করে তা শেখো।

বাস্তব মানুষের password recover করার পরিবর্তে password security
বোঝার দিকে মনোযোগ দাও।
            `,

            ur: `
Beginner practice:

Local lab application میں test account بنائیں۔
Lab کے system سے test password کا hash بنائیں۔
پھر password strength اور auditing process کے تعلق کو سمجھیں۔

Real users کے passwords recover کرنے کے بجائے password security
سیکھنے پر توجہ دیں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Password policy auditing
• Security education
• Hash security research
• Defensive security
• Authorized lab exercises
            `,

            bn: `
কাজে লাগে:

• Password policy auditing
• Security education
• Hash security research
• Defensive security
• Authorized lab practice
            `,

            ur: `
استعمال:

• Password policy auditing
• Security education
• Hash security research
• Defensive security
• Authorized lab exercises
            `
        },

        practice: {
            en: `
Safe Practice:

Only use test password hashes that you created yourself
or that you have explicit permission to audit.
            `,

            bn: `
Safe Practice:

নিজে তৈরি করা test password hash অথবা যেটি audit করার
স্পষ্ট অনুমতি আছে শুধু সেটিই ব্যবহার করো।
            `,

            ur: `
Safe Practice:

صرف اپنے بنائے ہوئے test password hashes یا authorized
hashes استعمال کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=John+the+Ripper+beginner+tutorial"
    },


    /* =====================================================
       06 — HYDRA
    ===================================================== */

    {
        id: 6,

        name: "Hydra",

        icon: "🐉",

        category: "Authentication Testing",

        description: {
            en: "A network authentication auditing tool used in authorized labs.",
            bn: "Authorized lab-এ authentication security auditing-এর tool।",
            ur: "Authorized labs میں authentication security auditing کا tool۔"
        },

        overview: {
            en: `
Hydra is a network authentication auditing tool.

Security professionals may use it in controlled environments
to evaluate whether authentication services are protected
against weak password choices and poor authentication policies.

It can interact with various authentication protocols, making
it useful for understanding why rate limiting, account lockout,
multi-factor authentication and strong passwords are important.

Hydra must never be used against accounts or services without
explicit authorization.
            `,

            bn: `
Hydra হলো network authentication auditing-এর একটি tool।

Controlled environment-এ authentication service দুর্বল
password বা দুর্বল policy-এর বিরুদ্ধে কতটা নিরাপদ তা শেখার
জন্য এটি ব্যবহার করা যেতে পারে।

এটি বিভিন্ন authentication protocol নিয়ে কাজ করতে পারে।
এ কারণে rate limiting, account lockout, multi-factor
authentication এবং strong password কেন গুরুত্বপূর্ণ তা
বোঝা যায়।

স্পষ্ট অনুমতি ছাড়া কোনো account বা service-এর বিরুদ্ধে
Hydra ব্যবহার করা উচিত নয়।
            `,

            ur: `
Hydra network authentication auditing کے لیے استعمال ہونے
والا tool ہے۔

Controlled environment میں یہ سمجھنے کے لیے استعمال کیا جا
سکتا ہے کہ authentication service weak passwords اور poor
security policies کے خلاف کتنی محفوظ ہے۔

یہ مختلف authentication protocols کے ساتھ کام کر سکتا ہے۔
اس سے rate limiting، account lockout، MFA اور strong
passwords کی اہمیت سمجھنے میں مدد ملتی ہے۔

واضح اجازت کے بغیر کسی account یا service کے خلاف Hydra
استعمال نہیں کرنا چاہیے۔
            `
        },

        howItWorks: {
            en: `
At a high level, authentication auditing tools test a series
of authorized credential candidates against a controlled
authentication service.

A secure system should detect and limit repeated failed
attempts.

This is why defenses such as rate limiting, account lockout,
MFA and strong password policies are important.

For learning, focus on understanding these defensive controls.
            `,

            bn: `
সহজভাবে বললে, authentication auditing tool authorized
credential candidate ব্যবহার করে controlled authentication
service-এর security behavior পরীক্ষা করে।

একটি secure system repeated failed login attempt detect এবং
limit করতে পারে।

এই কারণেই rate limiting, account lockout, MFA এবং strong
password policy গুরুত্বপূর্ণ।

Practice-এর সময় defensive control কীভাবে কাজ করে সেটি
বোঝার দিকে মনোযোগ দাও।
            `,

            ur: `
Authentication auditing tool authorized credential candidates
کے ذریعے controlled authentication service کے behavior کو
test کرتا ہے۔

Secure system repeated failed attempts کو detect اور limit
کر سکتا ہے۔

اسی لیے rate limiting، account lockout، MFA اور strong
password policies اہم ہیں۔

Practice میں defensive controls کو سمجھنے پر توجہ دیں۔
            `
        },

        usage: {
            en: `
For a safe beginner lab:

Use a deliberately configured local authentication service
inside a virtual machine.

Study how the service responds to repeated incorrect
credentials and how security controls such as lockout or
rate limiting change that behavior.

Do not perform authentication attacks against real accounts.
            `,

            bn: `
Safe beginner lab:

Virtual machine-এর মধ্যে intentionally configured local
authentication service ব্যবহার করো।

Repeated incorrect credential দিলে service কীভাবে response
করে এবং lockout বা rate limiting কীভাবে behavior পরিবর্তন
করে তা observe করো।

কোনো real account-এর বিরুদ্ধে authentication attack চালাবে না।
            `,

            ur: `
Safe beginner lab:

Virtual machine میں intentionally configured local
authentication service استعمال کریں۔

غلط credentials بار بار دینے پر service کا response اور
lockout یا rate limiting کے اثرات observe کریں۔

کسی real account کے خلاف authentication attack نہ کریں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Authentication security
• Password policy education
• Defensive testing
• Security labs
• CTF environments
            `,

            bn: `
কাজে লাগে:

• Authentication security
• Password policy education
• Defensive testing
• Security lab
• CTF environment
            `,

            ur: `
استعمال:

• Authentication security
• Password policy education
• Defensive testing
• Security labs
• CTF environments
            `
        },

        practice: {
            en: `
Safe Practice:

Only test a deliberately configured authentication service
inside an isolated lab or an authorized CTF environment.
            `,

            bn: `
Safe Practice:

শুধুমাত্র isolated lab বা authorized CTF environment-এর
intentionally configured authentication service test করো।
            `,

            ur: `
Safe Practice:

صرف isolated lab یا authorized CTF environment میں
intentionally configured authentication service test کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Hydra+cybersecurity+beginner+tutorial"
    },


    /* =====================================================
       07 — SQLMAP
    ===================================================== */

    {
        id: 7,

        name: "SQLmap",

        icon: "🗄️",

        category: "Web Security",

        description: {
            en: "An automated SQL injection testing tool for authorized environments.",
            bn: "Authorized web application-এ SQL injection testing-এর automation tool।",
            ur: "Authorized web applications میں SQL injection testing کے لیے tool۔"
        },

        overview: {
            en: `
SQLmap is an open-source tool designed to automate certain
parts of SQL injection testing.

SQL injection is a class of vulnerability that can occur when
an application incorrectly handles user-controlled input while
building database queries.

Security professionals use controlled testing to determine
whether applications properly validate and parameterize input.

SQLmap should only be used against applications you own or
have explicit permission to test.
            `,

            bn: `
SQLmap একটি open-source tool যা SQL injection testing-এর
কিছু অংশ automate করতে পারে।

SQL injection এমন একটি vulnerability class যেখানে application
user-controlled input নিরাপদভাবে handle না করলে database
query-এর structure প্রভাবিত হতে পারে।

Security professional-রা authorized testing environment-এ
application input validation এবং parameterized query ঠিকভাবে
কাজ করছে কি না তা পরীক্ষা করতে এটি ব্যবহার করতে পারেন।

শুধুমাত্র নিজের application বা অনুমোদিত target-এ SQLmap
ব্যবহার করো।
            `,

            ur: `
SQLmap ایک open-source tool ہے جو SQL injection testing کے
کچھ حصوں کو automate کر سکتا ہے۔

SQL injection اس وقت پیدا ہو سکتی ہے جب application
user-controlled input کو محفوظ طریقے سے handle نہ کرے۔

Security professionals authorized environments میں input
validation اور parameterized queries کی security test کر سکتے ہیں۔

SQLmap صرف اپنی application یا authorized target پر استعمال کریں۔
            `
        },

        howItWorks: {
            en: `
At a high level, SQL injection testing examines how an
application processes input that eventually reaches a database
query.

A secure application should use parameterized queries,
appropriate input handling and least-privilege database
accounts.

Automated testing can help identify suspicious behavior in a
controlled environment, but the results still need human
analysis.
            `,

            bn: `
SQL injection testing মূলত দেখে application user input কীভাবে
process করে এবং সেই input database query পর্যন্ত কীভাবে পৌঁছায়।

Secure application-এ parameterized query, proper input handling
এবং least-privilege database account ব্যবহার করা উচিত।

Automated testing controlled environment-এ suspicious behavior
identify করতে সাহায্য করতে পারে, তবে result অবশ্যই human
analysis-এর মাধ্যমে যাচাই করা উচিত।
            `,

            ur: `
SQL injection testing یہ دیکھتی ہے کہ application user input
کو کس طرح process کرتی ہے اور database query تک کیسے پہنچاتی ہے۔

Secure applications کو parameterized queries، مناسب input
handling اور least-privilege database accounts استعمال کرنے
چاہئیں۔

Automated testing controlled environment میں suspicious
behavior identify کرنے میں مدد دے سکتی ہے، لیکن results
کا human analysis ضروری ہے۔
            `
        },

        usage: {
            en: `
Beginner workflow:

1. Use an intentionally vulnerable local web application.
2. Understand the application's input and database design.
3. Study SQL injection concepts first.
4. Perform controlled testing within the lab.
5. Review the results.
6. Fix the vulnerability using parameterized queries.
7. Test again to verify the fix.

The defensive fix is an important part of the exercise.
            `,

            bn: `
Beginner workflow:

১. Intentionally vulnerable local web application ব্যবহার করো।
২. Application-এর input এবং database design বোঝো।
৩. আগে SQL injection concept শেখো।
৪. Lab-এর ভিতরে controlled testing করো।
৫. Result review করো।
৬. Parameterized query ব্যবহার করে vulnerability fix করো।
৭. আবার test করে fix কাজ করছে কিনা যাচাই করো।

Exercise-এর গুরুত্বপূর্ণ অংশ হলো vulnerability ঠিক করাও।
            `,

            ur: `
Beginner workflow:

1. Intentionally vulnerable local web application استعمال کریں۔
2. Application کے input اور database design کو سمجھیں۔
3. پہلے SQL injection concepts سیکھیں۔
4. Lab میں controlled testing کریں۔
5. Results review کریں۔
6. Parameterized queries کے ذریعے vulnerability fix کریں۔
7. دوبارہ test کرکے fix verify کریں۔

Exercise میں vulnerability کو fix کرنا بھی اہم حصہ ہے۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Web application security
• Secure coding
• SQL injection education
• Database security
• CTF labs
            `,

            bn: `
কাজে লাগে:

• Web application security
• Secure coding
• SQL injection শেখার জন্য
• Database security
• CTF lab
            `,

            ur: `
استعمال:

• Web application security
• Secure coding
• SQL injection education
• Database security
• CTF labs
            `
        },

        practice: {
            en: `
Safe Practice:

Use only intentionally vulnerable applications running
locally or in an authorized training environment.

After testing, study how parameterized queries prevent
the vulnerability.
            `,

            bn: `
Safe Practice:

শুধুমাত্র locally running intentionally vulnerable application
অথবা authorized training environment ব্যবহার করো।

Testing-এর পরে parameterized query কীভাবে vulnerability
prevent করে তা শেখো।
            `,

            ur: `
Safe Practice:

صرف locally running intentionally vulnerable applications
یا authorized training environments استعمال کریں۔

Testing کے بعد parameterized queries کے ذریعے vulnerability
prevention کو سمجھیں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=SQLmap+beginner+tutorial"
    },


    /* =====================================================
       08 — NETCAT
    ===================================================== */

    {
        id: 8,

        name: "Netcat",

        icon: "🔌",

        category: "Networking",

        description: {
            en: "A versatile networking utility for testing and troubleshooting.",
            bn: "Networking connection test ও troubleshooting-এর versatile utility।",
            ur: "Networking testing اور troubleshooting کے لیے versatile utility۔"
        },

        overview: {
            en: `
Netcat is a simple but powerful networking utility.

It can create network connections and is often used by
administrators and security learners for troubleshooting,
testing network services and understanding TCP/UDP communication.

Because it works close to the network layer, Netcat is useful
for learning concepts such as ports, sockets, clients and
servers.

It should be used only within systems and networks where you
have authorization.
            `,

            bn: `
Netcat একটি ছোট কিন্তু শক্তিশালী networking utility।

এটি network connection তৈরি করতে পারে এবং administrator ও
security learner-রা troubleshooting, network service testing
এবং TCP/UDP communication বোঝার জন্য ব্যবহার করতে পারেন।

Network-এর কাছাকাছি level-এ কাজ করার কারণে port, socket,
client এবং server-এর মতো fundamental concept শেখার জন্য
Netcat খুব ভালো।

শুধুমাত্র authorized system ও network-এ এটি ব্যবহার করো।
            `,

            ur: `
Netcat ایک سادہ لیکن طاقتور networking utility ہے۔

یہ network connections بنانے اور troubleshooting، service
testing اور TCP/UDP communication سمجھنے کے لیے استعمال ہوتا ہے۔

یہ ports، sockets، clients اور servers جیسے networking
concepts سیکھنے کے لیے مفید ہے۔

صرف authorized systems اور networks میں استعمال کریں۔
            `
        },

        howItWorks: {
            en: `
Netcat can operate as a network client or listener.

A client connects to a specified service endpoint, while a
listener waits for an incoming connection.

This simple model makes it useful for understanding how
network services communicate.

A basic mental model is:

Client → Network → Server/Listener → Response
            `,

            bn: `
Netcat network client অথবা listener হিসেবে কাজ করতে পারে।

Client একটি নির্দিষ্ট service endpoint-এ connection তৈরি করতে
পারে, আর listener incoming connection-এর জন্য অপেক্ষা করে।

এই simple model-এর মাধ্যমে network service কীভাবে communicate
করে তা সহজে শেখা যায়।

সহজ ধারণা:

Client → Network → Server/Listener → Response
            `,

            ur: `
Netcat network client یا listener کے طور پر کام کر سکتا ہے۔

Client کسی مخصوص service endpoint سے connect کرتا ہے جبکہ
listener incoming connection کا انتظار کرتا ہے۔

یہ model network communication کو سمجھنے کے لیے مفید ہے۔

بنیادی تصور:

Client → Network → Server/Listener → Response
            `
        },

        usage: {
            en: `
Beginner practice:

Create two virtual machines in an isolated lab.

Run a harmless test service on one machine and use Netcat
from the other machine to understand how a TCP connection
works.

Observe connection establishment and transmitted test data.

Do not use Netcat to connect to systems without permission.
            `,

            bn: `
Beginner practice:

একটি isolated lab-এ দুটি virtual machine তৈরি করো।

একটি machine-এ harmless test service চালাও এবং অন্য machine
থেকে Netcat ব্যবহার করে TCP connection কীভাবে কাজ করে তা বোঝো।

Connection এবং test data কীভাবে চলাচল করে তা observe করো।

অনুমতি ছাড়া অন্য system-এ Netcat দিয়ে connection তৈরি করবে না।
            `,

            ur: `
Beginner practice:

ایک isolated lab میں دو virtual machines بنائیں۔

ایک machine پر harmless test service چلائیں اور دوسری machine
سے Netcat کے ذریعے TCP connection کو سمجھیں۔

Connection اور test data کے flow کو observe کریں۔

بغیر اجازت کسی دوسرے system سے Netcat connection نہ بنائیں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Networking fundamentals
• Troubleshooting
• TCP/UDP learning
• Service testing
• Security labs
            `,

            bn: `
কাজে লাগে:

• Networking fundamentals
• Troubleshooting
• TCP/UDP শেখা
• Service testing
• Security lab
            `,

            ur: `
استعمال:

• Networking fundamentals
• Troubleshooting
• TCP/UDP learning
• Service testing
• Security labs
            `
        },

        practice: {
            en: `
Safe Practice:

Use two virtual machines or localhost inside
an isolated learning environment.
            `,

            bn: `
Safe Practice:

দুটি virtual machine অথবা localhost-এর isolated
learning environment ব্যবহার করো।
            `,

            ur: `
Safe Practice:

دو virtual machines یا localhost کے isolated
learning environment استعمال کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Netcat+beginner+cybersecurity+tutorial"
    },


    /* =====================================================
       09 — GOBUSTER
    ===================================================== */

    {
        id: 9,

        name: "Gobuster",

        icon: "📂",

        category: "Web Enumeration",

        description: {
            en: "A tool for authorized content and resource discovery.",
            bn: "Authorized web resource discovery ও enumeration-এর tool।",
            ur: "Authorized web resource discovery اور enumeration کا tool۔"
        },

        overview: {
            en: `
Gobuster is a command-line tool commonly used for discovering
resources in authorized web applications and other services.

In a training lab, it can help learners understand how web
servers organize resources such as directories and files.

This is useful because security professionals need to know
what resources are intentionally exposed by an application.

Gobuster should only be used against applications and systems
that you own or are authorized to assess.
            `,

            bn: `
Gobuster একটি command-line tool যা authorized web application
এ resource discovery এবং enumeration শেখার জন্য ব্যবহার করা হয়।

Training lab-এ এটি ব্যবহার করে web server-এর directory এবং
resource organization বোঝা যায়।

Security professional-এর জন্য কোন resource application থেকে
exposed হচ্ছে তা বোঝা গুরুত্বপূর্ণ।

শুধুমাত্র নিজের অথবা authorized application-এ Gobuster ব্যবহার
করো।
            `,

            ur: `
Gobuster ایک command-line tool ہے جو authorized web applications
میں resource discovery اور enumeration کے لیے استعمال ہوتا ہے۔

Training lab میں یہ سمجھنے میں مدد دیتا ہے کہ web server
directories اور resources کو کیسے organize کرتا ہے۔

Security professionals کے لیے exposed resources کو سمجھنا اہم ہے۔

صرف اپنی یا authorized application پر Gobuster استعمال کریں۔
            `
        },

        howItWorks: {
            en: `
Gobuster uses a supplied wordlist to make requests for
candidate resource names and observes the server responses.

The result can help a tester understand which resources appear
to exist.

The same concept also teaches defenders why unnecessary
resources should not be publicly exposed and why proper
access control matters.
            `,

            bn: `
Gobuster একটি wordlist-এর candidate resource name ব্যবহার করে
web server-এ request পাঠায় এবং response observe করে।

এর মাধ্যমে কোন resource available বলে মনে হচ্ছে তা বোঝা যায়।

এটি defender-দেরও শেখায় কেন unnecessary resource publicly
expose করা উচিত নয় এবং proper access control গুরুত্বপূর্ণ।
            `,

            ur: `
Gobuster wordlist میں موجود candidate resource names کے لیے
requests بھیجتا ہے اور server responses کو observe کرتا ہے۔

اس سے معلوم کیا جا سکتا ہے کہ کون سے resources موجود نظر
آتے ہیں۔

یہ defenders کو بھی سمجھاتا ہے کہ unnecessary resources کو
publicly expose کیوں نہیں کرنا چاہیے اور access control کیوں
اہم ہے۔
            `
        },

        usage: {
            en: `
Beginner practice:

Set up a local training website containing several harmless
test directories.

Use the tool inside the lab and compare its findings with the
directories you intentionally created.

Then remove unnecessary resources and add appropriate access
controls.
            `,

            bn: `
Beginner practice:

একটি local training website তৈরি করো যেখানে কয়েকটি harmless
test directory থাকবে।

Lab-এর ভিতরে tool ব্যবহার করে result বের করো এবং intentionally
তৈরি করা directory-এর সাথে compare করো।

তারপর unnecessary resource remove করো এবং proper access control
যোগ করো।
            `,

            ur: `
Beginner practice:

ایک local training website بنائیں جس میں harmless test
directories موجود ہوں۔

Lab میں tool استعمال کرکے results کو intentionally created
directories کے ساتھ compare کریں۔

بعد میں unnecessary resources remove کریں اور مناسب access
controls شامل کریں۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Web enumeration
• Web security labs
• Asset discovery
• Security assessment education
• CTF environments
            `,

            bn: `
কাজে লাগে:

• Web enumeration
• Web security lab
• Asset discovery
• Security assessment শেখা
• CTF environment
            `,

            ur: `
استعمال:

• Web enumeration
• Web security labs
• Asset discovery
• Security assessment education
• CTF environments
            `
        },

        practice: {
            en: `
Safe Practice:

Use a local website or an explicitly authorized
CTF/training target.
            `,

            bn: `
Safe Practice:

Local website অথবা স্পষ্টভাবে authorized
CTF/training target ব্যবহার করো।
            `,

            ur: `
Safe Practice:

Local website یا واضح طور پر authorized
CTF/training target استعمال کریں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=Gobuster+beginner+tutorial"
    },


    /* =====================================================
       10 — OWASP ZAP
    ===================================================== */

    {
        id: 10,

        name: "OWASP ZAP",

        icon: "🛡️",

        category: "Web Security",

        description: {
            en: "An open-source web application security testing tool.",
            bn: "Web application security testing-এর open-source tool।",
            ur: "Web application security testing کے لیے open-source tool۔"
        },

        overview: {
            en: `
OWASP ZAP, also known as Zed Attack Proxy, is an open-source
web application security testing tool.

It is widely used for learning web security and for authorized
security assessments.

ZAP can help learners understand HTTP traffic, application
structure and common security issues.

It can operate as a proxy and provides features designed to
help identify potential security problems.

Because security scanners can generate significant traffic,
they should only be used against systems where testing is
authorized.
            `,

            bn: `
OWASP ZAP বা Zed Attack Proxy হলো একটি open-source web
application security testing tool।

Web security শেখা এবং authorized security assessment-এর
জন্য এটি ব্যবহার করা হয়।

ZAP ব্যবহার করে HTTP traffic, application structure এবং
সম্ভাব্য security issue সম্পর্কে ধারণা পাওয়া যায়।

এটি proxy হিসেবে কাজ করতে পারে এবং security testing-এর
জন্য বিভিন্ন feature প্রদান করে।

Security scanner অনেক request তৈরি করতে পারে, তাই শুধুমাত্র
যেসব system test করার অনুমতি আছে সেগুলোতেই ব্যবহার করা উচিত।
            `,

            ur: `
OWASP ZAP یا Zed Attack Proxy ایک open-source web application
security testing tool ہے۔

یہ web security learning اور authorized security assessments
کے لیے استعمال ہوتا ہے۔

ZAP کے ذریعے HTTP traffic، application structure اور ممکنہ
security issues کو سمجھا جا سکتا ہے۔

یہ proxy کے طور پر کام کر سکتا ہے اور مختلف security testing
features فراہم کرتا ہے۔

Security scanners کافی traffic generate کر سکتے ہیں، اس لیے
صرف authorized systems پر استعمال کریں۔
            `
        },

        howItWorks: {
            en: `
ZAP can sit between a browser and a test web application.

It observes HTTP requests and responses and can use its
security testing capabilities to identify areas that deserve
further investigation.

For beginners, the most important concepts are:

Browser → ZAP → Web Application

and

Request → Server → Response → Analysis

Understanding the application's behavior is more important
than simply running an automated scan.
            `,

            bn: `
ZAP browser এবং test web application-এর মাঝখানে proxy হিসেবে
কাজ করতে পারে।

এটি HTTP request ও response observe করে এবং security testing
feature-এর মাধ্যমে further investigation দরকার এমন area
চিহ্নিত করতে সাহায্য করে।

Beginner-এর জন্য গুরুত্বপূর্ণ ধারণা:

Browser → ZAP → Web Application

এবং:

Request → Server → Response → Analysis

শুধু automated scan চালানোর চেয়ে application কীভাবে কাজ করে
তা বোঝা বেশি গুরুত্বপূর্ণ।
            `,

            ur: `
ZAP browser اور test web application کے درمیان proxy کے طور
پر کام کر سکتا ہے۔

یہ HTTP requests اور responses کو observe کرتا ہے اور security
testing features کے ذریعے مزید investigation کے قابل areas
identify کرنے میں مدد دیتا ہے۔

Beginner کے لیے اہم تصور:

Browser → ZAP → Web Application

اور:

Request → Server → Response → Analysis

صرف automated scan چلانے کے بجائے application کے behavior
کو سمجھنا زیادہ اہم ہے۔
            `
        },

        usage: {
            en: `
Beginner workflow:

1. Start an intentionally vulnerable local web application.
2. Open OWASP ZAP.
3. Configure the browser to use ZAP as a proxy.
4. Browse the lab application normally.
5. Observe the captured requests.
6. Study the generated security alerts.
7. Investigate each alert manually.
8. Fix the issue in the lab application.
9. Test again.

This creates a complete learn → test → fix → verify cycle.
            `,

            bn: `
Beginner workflow:

১. Intentionally vulnerable local web application চালু করো।
২. OWASP ZAP open করো।
৩. Browser-কে ZAP proxy ব্যবহার করার জন্য configure করো।
৪. Lab application normalভাবে browse করো।
৫. Captured request দেখো।
৬. Security alertগুলো study করো।
৭. প্রতিটি alert manually investigate করো।
৮. Lab application-এ issue fix করো।
৯. আবার test করো।

এভাবে Learn → Test → Fix → Verify cycle তৈরি হয়।
            `,

            ur: `
Beginner workflow:

1. Intentionally vulnerable local web application شروع کریں۔
2. OWASP ZAP کھولیں۔
3. Browser کو ZAP proxy کے ساتھ configure کریں۔
4. Lab application کو normally browse کریں۔
5. Captured requests دیکھیں۔
6. Security alerts کا مطالعہ کریں۔
7. Alerts کو manually investigate کریں۔
8. Lab application میں issue fix کریں۔
9. دوبارہ test کریں۔

اس طرح Learn → Test → Fix → Verify cycle بنتا ہے۔
            `
        },

        usefulFor: {
            en: `
Useful for:

• Web security learning
• Security assessment
• Secure development
• HTTP analysis
• Vulnerability education
• CTF and training labs
            `,

            bn: `
কাজে লাগে:

• Web security শেখা
• Security assessment
• Secure development
• HTTP analysis
• Vulnerability education
• CTF ও training lab
            `,

            ur: `
استعمال:

• Web security learning
• Security assessment
• Secure development
• HTTP analysis
• Vulnerability education
• CTF اور training labs
            `
        },

        practice: {
            en: `
Safe Practice:

Use OWASP ZAP against your own local application
or an authorized training environment.

After finding an issue, always study the defensive
fix instead of stopping at the scan result.
            `,

            bn: `
Safe Practice:

নিজের local application অথবা authorized training
environment-এ OWASP ZAP ব্যবহার করো।

কোনো issue পাওয়ার পরে শুধু result দেখেই থেমে যেও না;
defensive fix কীভাবে করতে হয় সেটিও শেখো।
            `,

            ur: `
Safe Practice:

اپنی local application یا authorized training
environment پر OWASP ZAP استعمال کریں۔

Issue ملنے کے بعد صرف result پر نہ رکیں بلکہ
defensive fix بھی سیکھیں۔
            `
        },

        video: "https://www.youtube.com/results?search_query=OWASP+ZAP+beginner+tutorial"
    }

];


/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const securityCategories = {

    "Network Security": {
        icon: "🌐",
        description: {
            en: "Network discovery and security analysis.",
            bn: "Network discovery ও security analysis।",
            ur: "Network discovery اور security analysis۔"
        }
    },

    "Network Analysis": {
        icon: "📡",
        description: {
            en: "Analyze and understand network traffic.",
            bn: "Network traffic বিশ্লেষণ ও বোঝা।",
            ur: "Network traffic کا تجزیہ اور سمجھ۔"
        }
    },

    "Web Security": {
        icon: "🌍",
        description: {
            en: "Learn web application security.",
            bn: "Web application security শেখা।",
            ur: "Web application security سیکھیں۔"
        }
    },

    "Security Testing": {
        icon: "🧪",
        description: {
            en: "Authorized security testing and research.",
            bn: "Authorized security testing ও research।",
            ur: "Authorized security testing اور research۔"
        }
    },

    "Password Security": {
        icon: "🔐",
        description: {
            en: "Password and authentication security.",
            bn: "Password ও authentication security।",
            ur: "Password اور authentication security۔"
        }
    },

    "Authentication Testing": {
        icon: "🔑",
        description: {
            en: "Learn authentication security.",
            bn: "Authentication security শেখা।",
            ur: "Authentication security سیکھیں۔"
        }
    },

    "Networking": {
        icon: "🔌",
        description: {
            en: "Networking fundamentals and troubleshooting.",
            bn: "Networking fundamentals ও troubleshooting।",
            ur: "Networking fundamentals اور troubleshooting۔"
        }
    },

    "Web Enumeration": {
        icon: "📂",
        description: {
            en: "Authorized web resource discovery.",
            bn: "Authorized web resource discovery।",
            ur: "Authorized web resource discovery۔"
        }
    }

};
```

