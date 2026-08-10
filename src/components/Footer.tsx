import { FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const socialLinks = {
    telegram: 'https://t.me/zohrpr',
    linkedin: 'https://linkedin.com/in/zohreh-parvandi-8bb67a2a5',
    github: 'https://github.com/zohreprv',
  };

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        {/* Main Footer Content */}
        <div
          className="d-flex flex-column flex-lg-row justify-content-between
                     align-items-center align-items-lg-start gap-4"
        >
          {/* Left: Logo & Description */}
          <div className="text-center text-lg-start">
            <div
              className="d-flex align-items-center justify-content-center
                         justify-content-lg-start gap-2 mb-2"
            >
              {/* Logo */}
              <div className="bg-primary p-1">
                <i className="fa-solid fa-utensils"></i>{' '}
              </div>
              <h5 className="mb-0 fw-bold">Tracalorie</h5>
            </div>

            <p className="text-secondary mb-0">
              An Application to Track Calorie, Meal and Workout.
            </p>
          </div>

          {/* Right: Social & Developer */}
          <div className="d-flex flex-column align-items-center align-items-lg-start gap-2">
            {/* Social Links */}
            <div className="d-flex align-items-center gap-3">
              {/* Telegram */}
              <a
                href={socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link telegram rounded-circle bg-secondary bg-opacity-50
                           d-flex align-items-center justify-content-center
                           text-light text-decoration-none"
                aria-label="Telegram"
              >
                <FaTelegram size={17} />
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin rounded-circle bg-secondary bg-opacity-50
                           d-flex align-items-center justify-content-center
                           text-light text-decoration-none"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github rounded-circle bg-secondary bg-opacity-50
                           d-flex align-items-center justify-content-center
                           text-light text-decoration-none"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>
            </div>

            {/* Developer */}
            <div className="small text-secondary">
              <span>Developed by </span>
              <span className="text-primary fw-medium">Zohreh Parvandi</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
          <div className="small text-secondary">© {currentYear} Tracalorie</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
