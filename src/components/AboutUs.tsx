import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
import StaggeredMenu from './StaggeredMenu';

// --- CSS Scroll Grid Data & Configuration ---
const gridItemsData = [
  'oklch()', 'scroll()', 'text-box-trim', 'pow()', '@property', 'top-layer',
  '@view-transition', 'var()', 'clamp()', 'view()', 'MAXO', '@layer',
  '@swash', 'subgrid', 'in oklab', ':popover-open', 'abs()', 'sin()',
  ':has()', '::marker', '1cap', 'scrollbar-color', 'scroll-timeline',
  'view-timeline', 'overlay', 'scale', 'ascent-override', 'initial-letter',
  'inset', '@container', 'accent-color', 'color-mix()', '@scope',
  '@starting-style', 'override-colors', 'anchor()', 'scroll-snap',
  '::backdrop', '::cue', ':focus-visible', ':user-valid', ':fullscreen',
  ':dir()', 'caret-color', 'aspect-ratio', 'cross-fade()', 'image-set()',
  'env()', 'place-content', 'gap',
];

const itemConfig = [
  { area: '1/1', range: [0.40, 0.50] },
  { area: '1/2', range: [0.20, 0.30] },
  { area: '1/3', range: [0.52, 0.62] },
  { area: '1/4', range: [0.50, 0.60] },
  { area: '2/1', range: [0.45, 0.55] },
  { area: '2/2', range: [0.10, 0.20] },
  { area: '2/3', range: [0.90, 1.00] },
  { area: '2/4', range: [0.30, 0.40] },
  { area: '3/1', range: [0.80, 0.90] },
  { area: '3/2', range: [0.70, 0.80] },
  { area: '2 / 2 / 4 / 4', range: [0.00, 0.50] },
  { area: '3/4', range: [0.52, 0.62] },
  { area: '4/1', range: [0.15, 0.25] },
  { area: '4/2', range: [0.07, 0.17] },
  { area: '4/3', range: [0.75, 0.85] },
  { area: '4/4', range: [0.03, 0.13] },
  { area: '2/1', range: [0.87, 0.97] },
  { area: '2/2', range: [0.42, 0.52] },
  { area: '2/3', range: [0.57, 0.67] },
  { area: '2/4', range: [0.37, 0.47] },
  { area: '3/1', range: [0.12, 0.22] },
  { area: '3/2', range: [0.08, 0.18] },
  { area: '3/3', range: [0.84, 0.94] },
  { area: '3/4', range: [0.33, 0.43] },
  { area: '1/1', range: [0.48, 0.58] },
  { area: '1/2', range: [0.13, 0.23] },
  { area: '1/3', range: [0.78, 0.88] },
  { area: '1/4', range: [0.62, 0.72] },
  { area: '4/1', range: [0.31, 0.41] },
  { area: '4/2', range: [0.08, 0.18] },
  { area: '4/3', range: [0.04, 0.14] },
  { area: '4/4', range: [0.74, 0.84] },
  { area: '2/1', range: [0.61, 0.71] },
  { area: '2/2', range: [0.26, 0.36] },
  { area: '2/3', range: [0.63, 0.73] },
  { area: '2/4', range: [0.11, 0.21] },
  { area: '3/1', range: [0.89, 0.99] },
  { area: '3/2', range: [0.33, 0.43] },
  { area: '3/3', range: [0.88, 0.98] },
  { area: '3/4', range: [0.22, 0.32] },
  { area: '1/1', range: [0.16, 0.26] },
  { area: '1/2', range: [0.26, 0.36] },
  { area: '1/3', range: [0.66, 0.76] },
  { area: '1/4', range: [0.03, 0.13] },
  { area: '4/1', range: [0.44, 0.54] },
  { area: '4/2', range: [0.11, 0.21] },
  { area: '4/3', range: [0.23, 0.33] },
  { area: '4/4', range: [0.39, 0.49] },
  { area: '3/1', range: [0.59, 0.69] },
  { area: '3/2', range: [0.06, 0.16] },
];

// --- Grid Item Component ---
interface GridItemProps {
  text: string;
  area: string;
  scrollYProgress: any;
  range: number[];
}

const GridItem = ({ text, area, scrollYProgress, range }: GridItemProps) => {
  const isSpecial = text === 'MAXO';

  const itemProgress = useTransform(
    scrollYProgress,
    range,
    [0, 1],
    { clamp: true }
  );

  const z = useTransform(itemProgress, [0, 0.5, 1], [-1000, 0, 1000]);
  const opacity = useTransform(itemProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(itemProgress, [0, 0.5, 1], [5, 0, 5]);

  const transform = useTransform(z, (zVal) => `translateZ(${zVal}px)`);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{
        gridArea: area,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontSize: isSpecial ? '15vmin' : '5vmin',
        fontWeight: isSpecial ? 'bold' : 'lighter',
        whiteSpace: 'nowrap',
        willChange: 'transform, opacity, filter',
        color: 'white',
        transform,
        opacity,
        filter,
      }}
    >
      {isSpecial ? <b>{text}</b> : text}
    </motion.div>
  );
};

