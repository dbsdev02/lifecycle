export function Field({
  label,
  type = "text",
  textarea,
  dark = true,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  dark?: boolean;
}) {
  const base = dark
    ? "w-full rounded-lg border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-accent focus:outline-none"
    : "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-accent focus:outline-none";
  return (
    <label className="block">
      <span
        className={`mb-2 block text-xs uppercase tracking-[0.2em] ${dark ? "text-cream/60" : "text-ink-soft"}`}
      >
        {label}
      </span>
      {textarea ? (
        <textarea rows={4} className={base} />
      ) : (
        <input type={type} className={base} />
      )}
    </label>
  );
}
