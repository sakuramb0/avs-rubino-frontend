import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white group-hover:bg-teal-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-1.7 0-3 1.6-3 3.5s1.3 3.5 3 3.5 3-1.6 3-3.5S13.7 2 12 2zm-5.5 5.5C5 7.5 4 8.7 4 10.2c0 1.5 1.1 2.8 2.5 2.8S9 11.7 9 10.2C9 8.7 7.9 7.5 6.5 7.5zm11 0c-1.4 0-2.5 1.2-2.5 2.7 0 1.5 1.1 2.8 2.5 2.8S20 11.7 20 10.2c0-1.5-1.1-2.7-2.5-2.7zM12 11c-2.6 0-5 2.2-5 5.5 0 2.2 1.8 4 3.8 4h2.4c2 0 3.8-1.8 3.8-4 0-3.3-2.4-5.5-5-5.5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                AVS <span className="text-teal-600">Rubino</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Servizi</Link>
            <Link to="/gallery" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Galleria</Link>
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Contattaci
            </Link>
          </div>
          
          {/* Mobile menu button (simplified) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-500 hover:text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