// --- CSS Scroll Grid Component ---
const CSSScrollGrid = () => {
  const { scrollYProgress } = useScroll();

  const stuckGridStyle: React.CSSProperties = {
    height: '100vh',
    perspective: '1000px',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 25vh)',
    gridTemplateColumns: 'repeat(4, 25vw)',
    placeItems: 'center',
    position: 'sticky',
    top: 0,
    overflow: 'clip',
    zIndex: 5,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.95) 100%)',
  };

  const itemsToRender = gridItemsData.map((text, index) => {
    const config = itemConfig[index];
    if (text === 'MAXO') return null;

    return (
      <GridItem
        key={index}
        text={text}
        area={config.area}
        scrollYProgress={scrollYProgress}
        range={config.range}
      />
    );
  }).filter(Boolean);

  const specialMAXOItem = (
    <GridItem
      key="special-maxo"
      text="MAXO"
      area="2 / 2 / 4 / 4"
      scrollYProgress={scrollYProgress}
      range={itemConfig.find(c => c.area === '2 / 2 / 4 / 4')?.range || [0.00, 0.50]}
    />
  );

  return (
    <motion.div style={stuckGridStyle}>
      {itemsToRender}
      {specialMAXOItem}
    </motion.div>
  );
};

// --- Typewriter Effect Component for MAXO text ---
const TypewriterMAXO = ({ delay = 0 }: { delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = 'MAXO';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + (currentIndex * 100));

    return () => clearTimeout(timer);
  }, [currentIndex, delay]);

  return (
    <span style={{ fontWeight: 'bold', color: 'black' }}>
      {displayText}
      {currentIndex < text.length && (
        <span style={{ 
          animation: 'blink 1s infinite',
          marginLeft: '2px',
          color: 'black'
        }}>|</span>
      )}
    </span>
  );
};

// --- Main About Us Component ---
export default function AboutUs() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [location]);

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaborative design processes that bring out the best in every project.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries and exploring new possibilities in design to create unique and impactful solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality work that exceeds expectations and stands the test of time.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is approached with genuine enthusiasm and dedication to creating meaningful design experiences.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/team-1.jpg',
      bio: 'With over 15 years of experience in design, Sarah leads our creative vision.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Architect',
      image: '/team-2.jpg',
      bio: 'Michael brings innovative architectural solutions to every project.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      image: '/team-3.jpg',
      bio: 'Emily specializes in creating beautiful and functional interior spaces.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
      {/* Add CSS for blinking cursor animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

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

      {/* CSS Scroll Grid Hero Section */}
      <CSSScrollGrid />

      {/* Spacer to allow scroll animation to complete */}
      <div style={{ height: '300vh', background: 'white' }} />

      {/* All Page Content - Shows after scroll animation completes */}
      <div style={{ position: 'relative', zIndex: 10, background: 'white' }}>
        
        {/* About Content Section - Shows after scroll grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        style={{
          padding: '120px 40px 80px',
          background: 'linear-gradient(135deg, rgba(245,245,245,0.9) 0%, rgba(230,230,230,0.9) 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%'
        }}>
          <div style={{ textAlign: 'left' }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontSize: '4rem',
                fontWeight: 300,
                lineHeight: 1.1,
                margin: '0 0 30px 0',
                color: 'black'
              }}
            >
              About <TypewriterMAXO delay={200} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: '1.2rem',
                color: 'rgba(0, 0, 0, 0.8)',
                lineHeight: 1.6,
                margin: '0 0 25px 0'
              }}
            >
              We are a creative design studio at <TypewriterMAXO delay={800} /> passionate about transforming spaces and creating 
              meaningful experiences through innovative design solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{
                fontSize: '1.1rem',
                color: 'rgba(0, 0, 0, 0.7)',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              Our team at <TypewriterMAXO delay={1200} /> combines creativity with functionality to deliver exceptional design 
              experiences that inspire and elevate every project we undertake.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="https://media1.tenor.com/m/GLMgQt-oMSEAAAAd/teach-me-how-to-dougie.gif"
                alt="MAXO Creative Studio"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/500x400/333333/ffffff?text=MAXO+Studio";
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              margin: '0 0 30px 0',
              color: 'black'
            }}>
              Our <span style={{ fontWeight: 'bold' }}>Story</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(0, 0, 0, 0.8)',
              margin: '0 0 25px 0'
            }}>
              Founded in 2015, MAXO began as a small team of passionate designers with a vision 
              to create spaces that inspire and elevate the human experience. What started as a 
              local studio has grown into a recognized name in the design industry.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(0, 0, 0, 0.8)',
              margin: 0
            }}>
              Today, we continue to push boundaries, explore new possibilities, and create 
              designs that not only look beautiful but also function seamlessly in the real world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              height: '400px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>[Studio Image Placeholder]</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 40px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.5rem',
              fontWeight: 300,
              textAlign: 'center',
              margin: '0 0 60px 0',
              color: 'black'
            }}
          >
            Our <span style={{ fontWeight: 'bold' }}>Values</span>
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  style={{
                    padding: '30px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <IconComponent size={48} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    margin: '0 0 15px 0',
                    color: 'white'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 300,
            textAlign: 'center',
            margin: '0 0 60px 0',
            color: 'white'
          }}
        >
          Meet Our <span style={{ fontWeight: 'bold' }}>Team</span>
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>[Photo]</p>
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                margin: '0 0 10px 0',
                color: 'white'
              }}>
                {member.name}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '1rem',
                margin: '0 0 15px 0'
              }}>
                {member.role}
              </p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
