import React from 'react';
import { CheckCircle } from 'lucide-react';

function TrustRow({ title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle size={20} className="flex-shrink-0 text-success mt-1" strokeWidth={2.5} />
      <div>
        <h4 className="font-semibold text-primaryAccent text-base">{title}</h4>
        <p className="text-sm text-primary/80">{desc}</p>
      </div>
    </div>
  );
}

export default TrustRow;
