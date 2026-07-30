import { motion } from 'framer-motion';
import './CareerCard.css';

const CareerCard = ({ career, index }) => {
  return (
    <motion.div
      className="career-card"
      style={{ '--career-color': career.color }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.25,
        delay: Math.min(index * 0.04, 0.12),
        ease: "easeOut"
      }}
      whileHover={{
        y: -3,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      }}
    >
      <div className="career-icon">
        {career.icon}
      </div>
      <h3>{career.name}</h3>
      <p className="career-description">{career.description}</p>

      <div className="career-skills">
        <h4>Key Skills</h4>
        <ul>
          {career.skills.map((skill, idx) => (
            <li key={idx}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CareerCard;

