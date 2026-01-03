import React from 'react';
import { useNavigate } from 'react-router-dom';
import InvestOptionCard from '../components/InvestOptionCard';

function InvestPage({ text, passbookLoading }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-ink font-display text-center">
        {text.language === 'en' ? 'Choose Your Investment' : 'अपना निवेश चुनें'}
      </h2>
      <p className="text-lg text-primary/80 text-center max-w-2xl mx-auto mb-8">
        {text.language === 'en' ? 'Start growing your savings with low-risk options.' : 'कम जोखिम वाले विकल्पों के साथ अपनी बचत बढ़ाना शुरू करें।'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InvestOptionCard
          title={text.goldOption}
          description={text.goldDesc}
          type="gold"
          buttonText={text.invest}
          onClick={() => navigate('/invest/confirm/gold')}
          disabled={passbookLoading}
        />
        <InvestOptionCard
          title={text.fdOption}
          description={text.fdDesc}
          type="fd"
          buttonText={text.invest}
          onClick={() => navigate('/invest/confirm/fd')}
          disabled={passbookLoading}
        />
      </div>
    </div>
  );
}

export default InvestPage;