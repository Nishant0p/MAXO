import { useNavigate } from 'react-router-dom';
import './projects.css';

const CommercialArchitecture = () => {
  const navigate = useNavigate();

  const projectItem = [
    { id: 1, title: "Corporate Office Spaces", slug: "corporate-offices", links: [{ id: 1 }, { id: 2 }], image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop" },
    { id: 2, title: "Retail & Shopping Centers", slug: "retail-shopping", links: [{ id: 1 }, { id: 2 }], image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop" },
    { id: 3, title: "Business Hubs", slug: "business-hubs", links: [{ id: 1 }, { id: 2 }], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" },
    { id: 4, title: "Modern Offices", slug: "modern-offices", links: [{ id: 1 }, { id: 2 }], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop" },
  ];

  const handleImageClick = (item: typeof projectItem[0]) => {
    navigate('/allproject', { 
      state: { 
        project: { 
          ...item, 
          category: 'Commercial Architecture'
        } 
      } 
    });
  };

  return (
    <div className="project-page">
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
      >
        ← Back
      </button>

      <section className="project-section">
        <div className="section-header">
          <h1 className="section-title">Commercial Architecture</h1>
        </div>
        
        <div className="projects-grid">
          {projectItem.map((item) => (
            <div className="project-card-wrapper" key={item.id}>
              <div className="project-card-label">
                <span className="label-dot" />
                <h2 className="label-title">
                  {item.title}
                </h2>
              </div>
              
              <div 
                className="project-card-image"
                onClick={() => handleImageClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default CommercialArchitecture;
