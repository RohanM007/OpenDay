import { motion } from 'framer-motion';
import './CertificatePage.css';

const CertificatePage = ({ onBack }) => {
  return (
    <div className="certificate-page">
      <motion.div
        className="coming-soon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>📱 IIE Higher Certificate</h1>
        <h2>in Mobile Application and Web Development</h2>
        <p>Content coming soon...</p>
        <motion.button
          className="back-btn"
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Programs
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CertificatePage;

