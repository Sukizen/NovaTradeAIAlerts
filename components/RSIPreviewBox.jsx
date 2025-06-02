
import React from 'react';

export default function RSIPreviewBox({ data }) {
  const latestRSI = data?.length > 0 ? data[data.length - 1].rsi?.toFixed(1) : null;
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1">RSI Trend (Last)</h3>
      <div className="bg-gray-800 p-2 rounded text-lg text-white">
        {latestRSI ? `${latestRSI} RSI` : 'Loading...'}
      </div>
    </div>
  );
}
