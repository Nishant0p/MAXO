import { useNavigate, useLocation } from 'react-router-dom';
import './projects.css';

const projectDescriptions: { [key: string]: string } = {
  // Commercial Architecture
  'corporate-offices': 'State-of-the-art corporate office spaces designed to maximize productivity and foster collaboration. Features modern architectural elements with sustainable design practices.',
  'retail-shopping': 'Premium retail and shopping centers that blend architectural excellence with exceptional retail experiences. Designed to attract customers and drive commerce.',
  'business-hubs': 'Dynamic business hubs that serve as epicenters for innovation and entrepreneurship. Equipped with modern amenities and flexible spaces.',
  'modern-offices': 'Contemporary office spaces featuring cutting-edge design and technology. Optimized for modern work culture and employee wellness.',
  
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

  const getDescription = (slug: string) => {
    return projectDescriptions[slug] || 'A thoughtfully designed architectural project that reflects our commitment to excellence and innovation.';
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
            {getDescription(project.slug)}
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
