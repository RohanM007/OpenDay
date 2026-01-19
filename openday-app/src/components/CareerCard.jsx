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
        duration: 0.5,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="career-icon"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2
        }}
        whileHover={{
          scale: 1.3,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
      >
        {career.icon}
      </motion.div>
      <h3>{career.name}</h3>
      <p className="career-description">{career.description}</p>

      <div className="career-skills">
        <h4>Key Skills</h4>
        <ul>
          {career.skills.map((skill, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 + 0.3 + idx * 0.1 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="career-modules">
        <h4>Key Modules</h4>
        <div className="module-tags">
          {career.keyModules.map((moduleCode, idx) => (
            <motion.span
              key={idx}
              className="module-tag"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.15 + 0.5 + idx * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {moduleCode}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCard;

