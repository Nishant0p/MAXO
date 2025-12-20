import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const Healthcare = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Hospitals & Medical Centers", text: "State-of-the-art medical facilities designed for patient comfort and care excellence.", img: "https://images.unsplash.com/photo-1631217314830-4f8217c53cc8?w=600&h=400&fit=crop" },
    { title: "Clinics & Wellness Centers", text: "Modern healthcare facilities combining cutting-edge technology with compassionate patient care.", img: "https://images.unsplash.com/photo-1576091160550-112173f1f664?w=600&h=400&fit=crop" },
    { title: "Diagnostic Centers", text: "Advanced diagnostic and treatment facilities designed for optimal patient outcomes and safety.", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Healthcare Facilities</h1>

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

export default Healthcare;
