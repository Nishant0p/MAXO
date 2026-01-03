const projects = [
  { id: '01', title: 'Commercial Architecture', loc: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop' },
  { id: '02', title: 'Residential Design', loc: 'Oslo, Norway', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop' },
  { id: '03', title: 'Cultural & Public', loc: 'Berlin, Germany', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2707&auto=format&fit=crop' },
  { id: '04', title: 'Hospitality', loc: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2677&auto=format&fit=crop' },
  { id: '05', title: 'Urban Planning', loc: 'New York, USA', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2670&auto=format&fit=crop' },
  { id: '06', title: 'Educational Facilities', loc: 'Singapore', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop' },
  { id: '07', title: 'Healthcare', loc: 'Zurich, Switzerland', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2670&auto=format&fit=crop' },
  { id: '08', title: 'Recreational Spaces', loc: 'Madrid, Spain', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2670&auto=format&fit=crop' }
];

// (upperRow and lowerRow removed — using a stable grid instead)

export default function WorkGallery({ isMobile }: { isMobile?: boolean }) {
  return (
    <section style={{ position: 'relative', zIndex: 40, backgroundColor: '#e8e8e8', padding: '100px 0', overflow: 'hidden' }}>
      {/* Background Animation: GIF (sticky, always behind content) */}
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.1 // Reduced opacity for light background
      }}>
        <img 
          src="https://media.tenor.com/2QGQnXlI3p8AAAAC/teach-me-how-to-dougie.gif" 
          alt="Work Gallery Animation" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ paddingLeft: isMobile ? '24px' : '5vw', marginBottom: '60px' }}>
            <h1 style={{ color: '#111', fontSize: isMobile ? '3rem' : 'clamp(3rem, 5vw, 6rem)', margin: 0, lineHeight: 1 }}>Our Expertise</h1>
        </div>
        {/* Grid of projects (stable) */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)', gap: '30px', padding: isMobile ? '0 24px' : '0 5vw' }}>
          {projects.map(p => (
            <Card key={p.id} project={p} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ project, isMobile }: { project: any, isMobile?: boolean }) {
  return (
    <div
      style={{ width: isMobile ? '60vw' : '22vw', minWidth: isMobile ? '220px' : '280px', aspectRatio: '12/8', position: 'relative', flexShrink: 0, cursor: 'pointer' }}
    >
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', position: 'relative' }}>
        <img 
          src={project.img} 
          alt={project.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
        />
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
        <h3 style={{ color: 'white', fontSize: '1.3rem', margin: 0 }}>{project.title}</h3>
        <p style={{ color: '#ddd', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>{project.loc}</p>
      </div>
    </div>
  )
}
