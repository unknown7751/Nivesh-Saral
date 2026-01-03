import React from 'react';
import { useNavigate } from 'react-router-dom';
import BalanceDisplay from '../components/BalanceDisplay';
import TrustRow from '../components/TrustRow';
import SavingsCalculator from '../components/SavingsCalculator'; // Import calculator

function DashboardPage({ text, user, total, passbookLoading, authLoading, showCalculator = false }) {
  const navigate = useNavigate();

  // Trust messages (kept here as they are specific to the dashboard/trust building)
  const trustMessages = {
    en: [
      { title: "Safe options", desc: "Digital Gold or Fixed Deposits" },
      { title: "Phone OTP only", desc: "No passwords to remember" },
      { title: "Digital Passbook", desc: "With offline sync" },
      { title: "Instant receipt", desc: "Every ₹10 is recorded in seconds" },
      { title: "Withdraw anytime", desc: "Funds stay liquid; see balance live" },
      { title: "Offline ready", desc: "Works on 2G/3G. Data syncs when back online" },
      { title: "Local language", desc: "Switch between हिंदी / English anytime" },
      { title: "Private & Secure", desc: "Your data is protected. We never share your number." },
    ],
    hi: [
      { title: "सुरक्षित विकल्प", desc: "डिजिटल सोना या फिक्स्ड डिपॉजिट" },
      { title: "सिर्फ फोन ओटीपी", desc: "पासवर्ड याद रखने की जरूरत नहीं" },
      { title: "डिजिटल पासबुक", desc: "ऑफ़लाइन सिंक के साथ" },
      { title: "तत्काल रसीद", desc: "हर ₹10 सेकंड में दर्ज होता है" },
      { title: "कभी भी निकालें", desc: "पैसे तरल रहते हैं; शेष राशि लाइव देखें" },
      { title: "ऑफ़लाइन तैयार", desc: "2G/3G पर काम करता है। डेटा वापस ऑनलाइन होने पर सिंक होता है।" },
      { title: "स्थानीय भाषा", desc: "हिंदी / अंग्रेजी के बीच कभी भी स्विच करें" },
      { title: "निजी और सुरक्षित", desc: "आपका डेटा सुरक्षित है। हम आपका नंबर कभी साझा नहीं करते।" },
    ],
  };

  const selectedTrustMessages = trustMessages[text.language];

  if (authLoading) {
    return <div className="text-center py-10 text-primary">Loading user data...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-ink font-display leading-tight">
          {user?.displayName ? `${text.welcome.split(' ')[0]}, ${user.displayName}` : text.welcome}
        </h1>
        <p className="text-lg text-primary/80 mt-2 max-w-2xl mx-auto">{text.sub}</p>
      </section>

      {/* Total Savings Display and Actions */}
      <section className="glass-card p-6 sm:p-7 flex flex-col gap-5 justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primaryAccent uppercase tracking-wide">{text.balance}</p>
            <BalanceDisplay amount={total} loading={passbookLoading} />
          </div>
          {/* Withdrawal functionality is placeholder for prototype */}
          <button
            type="button"
            className="focus-ring rounded-xl bg-white text-primary font-bold py-3 text-lg shadow-sm border border-primary/20 hover:bg-light-gray transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={true} // Disable for prototype
          >
            {text.withdraw}
          </button>
        </div>
        <p className="text-sm text-primary/70">{text.ctaHelper}</p>
        <button
          type="button"
          onClick={() => navigate('/invest')}
          className="focus-ring w-full rounded-xl bg-sunshine text-ink font-bold py-4 text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!user || passbookLoading}
        >
          {passbookLoading ? text.saving : text.invest}
        </button>
      </section>

      {/* Savings Calculator (conditionally rendered) */}
      {showCalculator && (
        <SavingsCalculator text={text} />
      )}

      {/* Trust Factors */}
      <section className="glass-card p-6 sm:p-7">
        <h3 className="text-2xl font-bold text-primaryAccent font-display mb-5">
          {text.language === 'en' ? 'Why Trust NiveshSaral?' : 'निवेशसरल पर भरोसा क्यों करें?'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-primary/90">
          {selectedTrustMessages.map((msg, index) => (
            <TrustRow key={index} title={msg.title} desc={msg.desc} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;