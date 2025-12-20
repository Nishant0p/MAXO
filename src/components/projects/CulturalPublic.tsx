import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const CulturalPublic = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Museums & Galleries", text: "Inspiring cultural venues that celebrate heritage and bring communities together.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop" },
    { title: "Performance Theaters", text: "Acoustically designed performance spaces that showcase artistic excellence and cultural expression.", img: "https://images.unsplash.com/photo-1577720643272-265f434e0f07?w=600&h=400&fit=crop" },
    { title: "Public Gathering Spaces", text: "Versatile community centers designed for cultural events, exhibitions, and public engagement.", img: "https://images.unsplash.com/photo-1584486277351-cd91d0a22b20?w=600&h=400&fit=crop" },
  ];

  return (
    <div className="project-container">
      <div className="project-wrapper">        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
        >
          ← Back
        </button>        <h1 className="project-title">Cultural Public Spaces</h1>

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

export default CulturalPublic;
