import React from 'react';
import { LineChart, PiggyBank } from 'lucide-react';

function InvestOptionCard({ title, description, type, onClick, buttonText, disabled }) {
  const Icon = type === 'gold' ? LineChart : PiggyBank;
  const iconColor = type === 'gold' ? 'text-sunshine' : 'text-primaryAccent';

  return (
    <div className="glass-card flex flex-col items-center justify-between p-6 sm:p-7 gap-4 text-center">
      <Icon size={48} strokeWidth={2.5} className={iconColor} />
      <h3 className="text-2xl font-bold text-primaryAccent font-display">{title}</h3>
      <p className="text-primary/80 text-base mb-2">{description}</p>
      {type === 'gold' && (
        <div className="w-full max-w-[150px] mx-auto mb-2 h-20 flex items-center justify-center bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg">
          <LineChart size={64} className="text-sunshine opacity-60" strokeWidth={1.5} />
        </div>
      )}
      {type === 'fd' && (
        <p className="text-2xl font-bold text-success">6% <span className="text-base text-primary/70">p.a.</span></p>
      )}
      <button
        onClick={onClick}
        className="focus-ring w-full rounded-xl bg-sunshine text-ink font-bold py-3 text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default InvestOptionCard;
