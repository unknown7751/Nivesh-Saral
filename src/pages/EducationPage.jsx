import React from 'react';
import EducationCard from '../components/EducationCard';
import { PiggyBank, Briefcase, TrendingUp, Handshake } from 'lucide-react'; // Example icons

function EducationPage({ text }) {
  const educationContent = {
    en: [
      {
        icon: PiggyBank,
        title: 'Start Small',
        description: 'Even ₹10 daily can grow into a big amount over time. Consistency is key!',
      },
      {
        icon: Briefcase,
        title: 'Plan for Future',
        description: 'Saving helps you achieve goals like buying a bike, building a home, or securing your family.',
      },
      {
        icon: TrendingUp,
        title: 'Beat Inflation',
        description: 'Simply keeping money at home loses value. Investing helps your money grow faster.',
      },
      {
        icon: Handshake,
        title: 'Financial Freedom',
        description: 'Having savings gives you peace of mind and the ability to handle unexpected expenses.',
      },
    ],
    hi: [
      {
        icon: PiggyBank,
        title: 'छोटे से शुरू करें',
        description: 'रोज ₹10 भी समय के साथ बड़ी राशि बन सकते हैं। निरंतरता महत्वपूर्ण है!',
      },
      {
        icon: Briefcase,
        title: 'भविष्य के लिए योजना',
        description: 'बचत आपको बाइक खरीदने, घर बनाने या अपने परिवार को सुरक्षित करने जैसे लक्ष्यों को प्राप्त करने में मदद करती है।',
      },
      {
        icon: TrendingUp,
        title: 'महंगाई को मात दें',
        description: 'सिर्फ घर पर पैसे रखने से उनका मूल्य कम हो जाता है। निवेश से आपके पैसे तेजी से बढ़ते हैं।',
      },
      {
        icon: Handshake,
        title: 'वित्तीय स्वतंत्रता',
        description: 'बचत होने से आपको मानसिक शांति मिलती है और अप्रत्याशित खर्चों को संभालने की क्षमता मिलती है।',
      },
    ],
  };

  const selectedContent = educationContent[text.language];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-ink font-display text-center">
        {text.educationTitle}
      </h2>
      <p className="text-lg text-primary/80 text-center max-w-2xl mx-auto mb-8">
        {text.language === 'en' ? 'Learn simple reasons why saving is a smart choice for everyone.' : 'जानें कि बचत करना हर किसी के लिए एक समझदार विकल्प क्यों है।'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedContent.map((card, index) => (
          <EducationCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default EducationPage;