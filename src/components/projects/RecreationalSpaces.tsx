import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const RecreationalSpaces = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Sports & Fitness Centers", text: "Dynamic recreational areas that promote active lifestyles and community wellness.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
    { title: "Parks & Outdoor Spaces", text: "Green recreational environments designed for community engagement, wellness, and outdoor leisure activities.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop" },
    { title: "Entertainment Complexes", text: "Multi-functional recreational facilities offering diverse activities for families and communities.", img: "https://images.unsplash.com/photo-1552675525-f75c2f4baf3f?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Recreational Spaces</h1>

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

export default RecreationalSpaces;
