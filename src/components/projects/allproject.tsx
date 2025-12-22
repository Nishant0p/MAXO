import { useNavigate, useLocation } from 'react-router-dom';
import './projects.css';

const projectDescriptions: { [key: string]: string } = {
  // Commercial Architecture
  'SARDHAV FARM HOUSE': `The farmhouse is nestled on the tranquil outskirts of Ahmedabad. The site is generously spread across a lush green expanse, bordered by dense vegetation that creates a serene buffer from the surrounding environment. Each structure is designed with a unique architectural language to enrich the overall experience. The house design reflects a neo-classical style with its symmetrical form, arched openings, and columned portico. The club building adopts a European style, characterized by its terracotta-tiled sloping roof, stuccoed walls, and rhythmic arched windows. The office follows an organic modernist style, defined by its fluid, curvilinear shell structure and minimalistic form. The blend of clean modern finishes with traditional classical elements creates a sense of elegance and timelessness. A winding pathway guides visitors through the manicured lawns, creating visual connection between entrance and the building. The landscape is not just decorative; it’s immersive, with strategically placed trees, shrubs, and garden features that enhance both the privacy and beauty.`,
  'PODIUM INDORE': 'A contemporary commercial development in Indore, featuring innovative podium architecture and versatile business spaces.',
  'MIXED USE DEVELOPMENT (VERAVAL)': 'A dynamic mixed-use project in Veraval, integrating commercial, retail, and leisure spaces for a vibrant urban experience.',
  'ZUNDAL CORPORATE HOUSE 225_226': 'A state-of-the-art corporate house designed for productivity and prestige, located in Zundal.',
  'ZUNDAL_228 (FACADE )': 'A striking facade project in Zundal, showcasing modern architectural aesthetics and functional design.',
  'USMANPURA 4BHK': 'A premium 4BHK residential project in Usmanpura, offering spacious living with contemporary design.',
  'SIKHAR BANGLOW': 'A bespoke bungalow project at Sikhar, combining luxury with personalized architectural details.',
  'DIVINE HIGHLAND': 'A high-end commercial and residential development, Divine Highland sets new standards in urban living.',
  'UTSAV DEVELOPERS': 'A signature project by Utsav Developers, known for quality construction and innovative design.',
  'VARDHAN INDAUSTRIAL PARK OFFICE': 'Modern office spaces within Vardhan Industrial Park, designed for efficiency and growth.',
  'VARDHAN SITE OFFICE': 'A functional and well-equipped site office at Vardhan, supporting seamless project management.',
  
  // Cultural Public
  'museums-galleries': 'World-class museums and gallery spaces that showcase art and culture. Designed to provide immersive experiences and preserve heritage.',
  'performance-theaters': 'Sophisticated theaters designed for optimal acoustics and performance. Spaces that inspire artistic expression and audience engagement.',
  'public-gathering-spaces': 'Vibrant public spaces designed for community gatherings and cultural events. Creating memorable experiences for all visitors.',
  'cultural-centers': 'Comprehensive cultural centers that celebrate diversity and creativity. Spaces for learning, performance, and cultural exchange.',
  
  // Educational Facilities
  'universities-colleges': 'Modern educational facilities supporting academic excellence and research. Designed to inspire learning and innovation among students.',
  'schools-learning': 'Innovative learning centers with state-of-the-art classrooms and facilities. Creating environments where students thrive and grow.',
  'research-labs': 'Advanced research laboratories equipped with cutting-edge technology. Facilitating groundbreaking discoveries and scientific advancement.',
  'training-centers': 'Specialized training facilities designed for skill development and professional growth. Modern spaces for effective learning outcomes.',
  
  // Healthcare
  'hospitals-medical': 'State-of-the-art medical facilities designed with patient care as priority. Equipped with advanced technology and compassionate spaces.',
  'clinics-wellness': 'Modern wellness clinics focused on preventive care and holistic health. Designed to provide a comfortable healing environment.',
  'diagnostic-centers': 'Advanced diagnostic centers with cutting-edge imaging and testing facilities. Precision and accuracy in medical diagnostics.',
  'medical-labs': 'Professional medical laboratories with stringent quality standards. Supporting accurate diagnoses and optimal patient outcomes.',
  
  // Hospitality
  'luxury-hotels': 'Luxury hotel spaces designed for ultimate comfort and elegance. Premium amenities and world-class service in sophisticated settings.',
  'fine-dining': 'Exquisite fine dining establishments combining culinary excellence with architectural beauty. Creating unforgettable dining experiences.',
  'event-venues': 'Versatile event venues designed for memorable celebrations and corporate functions. Flexible spaces with premium facilities.',
  'spa-wellness': 'Serene spa and wellness centers dedicated to relaxation and rejuvenation. Tranquil spaces for ultimate wellness experiences.',
  
  // Recreational Spaces
  'sports-fitness': 'Modern sports and fitness centers with comprehensive facilities. Designed to promote active living and community wellness.',
  'parks-outdoor': 'Beautiful outdoor parks and recreational spaces. Creating green spaces for community enjoyment and environmental sustainability.',
  'entertainment': 'Dynamic entertainment complexes offering diverse activities and attractions. Designed for family fun and entertainment.',
  'community-recreation': 'Community recreation facilities promoting social engagement. Spaces for all ages to gather and enjoy activities together.',
  
  // Residential Design
  'luxury-apartments': 'Luxury residential apartments combining elegance with modern comfort. Premium features and sophisticated living spaces.',
  'modern-villas': 'Contemporary villa designs offering privacy and luxury. Architectural masterpieces for discerning homeowners.',
  'community-dev': 'Planned community developments with integrated residential amenities. Creating vibrant neighborhoods and sustainable living.',
  'townhouses': 'Modern townhouse designs maximizing space and style. Perfect blend of urban convenience and residential comfort.',
  
  // Urban Planning
  'smart-city': 'Smart city development integrating technology for sustainable urban living. Creating efficient and livable urban environments.',
  'transportation': 'Advanced transportation infrastructure connecting communities. Designed for efficient mobility and connectivity.',
  'urban-renewal': 'Urban renewal projects revitalizing neighborhoods and city spaces. Transforming communities through thoughtful design.',
  'city-planning': 'Comprehensive city planning creating livable and sustainable communities. Balancing growth with quality of life.',
};

const AllProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const project = location.state?.project;

  const getDescription = (slug: string, title?: string) => {
    // Try slug, then title, then fallback
    return projectDescriptions[slug] || (title ? projectDescriptions[title] : undefined) || 'A thoughtfully designed architectural project that reflects our commitment to excellence and innovation.';
  };

  if (!project) {
    return (
      <div style={{ 
        backgroundColor: '#000', 
        minHeight: '100vh', 
        padding: '2rem',
        color: '#fff'
      }}>
        <button 
          onClick={() => navigate(-1)} 
          className="back-button"
          style={{ marginBottom: '2rem' }}
        >
          ← Back
        </button>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>No project selected</p>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      padding: '2rem',
      color: '#000'
    }}>
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
        style={{ marginBottom: '3rem' }}
      >
        ← Back
      </button>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Left Side - Text */}
        <div style={{ paddingRight: '2rem' }}>
          <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            {project.category}
          </p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#000', fontWeight: 'bold' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
            {getDescription(project.slug, project.title)}
          </p>
        </div>

        {/* Right Side - Image */}
        <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
          <img 
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProject;
