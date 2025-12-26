// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Globe, Cpu, Leaf, Users } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import StaggeredMenu from './StaggeredMenu';

export default function FutureThinking({ navigateTo }: { navigateTo: (page: string) => void }) {
  // const location = useLocation();
  // const navigate = useNavigate();

  const innovations = [
    {
      icon: Cpu,
      title: 'AI-Powered Design',
      description: 'Integrating artificial intelligence to optimize space planning, energy efficiency, and user experience in real-time.',
      timeline: 'Next 2-3 years'
    },
    {
      icon: Leaf,
      title: 'Sustainable Materials',
      description: 'Pioneering the use of bio-based and recycled materials that reduce environmental impact while maintaining aesthetic appeal.',
      timeline: 'Already implementing'
    },
    {
      icon: Globe,
      title: 'Virtual Reality Design',
      description: 'Immersive VR experiences that allow clients to walk through and modify designs before construction begins.',
      timeline: 'Current technology'
    },
    {
      icon: Zap,
      title: 'Smart Building Integration',
      description: 'Seamless integration of IoT devices and smart systems that learn and adapt to occupant behavior patterns.',
      timeline: 'Expanding rapidly'
    },
    {
      icon: Users,
      title: 'Collaborative Spaces',
      description: 'Designing flexible environments that adapt to changing work patterns and promote human connection.',
      timeline: 'Post-pandemic evolution'
    },
    {
      icon: Lightbulb,
      title: 'Biophilic Integration',
      description: 'Advanced integration of natural elements to improve mental health and productivity in built environments.',
      timeline: 'Growing trend'
    }
  ];

  const insights = [
    {
      title: 'The Future of Work Environments',
      date: 'November 2024',
      content: 'As remote work becomes permanent for many, office spaces are evolving into collaboration hubs rather than individual workstations. We\'re designing spaces that prioritize flexibility, wellness, and community building.',
      author: 'Sarah Johnson, Creative Director'
    },
    {
      title: 'Climate-Responsive Architecture',
      date: 'October 2024',
      content: 'Buildings of the future will actively respond to environmental conditions. From self-cooling facades to rain-harvesting systems, architecture is becoming a living, breathing organism.',
      author: 'Michael Chen, Lead Architect'
    },
    {
      title: 'Digital-Physical Integration',
      date: 'September 2024',
      content: 'The boundary between digital and physical spaces is dissolving. We\'re creating environments where digital interfaces seamlessly blend with physical architecture to enhance user experience.',
      author: 'Emily Rodriguez, Interior Designer'
    }
  ];

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      {/* Navigation */}
      <StaggeredMenu 
        items={[
          { label: 'About', ariaLabel: 'About', link: '/about' },
          { label: 'Our Work', ariaLabel: 'Our Work', link: '/work' },
          { label: 'Future Thinking', ariaLabel: 'Future Thinking', link: '/future' },
          { label: 'News', ariaLabel: 'News', link: '/news' },
          { label: 'Contact', ariaLabel: 'Contact', link: '/contact' },
        ]} 
        position="left"
        colors={['#333', '#111', '#000']}
        menuButtonColor="white"
        openMenuButtonColor="white"
        accentColor="#888"
      />



      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: '120px 40px 80px',
          textAlign: 'center',
          color: 'white',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("data:image/jpeg;base64,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")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: '4rem',
            fontWeight: 300,
            lineHeight: 1.1,
            margin: '0 0 30px 0'
          }}
        >
          Future <span style={{ fontWeight: 'bold' }}>Thinking</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Exploring emerging trends, innovative technologies, and visionary concepts 
          that will shape the future of design and architecture.
        </motion.p>
      </motion.section>

      {/* Innovation Areas */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 300,
            textAlign: 'center',
            margin: '0 0 60px 0'
          }}
        >
          Innovation <span style={{ fontWeight: 'bold' }}>Areas</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                style={{
                  padding: '30px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <IconComponent size={32} style={{ color: 'rgba(0, 0, 0, 0.8)' }} />
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {innovation.title}
                  </h3>
                </div>
                <p style={{
                  color: 'rgba(0, 0, 0, 0.7)',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0'
                }}>
                  {innovation.description}
                </p>
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'rgba(0, 0, 0, 0.9)',
                  display: 'inline-block'
                }}>
                  {innovation.timeline}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Future Vision Statement */}
      <section style={{ 
        padding: '80px 40px', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              margin: '0 0 40px 0'
            }}
          >
            Our <span style={{ fontWeight: 'bold' }}>Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            style={{
              fontSize: '1.3rem',
              lineHeight: 1.7,
              color: 'rgba(0, 0, 0, 0.8)',
              fontStyle: 'italic',
              margin: 0
            }}
          >
            "We envision a future where design seamlessly integrates with technology, 
            sustainability, and human well-being. Our goal is to create spaces that not only 
            respond to current needs but anticipate and adapt to the evolving ways we live, 
            work, and interact with our environment."
          </motion.p>
        </div>
      </section>

      {/* Insights & Research */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 300,
            textAlign: 'center',
            margin: '0 0 60px 0'
          }}
        >
          Research & <span style={{ fontWeight: 'bold' }}>Insights</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gap: '40px'
        }}>
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.8 }}
              style={{
                padding: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  margin: 0,
                  flex: 1
                }}>
                  {insight.title}
                </h3>
                <span style={{
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap'
                }}>
                  {insight.date}
                </span>
              </div>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'rgba(0, 0, 0, 0.8)',
                margin: '0 0 20px 0'
              }}>
                {insight.content}
              </p>
              <p style={{
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                margin: 0
              }}>
                — {insight.author}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}