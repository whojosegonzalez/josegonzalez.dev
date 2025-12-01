import ShowcaseLayout from "../layouts/ShowcaseLayout";

export default function SecureChat() {
  return (
    <ShowcaseLayout
      title="SecureChat"
      subtitle="A realtime messaging platform focusing on WebSocket performance and end-to-end encryption concepts."
      currentSlug="securechat"
    >
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-md text-blue-800 dark:text-blue-200 text-sm mb-6">
        <strong>Demo Status:</strong> The live WebSocket server is currently offline for maintenance. You can review the source code below.
      </div>

      <div className="flex gap-4 mb-8">
        <a 
          href="https://github.com/whojosegonzalez/securechat" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          View GitHub Repo
        </a>
      </div>

      <h3>The Concept</h3>
      <p>
        SecureChat is a full-stack exploration into realtime communication. Unlike standard REST API chat apps, 
        this project utilizes WebSockets to maintain a persistent connection between the client and server, 
        allowing for instant message delivery and "typing" indicators.
      </p>

      <h3>Tech Stack</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Frontend:</strong> React 19, Tailwind CSS</li>
        <li><strong>Backend:</strong> Quart (Python Async), WebSockets</li>
        <li><strong>Database:</strong> MySQL (Structured message storage)</li>
      </ul>

      <h3>Challenges Solved</h3>
      <p>
        Managing connection state was the primary challenge. I implemented a heartbeat mechanism to detect 
        dropped connections and a reconciliation logic to sync messages when a user comes back online.
      </p>
    </ShowcaseLayout>
  );
}