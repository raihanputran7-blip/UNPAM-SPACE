# UNPAM SPACE - Product Requirements Document (Revised)

## 1. Introduction
*   **Product Name:** UNPAM SPACE
*   **Overview:** A platform designed to connect UNPAM students and facilitate various activities, from academic discussions to social interactions and project collaborations.
*   **Tagline:** (To be defined, e.g., "Connect, Collaborate, Conquer: Your UNPAM Journey Starts Here")
*   **Core Value Proposition:** Provide a dynamic and engaging digital hub for the UNPAM community, fostering collaboration, communication, and a sense of belonging.

## 2. User Flows

### 2.1. Landing Page to Login/Registration
1.  User accesses the UNPAM SPACE URL.
2.  The Landing Page is displayed with introductory information and a "Mulai Sekarang" / "Get Started" button.
3.  User clicks "Mulai Sekarang" / "Get Started".
4.  User is redirected to the Login/Registration Page.

### 2.2. Login/Registration to Main Page
1.  User successfully logs in or registers on the Login/Registration Page.
2.  User is redirected to the Main Page.

### 2.3. Main Page to Feature Pages
1.  User is on the Main Page, viewing the grid of available features.
2.  User clicks on a specific feature icon/card.
3.  User is navigated to the dedicated page for that selected feature.

## 3. Feature Details

### 3.1. Landing Page

*   **Header Section:**
    *   **Main Title:** "UNPAM SPACE"
        *   **Placement:** Centered on the landing page.
        *   **Animation:** Animated text (e.g., subtle entrance, glowing effect, or typewriter effect).
    *   **Tagline/Informative Text:** Additional text providing context or a brief description of UNPAM SPACE (e.g., "Your hub for connecting with fellow UNPAM students, collaborating on projects, and exploring communities.").
*   **Visual Elements:**
    *   **Background:** Animated cursor movement in the background (e.g., a subtle, non-distracting animation that follows the user's cursor or a predefined path).
    *   **Scroll Animation:** Smooth scroll-triggered animations for sections or elements as the user scrolls down the page.
*   **Call to Action (CTA):**
    *   **Button:** "Mulai Sekarang" / "Get Started"
    *   **Functionality:** On click, navigates the user to the Login/Registration Page.
*   **Information Section:**
    *   Details about UNPAM SPACE, its mission, benefits, key features (brief overview).
*   **Footer Section:**
    *   **Social Media Links:** Icons and links to UNPAM SPACE's official social media channels.
    *   **Copyright Information:** (e.g., "© [Year] UNPAM SPACE. All rights reserved.")
    *   **Legal Links:**
        *   Kebijakan Privasi (Privacy Policy)
        *   Syarat dan Ketentuan (Terms & Conditions)

### 3.2. Login / Registration Page

*   Standard user authentication interface, allowing users to:
    *   Log in with existing credentials.
    *   Register for a new account.
    *   (Potentially: password reset, social media login options).

### 3.3. Main Page (Home)

*   **Welcome Section:**
    *   **Animated Welcome Text:** Dynamic text greeting the user (e.g., "Halo, [Username]!" or "Selamat datang di UNPAM SPACE!").
        *   **Animation:** Subtle text animation (e.g., fade-in, typewriter, or wave effect).
    *   **Informative Prompt:** Engaging text to encourage user interaction (e.g., "Ingin melakukan apa Anda hari ini?" or "Siap untuk menjelajahi UNPAM SPACE?").
*   **User Character Assets:**
    *   **Display:** A dedicated area for a character asset.
    *   **Asset Library:** A collection of 10 AI-generated character assets (5 female, 5 male), each with 5 different expressions.
    *   **Gender-Based Selection:** The character displayed will correspond to the user's declared gender (if available).
    *   **Randomized Expressions:** Upon each visit or refresh of the Main Page, a random expression from the selected character's set will be displayed.
    *   **Random Character Rotation:** If multiple characters are available for a given gender, they should rotate randomly over time or on refresh.
*   **Feature Navigation:**
    *   **Layout:** Grid-based display of all available features/modules within UNPAM SPACE.
    *   **Structure:** Each feature is represented by a distinct card/tile in the grid.
    *   **Functionality:** Clicking on a feature card will navigate the user to a dedicated, separate page for that specific feature. This is *not* a dashboard with features appearing in a sidebar or as sub-sections on the same page.

### 3.4. Forum / Community Page (formerly "Cari Teman")

*   **Interface Design:**
    *   **Inspiration:** The layout and user experience should be heavily inspired by popular community platforms like Discord, focusing on channels, posts, and interactive discussions.
*   **Core Functionality:**
    *   **Post Creation:** Users can create new posts within various community topics.
    *   **Topic-Based Discussions:** Each post will serve as a starting point for a specific discussion topic.
    *   **Community Categories / Topics (Examples):**
        *   `#cari-teman` (General social connections)
        *   `#mabar-game` (Find gaming teammates)
        *   `#pkm-kolaborasi` (PKM project collaboration)
        *   `#project-bersama` (Academic/personal project search)
        *   `#diskusi-matkul` (Course-specific discussions)
        *   `#it-cybersecurity` (Community for cybersecurity enthusiasts)
        *   `#network-infrastruktur` (Community for network and infrastructure discussions, e.g., Cisco)
        *   `#pengembangan-diri` (Self-improvement and skill development)
        *   (Ability for administrators to add more categories as needed).
    *   **Post Interaction:** Users can view, comment on, reply to, and react to posts (similar to Discord's message interaction features).
    *   **Search/Filter:** Ability to search for specific posts or filter by topics/categories.
*   **Premium User Exclusivity:**
    *   **Special Badge:** Subscribed/premium users will have a unique visual badge displayed next to their username/profile in the forum.
    *   **Exclusive Post Color:** Posts created by subscribed/premium users will have a distinct background or border color to highlight their premium status.
    *   **Other Potential Premium Features (Future Consideration):** Increased media upload limits, custom emojis, early access to new features, ad-free experience.

## 4. Technical Considerations (High-Level - To Be Determined)

*   **Frontend Framework:** (e.g., React.js, Next.js, Vue.js, Angular)
*   **Backend Language/Framework:** (e.g., Node.js with Express, Python with Django/Flask, PHP with Laravel)
*   **Database:** (e.g., PostgreSQL, MySQL, MongoDB)
*   **Animation Libraries:** (e.g., GSAP, Framer Motion, Lottie for complex animations)
*   **Real-time Communication (for Forum):** (e.g., WebSockets, Socket.IO)
*   **Authentication System:** (e.g., JWT, OAuth)
*   **Image/Asset Hosting:** (e.g., Cloudinary, AWS S3)

## 5. Future Enhancements (Out of Scope for Initial Release)

*   Direct messaging within the community.
*   Event creation and management.
*   User profiles with more detailed information and customization.
*   Integration with UNPAM's academic systems (e.g., course schedules, grades - requires API access).
*   Gamification elements (points, leaderboards).
