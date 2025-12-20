import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const UrbanPlanning = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Smart City Development", text: "Comprehensive urban solutions that create vibrant, sustainable, and livable cities.", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop" },
    { title: "Transportation Infrastructure", text: "Modern urban infrastructure designed for efficient mobility and sustainable transportation systems.", img: "https://images.unsplash.com/photo-1480949922971-8cdb8e375cf8?w=600&h=400&fit=crop" },
    { title: "Urban Renewal Projects", text: "Strategic urban regeneration initiatives transforming neighborhoods into dynamic, connected communities.", img: "https://images.unsplash.com/photo-1508873699372-f91e1d6ff537?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Urban Planning</h1>

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

export default UrbanPlanning;
