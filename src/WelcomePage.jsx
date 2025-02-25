// welcome.jsx

import { HelmetProvider } from "react-helmet-async";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <HelmetProvider>
        {/* Page Title */}
        <title>Welcome to OpenCourseHub</title>

        {/* Meta Tags */}
        <meta
          name="description"
          content="Learn, Explore, and Grow with OpenCourseHub - Your go-to platform for online courses."
        />
        <meta property="og:title" content="Welcome to OpenCourseHub" />
        <meta
          property="og:description"
          content="Discover top-quality courses on OpenCourseHub."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#007bff" />

        {/* Base URL */}
        <base href="https://opencoursehub.online/" />

        {/* HTML & Body Attributes */}
        <htmlAttributes lang="en" />
        <bodyAttributes class="welcome-body" />

        {/* Link Tags */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        />

        {/* Inline Styles */}
        <style>{`
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        {/* Scripts (Example: Google Analytics) */}
        <script>{`
          console.log("Welcome to OpenCourseHub!");
        `}</script>

        {/* NoScript Fallback */}
        <noscript>
          Your browser does not support JavaScript. Please enable it for a
          better experience.
        </noscript>
      </HelmetProvider>

      <header className="welcome-header">
        <h1>Welcome to OpenCourseHub</h1>
        <p>Explore high-quality courses and upskill yourself.</p>
        <a href="/courses" className="btn">
          Get Started
        </a>
      </header>
    </div>
  );
};

export default WelcomePage;
