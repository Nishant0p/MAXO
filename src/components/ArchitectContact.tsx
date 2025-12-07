import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- 1. ANIMATION SETTINGS ---
const drawSpring = {
  type: 'spring',
  stiffness: 50,
  damping: 15,
  restDelta: 0.001,
} as const;

// --- 2. COMPLEX SKYSCRAPER SVG ---
const MapLayer = ({ progress }: { progress: number }) => (
  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <motion.path
      d="M100 600 L400 300 L700 600 M0 500 L400 300 L800 500 M-100 400 L400 300 L900 400"
      stroke="#333" strokeWidth="1" fill="none"
      animate={{ pathLength: progress }} transition={drawSpring}
    />
    <motion.path
      d="M400 300 L400 800"
      stroke="#333" strokeWidth="1" fill="none"
      animate={{ pathLength: progress }} transition={drawSpring}
    />
    <motion.rect
      x="150" y="450" width="100" height="80" rx="2"
      stroke="#222" strokeWidth="1" fill="none"
      transform="skewX(-20)"
      animate={{ pathLength: Math.max(0, (progress - 0.5) * 2) }} transition={drawSpring}
    />
    <motion.rect
      x="550" y="420" width="120" height="100" rx="2"
      stroke="#222" strokeWidth="1" fill="none"
      transform="skewX(20)"
      animate={{ pathLength: Math.max(0, (progress - 0.5) * 2) }} transition={drawSpring}
    />
  </motion.g>
);

const BuildingOutline = ({ progress }: { progress: number }) => (
  <motion.g>
    <motion.path
      d="M400 150 L300 200 L300 550 L400 600 Z"
      stroke="white" strokeWidth="2" fill="none"
      animate={{ pathLength: progress }} transition={drawSpring}
    />
    <motion.path
      d="M400 150 L500 200 L500 550 L400 600 Z"
      stroke="white" strokeWidth="2" fill="none"
      animate={{ pathLength: progress }} transition={drawSpring}
    />
    <motion.path
      d="M400 150 L300 200 L400 250 L500 200 Z"
      stroke="white" strokeWidth="2" fill="none"
      animate={{ pathLength: progress }} transition={drawSpring}
    />
    <motion.path
      d="M500 450 L580 480 L580 580 L500 550"
      stroke="white" strokeWidth="2" fill="none"
      animate={{ pathLength: Math.max(0, (progress - 0.5) * 2) }} transition={drawSpring}
    />
  </motion.g>
);

const BuildingDetails = ({ progress }: { progress: number }) => {
  const floors = Array.from({ length: 15 }, (_, i) => i);
  return (
    <motion.g>
      {floors.map((i) => (
        <motion.line
          key={`L-${i}`}
          x1={300} y1={220 + i * 20}
          x2={400} y2={270 + i * 20}
          stroke="rgba(255,255,255,0.2)" strokeWidth="1"
          animate={{ pathLength: Math.min(1, Math.max(0, progress * 1.5 - i * 0.05)) }}
          transition={drawSpring}
        />
      ))}
      {floors.map((i) => (
        <motion.line
          key={`R-${i}`}
          x1={400} y1={270 + i * 20}
          x2={500} y2={220 + i * 20}
          stroke="rgba(255,255,255,0.2)" strokeWidth="1"
          animate={{ pathLength: Math.min(1, Math.max(0, progress * 1.5 - i * 0.05)) }}
          transition={drawSpring}
        />
      ))}
      <motion.path
        d="M400 150 L300 200 L400 250 L500 200 Z"
        fill="white"
        animate={{ opacity: progress > 0.8 ? 0.1 : 0 }} transition={{ duration: 0.5 }}
      />
    </motion.g>
  );
};

// --- 3. MAIN COMPONENT ---
export default function ArchitectContact() {
  const [mapProgress, setMapProgress] = useState(0);
  const [outlineProgress, setOutlineProgress] = useState(0);
  const [detailProgress, setDetailProgress] = useState(0);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setMapProgress(Math.min(e.target.value.length / 10, 1));
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => setOutlineProgress(e.target.value !== '' ? 1 : 0);
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setDetailProgress(Math.min(e.target.value.length / 5, 1));

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#050505',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: '"Space Grotesk", "Inter", sans-serif',
    overflow: 'hidden',
  };

  const inputStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #333',
    padding: '20px 0',
    fontSize: '1.25rem',
    color: 'white',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    color: '#666',
    fontSize: '0.7rem',
    marginBottom: '8px',
    display: 'block',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: 600,
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap');
          input:focus, select:focus { border-bottom-color: white !important; }`}
      </style>
      <div style={containerStyle}>
        {/* LEFT: BLUEPRINT VISUALIZATION */}
        <div style={{
          width: '55%',
          height: '100vh',
          position: 'relative',
          borderRight: '1px solid #1a1a1a',
          backgroundColor: '#080808',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ position: 'absolute', top: 40, left: 40, zIndex: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Project Visualization</p>
            <p style={{ fontSize: 10, color: '#666', letterSpacing: '0.05em' }}>
              STATUS: <span style={{ color: mapProgress > 0 ? '#4ade80' : '#888' }}>
                {mapProgress === 0 && 'WAITING FOR INPUT'}
                {mapProgress > 0 && mapProgress < 1 && 'SURVEYING...'}
                {mapProgress === 1 && outlineProgress < 1 && 'GRID LOCKED'}
                {outlineProgress === 1 && detailProgress < 1 && 'ERECTING STRUCTURE...'}
                {detailProgress === 1 && 'RENDERING COMPLETE'}
              </span>
            </p>
          </div>

          <svg viewBox="0 0 800 800" style={{ width: '100%', height: '100%', opacity: 1 }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <MapLayer progress={mapProgress} />
            <BuildingOutline progress={outlineProgress} />
            <BuildingDetails progress={detailProgress} />
          </svg>
        </div>

        {/* RIGHT: INTERACTIVE FORM */}
        <div style={{
          width: '45%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
          backgroundColor: '#050505',
        }}>
          <div style={{ width: '100%', maxWidth: 380 }}>
            <div style={{ marginBottom: 50 }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 10, color: 'white' }}>Let's Build.</h1>
              <p style={{ color: '#555', fontSize: '1rem' }}>Fill in the details to generate your blueprint.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <div>
                <label style={labelStyle}>Your Name / Company</label>
                <input type="text" onChange={handleNameChange} style={inputStyle} placeholder="Acme Architects" />
              </div>

              <div style={{ position: 'relative' }}>
                <label style={labelStyle}>Select Project Type</label>
                <select onChange={handleTypeChange} style={{ ...inputStyle, appearance: 'none', borderRadius: 0, cursor: 'pointer', color: outlineProgress ? 'white' : '#555' }}>
                  <option value="">Choose Typology...</option>
                  <option value="tower">Commercial Tower</option>
                  <option value="residential">Residential Complex</option>
                </select>
                <ArrowRight style={{ position: 'absolute', right: 0, bottom: 22, color: '#444', transform: 'rotate(90deg)', pointerEvents: 'none' }} size={16} />
              </div>

              <div>
                <label style={labelStyle}>Est. Budget</label>
                <input type="text" onChange={handleBudgetChange} style={inputStyle} placeholder="150M" />
              </div>

              <motion.button whileHover={{ scale: 1.01, backgroundColor: '#fff', color: '#000' }} whileTap={{ scale: 0.99 }}
                style={{ marginTop: '20px', padding: '18px', backgroundColor: 'white', color: 'black', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', width: '100%', borderRadius: '2px' }}>
                Initialize Project
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
