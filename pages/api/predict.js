
export default function handler(req, res) {
  const simulatedPrice = 29870;
  const recommendation = simulatedPrice > 29000 ? "BUY" : "HOLD";
  res.status(200).json({
    asset: "BTC",
    predictedPrice: simulatedPrice,
    confidence: "86%",
    recommendation
  });
}
