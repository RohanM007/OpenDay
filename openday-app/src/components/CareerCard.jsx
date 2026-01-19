import './CareerCard.css';

const CareerCard = ({ career }) => {
  return (
    <div className="career-card" style={{ '--career-color': career.color }}>
      <div className="career-icon">{career.icon}</div>
      <h3>{career.name}</h3>
      <p className="career-description">{career.description}</p>

      <div className="career-skills">
        <h4>Key Skills</h4>
        <ul>
          {career.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="career-modules">
        <h4>Key Modules</h4>
        <div className="module-tags">
          {career.keyModules.map((moduleCode, index) => (
            <span key={index} className="module-tag">{moduleCode}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;

