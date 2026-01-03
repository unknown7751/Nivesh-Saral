import React from 'react';

function EducationCard({ icon: Icon, title, description }) {
  return (
    <div className="glass-card flex flex-col items-center p-6 sm:p-7 text-center gap-4">
      {Icon && <Icon size={48} className="text-primaryAccent" strokeWidth={2.5} />}
      <h3 className="text-2xl font-bold text-primaryAccent font-display">{title}</h3>
      <p className="text-primary/80 text-base">{description}</p>
    </div>
  );
}

export default EducationCard;
