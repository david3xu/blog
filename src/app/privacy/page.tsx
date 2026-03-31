import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MemoBridge",
  description: "MemoBridge privacy policy. Your data stays in your own Databricks workspace.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">MemoBridge Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: March 31, 2026</p>
      <p className="mb-6">
        MemoBridge is a browser extension that gives your AI tools shared memory.
        Your data stays in your own Databricks workspace — MemoBridge never sees it.
      </p>

      <Section title="1. Data We Process">
        <p>MemoBridge does <strong>not</strong> transmit data to the developers or any third-party service.</p>
        <p className="mt-3">When you connect, you provide your Databricks workspace URL, Personal Access Token, and SQL Warehouse. These are stored <strong>encrypted</strong> in your browser using AES-GCM 256-bit encryption. The key is derived from your extension installation ID and never stored.</p>
      </Section>

      <Section title="2. Conversation Capture">
        <p>MemoBridge captures AI conversation text from your browser tab and stores it in your Databricks table. Only AI response text is captured — UI elements are filtered out. No data is sent to MemoBridge developers or any analytics service.</p>
      </Section>

      <Section title="3. Memory Tools">
        <p>Three tools your AI can use: <code>memory_search</code>, <code>memory_recent</code>, <code>memory_save</code>. Data flows only between your browser and your Databricks workspace.</p>
      </Section>

      <Section title="4. Permissions">
        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li><code>storage</code> — store encrypted credentials locally</li>
          <li><code>activeTab / tabs</code> — read conversation text in active AI tab</li>
          <li><code>nativeMessaging</code> — optional advanced security mode</li>
          <li><code>host_permissions</code> (azuredatabricks.net) — issue SQL queries to your workspace</li>
        </ul>
      </Section>

      <Section title="5. Data Retention &amp; Control">
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>All data is in your Databricks table — delete by truncating the table.</li>
          <li>Remove credentials by uninstalling the extension or clicking disconnect.</li>
        </ul>
      </Section>

      <Section title="6. Security">
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Credentials encrypted with AES-GCM before storage. Key never stored.</li>
          <li>All Databricks requests use HTTPS.</li>
          <li>No credentials shared with external services.</li>
        </ul>
      </Section>

      <Section title="7. Contact">
        <p>Questions? Email <a href="mailto:jinguo.xu@outlook.com" className="text-blue-600 underline">jinguo.xu@outlook.com</a> or open an issue at <a href="https://github.com/david3xu/memobridge" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">github.com/david3xu/memobridge</a>.</p>
        <p className="mt-3">By installing MemoBridge you agree to this Privacy Policy.</p>
      </Section>
    </main>
  );
}
