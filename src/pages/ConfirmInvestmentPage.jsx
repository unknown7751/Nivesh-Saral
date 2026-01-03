import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

function ConfirmInvestmentPage({ text, addInvestment, passbookLoading }) {
  const { type } = useParams(); // 'gold' or 'fd'
  const navigate = useNavigate();

  const investmentTypeDisplayName = type === 'gold' ? text.goldOption : text.fdOption;

  const handleConfirmInvest = async () => {
    await addInvestment(10); // Always invest ₹10 as per requirement
    navigate('/dashboard'); // Go back to dashboard after investment
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="glass-card p-8 sm:p-10 w-full max-w-md text-center flex flex-col items-center gap-6">
        <CheckCircle size={64} className="text-success" strokeWidth={2} />
        <h2 className="text-3xl font-bold text-primaryAccent font-display">{text.investConfirmTitle}</h2>
        <p className="text-lg text-primary/80">
          {text.investConfirmMsg} <strong className="text-ink">{investmentTypeDisplayName}</strong>?
        </p>
        <div className="w-full flex flex-col gap-4">
          <Button
            onClick={handleConfirmInvest}
            disabled={passbookLoading}
            className="bg-primary text-white"
          >
            {passbookLoading ? text.saving : text.confirm}
          </Button>
          <Button
            onClick={() => navigate('/invest')}
            variant="secondary"
            className="bg-light-gray text-ink"
            disabled={passbookLoading}
          >
            {text.cancel}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmInvestmentPage;