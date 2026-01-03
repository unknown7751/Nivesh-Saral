import React, { useState } from 'react';
import { TrendingUp, Calendar, IndianRupee } from 'lucide-react';

function SavingsCalculator({ text }) {
  const [dailySavings, setDailySavings] = useState(20);
  const [period, setPeriod] = useState(1);

  const totalDays = period * 365;
  const totalSavings = dailySavings * totalDays;
  const growthFactor = 1.05;
  const estimatedFutureValue = totalSavings * growthFactor;

  const language = text.appTitle === 'NiveshSaral' ? 'en' : 'hi';

  return (
    <div className="glass-card p-6 sm:p-7 flex flex-col gap-5">
      <h3 className="text-2xl font-bold text-primaryAccent font-display">{text.calculatorTitle}</h3>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="dailySavings" className="block text-primary/90 text-lg font-semibold mb-2">
            <IndianRupee size={20} className="inline mr-2 text-primaryAccent" />
            {language === 'en' ? `Save ₹${dailySavings} Daily` : `रोज ₹${dailySavings} बचाएं`}
          </label>
          <input
            id="dailySavings"
            type="range"
            min="10"
            max="100"
            step="10"
            value={dailySavings}
            onChange={(e) => setDailySavings(parseInt(e.target.value))}
            className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div>
          <label htmlFor="period" className="block text-primary/90 text-lg font-semibold mb-2">
            <Calendar size={20} className="inline mr-2 text-primaryAccent" />
            {language === 'en' ? `For ${period} Year${period > 1 ? 's' : ''}` : `${period} साल के लिए`}
          </label>
          <input
            id="period"
            type="range"
            min="1"
            max="5"
            step="1"
            value={period}
            onChange={(e) => setPeriod(parseInt(e.target.value))}
            className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>

      <div className="border-t border-light-gray pt-4 mt-4">
        <p className="text-primary/70 text-base mb-2">
          {language === 'en' ? 'Your estimated savings:' : 'आपकी अनुमानित बचत:'}
        </p>
        <p className="text-3xl font-bold text-success flex items-center gap-2">
          <TrendingUp size={32} />
          ₹{new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(estimatedFutureValue)}
        </p>
        <p className="text-sm text-primary/60 mt-2">
          {language === 'en' ? `(If you save ₹${dailySavings} daily for ${period} year${period > 1 ? 's' : ''})` : `(अगर आप ${period} साल तक रोज ₹${dailySavings} बचाते हैं)`}
        </p>
      </div>
    </div>
  );
}

export default SavingsCalculator;
