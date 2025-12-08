import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ navigateTo }: { navigateTo?: (page: string) => void }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'About Us', page: 'about' },
    { title: 'Our Work', page: 'work' },
    { title: 'Future Thinking', page: 'future' },
    { title: 'News', page: 'news' },
    { title: 'Contact Us', page: 'contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/maxo.co.in/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/maxo12/', label: 'LinkedIn' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        padding: '60px 40px 30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        {/* Company Info */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              margin: '0 0 20px 0',
              color: 'white'
            }}
          >
            MAXO
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 30px 0'
            }}
          >
            We create appealing design solutions that transform spaces and inspire experiences. 
            Our innovative approach combines creativity with functionality.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              margin: '0 0 20px 0',
              color: 'white'
            }}
          >
            Quick Links
          </motion.h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {quickLinks.map((link, index) => (
              navigateTo ? (
                <motion.button
                  key={link.title}
                  onClick={() => navigateTo(link.page)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '10px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {link.title}
                </motion.button>
              ) : (
                <motion.span
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem',
                    display: 'inline-block'
                  }}
                >
                  {link.title}
                </motion.span>
              )
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              margin: '0 0 20px 0',
              color: 'white'
            }}
          >
            Contact Info
          </motion.h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
            >
              <MapPin size={18} style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px' }} />
              <div>
                 <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  1205, Maple Trade Centre<br />
                  Surdhara Circle, Maple Trade Ctr Rd<br />
                  Thaltej, Ahmedabad, Gujarat 380052
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <Phone size={18} style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              <a 
                href="tel:+917778881060"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                +91 7778881060<br />
                +91 9227001016
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <Mail size={18} style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              <a 
                href="mailto:info@maxo.co.in"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                info@maxo.co.in
              </a>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            style={{ marginTop: '25px' }}
          >
            <h5 style={{
              fontSize: '1rem',
              fontWeight: 600,
              margin: '0 0 15px 0',
              color: 'white'
            }}>
              Follow Us
            </h5>
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '50px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}
      >
        <p style={{
          margin: 0,
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem'
        }}>
          © {currentYear} MAXO. All rights reserved. | Designed with passion for creative excellence.
        </p>
      </motion.div>
    </motion.footer>
  );
}
