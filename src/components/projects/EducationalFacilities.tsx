import { useNavigate } from 'react-router-dom';
import './projects.css';

const EducationalFacilities = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Universities & Colleges", text: "World-class learning environments that inspire intellectual growth and academic excellence.", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop" },
    { title: "Schools & Learning Centers", text: "Innovative educational spaces designed to foster creativity, collaboration, and lifelong learning.", img: "https://images.unsplash.com/photo-1427504494785-cdda0e4a1786?w=600&h=400&fit=crop" },
    { title: "Research & Labs", text: "State-of-the-art research facilities equipped for scientific exploration and technological advancement.", img: "https://images.unsplash.com/photo-1497633762265-25c6bdc50e6d?w=600&h=400&fit=crop" },
  ];

  return (
    <div className="project-container">
      <div className="project-wrapper">
        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
        >
          ← Back
        </button>
        <h1 className="project-title">Educational Facilities</h1>

        {content.map((item, index) => (
          <div 
            key={index} 
            className={index % 2 === 0 ? "project-content" : "project-content row-reverse"}
          >
            {/* Text Block */}
            <div className="project-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>

            {/* Image Block */}
            <div className="project-image">
              <img 
                src={item.img} 
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalFacilities;
