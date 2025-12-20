import React from 'react';
import { useNavigate } from 'react-router-dom';
import './projects.css';

const CommercialArchitecture = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Corporate Office Spaces", text: "Modern commercial buildings designed for business excellence and innovation.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop" },
    { title: "Retail & Shopping Centers", text: "Dynamic retail environments that blend aesthetics with functionality for optimal customer experience.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" },
    { title: "Business Hubs", text: "Contemporary commercial complexes fostering collaboration and entrepreneurial growth.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Commercial Architecture</h1>

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

export default CommercialArchitecture;
