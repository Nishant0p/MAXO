import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



export default function WorkGallery({ isMobile }: { isMobile?: boolean }) {
  const targetRef = useRef(null);
  // Scroll progress for horizontal animation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  // Move cards from right (100vw) to left (0vw) as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], ['100vw', '0vw']);



  return (
    <section ref={targetRef} style={{ height: '400vh', position: 'relative', zIndex: 40, background: '#000' }}>
      {/* Background Animation: GIF (sticky, always behind content) */}
      <div style={{ 
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <img 
          src="https://media.tenor.com/2QGQnXlI3p8AAAAC/teach-me-how-to-dougie.gif" 
          alt="Work Gallery Animation" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, display: 'block' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9))' }} />
      </div>
      <div style={{ 
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1
      }}>

        {/* Content Overlay */}
        <div style={{ position: 'relative', zIndex: 10, paddingLeft: isMobile ? '24px' : '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <div style={{ marginBottom: '4vh' }}>
             <h2 style={{ color: 'white', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Selected Works</h2>
             <h1 style={{ color: 'white', fontSize: isMobile ? '3rem' : 'clamp(3rem, 5vw, 6rem)', margin: 0, lineHeight: 1 }}>Architectural<br/>Excellence</h1>
          </div>

          {/* Project cards */}
          <motion.div style={{ display: 'flex', gap: isMobile ? '24px' : '4vw', flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'center', marginTop: '3vh', x }}>
            {[
              { id: '01', title: 'The Vertex Tower', loc: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop' },
              { id: '02', title: 'Mono Residence', loc: 'Oslo, Norway', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop' },
              { id: '03', title: 'Carbon Museum', loc: 'Berlin, Germany', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2707&auto=format&fit=crop' },
              { id: '04', title: 'Aero Terminal', loc: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2677&auto=format&fit=crop' }
            ].map((p, i) => (
              <div
                key={p.id}
                style={{ width: isMobile ? '70vw' : '18vw', minWidth: isMobile ? '260px' : '180px', aspectRatio: '3/4', position: 'relative', flexShrink: 0, cursor: 'pointer', marginBottom: '2vh' }}
              >
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                  />
                </div>
                <div style={{ position: 'absolute', bottom: '-40px', left: 0 }}>
                  <h3 style={{ color: 'white', fontSize: '1.5rem', margin: 0 }}>{p.title}</h3>
                  <p style={{ color: '#999', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{p.loc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
