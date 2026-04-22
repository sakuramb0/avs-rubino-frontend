import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

function App() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        const response = await fetch(`${baseUrl}/api/public/content`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching public content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const generalInfo = content.filter(item => item.type === 'general_info');
  const galleryItems = content.filter(item => item.type === 'gallery');

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<Home generalInfo={generalInfo} loading={loading} />} 
          />
          <Route path="/services" element={<Services />} />
          <Route 
            path="/gallery" 
            element={<Gallery galleryItems={galleryItems} loading={loading} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
