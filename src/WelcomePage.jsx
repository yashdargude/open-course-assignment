// welcome.jsx

import { HelmetProvider, Helmet } from "react-helmet-async";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <HelmetProvider>
      <div className="welcome-container">
        <Helmet>
          <title>OpenCourseHub</title>

          <meta
            name="description"
            content="Learn, Explore, and Grow with OpenCourseHub - Your go-to platform for online courses."
          />
        </Helmet>
        <meta property="og:title" content="Welcome to OpenCourseHub" />
        <meta
          property="og:description"
          content="Discover top-quality courses on OpenCourseHub."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#007bff" />

        <base href="https://opencoursehub.online/" />

        <htmlAttributes lang="en" />
        <bodyAttributes class="welcome-body" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
        />

        <style>{`
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>

        <script>{`
          console.log("Welcome to OpenCourseHub!");
        `}</script>

        <noscript>
          Your browser does not support JavaScript. Please enable it for a
          better experience.
        </noscript>

        <header className="welcome-header">
          <h1>Welcome to OpenCourseHub</h1>
          <p>Explore high-quality courses and upskill yourself.</p>
          <a href="/courses" className="btn">
            Get Started
          </a>
        </header>

        <footer className="welcome-footer">
          <p>&copy; 2023 OpenCourseHub. All rights reserved.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default WelcomePage;
