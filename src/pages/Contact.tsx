import { site } from "../config/site";

export default function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-slate-600 dark:text-slate-300">
        Reach me at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </section>
  );
}
