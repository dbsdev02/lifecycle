import type { ReactNode } from "react";

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-ink-soft">
      <strong className="text-ink">Note for client:</strong> {children}
    </div>
  );
}
