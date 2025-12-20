import { useNavigate } from 'react-router-dom';
import './projects.css';

const Hospitality = () => {
  const navigate = useNavigate();
  const content = [
    { title: "Luxury Hotels & Resorts", text: "Luxurious hospitality venues that provide unforgettable experiences for guests.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop" },
    { title: "Fine Dining Restaurants", text: "Elegant culinary spaces designed to enhance gastronomic experiences and create lasting memories.", img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop" },
    { title: "Event Venues", text: "Sophisticated event spaces tailored for conferences, weddings, and celebrations of any scale.", img: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?w=600&h=400&fit=crop" },
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
        <h1 className="project-title">Hospitality Spaces</h1>

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

export default Hospitality;
