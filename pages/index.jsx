
import React, { useState } from 'react';
import RSIPreviewBox from '../components/RSIPreviewBox';

export default function Home() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">NovaTrade AI Dashboard</h1>
      <label className="mb-4 inline-flex items-center">
        <input type="checkbox" className="mr-2" checked={alertsEnabled} onChange={() => setAlertsEnabled(!alertsEnabled)} />
        Alerts Enabled
      </label>
      <RSIPreviewBox data={[{ rsi: 47.8 }]} />
      <p className="mt-4">Live Chart Data Coming Soon...</p>
    </div>
  );
}
