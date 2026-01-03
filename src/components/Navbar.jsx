import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Lightbulb, Calculator } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';

function Navbar({ appTitle, language, onChange }) {
  return (
    <nav className="glass-card sticky top-0 z-10 p-4 sm:p-5 flex items-center justify-between shadow-sm">
      <Link to="/dashboard" className="flex items-center gap-2 text-primaryAccent hover:text-primary transition-colors">
        <Home size={24} strokeWidth={2.5} />
        <h2 className="text-xl font-bold font-display">{appTitle}</h2>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/education" className="hidden sm:block p-2 rounded-lg hover:bg-light-gray transition-colors text-primaryAccent">
          <Lightbulb size={24} strokeWidth={2.5} aria-label="Education" />
        </Link>
        <Link to="/calculator" className="hidden sm:block p-2 rounded-lg hover:bg-light-gray transition-colors text-primaryAccent">
          <Calculator size={24} strokeWidth={2.5} aria-label="Calculator" />
        </Link>
        <LanguageSwitch language={language} onChange={onChange} />
      </div>
    </nav>
  );
}

export default Navbar;
