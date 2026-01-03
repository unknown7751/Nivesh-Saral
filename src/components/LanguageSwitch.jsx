import React from 'react';

function LanguageSwitch({ language, onChange }) {
  const toggleLanguage = () => {
    onChange(language === 'en' ? 'hi' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="focus-ring flex-shrink-0 rounded-lg border border-primary/20 bg-white text-primary text-sm font-semibold px-3 py-2 shadow-sm hover:bg-light-gray transition-colors"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'हिन्दी' : 'English'}
    </button>
  );
}

export default LanguageSwitch;
