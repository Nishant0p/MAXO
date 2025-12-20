import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const ResidentialDesign = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Luxury Apartments", text: "Beautiful residential projects that combine comfort, style, and sustainable living.", img: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600&h=400&fit=crop" },
    { title: "Modern Villas", text: "Contemporary residential designs emphasizing elegance, functionality, and environmental sustainability.", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop" },
    { title: "Community Developments", text: "Comprehensive residential communities designed to foster connection, comfort, and quality living.", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Residential Design</h1>

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

export default ResidentialDesign;
