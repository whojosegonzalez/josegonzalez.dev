import ShowcaseLayout from "../layouts/ShowcaseLayout";

export default function NeXusTrade() {
  return (
    <ShowcaseLayout
      title="NeXusTrade"
      subtitle="An automated Solana trading bot designed to detect and trade high-velocity altcoin movements."
      currentSlug="nexustrade"
    >
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-md text-amber-800 dark:text-amber-200 text-sm">
        <strong>Work In Progress:</strong> This project is currently in active development. Strategies are being backtested.
      </div>

      <h3>The Mission</h3>
      <p>
        NeXusTrade was born out of a desire to eliminate emotion from trading. The Solana ecosystem moves 
        too fast for human reaction times, requiring sub-second decision making based on on-chain data.
      </p>

      <h3>Architecture</h3>
      <ul>
        <li><strong>Language:</strong> TypeScript / Node.js</li>
        <li><strong>Blockchain Interaction:</strong> Solana Web3.js & Jupiter Aggregator API</li>
        <li><strong>Safety:</strong> Implemented "RugCheck" logic to automatically filter out tokens with unsecured liquidity.</li>
      </ul>

      <h3>Next Steps</h3>
      <p>
        I am currently refining the "Take Profit" algorithm to better handle micro-spikes in volatility.
      </p>
    </ShowcaseLayout>
  );
}